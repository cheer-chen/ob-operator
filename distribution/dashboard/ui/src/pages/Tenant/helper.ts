// import { encryptText } from '@/hook/usePublicKey';
import dayjs from 'dayjs';
import { clone } from 'lodash';

const isExist = (val: string | number | undefined): boolean => {
  if (typeof val === 'number') return true;
  return !!val;
};
const formatUnitConfig = (unitConfig: any): API.UnitConfig => {
  let _unitConfig = clone(unitConfig);
  _unitConfig['cpuCount'] = String(_unitConfig['cpuCount']);
  if (isExist(_unitConfig['logDiskSize'])) {
    _unitConfig['logDiskSize'] = _unitConfig['logDiskSize'] + 'Gi';
  }
  if (isExist(_unitConfig['memorySize'])) {
    _unitConfig['memorySize'] = _unitConfig['memorySize'] + 'Gi';
  }
  return _unitConfig;
};

export function formatNewTenantForm(
  originFormData: any,
  clusterName: string,
  publicKey: string,
): API.TenantBody {
  let result: API.TenantBody = {};
  Object.keys(originFormData).forEach((key) => {
    if (key === 'connectWhiteList') {
      result[key] = originFormData[key].join(',');
    } else if (key === 'obcluster') {
      result[key] = clusterName;
    } else if (key === 'pools') {
      result[key] = Object.keys(originFormData[key])
        .map((zone) => ({
          zone,
          priority: originFormData[key]?.[zone]?.priority,
          type: 'Full',
        }))
        .filter((item) => item.priority);
    } else if (key === 'source') {
      if (originFormData[key]['tenant'] || originFormData[key]['restore'])
        result[key] = {};
      if (originFormData[key]['tenant']) {
        result[key]['tenant'] = originFormData[key]['tenant'];
      }
      if (originFormData[key]['restore']) {
        let { until } = originFormData[key]['restore'];
        result[key]['restore'] = {
          ...originFormData[key]['restore'],
          ossAccessId: originFormData[key]['restore'].ossAccessId,
          ossAccessKey: originFormData[key]['restore'].ossAccessKey,
          // ossAccessId: encryptText(
          //   originFormData[key]['restore'].ossAccessId,
          //   publicKey,
          // ),
          // ossAccessKey: encryptText(
          //   originFormData[key]['restore'].ossAccessKey,
          //   publicKey,
          // ),
          until:
            until && until.date && until.time
              ? {
                  timestamp:
                    dayjs(until.date).format('YYYY-MM-DD') +
                    ' ' +
                    dayjs(until.time).format('HH:mm:ss'),
                }
              : { unlimited: true },
        };
        if (originFormData[key]['restore'].bakEncryptionPassword) {
          result[key]['restore']['bakEncryptionPassword'] =
            originFormData[key]['restore'].bakEncryptionPassword;
          // result[key]['restore']['bakEncryptionPassword'] = encryptText(
          //   originFormData[key]['restore'].bakEncryptionPassword,
          //   publicKey,
          // );
        } else {
          delete result[key]['restore']['bakEncryptionPassword'];
        }
      }
    } else if (key === 'rootPassword') {
      result[key] = originFormData[key];
      // result[key] = encryptText(originFormData[key], publicKey);
    } else if (key === 'unitConfig') {
      result[key] = formatUnitConfig(originFormData[key]);
    } else {
      result[key] = originFormData[key];
    }
  });
  return result;
}
/**
 * encrypt ossAccessId,ossAccessKey,bakEncryptionPassword
 *
 * format scheduleDates
 */
export function formatBackupForm(originFormData: any, publicKey?: string) {
  let formData = clone(originFormData);
  if (formData.bakEncryptionPassword) {
    formData.bakEncryptionPassword = originFormData.bakEncryptionPassword;
    // formData.bakEncryptionPassword = encryptText(
    //   originFormData.bakEncryptionPassword,
    //   publicKey,
    // );
  }
  if (formData.ossAccessId) formData.ossAccessId = originFormData.ossAccessId;
  if (formData.ossAccessKey)
    formData.ossAccessKey = originFormData.ossAccessKey;
  // formData.ossAccessId = encryptText(originFormData.ossAccessId, publicKey);
  // formData.ossAccessKey = encryptText(originFormData.ossAccessKey, publicKey);
  formData.scheduleTime = dayjs(formData.scheduleTime).format('HH:mm');
  formData.scheduleType = formData.scheduleDates.mode;
  delete formData.scheduleDates.days;
  delete formData.scheduleDates.mode;
  formData.scheduleDates = Object.keys(formData.scheduleDates).map((key) => ({
    day: Number(key),
    backupType: formData.scheduleDates[key],
  }));
  return formData;
}

export function formatBackupPolicyData(backupPolicy: API.BackupPolicy) {
  if (!backupPolicy) return;
  let result: any = {};
  result.days = backupPolicy.scheduleDates.map((item) => item.day);
  result.mode = backupPolicy.scheduleType;
  result.days.forEach((day, index) => {
    result[day] = backupPolicy.scheduleDates[index].backupType;
  });
  return result;
}

function checkDateIsSame(
  preDates: API.ScheduleDatesType,
  curDates: API.ScheduleDatesType,
): boolean {
  if (preDates.length !== curDates.length) return false;
  for (let preDate of preDates) {
    let targetItem = curDates.find((curDate) => curDate.day === preDate.day);
    if (!targetItem) return false;
    if (targetItem.backupType !== preDate.backupType) return false;
  }
  return true;
}

export function checkIsSame(
  preData: API.BackupPolicy,
  curData: API.BackupConfigEditable,
): boolean {
  for (let key of Object.keys(curData)) {
    if (key === 'scheduleDates') {
      if (
        !checkDateIsSame(preData['scheduleDates'], curData['scheduleDates'])
      ) {
        return false;
      }
    } else {
      if (curData[key] !== preData[key]) {
        return false;
      }
    }
  }

  return true;
}
