import{r as v}from"./index.d3670e35.js";import{_ as x}from"./plugin-vue_export-helper.5a098b48.js";import{e as l,f as C,E as a,r as o,o as y,g as S,h as e,w as t,j as i,F as V,t as j,k as T}from"./vendor.9ddb015a.js";const L={setup(r,n){const c=l(null);return C(()=>{}),{props:r,scrollbar:c,drawer:l(!0),messageLine:l(""),timetCount:10}},mounted(){if(this.drawer=!1,setInterval(()=>{this.timetCount++},1e3),sessionStorage.getItem("login")=="true"){this.connect();return}v.push({path:"/login"})},methods:{connect(){this.socket=new WebSocket("ws://www.houxinlin.com:5993/wbs"),this.socket.onopen=this.open,this.socket.onerror=this.error,this.socket.onmessage=this.getMessage},open:function(){a({title:"WebScoket\u8FDE\u63A5\u6210\u529F",position:"bottom-right",duration:1500})},error:function(){a({title:"WebSocket\u65AD\u5F00\u8FDE\u63A5",message:"\u6B63\u5728\u91CD\u65B0\u8FDE\u63A5",position:"bottom-right",duration:1500}),setTimeout(()=>{this.connect()},2e3)},getMessage:function(r){this.timetCount>=10&&a({title:"\u6536\u5230\u65B0\u6D88\u606F\u63A8\u9001",position:"bottom-right",duration:1500}),this.timetCount=0,this.messageLine=this.messageLine+r.data,setTimeout(()=>{this.scrollbar.setScrollTop(99999999)},10)},send:function(){this.socket.send(params)},close:function(){a({title:"WebSocket\u65AD\u5F00\u8FDE\u63A5",message:"\u6B63\u5728\u91CD\u65B0\u8FDE\u63A5",position:"bottom-right",duration:1500}),setTimeout(()=>{this.connect()},2e3)}}},N=i("div",null,"CoolDeploy\u90E8\u7F72\u5DE5\u5177",-1),W=i("span",null,"\u9879\u76EE\u90E8\u7F72",-1),B=i("span",null,"\u7CFB\u7EDF\u8BBE\u7F6E",-1),E=T("\u67E5\u770B\u65E5\u5FD7"),I={style:{"white-space":"pre-line"}};function M(r,n,c,s,z,D){const m=o("el-header"),d=o("el-menu-item"),p=o("el-menu"),h=o("el-aside"),f=o("router-view"),g=o("el-main"),_=o("el-container"),w=o("el-button"),b=o("el-scrollbar"),k=o("el-drawer");return y(),S(V,null,[e(_,null,{default:t(()=>[e(m,{class:"header"},{default:t(()=>[N]),_:1}),e(_,{class:"container"},{default:t(()=>[e(h,{class:"aside",width:"200px"},{default:t(()=>[e(p,{router:"",class:"el-menu-vertical-demo"},{default:t(()=>[e(d,{index:"project"},{default:t(()=>[W]),_:1}),e(d,{index:"setting"},{default:t(()=>[B]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(f)]),_:1})]),_:1})]),_:1}),i("div",{class:"socket-btn",onClick:n[0]||(n[0]=u=>s.drawer=!s.drawer)},[e(w,{class:"sk-btn",size:"mini",type:"primary"},{default:t(()=>[E]),_:1})]),e(k,{"custom-class":"drawer",modelValue:s.drawer,"onUpdate:modelValue":n[1]||(n[1]=u=>s.drawer=u),title:"I am the title","with-header":!1,direction:"btt",size:"50%"},{default:t(()=>[e(b,{ref:"scrollbar"},{default:t(()=>[i("div",I,j(s.messageLine),1)]),_:1},512)]),_:1},8,["modelValue"])],64)}var A=x(L,[["render",M]]);export{A as default};
