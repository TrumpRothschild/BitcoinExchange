webpackJsonp([32],{BiMc:function(t,a){},UZgI:function(t,a){},kRNl:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i=s("f3u+"),n=s.n(i);e.default.use(n.a);var o={components:{VueQriously:n.a},data(){return{data:{info:{}},qrcode:{value:"",size:150},queryId:"",title:"",time:"",content:"",initLang:this.$store.state.lang,hasContent:!0,pageNo:1,pageSize:10,totalNum:0,FAQList:[],spinShow:!1}},created:function(){this.initialize();this.fetchData(),this.$store.commit("navigate","nav-service"),this.loadDataPage(this.pageNo)},filters:{subTime:function(t){return t.substr(5,5)}},computed:{lang(){return this.$store.state.lang!=this.initLang&&this.$router.back(),this.$store.state.lang},langPram(){return"简体中文"==this.$store.state.lang?"CN":"English"==this.$store.state.lang?"EN":"KOREAN"==this.$store.state.lang?"KO":"JAPANESE"==this.$store.state.lang?"JP":"CN"}},methods:{initialize(){},loadNoticeInfo(){let t=this.$route.params.id;null!=t&&""!=t&&0!=t||(t=this.FAQList.length>0?this.FAQList[0].id:0),this.qrcode.value=this.rootHost+"/announcement/"+t,this.queryId=t,this.spinShow=!0;var a={id:t,lang:this.langPram};this.$http.post(this.host+"/uc/announcement/more",a).then(t=>{var a=t.body;if(0==a.code){const t=a.data;this.data=t,this.hasContent=!0,this.spinShow=!1,window.document.title=("简体中文"==this.lang?"公告 - ":"Announcement - ")+this.data.info.title+" - cbdcoincurrency | cbdcoincurrency offical website - global currency trading platform | global digital currency trading platform"}else this.hasContent=!1,this.spinShow=!1})},fetchData(){let t=this.$route.params.id;null!=t&&""!=t&&this.loadNoticeInfo()},noticedeail(t){var a={path:"/announcement/"+t};this.$router.push(a)},loadDataPage(t){var a={};a.pageNo=t,a.pageSize=this.pageSize,a.lang=this.langPram,this.$http.post(this.host+this.api.uc.announcement,a).then(t=>{var a=t.body;if(0==a.code){if(0==a.data.content.length)return;this.FAQList=a.data.content,this.totalNum=a.data.totalElements,this.loadNoticeInfo()}else this.$Notice.error({title:this.$t("common.tip"),desc:a.message})})}},watch:{$route:"fetchData"}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"notice"},[e("Row",{attrs:{gutter:30}},[e("Col",{staticClass:"notice-list",attrs:{xs:24,sm:24,md:5,lg:5}},[e("div",{staticClass:"main"},[e("h2",[t._v(t._s(t.$t("cms.noticecenter")))]),t._v(" "),e("div",{staticClass:"list"},t._l(t.FAQList,function(a){return e("div",{class:a.id==t.queryId?"active":"item1",on:{click:function(s){t.noticedeail(a.id)}}},[e("span",{staticClass:"text"},[t._v(t._s(a.title))])])})),t._v(" "),e("div",{staticClass:"page"},[e("Page",{attrs:{total:t.totalNum,pageSize:t.pageSize,current:t.pageNo,size:"small"},on:{"on-change":t.loadDataPage}})],1)])]),t._v(" "),e("Col",{attrs:{xs:24,sm:24,md:5,lg:19}},[e("div",{staticClass:"content-wrap"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.hasContent,expression:"hasContent"}]},[e("div",{staticClass:"header"},[e("h2",[t._v(t._s(t.data.info.title))]),t._v(" "),e("span",[t._v(t._s(t.data.info.createTime))])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"content-text",domProps:{innerHTML:t._s(t.data.info.content)}}),t._v(" "),e("div",{staticClass:"show-qrcode",staticStyle:{"text-align":"right",padding:"15px 10px","border-radius":"10px",background:"#FFF","margin-top":"30px"}},[e("qriously",{attrs:{value:t.qrcode.value,size:t.qrcode.size,foreground:"#000"}}),t._v(" "),e("div",{staticStyle:{width:"150px",float:"right","text-align":"center"}},[t._v(t._s(t.$t("cms.scanforshare")))])],1)]),t._v(" "),e("div",{staticClass:"nav-bottom"},[t.data.back?e("div",{staticClass:"left"},[e("router-link",{staticClass:"link",attrs:{to:"../announcement/"+t.data.back.id}},[t._v("\n                  < "+t._s(t.$t("cms.prevnotice"))+" "),e("p",{staticStyle:{color:"#f0a70a"}},[t._v(t._s(t.data.back.title))])])],1):t._e(),t._v(" "),t.data.next?e("div",{staticClass:"right"},[e("router-link",{staticClass:"link",attrs:{to:"../announcement/"+t.data.next.id}},[t._v(t._s(t.$t("cms.nextnotice"))+" >\n                  "),e("p",{staticStyle:{color:"#f0a70a"}},[t._v(t._s(t.data.next.title))])])],1):t._e()])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasContent,expression:"!hasContent"}]},[e("p",{staticStyle:{"font-size":"30px","text-align":"center","margin-top":"15%"}},[e("Icon",{attrs:{type:"ios-cafe"}})],1),t._v(" "),e("p",{staticStyle:{"text-align":"center","font-size":"12px","margin-top":"10px",color:"#828ea1"}},[t._v(t._s(t.$t("cms.notexist")))])]),t._v(" "),t.spinShow?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)])],1),t._v(" "),e("div",{staticClass:"bottom-list"},[e("p",{staticClass:"pcnew",staticStyle:{"font-size":"18px",margin:"15px 0"}},[t._v("最新公告")]),t._v(" "),t._l(t.FAQList,function(a,s){return e("div",{key:s,staticClass:"notice-item",on:{click:function(s){t.noticedeail(a.id)}}},[e("span",{staticClass:"text"},[t._v("["+t._s(t._f("subTime")(a.createTime))+"] "+t._s(a.title))])])})],2),t._v(" "),e("div",{staticClass:"app_bottom"},[e("div",{staticClass:"left_logo"},[e("img",{staticStyle:{float:"left"},attrs:{src:s("Rvcu")}}),t._v(" "),e("div",{staticStyle:{float:"left",height:"40px","line-height":"40px",color:"#000"}},[t._v(t._s(t.$t("cms.downloadslogan")))])]),t._v(" "),e("div",{staticClass:"right_btn_wrap"},[e("router-link",{staticClass:"right_btn",attrs:{to:"/"}},[t._v(t._s(t.$t("cms.download")))])],1)])],1)},staticRenderFns:[]};var l=s("VU/8")(o,c,!1,function(t){s("UZgI"),s("BiMc")},"data-v-4d153551",null);a.default=l.exports}});