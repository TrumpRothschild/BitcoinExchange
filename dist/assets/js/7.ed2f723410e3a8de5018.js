webpackJsonp([7],{"5tqO":function(t,e){},"8x7L":function(t,e){},"J+Lg":function(t,e,s){t.exports=s.p+"assets/img/business_service.c9c7119.png"},OL9U:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAABQUlEQVQ4jaXTLUhkURjG8d+Ok0yWRdg1iE3DGmyzuJzu+ll0BTGaBsYoGzTZ7bIsbhEVg6gYhLnBaW4STSImg9YFi+CGuaPXy51x9L7lvM97Hv7nPV8fqtWqPBFCeMqjKJrF32Iu4jOsC3/wHYu5oVEUfcMOPmIdv/JCl7Aa52shhArkgW5grpE3gO+FduIAIda1EMJ80vBW6GecoDfWlxhOm4qJ8eEVYA9O0R3re5RCCI9pYwEDuEZNfWtZ0Y+zBBCmcJdlLuBcfVslXGEy5fkaA7sStZ84atKAAioJ3Y1drMT6EyJ0JDzHnp9RZhSxhhtsJerLGMQXLy/zH8ZaARudwjZ+pOYm0JeqldUvqC0obGK6hfcCv18DpqHUj2CkiXemHWAWFA4xnrHYWR4o7GE0ocvtAmn9TfexgCHcvgX6H7btO+pTku6BAAAAAElFTkSuQmCC"},PAQz:function(t,e,s){t.exports=s.p+"assets/img/business_show.7a96716.png"},X84f:function(t,e,s){t.exports=s.p+"assets/img/business_fee.5e2016a.png"},YsKj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data(){return{noEmpty:"必填",review:this.$t("uc.identity.review"),prepare:this.$t("uc.identity.prepare"),result:this.$t("uc.identity.result"),certified:this.$t("uc.identity.certified"),shenheshibai:this.$t("uc.identity.shenheshibai"),shangjiazhuxiao:this.$t("uc.identity.shangjiazhuxiao"),tijiaoshenqing:this.$t("uc.identity.tijiaoshenqing"),shenheshibai:this.$t("uc.identity.shenheshibai"),passed:this.$t("uc.identity.passed"),placeholder:this.$t("uc.identity.placeholder"),select:this.$t("uc.identity.chosen"),phone:this.$t("uc.identity.phone"),qq:this.$t("uc.identity.qq"),wechat:this.$t("uc.identity.wx"),bizhong:this.$t("uc.identity.bizhong"),shuliang:this.$t("uc.identity.shuliang"),loginmsg:this.$t("common.logintip"),single:!1,value:"",isShowShang:!0,isShowMailt:!1,isShowSubmitted:!1,isShowSuccess:!1,activeStepIndex:0,steps:[this.$t("uc.identity.prepare"),this.$t("uc.identity.review"),this.$t("uc.identity.passed")],certStatus:0,certReason:"",auditCurrency:"",auditText:"",modal_read:!1,modal_return:!1,agreeFrozen:!1,modal_apply:!1,applyBtn:!1,apply_form:{telno:"",wechat:"",qq:"",coinSymbol:"",amount:"",assetData:"",tradeData:""},assetImg:"",tradeImg:"",uploadHeaders:{"x-auth-token":localStorage.getItem("TOKEN")},uploadUrl:this.host+"/uc/upload/oss/image",returnReason:"",refuseReason:""}},methods:{islogin(){let t=this;this.$http.post(this.host+"/uc/approve/security/setting",{}).then(e=>{var s=e.body;0==s.code?null==s.data.realName||""==s.data.realName?(this.$Message.warning(this.$t("otc.publishad.submittip1")),t.$router.push("/uc/safe")):0==s.data.phoneVerified?(this.$Message.warning(this.$t("otc.publishad.submittip2")),t.$router.push("/uc/safe")):0==s.data.fundsVerified&&(this.$Message.warning(this.$t("otc.publishad.submittip3")),t.$router.push("/uc/safe")):this.$Message.error(s.message)})},timer(){setInterval(()=>{this.getSetting()},1e4)},publishAd(){this.$router.push("/uc/ad/create")},returnAdit(){this.modal_return=!0},returnAudit(){var t={};t.detail=this.returnReason,this.$http.post(this.host+"/uc/approve/cancel/business",t).then(t=>{let e=t.body;0==e.code?(this.$Message.success("提交成功!"),this.modal_return=!1,this.getSetting()):this.$Message.error(e.message)})},getAudiCoin(t){for(var e=null,s=0;s<this.auditCurrency.length;s++)if(t==this.auditCurrency[s].coin.unit){e=this.auditCurrency[s];break}return e},onCoinChange(t){var e=this.getAudiCoin(t);null!=e&&(this.apply_form.amount=e.amount)},getSetting(){this.$http.get(this.host+this.api.uc.identification).then(t=>{let e=t.body.data.certifiedBusinessStatus;this.activeStepIndex=e,this.certStatus=e,this.certReason=t.body.data.detail,this.refuseReason=t.body.data.reason}).catch(function(t){})},assetHandleSuccess(t,e,s){this.$refs.upload1.fileList=[s[s.length-1]],this.apply_form.assetData=t.data,this.assetImg=t.data},tradeHandleSuccess(t,e,s){this.$refs.upload2.fileList=[s[s.length-1]],this.apply_form.tradeData=t.data,this.tradeImg=t.data},assetRemove(t,e){this.apply_form.assetData="",this.assetImg=""},tradeRemove(t,e){this.apply_form.tradeData="",this.tradeImg=""},getAuthFound(){this.$http.get(this.host+"/uc/approve/business-auth-deposit/list").then(t=>{var e=t.body;if(0==e.code){this.auditCurrency=e.data;for(var s="",i=0;i<e.data.length;i++)0==i&&(this.apply_form.coinSymbol=e.data[i].coin.unit,this.apply_form.amount=e.data[i].amount),s+=e.data[i].amount+"个"+e.data[i].coin.unit,i<e.data.length-1&&(s+="或");this.auditText=s}})},apply(){0!=this.single?this.modal_read=!0:this.$Message.warning(this.$t("uc.identity.approve"))},apply2(){if(0==this.agreeFrozen)return"English"!=this.$store.state.lang&&this.$Message.warning("请同意冻结相应数量的币"),void("English"==this.$store.state.lang&&this.$Message.warning("Please agree to freeze the corresponding amount of currency"));this.modal_read=!1,this.modal_apply=!0},apply3(t){if(""==this.apply_form.telno)return"English"!=this.$store.state.lang&&this.$Message.error("请填写手机号"),void("English"==this.$store.state.lang&&this.$Message.error("Please fill in your cell phone number"));if(""==this.apply_form.wechat)return"English"!=this.$store.state.lang&&this.$Message.error("请填写微信号"),void("English"==this.$store.state.lang&&this.$Message.error("Please fill in your cell wechat number"));if(""==this.apply_form.qq)return"English"!=this.$store.state.lang&&this.$Message.error("请填写qq号"),void("English"==this.$store.state.lang&&this.$Message.error("Please fill in your cell qq number"));if(""==this.apply_form.assetData)return"English"!=this.$store.state.lang&&this.$Message.error("请上传资产证明"),void("English"==this.$store.state.lang&&this.$Message.error("Please upload the asset certificate"));if(""==this.apply_form.tradeData)return"English"!=this.$store.state.lang&&this.$Message.error("请上传交易证明"),void("English"==this.$store.state.lang&&this.$Message.error("Please upload the transaction certificate"));var e={};e.businessAuthDepositId=this.getAudiCoin(this.apply_form.coinSymbol).id,e.json=JSON.stringify(this.apply_form),this.$http.post(this.host+"/uc/approve/certified/business/apply",e).then(t=>{var e=t.body;0==e.code?(this.$Message.success("提交成功!"),this.modal_apply=!1,this.certStatus=1):this.$Message.error(e.message)})}},created(){this.islogin(),this.getSetting(),this.getAuthFound()},computed:{lang:function(){return this.$store.state.lang}},watch:{lang:function(){this.prepare=this.$t("uc.identity.prepare"),this.review=this.$t("uc.identity.review"),this.result=this.$t("uc.identity.result"),this.certified=this.$t("uc.identity.certified"),this.shenheshibai=this.$t("uc.identity.shenheshibai"),this.shangjiazhuxiao=this.$t("uc.identity.shangjiazhuxiao"),this.tijiaoshenqing=this.$t("uc.identity.tijiaoshenqing"),this.shenheshibai=this.$t("uc.identity.shenheshibai"),this.passed=this.$t("uc.identity.passed"),this.phone=this.$t("uc.identity.phone"),this.qq=this.$t("uc.identity.qq"),this.wechat=this.$t("uc.identity.wx"),this.bizhong=this.$t("uc.identity.bizhong"),this.shuliang=this.$t("uc.identity.shuliang")}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"identbusiness",staticStyle:{padding:"81px","padding-top":"80px"}},[i("div",{staticClass:"content"},[i("div",{staticStyle:{width:"80%",margin:"0 auto","margin-bottom":"60px"}},[0===t.certStatus?i("div",{staticClass:"ident-title"},[i("h3",[t._v(t._s(t.$t("uc.identity.apply")))]),t._v(" "),i("p",{staticStyle:{"font-size":"14px","margin-top":"10px"}})]):1==t.certStatus?i("div",{staticClass:"ident-title"},[i("h3",[t._v(t._s(t.$t("uc.identity.tijiao")))])]):2==t.certStatus?i("div",{staticClass:"ident-title"},[i("h3",[t._v(t._s(t.$t("uc.identity.tijiaosuc")))])]):3==t.certStatus?i("div",{staticClass:"ident-title"},[i("h3",[t._v(t._s(t.$t("uc.identity.tijiaofail")))])]):5==t.certStatus?i("div",{staticClass:"ident-title"},[i("h3",[t._v(t._s(t.$t("uc.identity.zhuxiaotijiao")))])]):6==t.certStatus?i("div",{staticClass:"ident-title"},[i("h3",[t._v(t._s(t.$t("uc.identity.shenhefail")))])]):7==t.certStatus?i("div",{staticClass:"ident-title"},[i("h3",[t._v(t._s(t.$t("uc.identity.shenhesuc")))])]):t._e(),t._v(" "),0!=t.certStatus&&5!=t.certStatus&&6!=t.certStatus&&7!=t.certStatus?i("Steps",{staticClass:"apply-step",attrs:{current:2==t.certStatus?3:3==t.certStatus?2:t.certStatus,status:3==t.certStatus?"error":"finish"}},[i("Step",{attrs:{title:t.prepare}}),t._v(" "),i("Step",{attrs:{title:t.review}}),t._v(" "),i("Step",{attrs:{title:1==t.certStatus||0==t.certStatus?t.result:2==t.certStatus?t.certified:t.shenheshibai}})],1):t._e(),t._v(" "),5==t.certStatus||6==t.certStatus||7==t.certStatus?i("Steps",{staticClass:"apply-step",attrs:{current:5==t.certStatus?1:6==t.certStatus?2:3,status:6==t.certStatus?"error":"finish"}},[i("Step",{attrs:{title:t.shangjiazhuxiao}}),t._v(" "),i("Step",{attrs:{title:t.tijiaoshenqing}}),t._v(" "),i("Step",{attrs:{title:5==t.certStatus?t.result:6==t.certStatus?t.shenheshibai:t.passed}})],1):t._e(),t._v(" "),6==t.certStatus?i("div",{staticStyle:{width:"500px",margin:"0 auto","text-align":"center"}},[i("Button",{staticStyle:{width:"120px",background:"#f0ac19","border-color":"#f0ac19"},attrs:{type:"warning",long:"",size:"large"},on:{click:function(e){t.modal_return=!0}}},[t._v(t._s(t.$t("uc.identity.shenagain")))]),t._v(" "),i("div",{staticClass:"fail-reason",staticStyle:{"margin-top":"50px","font-size":"16px"}},[i("Icon",{attrs:{type:"md-alert",color:"red",size:"16"}}),t._v(" "),i("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.$t("uc.identity.yuanyin"))+"："+t._s(t.refuseReason))])],1)],1):t._e(),t._v(" "),7==t.certStatus?i("div",{staticStyle:{width:"500px",margin:"0 auto","text-align":"center"}},[i("Button",{staticStyle:{width:"120px",background:"#f0ac19","border-color":"#f0ac19"},attrs:{type:"warning",long:"",size:"large"},on:{click:function(e){t.modal_read=!0}}},[t._v(t._s(t.$t("uc.identity.sheqinggain")))])],1):t._e(),t._v(" "),3==t.certStatus?i("div",{staticStyle:{width:"500px",margin:"0 auto","text-align":"center"}},[i("Button",{staticStyle:{width:"120px",background:"#f0ac19","border-color":"#f0ac19"},attrs:{type:"warning",long:"",size:"large"},on:{click:function(e){t.modal_read=!0}}},[t._v(t._s(t.$t("uc.identity.shenagain")))]),t._v(" "),i("div",{staticClass:"fail-reason",staticStyle:{"margin-top":"50px","font-size":"16px"}},[i("Icon",{attrs:{type:"md-alert",color:"red",size:"16"}}),t._v(" "),i("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.$t("uc.identity.reason"))+"："+t._s(t.certReason))])],1)],1):2==t.certStatus?i("div",{staticStyle:{width:"500px",margin:"0 auto","text-align":"center"}},[i("Button",{staticStyle:{width:"120px",background:"#f0ac19","border-color":"#f0ac19"},attrs:{type:"warning",long:"",size:"large"},on:{click:t.publishAd}},[t._v(t._s(t.$t("nav.fabu")))]),t._v(" "),i("div",{staticStyle:{"margin-top":"30px","font-size":"16px","text-align":"center"}},[i("a",{staticStyle:{color:"#aaa"},on:{click:t.returnAdit}},[t._v(t._s(t.$t("uc.identity.shenqingtuibao")))])])],1):t._e()],1),t._v(" "),i("div",{staticClass:"ipshang",class:0!=t.certStatus?"applying":""},[3==t.certStatus?i("div",{staticClass:"ident-title"},[i("h3",{staticStyle:{"font-size":"20px"}},[t._v(t._s(t.$t("uc.identity.apply")))]),t._v(" "),i("p",{staticStyle:{"font-size":"14px","margin-top":"10px"}},[t._v(" "+t._s(t.$t("uc.identity.become")))])]):2==t.certStatus?i("div",{staticClass:"ident-title"},[i("h3",[t._v(t._s(t.$t("uc.identity.getquan")))])]):t._e(),t._v(" "),i("Row",{staticStyle:{"margin-top":"40px"}},[i("Col",{attrs:{span:"8"}},[i("div",{staticClass:"business-function"},[i("img",{attrs:{alt:"",src:s("PAQz"),width:"300px"}}),t._v(" "),i("p",{staticStyle:{padding:"20px 0","font-weight":"600","font-size":"18px"}},[t._v(t._s(t.$t("uc.identity.seat")))]),t._v(" "),i("span",{staticStyle:{"font-size":"14px",overflow:"hidden","text-overflow":"ellipsis",display:"block","white-space":"nowrap",color:"#999"}},[t._v(t._s(t.$t("uc.identity.zhusnhu")))])])]),t._v(" "),i("Col",{attrs:{span:"8"}},[i("div",{staticClass:"business-function"},[i("img",{attrs:{alt:"",src:s("J+Lg"),width:"300px"}}),t._v(" "),i("p",{staticStyle:{padding:"20px 0","font-weight":"600","font-size":"18px"}},[t._v(t._s(t.$t("uc.identity.service")))]),t._v(" "),i("span",{staticStyle:{"font-size":"14px",color:"#999"}},[t._v(t._s(t.$t("uc.identity.service")))])])]),t._v(" "),i("Col",{attrs:{span:"8"}},[i("div",{staticClass:"business-function"},[i("img",{attrs:{alt:"",src:s("X84f"),width:"300px"}}),t._v(" "),i("p",{staticStyle:{padding:"20px 0","font-weight":"600","font-size":"18px"}},[t._v(t._s(t.$t("uc.identity.lowfee")))]),t._v(" "),i("span",{staticStyle:{"font-size":"14px",color:"#999"}},[t._v(t._s(t.$t("uc.identity.lowfee")))])])])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.certStatus,expression:"certStatus === 0"}],staticStyle:{"text-align":"center","font-size":"16px","margin-top":"50px"}},[i("Checkbox",{model:{value:t.single,callback:function(e){t.single=e},expression:"single"}}),t._v(" "),i("span",[t._v(t._s(t.$t("uc.identity.read")))]),t._v(" "),i("router-link",{staticClass:"cur",staticStyle:{color:"#f0a70a"},attrs:{target:"_blank",to:"/helpdetail?cate=1&id=11&cateTitle=常见问题"}},[t._v(t._s(t.$t("uc.identity.agreement")))])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.certStatus,expression:"certStatus === 0"}],staticClass:"sq"},[i("Button",{staticStyle:{background:"#f0a70a",color:"#fff",outline:"none"},on:{click:t.apply}},[t._v(t._s(t.$t("uc.identity.lijishenqing")))])],1)],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMailt,expression:"isShowMailt"}],staticClass:"mail"},[i("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"Enter something..."},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),i("br"),t._v(" "),i("Input",{staticStyle:{width:"202px"},attrs:{placeholder:"Enter something..."},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),i("Button",{attrs:{type:"info"}},[t._v(t._s(t.$t("uc.identity.sendcode")))]),i("br"),t._v(" "),i("Button",{staticStyle:{"margin-top":"25px",width:"297px"},attrs:{type:"info"}},[t._v(t._s(t.$t("uc.identity.confirm")))])],1)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.activeStepIndex,expression:"activeStepIndex === 1"}],staticClass:"submittedAudit"},[i("img",{attrs:{src:s("OL9U"),alt:""}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:2===t.activeStepIndex,expression:"activeStepIndex === 2"}],staticClass:"auditSuccess"},[i("img",{attrs:{src:s("OL9U"),alt:""}})]),t._v(" "),i("Modal",{model:{value:t.modal_read,callback:function(e){t.modal_read=e},expression:"modal_read"}},[i("p",{attrs:{slot:"header"},slot:"header"},[i("span",{staticClass:"tit"},[t._v(t._s(t.$t("uc.identity.second.line")))])]),t._v(" "),i("div",{staticClass:"apply-note"},[i("h3",{staticStyle:{"padding-top":"10px"}},[t._v(t._s(t.$t("uc.identity.second.step1")))]),t._v(" "),i("p",[t._v(t._s(t.$t("uc.identity.second.step1c1"))),i("br"),t._v(t._s(t.$t("uc.identity.second.step1c2")))]),t._v(" "),i("h3",[t._v(t._s(t.$t("uc.identity.second.step2")))]),t._v(" "),i("p",[t._v(t._s(t.$t("uc.identity.second.step2c")))]),t._v(" "),i("h3",[t._v(t._s(t.$t("uc.identity.second.step3")))]),t._v(" "),i("p",[t._v(t._s(t.$t("uc.identity.second.stepc")))]),t._v(" "),i("div",{staticStyle:{"text-align":"left",padding:"30px 0"}},[i("Checkbox",{model:{value:t.agreeFrozen,callback:function(e){t.agreeFrozen=e},expression:"agreeFrozen"}}),t._v(" "+t._s(t.$t("uc.identity.second.agree"))+"\n        "),i("span",[i("font",{attrs:{color:"#f0a70a"}},[t._v(t._s(t.auditText))]),t._v(t._s(t.$t("uc.identity.second.agreec")))],1)],1),t._v(" "),i("Button",{staticStyle:{"font-size":"16px",background:"#f0a70a",color:"#fff",border:"1px solid #f0a70a"},attrs:{long:""},on:{click:t.apply2}},[t._v(t._s(t.$t("uc.identity.second.shenqingchngweishangjia")))])],1),t._v(" "),i("p",{attrs:{slot:"footer"},slot:"footer"})]),t._v(" "),i("Modal",{model:{value:t.modal_apply,callback:function(e){t.modal_apply=e},expression:"modal_apply"}},[i("p",{attrs:{slot:"header"},slot:"header"}),t._v(" "),i("div",{staticClass:"apply-content"},[i("div",{staticClass:"apply-title"},[i("h3",[t._v(t._s(t.$t("uc.identity.tijiaoziliao")))]),t._v(" "),i("p",[t._v(t._s(t.$t("uc.identity.place")))])]),t._v(" "),i("Form",{staticClass:"apply-form",attrs:{model:t.apply_form,"label-position":"top"}},[i("FormItem",{attrs:{label:t.phone}},[i("Input",{attrs:{type:"text",placeholder:t.noEmpty},model:{value:t.apply_form.telno,callback:function(e){t.$set(t.apply_form,"telno",e)},expression:"apply_form.telno"}})],1),t._v(" "),i("FormItem",{attrs:{label:t.wechat}},[i("Input",{attrs:{type:"text",placeholder:t.noEmpty},model:{value:t.apply_form.wechat,callback:function(e){t.$set(t.apply_form,"wechat",e)},expression:"apply_form.wechat"}})],1),t._v(" "),i("FormItem",{attrs:{label:t.qq}},[i("Input",{attrs:{type:"text",placeholder:t.noEmpty},model:{value:t.apply_form.qq,callback:function(e){t.$set(t.apply_form,"qq",e)},expression:"apply_form.qq"}})],1),t._v(" "),i("Row",[i("Col",{attrs:{span:"8"}},[i("FormItem",{attrs:{label:t.bizhong}},[i("Select",{attrs:{placeholder:t.select},on:{"on-change":t.onCoinChange},model:{value:t.apply_form.coinSymbol,callback:function(e){t.$set(t.apply_form,"coinSymbol",e)},expression:"apply_form.coinSymbol"}},t._l(t.auditCurrency,function(t,e){return i("Option",{key:e,attrs:{value:t.coin.unit}})}))],1)],1),t._v(" "),i("Col",{attrs:{span:"8"}},[i("span",[t._v(" ")])]),t._v(" "),i("Col",{attrs:{span:"8"}},[i("FormItem",{attrs:{label:t.shuliang}},[i("Label",{model:{value:t.apply_form.amount,callback:function(e){t.$set(t.apply_form,"amount",e)},expression:"apply_form.amount"}},[t._v(t._s(t.apply_form.amount))])],1)],1)],1),t._v(" "),i("Row",[i("Col",{attrs:{span:"8"}},[i("Upload",{ref:"upload1",attrs:{type:"drag","on-success":t.assetHandleSuccess,headers:t.uploadHeaders,action:t.uploadUrl,"on-remove":t.assetRemove}},[i("span",{staticStyle:{"line-height":"100px","font-size":"50px",color:"#ccc"}},[t._v("+")]),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:t.assetImg,expression:"assetImg"}],staticClass:"previewImg",attrs:{src:t.assetImg}})]),t._v(" "),i("span",[t._v(t._s(t.$t("uc.identity.gerenzichan")))])],1),t._v(" "),i("Col",{attrs:{span:"8"}},[i("span",[t._v(" ")])]),t._v(" "),i("Col",{attrs:{span:"8"}},[i("Upload",{ref:"upload2",attrs:{type:"drag","on-success":t.tradeHandleSuccess,headers:t.uploadHeaders,action:t.uploadUrl,"on-remove":t.tradeRemove}},[i("span",{staticStyle:{"line-height":"100px","font-size":"50px",color:"#ccc"}},[t._v("+")]),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:t.tradeImg,expression:"tradeImg"}],staticClass:"previewImg",attrs:{src:t.tradeImg}})]),t._v(" "),i("span",[t._v(t._s(t.$t("uc.identity.shuzizichan")))])],1)],1),t._v(" "),i("FormItem",{staticStyle:{"margin-top":"20px"}},[i("Button",{staticStyle:{width:"100%",background:"#f0a70a",color:"#fff",border:"1px solid #f0a70a"},attrs:{type:"info",disabled:t.applyBtn},on:{click:function(e){t.apply3("apply_form")}}},[t._v(t._s(t.$t("uc.identity.lijishenqing")))])],1)],1)],1),t._v(" "),i("p",{attrs:{slot:"footer"},slot:"footer"})]),t._v(" "),i("Modal",{on:{"on-ok":t.returnAudit},model:{value:t.modal_return,callback:function(e){t.modal_return=e},expression:"modal_return"}},[i("p",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("uc.identity.tips")))]),t._v(" "),i("p",{staticStyle:{"text-align":"center","font-size":"14px"}},[t._v(t._s(t.$t("uc.identity.wufachexiao")))]),t._v(" "),i("p",{staticStyle:{"text-align":"center","font-size":"14px"}},[t._v(t._s(t.$t("uc.identity.suredo")))]),t._v(" "),i("Input",{attrs:{type:"textarea",placeholder:t.placeholder,rows:4},model:{value:t.returnReason,callback:function(e){t.returnReason=e},expression:"returnReason"}})],1)],1)},staticRenderFns:[]};var n=s("VU/8")(i,a,!1,function(t){s("8x7L"),s("ttDE"),s("5tqO")},"data-v-308e704c",null);e.default=n.exports},ttDE:function(t,e){}});