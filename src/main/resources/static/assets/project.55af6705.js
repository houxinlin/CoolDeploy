var q=Object.defineProperty,H=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var U=(e,l,u)=>l in e?q(e,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[l]=u,E=(e,l)=>{for(var u in l||(l={}))W.call(l,u)&&U(e,u,l[u]);if(F)for(var u of F(l))J.call(l,u)&&U(e,u,l[u]);return e},L=(e,l)=>H(e,M(l));import{i as h}from"./axiso.976e7f12.js";import{_ as K}from"./plugin-vue_export-helper.5a098b48.js";import{D as O,l as Q,m as X,r as c,n as Y,o as b,g as w,h as o,w as n,p as Z,E as $,q as ee,c as B,s as oe,j as _,F as x,u as G,t as S,k as d}from"./vendor.9ddb015a.js";import"./index.d3670e35.js";function le(){return h({url:"/api/project/listProject",method:"get"})}function te(e){return h({url:"/api/project/gradleTask",method:"post",data:e})}function R(e){return h({url:"/api/project/listTasks",method:"get",params:e})}function ne(e){return h({url:"/api/project/saveConfig",method:"post",data:e})}function ae(e){return h({url:"/api/project/execProjectCommand",method:"get",params:e})}function ie(e){return h({url:"/api/project/execProjectShell",method:"get",params:e})}function se(e){return h({url:"/api/project/buildAndDeploy",method:"get",params:e})}function re(e){return h({url:"/api/project/pullProject",method:"get",params:e})}function de(e){return h({url:"/api/project/cloneProject",method:"post",data:e})}const ce={components:{Delete:O},mounted(){this.listProject()},setup(){const e=Q({dialogConfigVisible:!1,gitSshUrl:"",dataLoading:!0,iconSize:17,dialogFormVisible:!1,commands:[],projects:[],shellDialogVisible:!1,projectShell:"",shellTxt:`#!/bin/sh
`,selectProjectIndex:-1,commandAuto:[],dialogTaskVisible:!1,selectCommandInputIndex:-1,loading:null}),l=()=>{e.commands.push("")},u=a=>{e.commands.splice(a,1)},i=()=>{e.dataLoading=!0,le().then(a=>{e.projects=a.data.data,e.dataLoading=!1,k("\u63D0\u793A","\u83B7\u53D6\u9879\u76EE\u6210\u529F")})},I=()=>{ne({projectName:e.projects[e.selectProjectIndex].projectName,projectCommands:e.commands,shell:e.shellTxt}).then(a=>{a.data.code==0&&(e.dialogConfigVisible=!1),i(),$({title:"\u63D0\u793A",duration:3e3,message:a.data.data,type:"success"})})},z=(a,r)=>{e.selectProjectIndex=a,e.dialogConfigVisible=!e.dialogConfigVisible,e.shellTxt=r.shell,e.commands=r.buildCommands,R({name:r.projectName}).then(f=>{e.commandAuto=f.data.data}).catch(f=>{})},s=(a,r)=>{const f=e.commandAuto.filter(t=>t.toLowerCase().startsWith(a));return r(f)},g=a=>{e.commands[e.selectCommandInputIndex]=a},P=a=>{e.selectCommandInputIndex=a},T=(a,r)=>{e.loading=ee.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"}),R({name:r.projectName}).then(f=>{e.selectProjectIndex=a,e.commandAuto=f.data.data,e.dialogTaskVisible=!e.dialogTaskVisible,e.loading.close()}).catch(f=>{k("\u63D0\u793A","\u53D1\u751F\u9519\u8BEF"),e.loading.close()})},C=a=>{te({projectName:e.projects[e.selectProjectIndex].projectName,taskName:a}).then(r=>{p()})},v=a=>{ae({projectName:a.projectName}).then(r=>{p()})},j=a=>{ie({projectName:a.projectName}).then(r=>{p()})},y=a=>{e.projectShell=a.shell,e.shellDialogVisible=!e.shellDialogVisible},p=()=>{k(),e.dialogFormVisible=!1},k=(a="\u8C03\u7528\u6210\u529F",r="\u8BF7\u6253\u5F00\u5DE6\u8FB9\u8F93\u51FA\u7A97\u53E3\u67E5\u770B\u65E5\u5FD7")=>{$({title:a,message:r,position:"top-right",duration:1500})},N=()=>{de({address:e.gitSshUrl}).then(a=>{p()})},D=(a,r)=>{se({projectName:r.projectName}).then(()=>{p()})},A=(a,r)=>{re({projectName:r.projectName}).then(f=>{p()})};return L(E({},X(e)),{pullProject:A,buildAndDeploy:D,handlerConfig:z,taskBuildEvent:v,taskExecShellEvent:j,execProjectTask:C,showProjectShell:y,exectureTask:T,cloneProject:N,listProject:i,autocompleteFocus:P,querySearch:s,deleteCommand:u,addCommand:l,handlerSaveConfig:I,handleCommandSelect:g})}},me=d("\u589E\u52A0"),ue=d("\u5237\u65B0"),pe=d("\u67E5\u770B"),fe=d("\u5237\u65B0"),he=d("\u914D\u7F6E"),_e=d("\u64CD\u4F5C"),ge=d("\u6784\u5EFA&Shell"),be=d("\u6267\u884Ctask"),Ce=_("span",null,"SSH\u8DEF\u5F84",-1),je={class:"dialog-footer"},ke=d("\u53D6\u6D88"),Ve=d("\u52A0\u8F7D"),ve=d("\u6DFB\u52A0"),ye={class:"value"},we=["onClick"],Se={class:"shell"},Pe={class:"dialog-footer"},Te=d("\u53D6\u6D88"),Ne=d("\u4FDD\u5B58"),De={class:"shell-per",style:{"white-space":"pre-line"}},Ae={class:"dialog-footer"},Ie=d("\u53D6\u6D88"),ze=d("\u786E\u5B9A");function Fe(e,l,u,i,I,z){const s=c("el-button"),g=c("el-table-column"),P=c("el-popconfirm"),T=c("el-table"),C=c("el-alert"),v=c("el-input"),j=c("el-tab-pane"),y=c("el-tabs"),p=c("el-dialog"),k=c("el-autocomplete"),N=c("el-row"),D=c("Delete"),A=c("el-icon"),a=c("el-scrollbar"),r=c("el-drawer"),f=Y("loading");return b(),w("div",null,[o(s,{type:"primary",onClick:l[0]||(l[0]=t=>e.dialogFormVisible=!0)},{default:n(()=>[me]),_:1}),o(s,{type:"primary",onClick:i.listProject},{default:n(()=>[ue]),_:1},8,["onClick"]),Z(o(T,{data:e.projects,style:{width:"100%"}},{default:n(()=>[o(g,{prop:"firstCommitId",label:"\u5F53\u524Dcommit ID",width:"180"}),o(g,{prop:"projectName",label:"\u9879\u76EE\u540D\u79F0",width:"180"}),o(g,{prop:"buildTool",label:"\u9879\u76EE\u6784\u5EFA\u5DE5\u5177",width:"180"}),o(g,{prop:"shell",label:"\u6267\u884C\u811A\u672C",width:"180"},{default:n(t=>[o(s,{size:"mini",type:"info",onClick:m=>i.showProjectShell(t.row)},{default:n(()=>[pe]),_:2},1032,["onClick"])]),_:1}),o(g,{label:"\u64CD\u4F5C"},{default:n(t=>[o(s,{size:"mini",type:"success",onClick:m=>i.pullProject(t.$index,t.row)},{default:n(()=>[fe]),_:2},1032,["onClick"]),o(s,{size:"mini",onClick:m=>i.handlerConfig(t.$index,t.row)},{default:n(()=>[he]),_:2},1032,["onClick"]),o(P,{"confirm-button-text":"\u6267\u884Cshell","cancel-button-text":"\u6784\u5EFA",icon:e.InfoFilled,"icon-color":"red",title:"\u4F60\u60F3\u8981\u6267\u884C\u4EC0\u4E48\u64CD\u4F5C\uFF1F",onConfirm:m=>i.taskExecShellEvent(t.row),onCancel:m=>i.taskBuildEvent(t.row)},{reference:n(()=>[o(s,{type:"danger",size:"mini"},{default:n(()=>[_e]),_:1})]),_:2},1032,["icon","onConfirm","onCancel"]),o(s,{size:"mini",type:"primary",onClick:m=>i.buildAndDeploy(t.$index,t.row)},{default:n(()=>[ge]),_:2},1032,["onClick"]),t.row.buildTool=="GRADLE"?(b(),B(s,{key:0,size:"mini",type:"success",onClick:m=>i.exectureTask(t.$index,t.row)},{default:n(()=>[be]),_:2},1032,["onClick"])):oe("",!0)]),_:1})]),_:1},8,["data"]),[[f,e.dataLoading]]),o(p,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[3]||(l[3]=t=>e.dialogFormVisible=t),title:"\u8F93\u5165Git\u8DEF\u5F84"},{footer:n(()=>[_("span",je,[o(s,{onClick:l[2]||(l[2]=t=>e.dialogFormVisible=!1)},{default:n(()=>[ke]),_:1}),o(s,{type:"primary",onClick:i.cloneProject},{default:n(()=>[Ve]),_:1},8,["onClick"])])]),default:n(()=>[o(C,{title:"\u70B9\u51FB\u786E\u8BA4\u540E\uFF0C\u5C06\u5C1D\u8BD5\u62C9\u53D6\u8FDC\u7A0B\u9879\u76EE\uFF0C\u5E76\u81EA\u52A8\u7F16\u8BD1",closable:"false",type:"success"}),o(y,{type:"card",onTabClick:e.handleClick},{default:n(()=>[o(j,{label:"GIT\u8DEF\u5F84"},{default:n(()=>[Ce,o(v,{modelValue:e.gitSshUrl,"onUpdate:modelValue":l[1]||(l[1]=t=>e.gitSshUrl=t),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["onTabClick"])]),_:1},8,["modelValue"]),o(p,{modelValue:e.dialogConfigVisible,"onUpdate:modelValue":l[6]||(l[6]=t=>e.dialogConfigVisible=t),title:"\u9879\u76EE\u914D\u7F6E"},{footer:n(()=>[_("span",Pe,[o(s,{onClick:l[5]||(l[5]=t=>e.dialogConfigVisible=!1)},{default:n(()=>[Te]),_:1}),o(s,{type:"primary",onClick:i.handlerSaveConfig},{default:n(()=>[Ne]),_:1},8,["onClick"])])]),default:n(()=>[o(y,{type:"card",onTabClick:e.handleClick},{default:n(()=>[o(j,{label:"\u6784\u5EFA\u547D\u4EE4"},{default:n(()=>[o(C,{title:"[\u6784\u5EFA\u547D\u4EE4]\u7528\u4E8E\u6267\u884C\u6784\u5EFA\u5DE5\u5177\u6240\u63D0\u4F9B\u7684\u547D\u4EE4\uFF0C\u5982'gradlew build'\uFF0C\u4F46\u60A8\u53EF\u4EE5\u5728\u8FD9\u91CC\u7701\u7565'gradlew'\uFF0C\u76F4\u63A5\u586B\u5165'build'(\u4EC5\u4EC5Maven\u3001Gradle\u652F\u6301\u8FD9\u79CD\u65B9\u5F0F)",closable:"false",type:"error"}),o(s,{type:"primary",onClick:i.addCommand,size:"mini"},{default:n(()=>[ve]),_:1},8,["onClick"]),(b(!0),w(x,null,G(e.commands,(t,m)=>(b(),w("div",{key:m,class:"command-item"},[_("span",null,S(m+1),1),o(N,null,{default:n(()=>[o(k,{onFocus:V=>i.autocompleteFocus(m),modelValue:e.commands[m],"onUpdate:modelValue":V=>e.commands[m]=V,"fetch-suggestions":i.querySearch,"popper-class":"my-autocomplete",placeholder:"Please input",onSelect:i.handleCommandSelect},{default:n(({item:V})=>[_("div",ye,S(V),1)]),_:2},1032,["onFocus","modelValue","onUpdate:modelValue","fetch-suggestions","onSelect"])]),_:2},1024),_("div",{class:"icon",onClick:V=>i.deleteCommand(m)},[o(A,{size:e.iconSize,color:e.color},{default:n(()=>[o(D)]),_:1},8,["size","color"])],8,we)]))),128))]),_:1}),o(j,{class:"shell",label:"Shell\u811A\u672C"},{default:n(()=>[o(C,{title:"[Shell\u811A\u672C]\u7528\u4E8E\u9879\u76EE\u7F16\u8BD1\u3001\u90E8\u7F72,\u5728\u81EA\u52A8\u6784\u5EFA\u65F6,\u5C06\u4F1A\u6267\u884C\u6B64shell,\u6784\u5EFA\u547D\u4EE4\u53EF\u4EE5\u65E0\uFF0C\u4F46\u662FShell\u811A\u672C\u5FC5\u987B\u5B58\u5728",closable:"false",type:"error"}),_("div",Se,[o(v,{modelValue:e.shellTxt,"onUpdate:modelValue":l[4]||(l[4]=t=>e.shellTxt=t),autosize:{minRows:5,maxRows:20},type:"textarea",placeholder:"Please input"},null,8,["modelValue"])])]),_:1})]),_:1},8,["onTabClick"])]),_:1},8,["modelValue"]),o(r,{size:"18%",modelValue:e.dialogTaskVisible,"onUpdate:modelValue":l[7]||(l[7]=t=>e.dialogTaskVisible=t),title:"\u9009\u62E9\u4EFB\u52A1",direction:"rtl","before-close":e.handleClose},{default:n(()=>[o(a,null,{default:n(()=>[(b(!0),w(x,null,G(e.commandAuto,t=>(b(),B(s,{style:{"margin-bottom":"10px"},onClick:m=>i.execProjectTask(t),key:t,type:"info",size:"mini",plain:""},{default:n(()=>[d(S(t),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["modelValue","before-close"]),o(p,{modelValue:e.shellDialogVisible,"onUpdate:modelValue":l[10]||(l[10]=t=>e.shellDialogVisible=t),title:"shell",width:"30%",center:""},{footer:n(()=>[_("span",Ae,[o(s,{onClick:l[8]||(l[8]=t=>e.shellDialogVisible=!1)},{default:n(()=>[Ie]),_:1}),o(s,{type:"primary",onClick:l[9]||(l[9]=t=>e.shellDialogVisible=!1)},{default:n(()=>[ze]),_:1})])]),default:n(()=>[_("pre",De,"        "+S(e.projectShell)+`
      `,1)]),_:1},8,["modelValue"])])}var xe=K(ce,[["render",Fe]]);export{xe as default};
