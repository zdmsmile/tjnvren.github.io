webpackJsonp([1],{"76b0":function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("7+uW"),e={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},e,!1,function(t){s("76b0")},null,null).exports,c=s("/ocq"),l=window.localStorage,o={data:function(){return{reg_flag:!1,task_flag:!1,complate_flag:!1,reg_data:{},id:"",id2:"",task_detail:""}},methods:{show_reg:function(){this.complate_flag=!1,this.task_flag=!1,this.reg_flag=!0},show_task:function(){this.complate_flag=!1,this.reg_flag=!1,this.task_flag=!0},show_comlate:function(){this.reg_flag=!1,this.task_flag=!1,this.complate_flag=!0},close_complate:function(){this.complate_flag=!1},close_reg:function(){this.reg_flag=!1},close_task:function(){this.task_flag=!1},commit_reg:function(){this.show_comlate()},commit_task:function(){var t=this;this.$http.get("/static/jsondata/task.json").then(function(a){console.log(a.data),t.task_detail=a.data.taskdetail}).catch(function(t){console.log(t)})}},mounted:function(){console.log(!this.$route.params.id),this.$route.params.id?this.id=this.$route.params.id:this.id="admin",l.setItem("userid",this.id),this.id2=l.getItem("userid")}},_={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"main_class"},[s("div",{staticClass:"centent_class"},[s("div",{staticClass:"top"},[t._v("私密行动组")]),t._v(" "),s("router-view"),t._v(" "),s("div",{staticClass:"buttom"},[s("div",{on:{click:t.show_reg}},[t._v("会员注册")]),t._v(" "),s("div",{on:{click:t.show_task}},[t._v("信息查询")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.reg_flag,expression:"reg_flag"}],staticClass:"popwin"},[s("div",{staticClass:"poptop"},[s("div",{staticClass:"top_main"},[t._v("注册页面")]),t._v(" "),s("div",{staticClass:"top_close",on:{click:t.close_reg}},[t._v("关闭")])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"popbtn",on:{click:t.commit_reg}},[t._v("提交")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.complate_flag,expression:"complate_flag"}],staticClass:"popwin"},[t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"popbtn",on:{click:t.close_complate}},[t._v("关闭")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.task_flag,expression:"task_flag"}],staticClass:"popwin"},[s("div",{staticClass:"poptop"},[s("div",{staticClass:"top_main"},[t._v("任务页面")]),t._v(" "),s("div",{staticClass:"top_close",on:{click:t.close_task}},[t._v("关闭")])]),t._v(" "),s("div",{staticClass:"poptab"},[t._m(3),t._v(" "),s("div",[t._v("任务描述：")]),t._v(" "),s("div",{staticClass:"taskc_content"},[t._v(t._s(t.task_detail))])]),t._v(" "),s("div",{staticClass:"popbtn",on:{click:t.commit_task}},[t._v("查询")])])],1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"poptab"},[s("div",{staticClass:"tab_container"},[s("span",{staticClass:"reg_span"},[t._v("账号：")]),t._v(" "),s("input",{staticClass:"reg_item",attrs:{type:"text",value:"",placeholder:"输入账号"}})]),t._v(" "),s("div",{staticClass:"tab_container"},[s("span",{staticClass:"reg_span"},[t._v("性别：")]),t._v(" "),s("select",{staticClass:"reg_item"},[s("option",{attrs:{value:"famale"}},[t._v("女")]),t._v(" "),s("option",{attrs:{value:"male"}},[t._v("男")])])]),t._v(" "),s("div",{staticClass:"tab_container"},[s("span",{staticClass:"reg_span"},[t._v("年龄：")]),t._v(" "),s("input",{staticClass:"reg_item",attrs:{type:"number",value:""}})]),t._v(" "),s("div",{staticClass:"tab_container"},[s("span",{staticClass:"reg_span"},[t._v("密码：")]),t._v(" "),s("input",{staticClass:"reg_item",attrs:{type:"text",value:"",placeholder:"输入密码"}})]),t._v(" "),s("div",{staticClass:"tab_container"},[s("span",{staticClass:"reg_span"},[t._v("密码：")]),t._v(" "),s("input",{staticClass:"reg_item",attrs:{type:"text",value:"",placeholder:"确认密码"}})]),t._v(" "),s("div",{staticClass:"tab_container"},[s("span",{staticClass:"reg_span"},[t._v("通讯：")]),t._v(" "),s("input",{staticClass:"reg_item",attrs:{type:"text",value:"",placeholder:"QQ号/微信号/手机号"}})]),t._v(" "),s("div",{staticClass:"tab_container"},[s("span",{staticClass:"reg_span"},[t._v("地址：")]),t._v(" "),s("input",{staticClass:"reg_item",attrs:{type:"text",value:"",placeholder:"工作或生活常驻地"}})]),t._v(" "),s("div",{staticClass:"tab_container"},[s("span",{staticClass:"reg_span"},[t._v("需求：")]),t._v(" "),s("select",{staticClass:"reg_item"},[s("option",{staticClass:"item_op",attrs:{value:"value1"}},[t._v("校园女生")]),t._v(" "),s("option",{staticClass:"item_op",attrs:{value:"value2"}},[t._v("职场OL")]),t._v(" "),s("option",{staticClass:"item_op",attrs:{value:"value3"}},[t._v("家庭主妇")]),t._v(" "),s("option",{staticClass:"item_op",attrs:{value:"value4"}},[t._v("交际名媛")]),t._v(" "),s("option",{staticClass:"item_op",attrs:{value:"value4"}},[t._v("应聘管理")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"poptop"},[a("div",{staticClass:"top_main"},[this._v("成功页面")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"poptab"},[a("div",[this._v("已完成提交，感谢您的参与！。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tab_container"},[a("span",{staticClass:"reg_span"},[this._v("任务码：")]),this._v(" "),a("input",{staticClass:"reg_item",attrs:{type:"text",value:"",placeholder:"任务码"}})])}]};var r=s("VU/8")(o,_,!1,function(t){s("j/oL")},"data-v-0b18a4b0",null).exports,v={data:function(){return{flag:"",bef:"",datalist:{},show_flag:!1,isActivated:!1,show_image:"/static/images/item1.png",data:{title:"",titleimg:"",content:"",roles:[{name:"",detail:"",img:""}]}}},methods:{goback:function(){this.$router.go(-1)},change:function(t){this.bef=this.data.roles[t].detail,this.show_image=this.data.roles[t].img2,this.isActivated=!0},close:function(){this.show_flag=!1}},mounted:function(){var t=this;this.$http.get("/static/jsondata/items.json").then(function(a){t.datalist=a.data,t.flag=t.$route.params.num,1==t.flag?t.data=t.datalist.item1:2==t.flag?t.data=t.datalist.item2:3==t.flag?t.data=t.datalist.item3:4==t.flag?t.data=t.datalist.item4:5==t.flag?t.data=t.datalist.item5:consolt.log("end"),t.bef=t.data.content}).catch(function(t){console.log(t)})}},m={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"showmain"},[s("div",{staticClass:"showtop"},[s("div",{staticClass:"top1"},[t._v(t._s(t.data.title))]),t._v(" "),s("div",{staticClass:"top2",on:{click:function(a){return t.goback()}}},[t._v("返回")])]),t._v(" "),s("div",{staticClass:"showcontent"},[s("div",{staticClass:"wbef",class:{activated:t.isActivated}},[s("img",{staticClass:"mainimage",attrs:{src:t.show_image,alt:""}}),t._v("\n            "+t._s(t.bef)+"\n        ")]),t._v(" "),s("div",{staticClass:"wimage"},t._l(t.data.roles,function(a,i){return s("div",{key:i,staticClass:"witem"},[s("img",{staticClass:"wimg",attrs:{src:a.img,alt:""},on:{click:function(a){return t.change(i)}}}),t._v(" "),s("div",{staticClass:"wz"},[t._v(t._s(a.name))])])}),0)])])},staticRenderFns:[]};var p=s("VU/8")(v,m,!1,function(t){s("VPnh")},"data-v-3152d8e3",null).exports,d={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("div",{staticClass:"item",on:{click:function(a){return t.show_item("1")}}},[s("img",{staticClass:"item_img",attrs:{src:"/static/images/study.png",alt:""}}),t._v(" "),s("div",{staticClass:"item_font"},[t._v("校园女生")])]),t._v(" "),s("div",{staticClass:"item",on:{click:function(a){return t.show_item("2")}}},[s("img",{staticClass:"item_img",attrs:{src:"/static/images/work.png",alt:""}}),t._v(" "),s("div",{staticClass:"item_font"},[t._v("职场OL")])]),t._v(" "),s("div",{staticClass:"item",on:{click:function(a){return t.show_item("3")}}},[s("img",{staticClass:"item_img",attrs:{src:"/static/images/life.png",alt:""}}),t._v(" "),s("div",{staticClass:"item_font"},[t._v("家庭主妇")])]),t._v(" "),s("div",{staticClass:"item",on:{click:function(a){return t.show_item("4")}}},[s("img",{staticClass:"item_img",attrs:{src:"/static/images/money.png",alt:""}}),t._v(" "),s("div",{staticClass:"item_font"},[t._v("交际名媛")])]),t._v(" "),s("div",{staticClass:"item",on:{click:function(a){return t.show_item("5")}}},[s("img",{staticClass:"item_img",attrs:{src:"/static/images/share.png",alt:""}}),t._v(" "),s("div",{staticClass:"item_font"},[t._v("招募管理")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"bar"},[a("img",{staticClass:"bar_img",attrs:{src:"/static/images/t14.png",alt:""}})])}]};var u=s("VU/8")({data:function(){return{need_flag:!1,help_flag:!1}},methods:{show_need:function(){this.need_flag=!this.need_flag,this.help_flag=!1},show_help:function(){this.help_flag=!this.help_flag,this.need_flag=!1},show_item:function(t){this.$router.push({path:"/show/"+t})}}},d,!1,function(t){s("cb63")},"data-v-dabf98da",null).exports;i.a.use(c.a);var h=new c.a({routes:[{path:"/:id",name:"Main",component:r,children:[{path:"/",name:"item",component:u},{path:"/show/:num",name:"Show",component:p},{path:"/item",name:"item",component:u}]},{path:"/",name:"Main1",component:r,children:[{path:"/",name:"item1",component:u},{path:"/show/:num",name:"Show1",component:p},{path:"/item",name:"item1",component:u}]}]}),g=s("mtWM"),f=s.n(g);i.a.prototype.$http=f.a,i.a.config.productionTip=!1,new i.a({el:"#app",router:h,components:{App:n},template:"<App/>"})},VPnh:function(t,a){},cb63:function(t,a){},"j/oL":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.1fd57b8191ea134330dd.js.map