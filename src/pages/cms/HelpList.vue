<template>
  <div class="helplist">
    <div class="route-wrap">
      <router-link to="help">{{$t("header.helpcenter")}}</router-link>
      <span>></span>
      <span>{{cateTitle}}</span>
    </div>
    <div class="container">
      <h1>{{cateTitle}}</h1>
      <div class="list">
        <router-link class="item" v-for="(item,index) in list" :key="index" :to="{path:'helpdetail',query:{cate:cate,id:item.id,cateTitle:cateTitle}}">
          <span class="text" >{{item.title}}</span>
          <span class="time">
            {{item.createTime}}
          </span>
        </router-link>
      </div>
      <div class="page">
        <Page :total="total" :pageSize="pageSize" :current="pageNo" @on-change="pageChange"></Page>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@media screen and (max-width:768px){
 .about_us_container .wrapper{
  padding: 0!important;
  margin: 0!important;
 }

 .about_us_container{
  padding-top:45px!important;
 }

 .list{
  display: block!important;
  overflow: hidden;
  border:none!important;
  padding: 4% 3%!important;
  background: #141f2b!important;
  height: auto!important;
 }

 .about_us_container .wrapper .content_wrapper .content1 p{
   margin: 0!important;
 }

 .helplist{
  padding:0!important;
  background:none!important;
  color: #828ea1;
 }

.list .item{
  color:#D6D7D9!important;
  font-size:14px;
  line-height: 48px!important;
  border-bottom: 1px solid #17222E!important;
}

.page-content,.helplist{
  min-height:500px!important;
}
.list .item .time{
  color:#444C55!important;
  font-size:12px!important;;
}
 .helplist .container > h1{
  border:none!important;
  margin: 30px 3% 10px!important;
  color: #d0d2d4!important;
  font-weight: 400;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  text-align:left!important;
 }

 .about_us_container .wrapper{
  background: none!important;
 }
}


.helplist {
  width: 100%;
  margin: 0 auto;
  padding: 80px 20%;
  background: #FFF;
  color: #000;
  min-height: 800px;
  .container {
    > h1 {
      text-align: center;
      margin: 30px 0 20px 0;
    }
    .page {
      text-align:right;
      margin-top: 10px;
      .ivu-page{
        background: transparent!important;
        .ivu-page-prev, .ivu-page-next{
          background-color: transparent!important;
          color: #000;
          border: none;
        }
        .ivu-page-item{
          background-color: transparent!important;
          color: #000;
          border: none;
        }
      }
    }
  }
}
.list {
  font-size: 16px;
  .item {
    color: #464646;
    display: block;
    line-height: 40px;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
    .iconimg {
      width: 14px;
      vertical-align: sub;
      margin-left: 20px;
    }
    .time {
      float: right;
      color: #999;
      font-size: 14px;
    }
    &:hover{
      color: #f0a70a;
    }
  }
}
.route-wrap {
  font-size: 14px;
  a {
    color: #f1ab15;
  }
  span {
    color: #f1ab15;
  }
}

</style>
<script>
export default {
  data() {
    return {
      cate: 0,
      pageNo: 1,
      pageSize: 10,
      total: 0,
      list: []
    };
  },
  created() {
    this.$store.commit("navigate", "nav-uc");
    const { cate, cateTitle } = this.$route.query;
    this.cate = cate;
    this.cateTitle = cateTitle;
    this.getData();
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    },
    langPram(){
      if(this.$store.state.lang == "简体中文"){
        return "CN";
      }else if(this.$store.state.lang == "English"){
        return "EN";
      }else if(this.$store.state.lang == "KOREAN"){
        return "KO";
      }else if(this.$store.state.lang == "JAPANESE"){
        return "JP";
      }
      return "CN";
    }
  },
  watch: {
    $route(to, from) {
      const { cate, cateTitle } = to.query;
      this.cate = cate;
      this.cateTitle = cateTitle;
      this.getData();
    }
  },
  methods: {
    pageChange(data) {
      this.pageNo = data;
      this.getData();
    },
    getData() {
      let params = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        cate: this.cate,
        lang: this.langPram
      };
      this.$http
        .post(this.host + "/uc/ancillary/more/help/page", params)
        .then(res => {
          if (res.status == 200 && res.body.code == 0) {
            this.list = res.body.data.content;
            this.total = res.body.data.totalElements;
          } else {
            this.$Message.error(res.body.message);
          }
        });
    }
  }
};
</script>


