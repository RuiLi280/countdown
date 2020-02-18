(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),s=a.n(l),r=a(22),o=a(37),c=a.n(o),h=a(47),u=a(17),d=a(12),m=a(9),p=a(14),f=a(15),v=a(6),g=a(16),b=a(19),C=a.n(b),k=(a(33),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"convert",value:function(){var e,t=this.props.type,a=this.props.sec;switch(t){case"day":return Math.floor(a/86400)+"";case"hour":return(e=Math.floor(a%86400/3600))<10?"0"+e:e+"";case"min":return(e=Math.floor(a%3600/60))<10?"0"+e:e+"";case"sec":return(e=Math.floor(a%60))<10?"0"+e:e+""}}},{key:"render",value:function(){return i.a.createElement("div",{className:"time"},i.a.createElement("div",{className:"time-num",style:this.props.styles},this.convert()),i.a.createElement("div",{className:"time-label"},this.props.type.toLocaleUpperCase()))}}]),t}(n.Component));function E(e){var t=e.sec;return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{type:"day",sec:t}),i.a.createElement(k,{type:"hour",sec:t,styles:e.styles}),i.a.createElement(k,{type:"min",sec:t}),i.a.createElement(k,{type:"sec",sec:t,styles:e.styles}))}var O,y=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).timeId=void 0,a.state={timeRemain:null===a.props.targetDate?0:a.calculateTimeDiff(a.props.targetDate.target),test:""},a.countdownInterval=a.countdownInterval.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"calculateTimeDiff",value:function(e){return null===e?0:Math.floor((e.getTime()-(new Date).getTime())/1e3)}},{key:"componentDidMount",value:function(){null!==this.props.targetDate&&(this.timeId=setInterval(this.countdownInterval,1e3))}},{key:"componentDidUpdate",value:function(e,t,a){null!==this.props.targetDate&&e!==this.props&&(this.timeId&&clearInterval(this.timeId),this.timeId=setInterval(this.countdownInterval,1e3))}},{key:"countdownInterval",value:function(){var e=null===this.props.targetDate?0:this.calculateTimeDiff(this.props.targetDate.target);e<=0&&(e=0,this.setState({timeRemain:e}),this.timeId&&clearInterval(this.timeId)),this.setState({timeRemain:e})}},{key:"componentWillUnmount",value:function(){this.timeId&&clearInterval(this.timeId)}},{key:"render",value:function(){var e=this.state.timeRemain;return i.a.createElement("div",null,i.a.createElement("div",{className:"main-countdown"},i.a.createElement(E,{sec:e,styles:{fontSize:"13vw",color:"#4e4e4e"}})),i.a.createElement("div",{className:"main-title"},null===this.props.targetDate?"":this.props.targetDate.title),i.a.createElement("div",{className:"main-desc"},null===this.props.targetDate?"":this.props.targetDate.description))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).timeId=void 0,a.state={cd:a.calculateTimeDiff(a.props.item.target)},a.handleRemove=a.handleRemove.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"calculateTimeDiff",value:function(e){return null===e?0:Math.floor((e.getTime()-(new Date).getTime())/1e3)}},{key:"componentDidMount",value:function(){var e=this;this.timeId=setInterval((function(){var t=e.calculateTimeDiff(e.props.item.target);t<=0&&(t=0,e.setState({cd:t}),e.timeId&&clearInterval(e.timeId)),e.setState({cd:t})}),1e3)}},{key:"componentWillUnmount",value:function(){this.timeId&&clearInterval(this.timeId)}},{key:"handleRemove",value:function(e){e.stopPropagation(),this.props.remove(this.props.item.title)}},{key:"render",value:function(){var e=this;return i.a.createElement("li",{className:"cd-list-item glass",onClick:function(){return e.props.handleSwitch(e.props.item)}},i.a.createElement("div",{className:"cd-list-item-content"},i.a.createElement("div",{className:"title"},this.props.item.title),i.a.createElement("div",{className:"cd"},i.a.createElement(E,{sec:this.state.cd,styles:{fontSize:"15px"}}))),i.a.createElement("div",{className:"remove",onClick:this.handleRemove},"-"))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={newTitle:"",newDate:new Date,newDest:"",expand:!0},a.handleOnAddItem=a.handleOnAddItem.bind(Object(v.a)(a)),a.handleChangeDate=a.handleChangeDate.bind(Object(v.a)(a)),a.handleChangeTitle=a.handleChangeTitle.bind(Object(v.a)(a)),a.handleChangeDest=a.handleChangeDest.bind(Object(v.a)(a)),a.handleExpand=a.handleExpand.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"handleOnAddItem",value:function(e){this.props.open(!0)}},{key:"handleChangeTitle",value:function(e){console.log(this.state.newTitle),this.setState({newTitle:e.currentTarget.value})}},{key:"handleChangeDate",value:function(e){this.setState({newDate:new Date(e.currentTarget.value)})}},{key:"handleChangeDest",value:function(e){this.setState({newDest:e.currentTarget.value})}},{key:"handleExpand",value:function(e){this.setState({expand:!this.state.expand})}},{key:"render",value:function(){var e=this,t=this.state.expand;return i.a.createElement("div",{className:"glass "+(t?"cd-list-container":"cd-list-container-hide")},i.a.createElement("span",{className:"cd-list-expand",onClick:this.handleExpand},i.a.createElement("svg",{height:"30",width:"30"},i.a.createElement("text",{fontSize:"30",fontFamily:"Fredoka One, cursive;",x:"6",y:"25"},t?">":"<"))),i.a.createElement("span",{className:"cd-list"},i.a.createElement("ul",null,i.a.createElement("li",{className:"add glass",onClick:this.handleOnAddItem},"+"),this.props.list&&this.props.list.map((function(t,a){return i.a.createElement(w,{key:a,item:t,handleSwitch:e.props.handleSwitch,remove:e.props.remove})})))))}}]),t}(n.Component),D=a(11),S=a(151),x=a(150),I=a(149),T=a(139),L=a(140),A=a(147),M=a(142),N=a(143);!function(e){e[e.ok=0]="ok",e[e.existed=1]="existed",e[e.format=2]="format"}(O||(O={}));var W=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={email:"",password:"",checkEmail:O.ok},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleClose=a.handleClose.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"handleClose",value:function(){this.setState({email:"",password:""}),this.props.handleOpen(!1)}},{key:"handleChange",value:function(e){var t=e.target.id,a=e.target.value;this.setState((function(e){return Object(u.a)({},e,Object(D.a)({},t,a))}))}},{key:"handleSubmit",value:function(){var e=this;t.checkEmailFormat(this.state.email)?C.a.post("http://cdapi.thewatercats.com:4000/users/login",{email:this.state.email,password:this.state.password}).then((function(t){200===t.status?(e.props.login(!0),e.handleClose()):console.log(t.data)})).catch((function(e){console.log(e.message)})):this.setState({checkEmail:O.format})}},{key:"emailErrorMessage",value:function(){switch(this.state.checkEmail){case O.format:return"Please enter a correct email address";case O.ok:default:return""}}},{key:"render",value:function(){var e=this.props.open;return i.a.createElement(I.a,{open:e,onClose:this.handleClose},i.a.createElement(T.a,null,"Log in"),i.a.createElement(L.a,null,i.a.createElement(A.a,{required:!0,error:this.state.checkEmail!==O.ok,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,value:this.state.email,onChange:this.handleChange,helperText:this.emailErrorMessage()}),i.a.createElement(A.a,{required:!0,margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0,value:this.state.password,onChange:this.handleChange})),i.a.createElement(M.a,null,i.a.createElement(N.a,{onClick:this.handleClose,color:"primary"},"Cancel"),i.a.createElement(N.a,{onClick:this.handleSubmit,color:"primary"},"Log in")))}}],[{key:"checkEmailFormat",value:function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}}]),t}(n.Component),R=a(141),U=a(144),F=a(145),q=a(146),z=a(67),P=a.n(z),B=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={email:"",password:"",confirm:"",username:"",checkEmail:O.ok},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleClose=a.handleClose.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"handleClose",value:function(){this.setState({email:"",password:"",confirm:"",username:""}),this.props.handleOpen(!1)}},{key:"handleChange",value:function(e){var t=e.target.id,a=e.target.value;"email"===t&&(this.checkEmailFormat(a)?this.setState({checkEmail:O.ok}):this.setState({checkEmail:O.format})),this.setState((function(e){return Object(u.a)({},e,Object(D.a)({},t,a))}))}},{key:"handleSubmit",value:function(){var e=this,t=this.state;if(""!==t.email&&""!==t.username&&""!==t.password&&t.password===t.confirm&&t.checkEmail===O.ok){var a={email:t.email,password:t.password,username:t.username};console.log(a),C.a.post("http://cdapi.thewatercats.com:4000/sign-up",{email:t.email,password:t.password,username:t.username}).then((function(t){409===t.status?e.setState({checkEmail:O.format}):201===t.status?(e.props.login(!0),e.handleClose()):console.error("error")})).catch((function(e){console.log(e)}))}}},{key:"checkEmailFormat",value:function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}},{key:"emailErrorMessage",value:function(){switch(this.state.checkEmail){case O.existed:return"Email already existed";case O.format:return"Please enter a correct email address";case O.ok:default:return""}}},{key:"render",value:function(){var e=this.props.open,t=""!==this.state.confirm&&this.state.password!==this.state.confirm,a=this.state.checkEmail;return i.a.createElement(I.a,{open:e,onClose:this.handleClose},i.a.createElement(T.a,null,"Log in"),i.a.createElement(L.a,null,i.a.createElement(A.a,{required:!0,margin:"dense",id:"username",label:"User name",type:"text",fullWidth:!0,value:this.state.username,onChange:this.handleChange}),i.a.createElement(A.a,{required:!0,error:a!==O.ok,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,value:this.state.email,onChange:this.handleChange,helperText:this.emailErrorMessage()}),i.a.createElement(A.a,{required:!0,margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0,value:this.state.password,onChange:this.handleChange}),i.a.createElement(A.a,{required:!0,error:t,margin:"dense",id:"confirm",label:"Confirm password",type:"password",fullWidth:!0,value:this.state.confirm,onChange:this.handleChange,helperText:t?"Password does not match":""})),i.a.createElement(M.a,null,i.a.createElement(N.a,{onClick:this.handleClose,color:"primary"},"Cancel"),i.a.createElement(N.a,{onClick:this.handleSubmit,color:"primary"},"Sign Up")))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={anchorEl:null,openLogin:!1,openSignUp:!1},a.handleClick=a.handleClick.bind(Object(v.a)(a)),a.handleClose=a.handleClose.bind(Object(v.a)(a)),a.handleLogout=a.handleLogout.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(e){this.setState({anchorEl:e.currentTarget})}},{key:"handleClose",value:function(){this.setState({anchorEl:null})}},{key:"handleLogout",value:function(){var e=this;C.a.get("http://cdapi.thewatercats.com:4000/logout").then((function(t){200===t.status&&e.props.login(!1)})).catch((function(e){console.log(e)}))}},{key:"iconEl",value:function(){var e=Boolean(this.state.anchorEl);return i.a.createElement("div",null,i.a.createElement(S.a,{onClick:this.handleClick},this.props.username.charAt(0)),i.a.createElement(x.a,{open:e,anchorEl:this.state.anchorEl,onClose:this.handleClose,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"}},i.a.createElement(R.a,null,i.a.createElement(U.a,{button:!0,onClick:this.handleLogout},i.a.createElement(F.a,null,i.a.createElement(P.a,{fontSize:"small"})),i.a.createElement(q.a,{primary:"Sign out"})))))}},{key:"handleOpenClose",value:function(e,t){this.setState((function(a){return Object(u.a)({},a,Object(D.a)({},e,t))}))}},{key:"loginButton",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(N.a,{onClick:function(){return e.setState({openLogin:!0})}},"Log in"),i.a.createElement(W,{open:this.state.openLogin,handleOpen:this.handleOpenClose.bind(this,"openLogin"),login:this.props.login}),i.a.createElement(N.a,{onClick:function(){return e.setState({openSignUp:!0})}},"Sign up"),i.a.createElement(B,{open:this.state.openSignUp,handleOpen:this.handleOpenClose.bind(this,"openSignUp"),login:this.props.login}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"user-icon"},this.props.hasLogin?this.iconEl():this.loginButton())}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleClickClose=a.handleClickClose.bind(Object(v.a)(a)),a.setDateTime=a.setDateTime.bind(Object(v.a)(a)),a.add=a.add.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"handleClickClose",value:function(){this.props.handleOpenClose(!1)}},{key:"formatDate",value:function(e){if(null===e)return"";var t=e,a=""+(t.getMonth()+1),n=""+t.getDate(),i=t.getFullYear();return a.length<2&&(a="0"+a),n.length<2&&(n="0"+n),[i,a,n].join("-")}},{key:"formatTime",value:function(e){if(null===e)return"";var t=e.getHours(),a=e.getMinutes();return(t<10?"0"+t:t)+":"+(a<10?"0"+a:a)}},{key:"setDateTime",value:function(e,t){this.props.setDate(new Date(e+" "+t))}},{key:"add",value:function(){this.props.add(),this.props.handleOpenClose(!1)}},{key:"render",value:function(){var e=this,t=this.props.open,a=this.props.title,n=this.props.date,l=this.props.dest;return i.a.createElement("div",null,i.a.createElement(I.a,{open:t,onClose:this.handleClickClose},i.a.createElement(T.a,{id:"add-new-countdown"},"Add new count down"),i.a.createElement(L.a,null,i.a.createElement(A.a,{autoFocus:!0,margin:"dense",id:"title",label:"Count down for",type:"text",fullWidth:!0,required:!0,value:a,onChange:function(t){return e.props.setTitle(t.target.value)}}),i.a.createElement(A.a,{margin:"dense",id:"date",type:"date",value:this.formatDate(n),onChange:function(t){return e.setDateTime(t.target.value,e.formatTime(n))},required:!0}),i.a.createElement(A.a,{margin:"dense",id:"time",type:"time",value:this.formatTime(n),onChange:function(t){return e.setDateTime(e.formatDate(n),t.target.value)}}),i.a.createElement(A.a,{margin:"dense",id:"dest",type:"test",label:"Description",multiline:!0,fullWidth:!0,value:l,onChange:function(t){return e.props.setDest(t.target.value)}})),i.a.createElement(M.a,null,i.a.createElement(N.a,{onClick:this.handleClickClose,color:"primary"},"Cancel"),i.a.createElement(N.a,{onClick:this.add,color:"primary"},"Ok"))))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={user:{username:"",email:"",list:[],defaultCd:null},openAdd:!1,newCD:{title:"",target:new Date,description:""},login:!1},a.handleAddWindow=a.handleAddWindow.bind(Object(v.a)(a)),a.handleAdd=a.handleAdd.bind(Object(v.a)(a)),a.handleLogin=a.handleLogin.bind(Object(v.a)(a)),a.getData=a.getData.bind(Object(v.a)(a)),a.handleRemove=a.handleRemove.bind(Object(v.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;C.a.get("http://cdapi.thewatercats.com:4000/api/get-data").then((function(t){if(200===t.status&&null!==t.data){var a=t.data,n=null===a.defaultCd?null:Object(u.a)({},a.defaultCd,{target:new Date(a.defaultCd.target)});e.setState({user:{username:a.username,email:a.email,defaultCd:n,list:a.cdList.map((function(e){return Object(u.a)({},e,{target:new Date(e.target)})}))},login:a.isLogin})}})).catch((function(e){console.error(e)}))}},{key:"handleAddWindow",value:function(e){this.setState({openAdd:e,newCD:{title:"",target:new Date,description:""}})}},{key:"handleSwitchMainDisplay",value:function(){var e=Object(h.a)(c.a.mark((function e(t,a){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=2;break}return e.abrupt("return");case 2:return n=this.state.user,(i=n.list.filter((function(e){return e!==a}))).push(t),this.setState({user:Object(u.a)({},n,{list:i,defaultCd:a})}),e.prev=6,e.next=9,C.a.put("http://cdapi.thewatercats.com:4000/api/add",{item:t});case 9:return e.next=11,C.a.put("http://cdapi.thewatercats.com:4000/api/remove",{title:a.title});case 11:return e.next=13,C.a.put("http://cdapi.thewatercats.com:4000/api/set-default",{defaultCd:a});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),console.error(e.t0);case 18:case"end":return e.stop()}}),e,this,[[6,15]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleAdd",value:function(){var e=Object(h.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=this.state.user).defaultCd){e.next=12;break}return this.setState({user:Object(u.a)({},t,{defaultCd:this.state.newCD})}),e.prev=3,e.next=6,C.a.put("http://cdapi.thewatercats.com:4000/api/set-default",{defaultCd:this.state.newCD});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.error(e.t0);case 11:return e.abrupt("return");case 12:return a=[].concat(Object(r.a)(t.list),[this.state.newCD]),this.setState({user:Object(u.a)({},t,{list:a})}),e.prev=14,e.next=17,C.a.put("http://cdapi.thewatercats.com:4000/api/add",{item:this.state.newCD});case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(14),console.error(e.t1);case 22:case"end":return e.stop()}}),e,this,[[3,8],[14,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleRemove",value:function(e){var t=this.state.user.list.filter((function(t){return e!==t.title}));this.setState({user:Object(u.a)({},this.state.user,{list:t})}),C.a.put("http://cdapi.thewatercats.com:4000/api/remove",{title:e}).catch((function(e){return console.error(e)}))}},{key:"handleLogin",value:function(e){!0===e?this.getData():!1===e&&this.setState({user:{username:"",email:"",defaultCd:null,list:[]}}),this.setState({login:e})}},{key:"render",value:function(){var e=this,t=this.state.newCD,a=this.state.user;return i.a.createElement("div",{className:"app-container"},i.a.createElement(J,{hasLogin:this.state.login,login:this.handleLogin,username:a.username,email:a.email}),i.a.createElement(y,{targetDate:a.defaultCd}),i.a.createElement(j,{list:a.list,handleSwitch:this.handleSwitchMainDisplay.bind(this,a.defaultCd),open:this.handleAddWindow,remove:this.handleRemove}),i.a.createElement($,{title:t.title,setTitle:function(a){e.setState({newCD:Object(u.a)({},t,{title:a})})},date:t.target,setDate:function(a){e.setState({newCD:Object(u.a)({},t,{target:a})})},dest:t.description,setDest:function(a){return e.setState({newCD:Object(u.a)({},t,{description:a})})},open:this.state.openAdd,handleOpenClose:this.handleAddWindow,add:this.handleAdd}))}}]),t}(n.Component);s.a.render(i.a.createElement(H,null),document.getElementById("root"))},33:function(e,t,a){},78:function(e,t,a){e.exports=a(106)}},[[78,1,2]]]);
//# sourceMappingURL=main.0f12038b.chunk.js.map