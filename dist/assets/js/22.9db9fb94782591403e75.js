webpackJsonp([22],{SAtD:function(t,i){},UDVA:function(t,i){},pd9Z:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});o("7t+N");var e={data:()=>({country:"China",version:"1.0.0",publishTime:"2019/08/08 12:32:00"}),watch:{lang:function(){}},computed:{lang:function(){return this.$store.state.lang},isLogin:function(){return this.$store.getters.isLogin}},created:function(){window.scrollTo(0,0),this.init()},methods:{init(){window.document.title=("简体中文"==this.lang?"APP下载 - ":"APP Download - ")+"cbdcoincurrency | cbdcoincurrency offical website - global currency trading platform | global digital currency trading platform",this.getVersion()},downloadClick(){this.isWeiXin()?document.getElementById("cover").style.display="block":location.href="https://modcurrency.oss-accelerate.aliyuncs.com/appdownload/MODCURRENCY-release.apk"},downloadClick2(){this.isWeiXin()?document.getElementById("cover").style.display="block":location.href="https://modcurrency.oss-accelerate.aliyuncs.com/appdownload/MODCURRENCY-release-white.apk"},coverClick(){document.getElementById("cover").style.display="none"},getVersion(){let t=this;this.$http.post(this.host+"/uc/ancillary/system/app/version/0",null).then(i=>{var o=i.body;0==o.code&&(t.version=o.data.version,t.publishTime=o.data.publishTime)})},isWeiXin:()=>"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"login_form app-download"},[e("div",{staticClass:"login_right"},[e("div",{staticStyle:{color:"#000","margin-bottom":"60px","padding-top":"160px",width:"100%","text-align":"center","z-index":"10"}},[e("img",{staticStyle:{width:"22%","border-radius":"15px"},attrs:{src:o("Rvcu")}}),t._v(" "),e("p",{staticStyle:{"font-size":"18px"}},[t._v("cbdcoincurrency")]),t._v(" "),e("p",{staticStyle:{"font-size":"12px","margin-top":"10px",color:"#888"}},[t._v("最新版本：v"+t._s(t.version))]),t._v(" "),e("p",{staticStyle:{"font-size":"10px","margin-top":"10px",color:"#888","letter-spacing":"1px"}},[t._v("发布时间："+t._s(t.publishTime))]),t._v(" "),e("p",{staticStyle:{"font-size":"18px","margin-top":"45px"}},[e("span",{staticStyle:{border:"1px solid #F90",padding:"8px 30px","border-radius":"5px","background-color":"#F90",color:"#FFF"},on:{click:t.downloadClick}},[e("Icon",{staticStyle:{"font-size":"24px","margin-right":"5px"},attrs:{custom:"i-icon iconfont iconupload-demo"}}),t._v("黑色版")],1),t._v(" "),e("span",{staticStyle:{border:"1px solid #F90",padding:"8px 20px","border-radius":"5px","background-color":"#F90",color:"#FFF"},on:{click:t.downloadClick2}},[e("Icon",{staticStyle:{"font-size":"24px","margin-right":"5px"},attrs:{custom:"i-icon iconfont iconupload-demo"}}),t._v("白色版")],1)]),t._v(" "),e("p",{staticStyle:{"font-size":"12px","margin-top":"20px",color:"#888"}})])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"cover",attrs:{id:"cover"},on:{click:t.coverClick}},[e("img",{attrs:{src:"https://modcurrency.oss-accelerate.aliyuncs.com/2021/appdowncover.png"}})])])},staticRenderFns:[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"section",attrs:{id:"page4"}},[o("ul",[o("li",[o("div",[o("img",{attrs:{src:"https://modcurrency.oss-accelerate.aliyuncs.com/2021/download1.png",alt:""}})]),t._v(" "),o("p",{staticClass:"title"},[t._v("极致体验")]),t._v(" "),o("p",[t._v("精心优化的界面显示，体验流畅的操作响应")])]),t._v(" "),o("li",[o("div",[o("img",{attrs:{src:"https://modcurrency.oss-accelerate.aliyuncs.com/2021/download2.png",alt:""}})]),t._v(" "),o("p",{staticClass:"title"},[t._v("币种行情")]),t._v(" "),o("p",[t._v("支持MACD、KDJ、RSI、BOLL等多种专业指标")])]),t._v(" "),o("li",[o("div",[o("img",{attrs:{src:"https://modcurrency.oss-accelerate.aliyuncs.com/2021/download5.png",alt:""}})]),t._v(" "),o("p",{staticClass:"title"},[t._v("币币交易")]),t._v(" "),o("p",[t._v("支持限价委托与市价委托两种方式")])]),t._v(" "),o("li",[o("div",[o("img",{attrs:{src:"https://modcurrency.oss-accelerate.aliyuncs.com/2021/download3.png",alt:""}})]),t._v(" "),o("p",{staticClass:"title"},[t._v("法币交易")]),t._v(" "),o("p",[t._v("优质承兑商，保证资金通道顺畅无阻")])]),t._v(" "),o("li",[o("div",[o("img",{attrs:{src:"https://modcurrency.oss-accelerate.aliyuncs.com/2021/download4.png",alt:""}})]),t._v(" "),o("p",{staticClass:"title"},[t._v("资产中心")]),t._v(" "),o("p",[t._v("随时随地关注资产变化，极速充值/提现")])])])])}]};var s=o("VU/8")(e,c,!1,function(t){o("UDVA"),o("SAtD")},"data-v-f3b878f2",null);i.default=s.exports}});