<template>
  <div class="nav-rights">
    <div class="nav-right">
      <div class="bill_box_address">
        <section class="trade-group merchant-tops" v-if="!this.$store.state.ismobile">
          <h1 class="tips-word1">{{$t('uc.finance.withdraw.withdrawcode')}}</h1>
        </section>
        <section>
          <div  :class='[this.$store.state.ismobile?"tableMoblie":"table-inner"]'>
            <div class="action-inner">
              <div class="inner-left">
                <p class="describe">{{$t('uc.finance.withdraw.symbol')+`${this.$store.state.ismobile?':':''}`}}</p>
                <Select v-model="coinType" style="width:100px;margin-top: 10px;" size="large"  v-if="!this.$store.state.ismobile">
                  <Option v-for="item in coinList" :value="item" :key="item">{{ item }}</Option>
                </Select>
                <Select v-model="coinType" style="margin-top: 0px;height:42px" size="large" v-else>
                  <Option v-for="item in coinList" :value="item" :key="item">{{ item }}</Option>
                </Select>
              </div>
              <div class="inner-box deposit-address mt25">
                <p class="describe">{{$t('uc.finance.withdraw.num')+`${this.$store.state.ismobile?':':''}`}}</p>
                <div class="title">
                  <div class="input-group" style="margin-top:0px;position:relative;"  v-if="this.$store.state.ismobile">
                    <InputNumber v-model="withdrawAmount" :placeholder="$t('uc.finance.withdraw.numtip1')" size="large" style="width:100%;height:42px"></InputNumber>
                    <span class="input-group-addon addon-tag uppercase">{{coinType}}</span>
                  </div>
                  <div class="input-group" style="margin-top:10px;position:relative;" v-else>
                    <InputNumber v-model="withdrawAmount" :placeholder="$t('uc.finance.withdraw.numtip1')" size="large" style="width:100%;"></InputNumber>
                    <span class="input-group-addon addon-tag uppercase">{{coinType}}</span>
                  </div>
                </div>
              </div>
              <div class="mt25 mtTitle">
                <p class="describe" v-if="!this.$store.state.ismobile">&nbsp;</p>
                <div class="title">
                  <Button id="withdrawCodeSubmit" @click='generate' size="large" style="color:#fff;background:#f0a70a;border:1px solid #f0a70a;margin-top:10px;">{{$t('uc.finance.withdraw.generateCode')}}</Button>
                </div>
              </div>
            </div>
              <p class="actionMobliep" v-if="this.$store.state.ismobile">{{$t('uc.finance.withdraw.withdrawcodelist')}}</p>
            <div :class='[this.$store.state.ismobile?"actionMoblie":"action-content"]'>
              <div class="action-body">
                <p class="acb-p1 describe" v-if="!this.$store.state.ismobile">{{$t('uc.finance.withdraw.withdrawcodelist')}}</p>
                <div class="order-table">

                    <div class="actionMoblieBox">
                  <div class="actionMoblieTable">
                    <Table :columns="tableColumnsWithdrawRecord" :data="dataWithdrawCodeList" :disabled-hover="true"></Table>
                  </div>
                    </div>
                  <div style="margin: 10px;overflow: hidden">
                    <div style="float: right;">
                      <Page :total="dataCount" :current="1" @on-change="changePage" :loading="loading" class="recharge_btn"></Page>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- model1 -->
    <Modal v-model="modal1" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-mail" size="20" color="#00b5f6;" />
        <span>{{$t('uc.finance.withdraw.generatecodesuccess')}}</span>
      </p>
      <div style="text-align:center">
        <p style="border-radius: 10px;padding: 20px 10px;background: #222f40;">{{ withdrawCode }}</p>
      </div>
    </Modal>
    <!-- model2 -->
    <Modal v-model="modal2" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-mail" size="20" color="#00b5f6;" />
        <span>{{$t('uc.finance.withdraw.safevalidate')}}</span>
      </p>
      <div style="text-align:center">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0">
          <FormItem>
            <Input type="password" v-model="formValidate.fundpwd" :placeholder="$t('otc.chat.msg7')"></Input>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long @click="submit">{{$t('uc.finance.withdraw.submit')}}</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  components: {},

  data() {
    var that = this;
    return {
      interval: function() {},
      disbtn: false,
      dataCount: 10,
      loading: true,
      //else
      sendMsgDisabled1: false,
      sendMsgDisabled2: false,
      time1: 60, // 发送验证码倒计时
      time2: 60, // 发送验证码倒计时
      modal1: false,
      modal2: false,
      modal_loading: false,
      withdrawAddr: "",
      remark: "",
      coinType: "",
      withdrawAmount: 0,
      coinList: [],
      withdrawCode: "c10befbd3176ebf65653c85fd83cb7ca",
      tableColumnsWithdrawRecord: [
        {
          title: this.$t("uc.finance.withdraw.time"),
          width: 100,
          key: "createTime"
        },
        {
          title: this.$t("uc.finance.withdraw.symbol"),
          width: 80,
          key: "unit"
        },
        {
          title: this.$t("uc.finance.withdraw.num"),
          width: 100,
          key: "amount"
        },
        {
          title: this.$t("uc.finance.withdraw.withdrawcode"),
          key: "withdrawcode"
        },
        {
          title: this.$t("uc.finance.withdraw.withdrawcodestatus"),
          width: 100,
          key: "status"
        }
      ],
      dataWithdrawCodeList: [],
      formValidate: {
        fundpwd: ""
      },
      ruleValidate: {
        fundpwd: [
          {
            required: this.fundpwd,
            message: this.$t("uc.finance.withdraw.fundpwdtip"),
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.getMember();
    this.getList(0, 10);
    this.coinType = this.$route.query.name;
    this.getCoin();
  },
  methods: {
    refresh() {
      (this.coinType = null), (this.withdrawAddr = null), (this.remark = null);
      this.getList(0, 10);
    },
    getMember() {
      //获取个人安全信息
      this.$http
        .post(this.host + "/uc/approve/security/setting")
        .then(response => {
          var resp = response.body;
          if (resp.code == 0) {
            if (resp.data.mobilePhone) {
              // TODO
            } else {
              // TODO
            }
          } else {
            this.$Message.error(resp.message);
          }
        });
    },
    getCoin() {
      //币种
      this.$http
        .post(this.host + "/uc/withdraw/support/coin")
        .then(response => {
          var resp = response.body;
          if (resp.code == 0) {
            for (let i = 0; i < resp.data.length; i++) {
              this.coinList.push(resp.data[i]);
            }
          } else {
            this.$Message.error(resp.message);
          }
        });
    },
    getList(pageNo, pageSize) {
      //获取地址
      let params = {};
      params["page"] = pageNo;
      params["pageSize"] = pageSize;
      this.$http
        .post(this.host + "/uc/withdrawcode/record", params)
        .then(response => {
          var resp = response.body;
          if (resp.code == 0 && resp.data.content) {
            this.dataWithdrawList = resp.data.content;
            this.dataCount = resp.data.totalElement;
          } else {
            this.$Message.error(resp.message);
          }
          this.loading = false;
        });
    },
    generate() {
      let interval = setInterval(() => {
        if (this.time2 <= 0) {
          this.sendMsgDisabled2 = false;
          window.clearInterval(interval);
          this.disbtn = false;
        }
      }, 1000);
      if (!this.coinType) {
        this.$Message.warning(this.$t("uc.finance.withdraw.symboltip"));
      } else if (!this.withdrawAmount) {
        this.$Message.warning(this.$t("uc.finance.withdraw.amounttip"));
      }else if (this.coinType && this.withdrawAmount) {
        this.modal2 = true;
      }
    },
    changePage(index) {
      this.getList(index, 10);
    },
    handleSubmit(name) {
      console.log("valid test...");
      this.$refs[name].validate(valid => {
        if (valid) {
          this.submit();
        } else {
          console.log("1valid test...");
          this.$Message.error(this.$t("uc.finance.withdraw.savemsg1"));
        }
      });
    },
    submit() {
      let param = {};
      param["unit"] = this.coinType;
      param["amount"] = this.withdrawAmount;
      param["jyPassword"] = this.formValidate.fundpwd;

      this.$http
        .post(this.host + "/uc/withdrawcode/apply/code", param)
        .then(response => {
          var resp = response.body;
          if (resp.code == 0) {
            this.$Message.success(this.$t("uc.finance.withdraw.savemsg2"));

            this.modal2 = false;
            this.withdrawCode = resp.data.withdrawCode;
            this.modal1 = true;
          } else {
            this.$Message.error(resp.message);
          }
        });
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.tableMoblie{
  padding: 0 10px;
 .ivu-select-selection{
   height: 42px;
 }
  
 .action-inner,.form-group-container,.form-group-container2{
  display: block;
  padding: 0;
  .inner-left,.inner-box,.form-amount,.form-fee,.form-group{
    display: block;
    overflow: hidden;
     margin: 0 0 15px 0;
    width: 100%!important;
    >div,.form-address>div{
      width: 80%!important;
    margin-top: 0px !important;
    float: left;
    text-align: left;
    }
  .describe,.label-amount,label{
    display: inline-block;
    float: left;
    width: 70px;
    text-align: left;
    font-size: 14px;
    line-height: 30px;
    font-weight: 100;
    text-indent: 6px;
  }
  .label-fr{
    text-align: left;
    font-size: 12px;
  }
  }
    .inner-box .form-address{
      display: block;
      width: 100%!important;
      margin: 0;
    }
     .form-group{
      display: block;
      padding:0;
      width: 100%;
      margin: 0 0 15px 0;
    }
 }

  .action-inner{
 background: #17212E;
 border-radius:  7px;
 padding:  20px 0;
  }
 
 .mtTitle{
   width: 100%;
   .title{
     text-indent: 70px;
     button{
       margin-top: 0!important;
     }
   }
 }
 .action-content{
   padding: 0;
 }
   .actionMoblieBox{
      overflow: auto;
  .actionMoblieTable{
      width:500px;
    }
    }
     .actionMobliep{
    text-align: left;
        height: 40px;
    line-height: 40px;
    margin: 10px 0 0 0;
  }
  .actionMoblie{
       padding: 0 0 10px;
        background: #17212E;
       border-radius:7px;
       .actionMoblieBox{
         border-radius: 7px;
       }
    .acb-p1{
      text-align: left;
    }
  .order-table{
    margin-top: 0;
  }
  }
}
.nav-rights {
  .nav-right {
    .bill_box_address {
      section.trade-group.merchant-tops {
        .tips-word1 {
          margin-bottom: 20px;
          text-align: left;
          font-weight: normal;
          margin-left: 30px;
        }
      }
      .table-inner {
        .action-inner {
          display: table;
          padding: 0 30px;
          width: 100%;
          .inner-left {
            display: table-cell;
            width: 15%;
          }
        }
      }
    }
  }
}
.btnbox {
  text-align: right;
  padding: 25px 30px;
}

.deposit-address {
  width: 45% !important;
}

.mt25 {
  display: table-cell;
  width: 43%;
}

p.describe {
  font-size: 16px;
}

.action-content {
  padding: 20px 30px;
}
/* common */
.order-table {
  margin-top: 20px;
}

.content-wrap {
  // background: #f5f5f5;
  min-height: 750px;
}

.container {
  padding-top: 30px;
  margin: 0 auto;
}
span.addon-tag:last-child {
    padding: 0;
    border: none;
    background: none;
    cursor: default;
    position: absolute;
    right: 26px;
    top: 6px;
}
</style>
<style lang="scss">
.nav-rights {
  .nav-right {
    .bill_box_address {
      .table-inner {
        .action-inner {
          .inner-left {
            .ivu-select-dropdown .ivu-select-item {
              padding: 6px 16px;
            }
          }
        }
        .btnbox .ivu-btn {
          &:focus {
            -moz-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
            -webkit-box-shadow: 2px 2px 5px transparent,
              -2px -2px 4px transparent;
            box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
          }
        }
      }
    }
  }
}
</style>


