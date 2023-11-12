
<style lang="scss" scoped>
.entrusthistory {
  float: left;
  width: 100%;
  padding-left: 30px;
}

@media screen and (max-width:768px){
    .ivu-form-item{
      text-align: left!important;
    }

    .entrustcurrentF .fromMoblie Button{
      padding: 6px 35px!important;
    }
  }

.page {
  text-align: right;
  margin-top: 20px;
}
.table {
  border-radius: 4px;
}
.table .ivu-table-wrapper {
  position: relative;
  /* border: 1px solid #dddee1; */
  border-bottom: 0;
  border-right: 0;
  // box-shadow: 0 0 2px #ccc;
  border-radius: 4px;
  // overflow: hidden;
}
.form.ivu-form-inline .ivu-form-item {
  display: inline-block;
}
</style>
<style lang="scss">
.entrusthistory .ivu-table th,
.entrusthistory .ivu-table td {
  text-align: center;
}
.table .ivu-table-cell-expand {
  color: #f0a70a;
}
.entrustcurrentF{
  padding: 0 15px;
  .fromTitle{
    height: 30px;
    text-align: left;
    font-size: 15px;
    color: #FFFFFF;
    font-weight: 700;
     margin: 15px 0 0;
  }
  .fromtable{
    width: 100%;
   
    .table{
       overflow: auto;
       >div{
      width: 990px;
      }
    }
  }
    .fromMoblie{
      background: #17212E;
      border-radius: 7px;
      border-radius: 7px;
      padding: 15px 5px;
      Button{
        padding: 10px 35px;
      }
    }
}
</style>



<template>
  <div :class="this.$store.state.ismobile?'entrustcurrentF':'entrusthistory'">
      <div class="fromMoblie">
    <Form class="form" :model="formItem" :label-position="this.$store.state.ismobile?'top':''" :label-width="this.$store.state.ismobile?'100%':'75'" :inline="this.$store.state.ismobile?false:true">
      <FormItem :label="$t('uc.finance.trade.start_end')+`${this.$store.state.ismobile?':':''}`">
        <DatePicker type="daterange" size="large" v-model="formItem.date" :style="{'width':this.$store.state.ismobile?'100%':'180px'}"></DatePicker>
      </FormItem>
      <FormItem :label="$t('uc.finance.trade.symbol')+`${this.$store.state.ismobile?':':''}`">
        <Select v-model="formItem.symbol" size="large" :style="{'width':this.$store.state.ismobile?'100%':'100px'}" :placeholder="$t('common.pleaseselect')">
          <Option v-for="(item,index) in symbol" :key="index" :value="item.symbol">{{item.symbol}}</Option>
        </Select>
      </FormItem>
      <FormItem :label="$t('uc.finance.trade.type')+`${this.$store.state.ismobile?':':''}`">
        <Select v-model="formItem.type" size="large"  :style="{'width':this.$store.state.ismobile?'100%':'70px'}" :placeholder="$t('common.pleaseselect')">
          <Option value="LIMIT_PRICE">{{$t('uc.finance.trade.limit')}}</Option>
          <Option value="MARKET_PRICE">{{$t('uc.finance.trade.market')}}</Option>
        </Select>
      </FormItem>
      <FormItem :label="$t('uc.finance.trade.direction')+`${this.$store.state.ismobile?':':''}`">
        <Select v-model="formItem.direction" size="large"  :style="{'width':this.$store.state.ismobile?'100%':'70px'}" :placeholder="$t('common.pleaseselect')">
          <Option value="0">{{$t('uc.finance.trade.buy')}}</Option>
          <Option value="1">{{$t('uc.finance.trade.sell')}}</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Button type="warning" @click="handleSubmit">{{$t('uc.finance.trade.search')}}</Button>
        <Button style="margin-left: 8px" @click="handleClear" class="clear_btn">{{$t('uc.finance.trade.clear')}}</Button>
      </FormItem>
    </Form>
      </div>
  <div class="fromTitle" v-if="this.$store.state.ismobile">
      历史委托记录
    </div>
    <div :class="this.$store.state.ismobile?'fromtable':''">
    <div class="table">
      <div>
        <Table :no-data-text="$t('common.nodata')" :columns="columns" :data="orders" :loading="loading"></Table>
      </div>
      </div>
      <div class="page">
        <Page :total="total" :pageSize="pageSize" :current="pageNo" @on-change="loadDataPage"></Page>
      </div>
    
    </div>
  </div>
</template>
<script>
var moment = require("moment");
import expandRow from "@components/exchange/expand.vue";

