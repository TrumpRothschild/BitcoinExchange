<template>
  <div class="login_form">
    <div class="login_right">
      <Form v-if="allowRegister" ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem style="text-align:center;">
          <ButtonGroup>
            <Button v-for="(list,index) in buttonLists" :key="list.text" :class="{ active:changeActive == index}" @click="actives(index)">{{list.text}}</Button>
          </ButtonGroup>
        </FormItem>
        <FormItem prop="username" style="display:none;">
          <Input type="text" v-model="formInline.username" :placeholder="$t('uc.regist.username')">
          </Input>
        </FormItem>
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" :placeholder="key" v-if="changeActive==0">
            <select v-model="formInline.country" slot="prepend"  class="countryselect">
              <option value="America" selected>America +1</option>
              <option value="Canada">Canada +1</option>
              <option value="Morocco">Morocco +212</option>
              <option value="Algeria">Algeria +213</option>
              <option value="Nigeria">Nigeria +234</option>
              <option value="Madagascar">Madagascar +261</option>
              <option value="SouthAfrica">South Africa +27</option>
              <option value="Greece">Greece +30</option>
              <option value="Netherlands">Netherlands +31</option>
              <option value="France">France +33</option>
              <option value="Spain">Spain +34</option>
              <option value="Portugal">Portugal +351</option>
              <option value="Ireland">Ireland +353</option>
              <option value="Hungary">Hungary +36</option>
              <option value="Belarus">Belarus +375</option>
              <option value="Ukraine">Ukraine +380</option>
              <option value="Italy">Italy +39</option>
              <option value="Romania">Romania +40</option>
              <option value="Swiss">Swiss +41</option>
              <option value="Czech">Czech +420</option>
              <option value="Slovakia">Slovakia +421</option>
              <option value="Austria">Austria +43</option>
              <option value="UK">UK +44</option>
              <option value="Poland">Poland +48</option>
              <option value="Germany">Germany +49</option>
              <option value="Mexico">Mexico +52</option>
              <option value="Argentina">Argentina +54</option>
              <option value="Brazil">Brazil +55</option>
              <option value="Chile">Chile +56</option>
              <option value="Colombia">Colombia +57</option>
              <option value="Malaysia">Malaysia +60</option>
              <option value="Australia">Australia +61</option>
              <option value="Indonesia">Indonesia +62</option>
              <option value="Singapore">Singapore +65</option>
              <option value="Thailand">Thailand +66</option>
              <option value="Russia">Russia +7</option>
              <option value="Japan">Japan +81</option>
              <option value="Korea">Korea +82</option>
              <option value="Vietnam">Vietnam +84</option>
              <option value="China">China +86</option>
              <option value="Hongkong">Hongkong, China +852</option>
              <option value="Taiwan">Taiwan, China +886</option>
              <option value="Turkey">Turkey +90</option>
              <option value="India">India +91</option>
              <option value="Pakistan">Pakistan +92</option>
              <option value="SriLanka">Sri Lanka +94</option>
              <option value="Jordan">Jordan +962</option>
              <option value="SaudiArabia">Saudi Arabia +966</option>
              <option value="Oman">Oman +968</option>
              <option value="UnitedArabEmirates">United Arab Emirates +971</option>
              <option value="EmirateOfDubai">Emirate Of Dubai +9714</option>
              <option value="Iran">Iran +98</option>
            </select>
          </Input>
          <Input type="text" v-model="formInline.user" :placeholder="key" v-if="changeActive==1"></Input>
        </FormItem>

        <FormItem prop="captchacode" class="vcode">
          <Input type="text" v-model="formInline.captchacode" :placeholder="$t('uc.forget.captchacode')">
          </Input>
          <img :src="logimg" @click="chanloimg" class="img-code">
        </FormItem>

        <FormItem prop="code">
          <Input type="text" v-model="formInline.code" :placeholder="$t('uc.regist.smscode')">
          </Input>
          <input id="sendCode" @click="sendCode();" type="Button" shape="circle" :value="sendcodeValue" :disabled='codedisabled'>
        </FormItem>
        <FormItem prop="password"  class="password">
          <Input type="password" v-model="formInline.password" :placeholder="$t('uc.regist.pwd')">
          </Input>
        </FormItem>
        <FormItem prop="repassword"  class="password">
          <Input type="password" v-model="formInline.repassword" :placeholder="$t('uc.regist.repwd')">
          </Input>
        </FormItem>
        <FormItem prop="promotion">
          <Input type="text" v-model="formInline.promotion" :placeholder="$t('uc.regist.promotion')">
          </Input>
        </FormItem>
        <div class="check-agree" style="">
          <label>
            <Checkbox v-model="agree">{{$t('uc.regist.agreement')}}</Checkbox>
          </label>
          <a v-if="lang=='简体中文'" href="/helpdetail?cate=1&id=5&cateTitle=常见问题" target="_blank" style="">《{{$t('uc.regist.userprotocol')}}》</a>
          <a v-if="lang=='English'" href="/helpdetail?cate=1&id=35&cateTitle=Privacy Policy" target="_blank" style="">《{{$t('uc.regist.userprotocol')}}》</a>
        </div>
        <FormItem>
          <Button class="register_btn" @click="handleSubmit('formInline')" :disabled="registing">{{$t('uc.regist.regist')}}</Button>
        </FormItem>
      </Form>
      <Alert v-else type="warning">
        Coming soon!
        <template slot="desc">
          cbdcoincurrency.com will open register soon
        </template>
      </Alert>
    </div>
  </div>
