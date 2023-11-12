<template>
  <div class="login_form">
    <div class="login_right">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem style="text-align:center;">
          <ButtonGroup>
		<div class="tel-title">{{$t('uc.forget.title')}}</div>
          </ButtonGroup>
        </FormItem>
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" :placeholder="$t('uc.login.usertip')">
          </Input>
        </FormItem>

        <FormItem prop="captchacode" class="vcode">
          <Input type="text" v-model="formInline.captchacode" :placeholder="$t('uc.forget.captchacode')">
          </Input>
          <img :src="logimg" @click="chanloimg" class="img-code"></img>
        </FormItem>

        <FormItem prop="code">
          <Input type="text" v-model="formInline.code" :placeholder="$t('uc.forget.smscode')">
          </Input>
          <input id="sendCode" @click="sendCode()"  type="Button" :value="sendcodeValue" :disabled="codedisabled"></input>
        </FormItem>
        <FormItem prop="password" class="password">
          <Input type="password" v-model="formInline.password" :placeholder="$t('uc.forget.newpwd')">
          </Input>
        </FormItem>
        <FormItem prop="repassword"  class="password">
          <Input type="password" v-model="formInline.repassword" :placeholder="$t('uc.forget.confirmpwd')">
          </Input>
        </FormItem>
        <FormItem>
          <Button class="login_btn" @click="handleSubmit('formInline')">{{$t('uc.forget.save')}}</Button>
        </FormItem>
      </Form>
    </div>
    <Modal v-model="modal1" :mask-closable="false">
      <p slot="header" style="text-align:center">{{$t('uc.regist.modaltitle')}}</p>
      <div style="text-align:center">
        <div>
          <div id="captcha">
            <p id="wait" class="show">{{$t('uc.login.validatecodeload')}}......</p>
          </div>
        </div>
        <p id="notice" class="hide">{{$t('uc.login.validatemsg')}}</p>
      </div>
      <p slot="footer"></p>
    </Modal>
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

    .login_form .login_right form.ivu-form.ivu-form-label-right.ivu-form-inline .ivu-form-item .ivu-form-item-content #sendCode,.login_form img.img-code{
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
    height: auto;
    left: 50%;
    top: 50%;
    margin-left: -175px;
    margin-top: -205px;
    border-radius: 5px;
    border-top: 4px solid #f0ac19;
    .tel-title{
      font-size:25px;
      color: #fff;
    }
    form.ivu-form.ivu-form-label-right.ivu-form-inline {
      .ivu-form-item {
        .ivu-form-item-content {
          .login_btn.ivu-btn {
            width: 100%;
            outline: none;
            font-size:18px;
            border-radius: 30px;
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
            color: #d5851d;
            cursor: pointer;
          }
        }
      }
    }
  }
}
/* 验证码 */
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
.ivu-btn-group>.ivu-btn.active, .ivu-btn-group>.ivu-btn:active, .ivu-btn-group>.ivu-btn:hover{
  background: transparent!important;
  border-color: transparent!important;
  color: #f0ac19!important;
}
.ivu-btn-group>.ivu-btn:focus{
  box-shadow: none!important;
}
.ivu-btn-group>.ivu-btn.ivu-btn-default{
  background: transparent!important;
  color: #828ea1;
}
.ivu-btn-group>.ivu-btn{
  font-size: 16px;
}
</style>
<script>
// const mobilereg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/, 
const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
import gtInit from "../../assets/js/gt.js";
import $ from "jquery";
export default {
  data() {
    const validateUser = (rule, value, callback) => {
      if (this.changeActive == 0) {
        var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
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
        callback(new Error(this.$t("uc.forget.pwdvalidate1")));
      } else if (value !== this.formInline.password) {
        callback(new Error(this.$t("uc.forget.pwdvalidate2")));
      } else {
        callback();
      }
    };
    return {
      codedisabled:false,
      sendcodeValue: this.$t("uc.regist.sendcode"),
      captchaObj: null,
      modal1: false,
      _captchaResult: null,
      buttonLists: [
        {
          text: this.$t("uc.forget.resettelpwd")
        },
        {
          text: this.$t("uc.forget.resetemailpwd")
        }
      ],
      changeActive: 0,
      countdown: 60,
      logimg: this.host + "/uc/captcha?cid=MEMBER_LOGIN",
      formInline: {
        user: "",
        captchacode:"",
        code: "",
        password: "",
        repassword: ""
      },
      ruleInline: {
        // user: [{ validator: validateUser, trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [
          {
            required: true,
            message: this.$t("uc.forget.newpwdtip"),
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: this.$t("uc.forget.pwdvalidate3"),
            trigger: "blur"
          }
        ],
        repassword: [
          { validator: validateRepassword, trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: this.$t("uc.forget.pwdvalidate3"),
            trigger: "blur"
          }
        ]
      },
      key: "",
      code: ""
    };
  },
  watch: {
    changeActive: function(val) {
      this.$refs["formInline"].resetFields();
      // if (val == 0) this.initGtCaptcha();
    }
  },
  created: function() {
    this.init();
    // this.actives(this.changeActive);
  },
  computed: {
    isLogin: function() {
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    chanloimg() {
      this.logimg = this.host + "/uc/captcha?cid=MEMBER_LOGIN&a=" + Math.random().toFixed(2);
    },
    init() {
      if (this.isLogin) {
        this.$router.push("/");
      } else {
        this.$store.state.HeaderActiveName = "1-4";
      }
    },
    // actives: function(index) {
    //   this.changeActive = index;
    //   if (this.changeActive == 0) {
    //     this.key = this.$t("uc.forget.telno");
    //     this.code = this.$t("uc.forget.smscode");
    //     this.ruleInline.user[0].message = this.$t("uc.forget.teltip");
    //     this.ruleInline.code[0].message = this.$t("uc.forget.smscodetip");
    //   } else {
    //     this.key = this.$t("uc.forget.email");
    //     this.code = this.$t("uc.forget.emailcode");
    //     this.ruleInline.user[0].message = this.$t("uc.forget.emailtip");
    //     this.ruleInline.code[0].message = this.$t("uc.forget.emailcodetip");
    //   }
    // },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          if (emailReg.test(this.formInline.user)) {
            var params = {};
            params["account"] = this.formInline.user;
            params["code"] = this.formInline.code;
            params["mode"] = 1;
            params["password"] = this.formInline.password;
            params["captchacode"] = this.formInline.captchacode;

            this.$http
              .post(this.host + "/uc/reset/login/password", params)
              .then(response => {
                this.countdown = 60;
                var resp = response.body;
                if (resp.code == 0) {
                  this.$Notice.success({
                    title: this.$t("common.tip"),
                    desc: resp.message
                  });
                  this.$router.push("/login");
                } else {
                  this.$Notice.error({
                    title: this.$t("common.tip"),
                    desc: resp.message
                  });
                }
              });
          } else {
            var params = {};
            params["account"] = this.formInline.user;
            params["code"] = this.formInline.code;
            params["mode"] = 0;
            params["password"] = this.formInline.password;
            params["captchacode"] = this.formInline.captchacode;

            this.$http
              .post(this.host + "/uc/reset/login/password", params)
              .then(response => {
                var resp = response.body;
                if (resp.code == 0) {
                  this.$Notice.success({
                    title: this.$t("common.tip"),
                    desc:'重置成功'
                  });
                  this.$router.push("/login");
                } else {
                  this.$Notice.error({
                    title: this.$t("common.tip"),
                    desc: resp.message
                  });
                }
              });
          }
          // this.$Message.success(this.$t('uc.forget.resetpwdsuccess'));
        } else {
        }
      });
    },
    settime() {
      this.sendcodeValue = this.countdown;
      this.codedisabled = true;
      let timercode = setInterval(() => {
        this.countdown--;
        this.sendcodeValue = this.countdown;
        if (this.countdown <= 0) {
          clearInterval(timercode);
          this.codedisabled = false;
          this.sendcodeValue = this.$t("uc.regist.sendcode");
          this.countdown = 60;
        }
      }, 1000);
    },
    sendCode() {
      this.settime();
      var mobilePhone = this.formInline.user;
      var captchacode = this.formInline.captchacode;
      if (mobilePhone == "" ) {
        this.countdown = 0;
        this.$Notice.error({
          title: this.$t("common.tip"),
          desc: this.$t("uc.login.usertip"),
        });
      }else if (captchacode == "") {
        this.countdown = 0;
        this.$Notice.error({
          title: this.$t("common.tip"),
          desc: this.$t("uc.forget.captchacodetip"),
        });
      }else{
        if (emailReg.test(this.formInline.user)) {
          this.emailReset();
        }else{
          this.smsReset();
        }
      }
    },
    smsReset() {
      if(!this.formInline.user){
          this.$Notice.error({desc:this.$t("common.telnotip")});
          return;
      }
      if(!this.formInline.captchacode){
          this.$Notice.error({desc:this.$t("uc.forget.captchacodetip")});
          return;
      }
      let params = {};
      params["account"] = this.formInline.user;
      params["country"] = this.formInline.country;
      params["captchacode"] = this.formInline.captchacode;

      this.codedisabled = true;

      this.$http.post(this.host + "/uc/mobile/reset/code", params)
        .then((response) => {
          let resp = response.body;
          resp.code == 0 && this.$Notice.success({desc:resp.message});
          resp.code == 0 && this.settime();
          resp.code != 0 && this.$Notice.error({desc:resp.message});
        });
    },
    emailReset() {
      if(!this.formInline.user){
        this.$Notice.error({desc:this.$t("common.emailtip")});
        return;
      }
      if(!this.formInline.captchacode){
          this.$Notice.error({desc:this.$t("common.captchacodetip")});
          return;
      }
      this.modal1 = false;
      let params = {};
      params["account"] = this.formInline.user;
      params["country"] = this.formInline.country;
      params["captchacode"] = this.formInline.captchacode;

      this.codedisabled = true;
      this.$http.post(this.host + "/uc/reset/email/code", params)
        .then((response) => {
          this.countdown = 60;
          var resp = response.body;
          resp.code == 0 && this.$Notice.success({desc:resp.message});
          resp.code == 0 && this.settime();
          resp.code != 0 && this.$Notice.error({desc:resp.message});
        });
    },
  }
};
</script>
<style lang="scss">
.login_form {
  .login_right {
    form.ivu-form.ivu-form-label-right.ivu-form-inline {
      .ivu-form-item {
        .ivu-form-item-content {
          .ivu-input-wrapper.ivu-input-type {
            .ivu-input {
              border: none;
              border-bottom: 1px solid #27313e;
              font-size:14px;
              background:transparent;
              border-radius:0;
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
    }
  }
}
</style>
