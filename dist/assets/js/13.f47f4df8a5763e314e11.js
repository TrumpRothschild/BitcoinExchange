webpackJsonp([13],{J4TP:function(t,e){},mpod:function(t,e){},pJNN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("7t+N");var s={data(){return{country:"中国",codedisabled:!1,sendcodeValue:this.$t("uc.regist.sendcode"),isRegister:!1,ticket:"",randStr:"",registing:!1,captchaObj:null,modal1:!1,_captchaResult:null,agree:!0,allowRegister:!0,buttonLists:[{text:this.$t("uc.regist.telregist")},{text:this.$t("uc.regist.emailregist")}],areas:[],changeActive:0,showCode:!0,countdown:60,formInline:{username:"",user:"",code:"",areaCode:"",password:"",repassword:"",promotion:""},ruleInline:{user:[{validator:(t,e,i)=>{if(0==this.changeActive){var s=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;""==e?i(new Error(this.$t("uc.regist.teltip"))):s.test(this.formInline.user)?i():i(new Error(this.$t("uc.regist.telerr")))}else s=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,s=/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,""==e?i(new Error(this.$t("uc.regist.emailtip"))):s.test(this.formInline.user)?i():i(new Error(this.$t("uc.regist.emailerr")))},trigger:"blur"}],code:[{required:!0,message:this.$t("uc.regist.smscodetip"),trigger:"blur"}],promotion:[{required:!0,message:this.$t("uc.regist.promotiontip"),trigger:"blur"}],password:[{required:!0,message:this.$t("uc.regist.pwdtip"),trigger:"blur"},{type:"string",min:6,message:this.$t("uc.regist.pwdmsg"),trigger:"blur"}],repassword:[{validator:(t,e,i)=>{""===e?i(new Error(this.$t("uc.regist.confirmpwdtip"))):e!==this.formInline.password?i(new Error(this.$t("uc.regist.confirmpwderr"))):i()},trigger:"blur"}]},key:"",code:""}},watch:{changeActive:function(t){this.$refs.formInline.resetFields()},lang:function(){this.updateLangData()}},computed:{lang:function(){return this.$store.state.lang},isLogin:function(){return this.$store.getters.isLogin}},created:function(){window.scrollTo(0,0),this.init(),this.actives(this.changeActive),void 0!=this.$route.query.code&&""!=this.$route.query.code&&null!=this.$route.query.code?this.formInline.promotion=this.$route.query.code:this.formInline.promotion=""},methods:{updateLangData(){this.buttonLists=[{text:this.$t("uc.regist.telregist")},{text:this.$t("uc.regist.emailregist")}],0==this.changeActive?this.key=this.$t("uc.regist.telno"):this.key=this.$t("uc.regist.email")},init(){this.$store.commit("navigate","nav-other"),this.$store.state.HeaderActiveName="0",this.isLogin&&this.$router.push("/"),window.document.title=("简体中文"==this.lang?"新用户注册 - ":"New Register - ")+"cbdcoincurrency | cbdcoincurrency offical website - global currency trading platform | global digital currency trading platform"},initGtCaptcha(){var t=this;new TencentCaptcha("2031827463",function(e){0==e.ret&&(t.isRegister=!0)&&(t.ticket=e.ticket)&&(t.randStr=e.randstr)&&t.success()}).show()},onAreaChange(t){for(var e=0;e<this.areas.length;e++)this.areas[e].zhName==t&&(this.formInline.areaCode=this.areas[e].areaCode)},getAreas(){this.$http.post(this.host+this.api.common.area).then(t=>{var e=t.body;this.areas=e.data,this.formInline.country=this.areas[0].zhName,this.formInline.areaCode=this.areas[0].areaCode})},actives:function(t){this.changeActive=t,0==this.changeActive?(this.showCode=!0,this.key=this.$t("uc.regist.telno"),this.ruleInline.code=[{required:!0,message:this.$t("uc.regist.smscodetip"),trigger:"blur"}]):(this.showCode=!1,this.key=this.$t("uc.regist.email"),this.ruleInline.code=[])},handleSubmit(t){this.$refs[t].validate(t=>{if(t)if(1==this.agree)if(1==this.changeActive)this.openValidateModal();else if(this.isRegister){this.registing=!0;var e={};e.phone=this.formInline.user,e.username=this.formInline.username+this.formInline.user,e.password=this.formInline.password,e.promotion=this.formInline.promotion,e.code=this.formInline.code,e.country=this.country,e.superPartner="",e.ticket=this.ticket,e.randStr=this.randStr,this.$http.post(this.host+"/uc/register/phone",e).then(t=>{this.registing=!1;var e=t.body;if(0==e.code)if("1"==this.formInline.superType||"2"==this.formInline.superType){this.$Notice.success({title:this.$t("common.tip"),desc:"已注册成功"});var i=this;setTimeout(()=>{i.$router.push("/app")},3e3)}else{this.$Notice.success({title:this.$t("common.tip"),desc:e.message});i=this;setTimeout(()=>{i.$router.push("/app")},3e3)}else this.$Notice.error({title:this.$t("common.tip"),desc:e.message})})}else this.$Notice.error({title:this.$t("common.tip"),desc:"请输入正确的验证码"});else this.$Notice.error({title:this.$t("common.tip"),desc:this.$t("uc.regist.agreementtip")});else console.log("999")})},settime(){this.sendcodeValue=this.$t("uc.regist.resendcode")+this.countdown+")",this.codedisabled=!0;var t=this;let e=setInterval(()=>{t.countdown--,t.sendcodeValue=t.$t("uc.regist.resendcode")+t.countdown+")",this.countdown<=0&&(clearInterval(e),t.codedisabled=!1,t.sendcodeValue=t.$t("uc.regist.sendcode"),t.countdown=60)},1e3)},sendCode(){var t=this.formInline.user;""!=t&&/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(t)?this.initGtCaptcha():this.$Message.error(this.$t("uc.regist.teltip"))},success(){var t={};t.phone=this.formInline.user,t.country="中国";var e=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;e.test(t.phone)&&this.$http.post(this.host+"/uc/mobile/code",t).then(t=>{var e=t.body;0==e.code&&this.$Notice.success({title:this.$t("common.tip"),desc:e.message}),0==e.code&&this.settime(),0!=e.code&&this.$Notice.error({title:this.$t("common.tip"),desc:e.message})}),!e.test(t.phone)&&this.$Notice.error({title:this.$t("common.tip"),desc:this.$t("uc.finance.withdraw.telerr")})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login_form mob-login"},[s("div",{staticClass:"login_right"},[t._m(0),t._v(" "),t.allowRegister?s("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline,inline:""}},[s("FormItem",{staticStyle:{display:"none"},attrs:{prop:"username"}},[s("Input",{attrs:{type:"text",placeholder:t.$t("uc.regist.username")},model:{value:t.formInline.username,callback:function(e){t.$set(t.formInline,"username",e)},expression:"formInline.username"}})],1),t._v(" "),s("FormItem",{attrs:{prop:"user"}},[s("Input",{attrs:{type:"text",placeholder:t.key},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"countryselect",staticStyle:{width:"65px","border-bottom":"1px solid #27313e"},attrs:{slot:"prepend"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.country=e.target.multiple?i:i[0]}},slot:"prepend"},[s("option",{attrs:{value:"America",selected:""}},[t._v("America +1")]),t._v(" "),s("option",{attrs:{value:"Canada"}},[t._v("Canada +1")]),t._v(" "),s("option",{attrs:{value:"Morocco"}},[t._v("Morocco +212")]),t._v(" "),s("option",{attrs:{value:"Algeria"}},[t._v("Algeria +213")]),t._v(" "),s("option",{attrs:{value:"Nigeria"}},[t._v("Nigeria +234")]),t._v(" "),s("option",{attrs:{value:"Madagascar"}},[t._v("Madagascar +261")]),t._v(" "),s("option",{attrs:{value:"SouthAfrica"}},[t._v("South Africa +27")]),t._v(" "),s("option",{attrs:{value:"Greece"}},[t._v("Greece +30")]),t._v(" "),s("option",{attrs:{value:"Netherlands"}},[t._v("Netherlands +31")]),t._v(" "),s("option",{attrs:{value:"France"}},[t._v("France +33")]),t._v(" "),s("option",{attrs:{value:"Spain"}},[t._v("Spain +34")]),t._v(" "),s("option",{attrs:{value:"Portugal"}},[t._v("Portugal +351")]),t._v(" "),s("option",{attrs:{value:"Ireland"}},[t._v("Ireland +353")]),t._v(" "),s("option",{attrs:{value:"Hungary"}},[t._v("Hungary +36")]),t._v(" "),s("option",{attrs:{value:"Belarus"}},[t._v("Belarus +375")]),t._v(" "),s("option",{attrs:{value:"Ukraine"}},[t._v("Ukraine +380")]),t._v(" "),s("option",{attrs:{value:"Italy"}},[t._v("Italy +39")]),t._v(" "),s("option",{attrs:{value:"Romania"}},[t._v("Romania +40")]),t._v(" "),s("option",{attrs:{value:"Swiss"}},[t._v("Swiss +41")]),t._v(" "),s("option",{attrs:{value:"Czech"}},[t._v("Czech +420")]),t._v(" "),s("option",{attrs:{value:"Slovakia"}},[t._v("Slovakia +421")]),t._v(" "),s("option",{attrs:{value:"Austria"}},[t._v("Austria +43")]),t._v(" "),s("option",{attrs:{value:"UK"}},[t._v("UK +44")]),t._v(" "),s("option",{attrs:{value:"Poland"}},[t._v("Poland +48")]),t._v(" "),s("option",{attrs:{value:"Germany"}},[t._v("Germany +49")]),t._v(" "),s("option",{attrs:{value:"Mexico"}},[t._v("Mexico +52")]),t._v(" "),s("option",{attrs:{value:"Argentina"}},[t._v("Argentina +54")]),t._v(" "),s("option",{attrs:{value:"Brazil"}},[t._v("Brazil +55")]),t._v(" "),s("option",{attrs:{value:"Chile"}},[t._v("Chile +56")]),t._v(" "),s("option",{attrs:{value:"Colombia"}},[t._v("Colombia +57")]),t._v(" "),s("option",{attrs:{value:"Malaysia"}},[t._v("Malaysia +60")]),t._v(" "),s("option",{attrs:{value:"Australia"}},[t._v("Australia +61")]),t._v(" "),s("option",{attrs:{value:"Indonesia"}},[t._v("Indonesia +62")]),t._v(" "),s("option",{attrs:{value:"Singapore"}},[t._v("Singapore +65")]),t._v(" "),s("option",{attrs:{value:"Thailand"}},[t._v("Thailand +66")]),t._v(" "),s("option",{attrs:{value:"Russia"}},[t._v("Russia +7")]),t._v(" "),s("option",{attrs:{value:"Japan"}},[t._v("Japan +81")]),t._v(" "),s("option",{attrs:{value:"Korea"}},[t._v("Korea +82")]),t._v(" "),s("option",{attrs:{value:"Vietnam"}},[t._v("Vietnam +84")]),t._v(" "),s("option",{attrs:{value:"China"}},[t._v("China +86")]),t._v(" "),s("option",{attrs:{value:"Hongkong"}},[t._v("Hongkong, China +852")]),t._v(" "),s("option",{attrs:{value:"Taiwan"}},[t._v("Taiwan, China +886")]),t._v(" "),s("option",{attrs:{value:"Turkey"}},[t._v("Turkey +90")]),t._v(" "),s("option",{attrs:{value:"India"}},[t._v("India +91")]),t._v(" "),s("option",{attrs:{value:"Pakistan"}},[t._v("Pakistan +92")]),t._v(" "),s("option",{attrs:{value:"SriLanka"}},[t._v("Sri Lanka +94")]),t._v(" "),s("option",{attrs:{value:"Jordan"}},[t._v("Jordan +962")]),t._v(" "),s("option",{attrs:{value:"SaudiArabia"}},[t._v("Saudi Arabia +966")]),t._v(" "),s("option",{attrs:{value:"Oman"}},[t._v("Oman +968")]),t._v(" "),s("option",{attrs:{value:"UnitedArabEmirates"}},[t._v("United Arab Emirates +971")]),t._v(" "),s("option",{attrs:{value:"EmirateOfDubai"}},[t._v("Emirate Of Dubai +9714")]),t._v(" "),s("option",{attrs:{value:"Iran"}},[t._v("Iran +98")])])])],1),t._v(" "),s("FormItem",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],attrs:{prop:"code"}},[s("Input",{attrs:{type:"text",placeholder:t.$t("uc.regist.smscode")},model:{value:t.formInline.code,callback:function(e){t.$set(t.formInline,"code",e)},expression:"formInline.code"}}),t._v(" "),s("input",{attrs:{id:"sendCode",type:"Button",shape:"circle",disabled:t.codedisabled},domProps:{value:t.sendcodeValue},on:{click:function(e){t.sendCode()}}})],1),t._v(" "),s("FormItem",{staticClass:"password",attrs:{prop:"password"}},[s("Input",{attrs:{type:"password",placeholder:t.$t("uc.regist.pwd")},model:{value:t.formInline.password,callback:function(e){t.$set(t.formInline,"password",e)},expression:"formInline.password"}})],1),t._v(" "),s("FormItem",{staticClass:"password",attrs:{prop:"repassword"}},[s("Input",{attrs:{type:"password",placeholder:t.$t("uc.regist.repwd")},model:{value:t.formInline.repassword,callback:function(e){t.$set(t.formInline,"repassword",e)},expression:"formInline.repassword"}})],1),t._v(" "),s("FormItem",{attrs:{prop:"promotion"}},[s("Input",{attrs:{type:"text",placeholder:t.$t("uc.regist.promotion")},model:{value:t.formInline.promotion,callback:function(e){t.$set(t.formInline,"promotion",e)},expression:"formInline.promotion"}})],1),t._v(" "),s("div",{staticClass:"check-agree"},[s("label",[s("Checkbox",{model:{value:t.agree,callback:function(e){t.agree=e},expression:"agree"}},[t._v(t._s(t.$t("uc.regist.agreement")))])],1),t._v(" "),"简体中文"==t.lang?s("a",{attrs:{href:"/helpdetail?cate=1&id=5&cateTitle=常见问题",target:"_blank"}},[t._v("《"+t._s(t.$t("uc.regist.userprotocol"))+"》")]):t._e(),t._v(" "),"English"==t.lang?s("a",{attrs:{href:"/helpdetail?cate=1&id=35&cateTitle=Privacy Policy",target:"_blank"}},[t._v("《"+t._s(t.$t("uc.regist.userprotocol"))+"》")]):t._e()]),t._v(" "),s("FormItem",[s("Button",{staticClass:"register_btn",attrs:{disabled:t.registing},on:{click:function(e){t.handleSubmit("formInline")}}},[t._v(t._s(t.$t("uc.regist.regist")))])],1)],1):t._e()],1),t._v(" "),s("div",{staticClass:"section",attrs:{id:"page4"}},[s("ul",[s("li",[t._m(1),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.$t("description.title1")))]),t._v(" "),s("p",[t._v(t._s(t.$t("description.message1")))])]),t._v(" "),s("li",[t._m(2),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.$t("description.title2")))]),t._v(" "),s("p",[t._v(t._s(t.$t("description.message2")))])]),t._v(" "),s("li",[t._m(3),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.$t("description.title3")))]),t._v(" "),s("p",[t._v(t._s(t.$t("description.message3")))])]),t._v(" "),s("li",[t._m(4),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.$t("description.title4")))]),t._v(" "),s("p",[t._v(t._s(t.$t("description.message4")))])])])]),t._v(" "),s("div",{staticClass:"app_bottom_reg"},[s("div",{staticClass:"left_logo"},[s("img",{staticStyle:{float:"left"},attrs:{src:i("Rvcu")}}),t._v(" "),s("div",{staticStyle:{float:"left",height:"40px","line-height":"40px",color:"#000"}},[t._v(t._s(t.$t("cms.downloadslogan")))])]),t._v(" "),s("div",{staticClass:"right_btn_wrap"},[s("router-link",{staticClass:"right_btn",attrs:{to:"/"}},[t._v(t._s(t.$t("cms.download")))])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{color:"#F90","margin-bottom":"60px","margin-top":"60px"}},[e("h1",{staticStyle:{"border-left":"5px solid #F90","padding-left":"10px","letter-spacing":"2px","line-height":"30px",height:"30px"}},[this._v("cbdcoincurrency.COM")]),this._v(" "),e("p",{staticStyle:{"padding-left":"15px","letter-spacing":"6px"}},[this._v("Strictly select global high-quality digital assets")]),this._v(" "),e("div",{staticStyle:{"margin-left":"5px","letter-spacing":"2px","margin-top":"10px",color:"rgb(226, 226, 227)","font-size":"13px",padding:"5px 10px"}},[this._v("安全 ● 诚实 ● 公平 ● 热情 ● 开放")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:i("VvE/"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:i("2KGX"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:i("hOmv"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:i("LLQx"),alt:""}})])}]};var a=i("VU/8")(s,r,!1,function(t){i("J4TP"),i("mpod"),i("tCkB")},"data-v-da08a480",null);e.default=a.exports},tCkB:function(t,e){}});