</template>
<style scoped lang="scss">
@media screen and (max-width:768px){
    .login_title{
          font-size:24px!important;
    }

    .ivu-input{
      height:40px!important;
    }
    .login_form{
      background-image:url("../../assets/images/mloginbg.png")!important;
      .login_right{
            padding: 7% 2% !important;
            width: 94% !important;
            left: 3% !important;
            margin-left: 0 !important;
            border: none !important;
            height: auto!important;
            top: 44%!important;
      }
    }

    .login_form .login_right form.ivu-form.ivu-form-label-right.ivu-form-inline .ivu-form-item .ivu-form-item-content #sendCode{
      border-radius:5px!important;
    }
  }

.login_form {
  background: #0b1520 url(../../assets/images/login_bg.png) no-repeat center center;
  height: 760px;
  position: relative;
  overflow: hidden;


  img.img-code {
      position: absolute;
      border: 1px solid #f0ac19;
      background: transparent;
      top: -10px;
      height: 34px;
      outline: none;
      right: 0;
      width: 30%;
      color: #d5851d;
      cursor: pointer;
  }

  .login_right {
    padding: 20px 30px;
    position: absolute;
    background: #17212e;
    width: 350px;
    height: 540px;
    left: 50%;
    top: 50%;
    margin-left: -175px;
    margin-top: -205px;
    border-top: 4px solid #f0ac19;
    border-radius: 5px;
    .tel-title{
      color: #fff;
    }
    form.ivu-form.ivu-form-label-right.ivu-form-inline {
      .ivu-form-item {
        .ivu-form-item-content {
          .register_btn.ivu-btn {
            width: 100%;
            background-color: #f0ac19;
            outline: none;
            border-color: #f0ac19;
            color: #fff;
            border-radius: 5px;
            font-size: 18px;
            margin-top: 20px;
            &:focus {
              -moz-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
              -webkit-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
              box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
            }
          }
          .ivu-input-wrapper.ivu-input-type {
            .ivu-input {
              border: 1px solid red;
            }
          }
          #sendCode {
            position: absolute;
            border: 1px solid #f0ac19;
            background: transparent;
            top: -10px;
            outline: none;
            right: 0;
            width: 30%;
            color: #f0ac19;
            cursor: pointer;
          }
        }
      }
      .check-agree {
        color: #979797;
        display: inline-block;
        line-height: 30px;
        font-size: 12px;
        cursor: default;
        a {
          color: #f0ac19;
          margin-left: -10px;
        }
        .ivu-checkbox-wrapper.ivu-checkbox-wrapper-checked {
          .ivu-checkbox.ivu-checkbox-checked {
            .ivu-checkbox-inner {
              border: 1px solid #f0ac19;
              background-color: #f0ac19;
            }
          }
        }
      }
    }
  }
}

.login_title {
  text-align: center;
  height: 80px;
  font-size: 25px;
}

