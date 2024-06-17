"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[5959],{9024:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=o(4848),r=o(8453);const a={sidebar_position:3},s="Delete a tenant",i={id:"manual/ob-operator-user-guide/tenant-management-of-ob-operator/delete-tenant-of-ob-operator",title:"Delete a tenant",description:"This topic describes how to use ob-operator to delete a tenant from a Kubernetes environment.",source:"@site/docs/manual/500.ob-operator-user-guide/200.tenant-management-of-ob-operator/300.delete-tenant-of-ob-operator.md",sourceDirName:"manual/500.ob-operator-user-guide/200.tenant-management-of-ob-operator",slug:"/manual/ob-operator-user-guide/tenant-management-of-ob-operator/delete-tenant-of-ob-operator",permalink:"/ob-operator/docs/manual/ob-operator-user-guide/tenant-management-of-ob-operator/delete-tenant-of-ob-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/ob-operator/tree/master/docsite/docs/manual/500.ob-operator-user-guide/200.tenant-management-of-ob-operator/300.delete-tenant-of-ob-operator.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"manualSidebar",previous:{title:"Modify other parameters",permalink:"/ob-operator/docs/manual/ob-operator-user-guide/tenant-management-of-ob-operator/modify-tenant-of-ob-operator/other-configuration-item-modifications-of-ob-operator"},next:{title:"Perform tenant O&M operations",permalink:"/ob-operator/docs/manual/ob-operator-user-guide/tenant-management-of-ob-operator/tenant-operation"}},c={},d=[{value:"Procedure",id:"procedure",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"delete-a-tenant",children:"Delete a tenant"}),"\n",(0,n.jsx)(t.p,{children:"This topic describes how to use ob-operator to delete a tenant from a Kubernetes environment."}),"\n",(0,n.jsx)(t.h2,{id:"procedure",children:"Procedure"}),"\n",(0,n.jsxs)(t.p,{children:["You can delete the specified tenant resources from the cluster by using the configuration file ",(0,n.jsx)(t.code,{children:"tenant.yaml"}),". For more information about the configuration file, visit ",(0,n.jsx)(t.a,{href:"https://github.com/oceanbase/ob-operator/blob/2.2.1_release/deploy/tenant.yaml",children:"GitHub"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Run the following command to delete a tenant. This command deletes an OceanBase Database tenant with custom resources in the current Kubernetes cluster."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"kubectl delete -f tenant.yaml\n"})}),"\n",(0,n.jsx)(t.p,{children:"Run the following command to check whether the current Kubernetes cluster contains the custom resources of the deleted tenant:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"kubectl get obtenants.oceanbase.oceanbase.com -A -o yaml\n"})}),"\n",(0,n.jsx)(t.p,{children:"If not, the tenant is deleted."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var n=o(6540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);