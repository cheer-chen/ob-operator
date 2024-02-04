import { PageContainer } from '@ant-design/pro-components';
import { useNavigate } from '@umijs/max';
import { useRequest } from 'ahooks';
import { Row } from 'antd';
import { useState } from 'react';

import EventsTable from '@/components/EventsTable';
import { getAllTenants } from '@/services/tenant';
import TenantsList from './TenantsList';

import type { QueryRangeType } from '../Cluster/Detail/Monitor';

const defaultQueryRange: QueryRangeType = {
  step: 20,
  endTimestamp: Math.floor(new Date().valueOf() / 1000),
  startTimestamp: Math.floor(new Date().valueOf() / 1000) - 60 * 30,
};
// 租户概览页
export default function TenantPage() {
  const [filterLabel, setFilterLabel] = useState([]);
  const navigate = useNavigate();
  const { data: tenantsListResponse } = useRequest(getAllTenants, {});
  const handleAddCluster = () => navigate('new');
  const tenantsList = tenantsListResponse?.data
  return (
    <PageContainer>
      <Row gutter={[16, 16]}>
        {tenantsList && (
          <TenantsList
            tenantsList={tenantsList}
            turnToCreateTenant={handleAddCluster}
          />
        )}

        <EventsTable objectType="OBTENANT" />
      </Row>
      {/* <MonitorComp
        filterLabel={filterLabel}
        queryScope="OBCLUSTER_OVERVIEW"
        type="overview"
        queryRange={defaultQueryRange}
      /> */}
    </PageContainer>
  );
}