#captcha {
  width: 100%;
  display: inline-block;
}
.show {
  display: block;
}
.hide {
  display: none;
}
#notice {
  color: red;
}
#wait {
  text-align: left;
  color: #666;
  margin: 0;
}
.tel-title {
  font-size: 25px;
}
.login_left {
  display: none;
}
</style>
<script>
//   import gtInit from '../../assets/js/gt.js';
import $ from "jquery";
export default {
  data() {
    const validateUser = (rule, value, callback) => {
      if (this.changeActive == 0) {
        // var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        var reg = /^[0-9]*$/;
        if (value == "") {
          callback(new Error(this.$t("uc.regist.teltip")));
        } else if (!reg.test(this.formInline.user)) {
          callback(new Error(this.$t("uc.regist.telerr")));
        } else {
          callback();
        }
      } else {
        var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
        if (value == "") {
          callback(new Error(this.$t("uc.regist.emailtip")));
        } else if (!reg.test(this.formInline.user)) {
          callback(new Error(this.$t("uc.regist.emailerr")));
        } else {
          callback();
        }
      }
    };
    const validateRepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("uc.regist.confirmpwdtip")));
      } else if (value !== this.formInline.password) {
        callback(new Error(this.$t("uc.regist.confirmpwderr")));
      } else {
        callback();
      }
    };
    return {
      country: "America",
      codedisabled:false,
      sendcodeValue: this.$t("uc.regist.sendcode"),
      isRegister: false,
      ticket: "",
      randStr: "",
      registing: false,
      captchaObj: null,
      modal1: false,
      _captchaResult: null,
      agree: true,
      allowRegister: true,
      buttonLists: [
        {
          text: this.$t("uc.regist.telregist")
        },
        {
          text: this.$t("uc.regist.emailregist")
        }
      ],
      areas: [],
      changeActive: 0,
      showCode: true,
      countdown: 60,
      logimg: this.host + "/uc/captcha?cid=MEMBER_LOGIN&time="+new Date().getTime(),
      formInline: {
        username: "",
        captchacode:"",
        country: "America",
        user: "",
        code: "",
        areaCode: "",
        password: "",
        repassword: "",
        promotion: ""
      },
      ruleInline: {
        user: [{ validator: validateUser, trigger: "blur" }],
        code: [
          {
            required: true,
            message: this.$t("uc.regist.smscodetip"),
            trigger: "blur"
          }
        ],
        promotion:[
          {
            required: true,
            message: this.$t("uc.regist.promotiontip"),
            trigger: "blur"
          },
        ],
        password: [
          {
            required: true,
            message: this.$t("uc.regist.pwdtip"),
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: this.$t("uc.regist.pwdmsg"),
            trigger: "blur"
          }
        ],
        repassword: [{ validator: validateRepassword, trigger: "blur" }]
      },
      key: "",
      code: ""
    };
  },
  watch: {
    changeActive: function(val) {
      this.$refs["formInline"].resetFields();
      // if (val == 0) this.initGtCaptcha();
    },
    lang: function() {
      this.updateLangData();
    }
  },
  computed: {
    lang: function() {
      return this.$store.state.lang;
    },
    isLogin: function() {
      return this.$store.getters.isLogin;
    }
  },
  created: function() {
    window.scrollTo(0, 0);
    // var oDiv = document.getElementById("example-navbar-collapse");
    // oDiv && (oDiv.className = "navbar-collapse collapse");
    this.init();
    this.actives(this.changeActive);
    if(this.$route.query.code != undefined && this.$route.query.code != "" && this.$route.query.code != null){
        this.formInline.promotion = this.$route.query.code;
    }else{
        this.formInline.promotion = "";
    }
  },
  methods: {
    updateLangData() {
      this.buttonLists = [
        {
          text: this.$t("uc.regist.telregist")
        },
        {
          text: this.$t("uc.regist.emailregist")
        }
      ];

      if (this.changeActive == 0) {
        this.key = this.$t("uc.regist.telno");
      } else {
        this.key = this.$t("uc.regist.email");
      }
    },
    chanloimg() {
      this.logimg = this.host + "/uc/captcha?cid=MEMBER_LOGIN&a=" + Math.random().toFixed(2);
    },
    init() {
      this.$store.commit("navigate", "nav-other");
      this.$store.state.HeaderActiveName = "0";
      if (this.isLogin) {
        this.$router.push("/");
      }
      // this.getAreas();
      // this.initGtCaptcha();
    },
    initGtCaptcha() {
      // 直接生成一个验证码对象
      // var self = this;
      // var captcha1 = new TencentCaptcha("2076680797", function(res) {
      //   res.ret == 0 &&
      //     (self.isRegister = true) &&
      //     (self.ticket = res.ticket) &&
      //     (self.randStr = res.randstr) &&
      //     self.success();
      // });
      // captcha1.show(); // 显示验证码
      this.isRegister = true;
      this.success();
    },
    onAreaChange(value) {
      for (var i = 0; i < this.areas.length; i++) {
        if (this.areas[i].zhName == value) {
          this.formInline.areaCode = this.areas[i].areaCode;
        }
      }
    },
    getAreas() {
      this.$http.post(this.host + this.api.common.area).then(response => {
        var resp = response.body;
        this.areas = resp.data;
        this.formInline.country = this.areas[0].zhName;
        this.formInline.areaCode = this.areas[0].areaCode;
      });
    },
    actives: function(index) {
      this.changeActive = index;
      if (this.changeActive == 0) {
        this.showCode = true;
        this.key = this.$t("uc.regist.telno");
        this.ruleInline.code = [
          {
            required: true,
            message: this.$t("uc.regist.smscodetip"),
            trigger: "blur"
          }
        ];
      } else {
        this.showCode = false;
        this.key = this.$t("uc.regist.email");
        this.ruleInline.code = [];
      }
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          if (this.agree == true) {
            if (this.changeActive == 1) {
              if (this.isRegister) {
                this.registing = true;
                var params = {};
                params["email"] = this.formInline.user;
                params["username"] = this.formInline.user;//this.formInline.username + this.formInline.user;
                params["password"] = this.formInline.password;
                params["promotion"] = this.formInline.promotion; // 邀请码
                params["country"] = this.formInline.country;//"China";
                params["superPartner"] = "";//this.formInline.superType;
                params["code"] = this.formInline.code;
                params["captchacode"] = this.formInline.captchacode;
                params["visitCode"] = this.formInline.visitPassword;

                this.$http
                  .post(this.host + "/uc/register/email", params)
                  .then(response => {
                    this.registing = false;
                    var resp = response.body;
                    if (resp.code == 0) {
                      if (
                        this.formInline.superType == "1" ||
                        this.formInline.superType == "2"
                      ) {
                        this.$Notice.success({
                          title: this.$t("common.tip"),
                          desc: resp.message
                        });
                        var that = this;
                        setTimeout(() => {
                          that.$router.push("/");
                        }, 3000);
                      } else {
                        this.$Notice.success({
                          title: this.$t("common.tip"),
                          desc: resp.message
                        });
                        var that = this;
                        setTimeout(() => {
                          that.$router.push("/login");
                        }, 3000);
                      }
                    } else {
                      this.$Notice.error({
                        title: this.$t("common.tip"),
                        desc: resp.message
                      });
                    }
                  });
              } else {
                this.$Notice.error({
                  title: this.$t("common.tip"),
                  desc: "Register failure"
                });
              }
            } else {
              if (this.isRegister) {
                this.registing = true;
                var params = {};
                params["phone"] = this.formInline.user;
                params["username"] = this.formInline.user;//this.formInline.username + this.formInline.user;
                params["password"] = this.formInline.password;
                params["promotion"] = this.formInline.promotion; // 邀请码
                params["code"] = this.formInline.code;
                params["captchacode"] = this.formInline.captchacode;
                params["country"] = this.formInline.country;//"China";
                params["superPartner"] = "";//this.formInline.superType;
                params["ticket"] = this.ticket;
                params["randStr"] = this.randStr;

                this.$http.post(this.host + "/uc/register/phone", params)
                  .then(response => {
                    this.registing = false;
                    var resp = response.body;
                    if (resp.code == 0) {
                      if (
                        this.formInline.superType == "1" || this.formInline.superType == "2"
                      ) {
                        this.$Notice.success({
                          title: this.$t("common.tip"),
                          desc: "已注册成功!"
                        });
                        var that = this;
                        setTimeout(() => {
                          that.$router.push("/");
                        }, 3000);
                      } else {
                        this.$Notice.success({
                          title: this.$t("common.tip"),
                          desc: resp.message
                        });
                        var that = this;
                        setTimeout(() => {
                          that.$router.push("/login");
                        }, 3000);
                      }
                    } else {
                      this.$Notice.error({
                        title: this.$t("common.tip"),
                        desc: resp.message
                      });
                    }
                  });
              } else {
                this.$Notice.error({
                  title: this.$t("common.tip"),
                  desc: "请输入正确的验证码"
                });
              }
            }
          } else {
            this.$Notice.error({
              title: this.$t("common.tip"),
              desc: this.$t("uc.regist.agreementtip")
            });
          }
        }
      });
    },
    settime() {
      this.sendcodeValue = this.$t("uc.regist.resendcode") + this.countdown + ")";
      this.codedisabled = true;
      var _this = this;
      let timercode = setInterval(() => {
        _this.countdown--;
        _this.sendcodeValue = _this.$t("uc.regist.resendcode") + _this.countdown + ")";
        if (this.countdown <= 0) {
          clearInterval(timercode);
          _this.codedisabled = false;
          _this.sendcodeValue = _this.$t("uc.regist.sendcode");
          _this.countdown = 60;
        }
      }, 1000);
    },
    sendCode() {

        var mobilePhone = this.formInline.user;
        var captchacode = this.formInline.captchacode;

        if (mobilePhone == "") {
          if(this.changeActive == 0) {
            this.$Message.error(this.$t("uc.regist.teltip"));
          }else{
            this.$Message.error(this.$t("uc.regist.emailtip"));
          }
          return;
        } 

        console.log("captchacode",captchacode);

        if (captchacode == "") {
          this.$Message.error(this.$t("uc.forget.captchacodetip"));
          return;
        }
        if (captchacode && mobilePhone) {
            this.initGtCaptcha();
        }
    },
    success() {
      if(this.changeActive == 0){
        var params = {};
        params["phone"] = this.formInline.user;
        params["country"] = this.formInline.country;
        params["captchacode"] = this.formInline.captchacode;
        // var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        this.$http.post(this.host + "/uc/mobile/code", params).then(response => {
              var resp = response.body;
              resp.code == 0 && this.$Notice.success({title: this.$t("common.tip"),desc: resp.message});
              resp.code == 0 && this.settime();
              resp.code != 0 && this.$Notice.error({title: this.$t("common.tip"),desc: resp.message});
        });

        // !reg.test(params["phone"]) &&this.$Notice.error({title: this.$t("common.tip"),desc: this.$t("uc.finance.withdraw.telerr")});
        // this.$Notice.error({title: this.$t("common.tip"),desc: this.$t("uc.finance.withdraw.telerr")});
      }else{
        var params = {};
        params["email"] = this.formInline.user;
        params["captchacode"] = this.formInline.captchacode;

        this.$http.post(this.host + "/uc/register/email/code", params).then(response => {
              var resp = response.body;
              resp.code == 0 && this.$Notice.success({title: this.$t("common.tip"),desc: resp.message});
              resp.code == 0 && this.settime();
              resp.code != 0 && this.$Notice.error({title: this.$t("common.tip"),desc: resp.message});
            });
      }
    }
  }
};
</script>
<style lang="scss">
.login_form {
  .login_right {

    .ivu-select-dropdown-list{
      overflow-y:scroll;
      height: 200px;
    }

    form.ivu-form.ivu-form-label-right.ivu-form-inline {
      text-align:center;
      .ivu-form-item {
        .ivu-form-item-content {
          .ivu-input-wrapper.ivu-input-type {
            .ivu-input {
              border: none;
              border-bottom: 1px solid #27313e;
              font-size: 14px;
              background:transparent;
              border-radius:0;
              // color:#fff;
              &:focus {
                border: none;
                border-bottom: 1px solid #27313e;
                -moz-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
                -webkit-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
                box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
              }
            }
          }
        }
      }
      .check-agree {
        .ivu-checkbox-wrapper {
          .ivu-checkbox-input {
            &:focus {
              border: none;
              outline: none;
              -moz-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
              -webkit-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
              box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
            }
          }
        }
        .ivu-checkbox-wrapper.ivu-checkbox-wrapper-checked {
          .ivu-checkbox.ivu-checkbox-checked {
            .ivu-checkbox-inner {
              border: 1px solid #f0ac19;
              background-color: #f0ac19;
            }
          }

        }
        .ivu-checkbox-wrapper.ivu-checkbox-default{
          .ivu-checkbox{
            .ivu-checkbox-inner{
              background:transparent;
            }
          }
        }
      }
    }
  }
}
</style>
<style>
  .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
    padding-right: 20px;
  }
  .ivu-select-arrow{
    right: 4px;
  }
  .ivu-form-item-error .ivu-input-group-append, .ivu-form-item-error .ivu-input-group-prepend,.ivu-input-group-append, .ivu-input-group-prepend{
    background-color: #17212e;
    border-bottom: 1px solid #27313e;
    border-top:none;
    border-left: none;
    border-right: none;
  }

  .ivu-select-item span:first-child{
    display: inline-block;
    width: 30px;
    text-align: left;
  }
  .ivu-btn-group>.ivu-btn.ivu-btn-default{
    background: transparent!important;
    color: #828ea1;
  }
  .ivu-btn-group>.ivu-btn.active, .ivu-btn-group>.ivu-btn:active, .ivu-btn-group>.ivu-btn:hover{
    border-color: transparent!important;
    color: #f0ac19!important;
  }
  .ivu-btn-group>.ivu-btn:focus{
    box-shadow: none!important;
  }
  .ivu-btn-group>.ivu-btn{
    font-size: 16px;
  }
  .ivu-input-group-append, .ivu-input-group-prepend{
    padding: 0 0!important;
  }

  .countryselect{
    width: 100px;
    overflow-x:hidden;
    overflow-y: scroll;
    border-bottom: 1px solid #27313e;
    outline: none;
    background: none;
    border:none;
    color: #fff;
  }

  .countryselect option{
    color: #333;
  }
</style>