export default {
  components: { expandRow },
  data() {
    const self = this;
    return {
      loading: false,
      pageSize: 10,
      pageNo: 1,
      total: 10,
      symbol: [],
      formItem: {
        symbol: "",
        type: "",
        direction: "",
        date: ""
      },
      columns: [
        {
          type: "index",
          width: 30,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                skin: params.row.skin,
                rows: params.row.detail
              }
            });
          }
        },
        {
          title: self.$t("exchange.time"),
          key: "time",
          minWidth: 55,
          render: (h, params) => {
            return h("span", {}, self.dateFormat(params.row.time));
          }
        },
        {
          title:  self.$t("uc.finance.trade.symbol"),
          width: 130,
          key: "symbol"
        },
        {
          title: self.$t("uc.finance.trade.type"),
          width: 70,
          render(h, params) {
            return h(
              "span",
              params.row.type === "LIMIT_PRICE" ? self.$t("exchange.limited_price") : self.$t("exchange.market_price")
            );
          }
        },
        {
          title: self.$t("exchange.direction"),
          key: "direction",
          width: 90,
          render: (h, params) => {
            const row = params.row;
            const className = row.direction.toLowerCase();
            return h(
              "span",
              {
                attrs: {
                  class: className
                }
              },
              row.direction == "BUY"
                ? self.$t("exchange.buyin")
                : self.$t("exchange.sellout")
            );
          }
        },
        {
          title: self.$t("exchange.price"),
          key: "price",
          render(h, params) {
            return h(
              "span",
              {
                attrs: {
                  title: params.row.price
                }
              },
              self.toFloor(params.row.price)
            );
          }
        },
        {
          title: self.$t("exchange.num"),
          key: "amount",
          render(h, params) {
            return h(
              "span",
              {
                attrs: {
                  title: params.row.amount
                }
              },
              self.toFloor(params.row.amount)
            );
          }
        },
        {
          title: self.$t("exchange.done"),
          key: "tradedAmount",
          render(h, params) {
            return h(
              "span",
              {
                attrs: {
                  title: params.row.tradedAmount
                }
              },
              self.toFloor(params.row.tradedAmount)
            );
          }
        },
        {
          title: self.$t("uc.finance.trade.turnover"),
          key: "turnover",
          render(h, params) {
            return h(
              "span",
              {
                attrs: {
                  title: params.row.turnover
                }
              },
              self.toFloor(params.row.turnover)
            );
          }
        },
        {
          title: self.$t("exchange.status"),
          key: "status",
          width: 80,
          render: (h, params) => {
            const status = params.row.status;
            if (status == "COMPLETED") {
              return h(
                "span",
                {
                  style: {
                    color: "#f0a70a"
                  }
                },
                self.$t("exchange.finished")
              );
            } else if (status == "CANCELED") {
              return h(
                "span",
                {
                  style: {
                    color: "#f0a70a"
                  }
                },
                self.$t("exchange.canceled")
              );
            } else {
              return h("span", {}, "--");
            }
          }
        }
      ],
      orders: []
    };
  },
  computed:{
    lang: function() {
      return this.$store.state.lang;
    }
  },
  watch: {
    lang: function() {
      this.updateLangData();
    }
  },
  created() {
    this.getHistoryOrder();
    this.getSymbol();
  },
  methods: {
    dateFormat: function(tick) {
      return moment(tick).format("YYYY-MM-DD HH:mm:ss");
    },
    loadDataPage(data) {
      this.pageNo = data;
      this.getHistoryOrder();
    },
    handleSubmit() {
      this.pageNo = 1;
      this.getHistoryOrder();
    },
    handleClear() {
      this.formItem = {
        symbol: "",
        type: "",
        direction: "",
        date: ""
      };
    },
    getHistoryOrder() {
      //查询历史委托
      this.loading = true;
      const { symbol, type, direction, date: rangeDate } = this.formItem,
        startTime = new Date(rangeDate[0]).getTime() || "",
        endTime = new Date(rangeDate[1]).getTime() || "";
      let params = {};
      if (symbol) params.symbol = symbol;
      if (direction) params.direction = direction;
      if (type) params.type = type;
      if (startTime) params.startTime = startTime;
      if (endTime) params.endTime = endTime;
      params.status = '1';
      params.pageNo = this.pageNo;
      params.pageSize = this.pageSize;
      var that = this;
      this.orders = [];
      this.$http
        .post(this.host + "/exchange/order/personal/history", params)
        .then(response => {
          var resp = response.body;
          let rows = [];
          if (resp.content.length > 0) {
            this.total = resp.totalElements;
            for (var i = 0; i < resp.content.length; i++) {
              var row = resp.content[i];
              row.price =
                row.type == "MARKET_PRICE"
                  ? that.$t("exchange.marketprice")
                  : row.price;
              rows.push(row);
            }
            this.orders = rows;
          }
          this.loading = false;
        });
    },
    getSymbol() {
      this.$http.post(this.host + this.api.market.thumb, {}).then(response => {
        var resp = response.body;
        if (resp.length > 0) {
          this.symbol = resp;
        }
      });
    },
    updateLangData(){
      this.columns[1].title = this.$t("exchange.time");
      this.columns[2].title = this.$t("uc.finance.trade.symbol");
      this.columns[3].title = this.$t("uc.finance.trade.type");
      this.columns[4].title = this.$t("exchange.direction");
      this.columns[5].title = this.$t("exchange.price");
      this.columns[6].title = this.$t("exchange.num");
      this.columns[7].title = this.$t("exchange.traded");
      this.columns[8].title = this.$t("uc.finance.trade.turnover");
      this.columns[9].title = this.$t("exchange.status");
    }
  }
};
</script>

