"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[2948],{8841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(4848),r=t(8453);const o={},a="Deploy ob-operator locally",l={id:"developer/deploy-locally",title:"Deploy ob-operator locally",description:"Hardware requirements",source:"@site/docs/developer/deploy-locally.md",sourceDirName:"developer",slug:"/developer/deploy-locally",permalink:"/ob-operator/docs/developer/deploy-locally",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/ob-operator/tree/master/docsite/docs/developer/deploy-locally.md",tags:[],version:"current",frontMatter:{},sidebar:"developerSidebar",previous:{title:"Contributor Guidance",permalink:"/ob-operator/docs/developer/contributor-guidance"},next:{title:"Deploy ob-operator",permalink:"/ob-operator/docs/developer/deploy"}},i={},c=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Software requirements",id:"software-requirements",level:2},{value:"Setup steps",id:"setup-steps",level:2},{value:"1. Configure Docker Resources",id:"1-configure-docker-resources",level:3},{value:"2. Start minikube cluster",id:"2-start-minikube-cluster",level:3},{value:"3. Install cert-manager",id:"3-install-cert-manager",level:3},{value:"4. Install ob-operator",id:"4-install-ob-operator",level:3},{value:"5. Deploy OceanBase cluster",id:"5-deploy-oceanbase-cluster",level:3},{value:"6. Create tenant in deployed OceanBase cluster",id:"6-create-tenant-in-deployed-oceanbase-cluster",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-ob-operator-locally",children:"Deploy ob-operator locally"}),"\n",(0,s.jsx)(n.h2,{id:"hardware-requirements",children:"Hardware requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CPU: 4 Core available"}),"\n",(0,s.jsx)(n.li,{children:"Memory: 10 GB available (A Single-node OceanBase cluster takes 8 ~ 9 GB memory)"}),"\n",(0,s.jsx)(n.li,{children:"Disk space: 120 GB available"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"software-requirements",children:"Software requirements"}),"\n",(0,s.jsx)(n.p,{children:"You need to install the following softwares before getting started. Installation instructions can be found on their websites. You can get minkube by brew install minikube if you develop on macOS."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/kubernetes/minikube",children:"kubernetes/minikube"}),": Run kubernetes locally"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker desktop"}),": Manage container development locally"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"kubectl"}),": Kubernetes CLI (optional if you prefer minikube kubectl)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup-steps",children:"Setup steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-configure-docker-resources",children:"1. Configure Docker Resources"}),"\n",(0,s.jsxs)(n.p,{children:["Open Docker desktop - Settings - Resources, set ",(0,s.jsx)(n.code,{children:"CPU limit"}),", ",(0,s.jsx)(n.code,{children:"Memory limit"})," and ",(0,s.jsx)(n.code,{children:"Virtual disk limit"})," to match the hardware requirements."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Docker Limits",src:t(8713).A+"",width:"1500",height:"722"})}),"\n",(0,s.jsx)(n.h3,{id:"2-start-minikube-cluster",children:"2. Start minikube cluster"}),"\n",(0,s.jsx)(n.p,{children:"In order to make sure that the hardware limit are enforced to VM in minikube, we set configurations of minikube again by:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"minikube config set cpus 4\nminikube config set disk-size 120GB\nminikube config set memory 10GB\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here we go! Just type ",(0,s.jsx)(n.code,{children:"minikube start"})," and enter, we can see it starts fetching necessary images. After it says initialization is finished, we can type ",(0,s.jsx)(n.code,{children:"kubectl get pods -A"})," (or ",(0,s.jsx)(n.code,{children:"minikube kubectl -- get pods -A"}),") to see all pods in minikube cluster."]}),"\n",(0,s.jsxs)(n.p,{children:["Tips: Perform ",(0,s.jsx)(n.code,{children:"minikube dashboard"})," to open kubernetes dashboard, everything in the cluster could be more clear."]}),"\n",(0,s.jsx)(n.h3,{id:"3-install-cert-manager",children:"3. Install cert-manager"}),"\n",(0,s.jsxs)(n.p,{children:["ob-operator depends on ",(0,s.jsx)(n.code,{children:"cert-manager"})," to enable TLS functionalities, so we should install it first."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f https://raw.githubusercontent.com/oceanbase/ob-operator/2.2.1_release/deploy/cert-manager.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-install-ob-operator",children:"4. Install ob-operator"}),"\n",(0,s.jsxs)(n.p,{children:["For robustness, default memory limit of ob-operator container is set to ",(0,s.jsx)(n.code,{children:"1Gi"})," which is too large for us developing locally. We recommend fetching the manifests to local and configure it. wget tool could be useful here, while opening the URL and copying the contents to local file is more straight."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/oceanbase/ob-operator/2.2.1_release/deploy/operator.yaml",children:"https://raw.githubusercontent.com/oceanbase/ob-operator/2.2.1_release/deploy/operator.yaml"})}),"\n",(0,s.jsxs)(n.p,{children:["Search the pattern ",(0,s.jsx)(n.code,{children:"/manager"}),", find the target container, configure the memory limit to ",(0,s.jsx)(n.code,{children:"400Mi"})," and cpu limit to ",(0,s.jsx)(n.code,{children:"400m"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["OK, now we apply the manifest with ",(0,s.jsx)(n.code,{children:"kubectl"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f operator.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"And check whether the pod gets running successfully,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl get pods -n oceanbase-system\n"})}),"\n",(0,s.jsx)(n.h3,{id:"5-deploy-oceanbase-cluster",children:"5. Deploy OceanBase cluster"}),"\n",(0,s.jsx)(n.p,{children:"Apply the following yaml file to the cluster,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"quick-cluster.yaml",children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: demo-password\n  namespace: default\nstringData:\n  password: "AAaa__321"\n---\napiVersion: oceanbase.oceanbase.com/v1alpha1\nkind: OBCluster\nmetadata:\n  name: test\n  namespace: default\nspec:\n  clusterName: obcluster\n  clusterId: 1\n  userSecrets:\n    root: demo-password\n    proxyro: demo-password\n    monitor: demo-password\n    operator: demo-password\n  topology:\n    - zone: zone1\n      replica: 1\n  observer:\n    image: oceanbase/oceanbase-cloud-native:4.2.1.1-101010012023111012\n    resource:\n      cpu: 2\n      memory: 9Gi\n    storage:\n      dataStorage:\n        storageClass: standard\n        size: 40Gi\n      redoLogStorage:\n        storageClass: standard\n        size: 40Gi\n      logStorage:\n        storageClass: standard\n        size: 10Gi\n  parameters:\n  - name: system_memory\n    value: 1G\n  - name: "__min_full_resource_pool_memory"\n    value: "2147483648" # 2G\n'})}),"\n",(0,s.jsx)(n.p,{children:"You will see outputs like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"secret/demo-password created\nobcluster.oceanbase.oceanbase.com/test created\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It will take 2~3 minutes for OceanBase cluster to bootstrap. We should wait for it to get ready before we try to connect it. Use ",(0,s.jsx)(n.code,{children:"kubectl wait"})," to do this,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl wait obcluster test --for jsonpath='{.status.status}'=running --timeout=10m\n\n# After the cluster bootstraps successfully, the terminal outputs: \n# obcluster.oceanbase.oceanbase.com/test condition met\n"})}),"\n",(0,s.jsx)(n.p,{children:"Connect to the sys tenant of the cluster,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"PODNAME=$(kubectl get pods -l ref-obcluster=test -o jsonpath='{.items[*].metadata.name}')\nPASSWORD=$(kubectl get secret demo-password -o jsonpath='{.data.password}' | base64 --decode)\nkubectl exec pods/$PODNAME -- yum install -y mysql\nkubectl exec -it pods/$PODNAME -- mysql -h127.0.0.1 -P2881 -uroot -p$PASSWORD\n"})}),"\n",(0,s.jsx)(n.p,{children:"And you will enter the REPL of mysql,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Welcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 3221488229\nServer version: 5.7.25 OceanBase_CE 4.2.1.1 (r101010012023111012-2f6924cd5a576f09d6e7f212fac83f1a15ff531a) (Built Nov 10 2023 12:13:37)\n\nCopyright (c) 2000, 2023, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> \n"})}),"\n",(0,s.jsx)(n.h3,{id:"6-create-tenant-in-deployed-oceanbase-cluster",children:"6. Create tenant in deployed OceanBase cluster"}),"\n",(0,s.jsx)(n.p,{children:"Apply the following yaml manifest,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",metastring:"quick-tennat.yaml",children:'apiVersion: oceanbase.oceanbase.com/v1alpha1\nkind: OBTenant\nmetadata:\n  name: t1\n  namespace: default\nspec:\n  obcluster: test\n  tenantName: t1\n  unitNum: 1\n  charset: utf8mb4\n  connectWhiteList: "%"\n  forceDelete: true\n  credentials:\n    root: demo-password\n    standbyRo: demo-password\n  pools:\n    - zone: zone1\n      type:\n        name: Full\n        replica: 1\n        isActive: true\n      resource:\n        maxCPU: 1\n        memorySize: 2Gi\n        minCPU: 1\n        maxIops: 1024\n        minIops: 1024\n        iopsWeight: 2\n        logDiskSize: 4Gi\n'})}),"\n",(0,s.jsx)(n.p,{children:"Wait for the tenant to be initialized,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl wait obtenant t1  --for jsonpath='{.status.status}'=running --timeout=10m\n"})}),"\n",(0,s.jsx)(n.p,{children:"Connect to the tenant,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"PODNAME=$(kubectl get pods -l ref-obcluster=test -o jsonpath='{.items[*].metadata.name}')\nkubectl exec -it pods/$PODNAME -- mysql -h127.0.0.1 -P2881 -uroot@t1\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8713:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/docker-limit-3181e03db49bc40d2b0644e2aecd5cb9.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);