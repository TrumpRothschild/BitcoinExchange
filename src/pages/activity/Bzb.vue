<style lang="scss" scoped>
.content_container {
  // background-color: #eee;
  padding: 60px 0 20px 0;
  .wrapper {
    margin: 30px 12%;
    background-color: #192330;
    padding: 20px 40px;
    h2 {
      font-weight: 400;
      height: 50px;
      font-size: 20px;
      line-height: 50px;
    }
    .wrapper_logo ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 30px;
      min-height:280px;
      flex-wrap: wrap;
      li {
        width: 25%;
        padding: 0 20px;
        list-style-type: none;
        text-align: center;
        min-height: 240px;
        img{
          width: 100px;
        }
        h5 {
          line-height: 50px;
          font-size: 20px;
          font-weight:400;
        }
        span {
          color: #828ea1;
          font-size: 12px;
        }
      }
    }
    .content_wrapper {
      padding: 20px 0;
      .content1 {
        padding-bottom: 20px;
        margin-bottom: 20px;
        h5 {
          font-size: 18px;
          line-height: 40px;
          font-weight: 500;
          margin-bottom: 15px;
        }
        p {
          font-size: 14px;
          line-height: 30px;
          color: #828ea1;
          margin-bottom: 15px;
          text-indent: 30px;
          // margin-bottom: 14px;
          text-align: justify;
        }
      }
    }
  }
}
</style>

<template>
  <div class="content_container">
    <div class="wrapper">
      <div class="content_wrapper">
        <div class="content1">
          <h5>cbdcoincurrency Introduction</h5>
          <p>MOD is an equity certificate of cbdcoincurrency trading platform, with a total issuance of 500 million pieces and never additional issuance. MOD holders can not only enjoy the rights and interests such as token appreciation, income dividend, and currency dividend, but also gain the node benefits by participating in the voting of the cbdcoincurrency super node (partner). The super node has the right to participate in the decision-making, the first to know, the priority to currency and the distribution of future listed stocks and other traditional enterprise shareholders' rights.</p>
          <p>MOD is in addition to trading platform rights certificate, the only rights credentials will also be cbdcoincurrency ecological projects, such as mineral pools, DEX, games, wallet, ecological projects, such as information, cbdcoincurrency is open ecological exchange, we welcome any party to join MOD ecological projects, and in the initial stage to give a certain number of MOD as members of the ecological project of development fund.</p>
        </div>
      </div>
      <h2 class="title">Rights and interests of cbdcoincurrency</h2>
      <div class="wrapper_logo">
        <ul>
          <li>
            <img src="../../assets/images/bzb/bzb_fenhong.png" alt="">
            <h5>{{$t('bzb_description.title1')}}</h5>
            <span>{{$t('bzb_description.desc1')}}</span>
          </li>
          <li>
            <img src="../../assets/images/bzb/bzb_zhekou.png" alt="">
            <h5>{{$t('bzb_description.title2')}}</h5>
            <span>{{$t('bzb_description.desc2')}}</span>
          </li>
          <li>
            <img src="../../assets/images/bzb/bzb_rengou.png" alt="">
            <h5>{{$t('bzb_description.title3')}}</h5>
            <span>{{$t('bzb_description.desc3')}}</span>
          </li>
          <li>
            <img src="../../assets/images/bzb/bzb_toupiao.png" alt="">
            <h5>{{$t('bzb_description.title4')}}</h5>
            <span>{{$t('bzb_description.desc4')}}</span>
          </li>
          <li>
            <img src="../../assets/images/bzb/bzb_zhiqing.png" alt="">
            <h5>{{$t('bzb_description.title5')}}</h5>
            <span>{{$t('bzb_description.desc5')}}</span>
          </li>
          <li>
            <img src="../../assets/images/bzb/bzb_shangbi.png" alt="">
            <h5>{{$t('bzb_description.title6')}}</h5>
            <span>{{$t('bzb_description.desc6')}}</span>
          </li>
          <li>
            <img src="../../assets/images/bzb/bzb_juece.png" alt="">
            <h5>{{$t('bzb_description.title7')}}</h5>
            <span>{{$t('bzb_description.desc7')}}</span>
          </li>
          <li>
            <img src="../../assets/images/bzb/bzb_gengduo.png" alt="">
            <h5>{{$t('bzb_description.title8')}}</h5>
            <span>{{$t('bzb_description.desc8')}}</span>
          </li>
        </ul>
      </div>
      <div class="content_wrapper">
        <div class="content1">
          <h5>The white paper</h5>
          <p>MOCRRENCY 数字资产交易平台白皮书-中文版.pdf</p>
          <p>MOCRRENCY Exchange Platform White Paper-English.pdf</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  created() {
    this.init();
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  },
  methods: {
    init() {
      this.$store.commit("navigate", "nav-bzb");
    }
  }
};
</script>
<style scoped>
.container {
  background: #fff;
  overflow-x: hidden;
}

.content-wrap {
  padding-top: 20px;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  min-height: 600px;
}

.leftmenu {
  border: 1px solid #efefef;
}

.leftmenu .divider {
  font-size: 20px;
  padding: 5px;
  background: #efefef;
}

.leftmenu li {
  font-size: 14px;
  line-height: 30px;
  padding: 5px;
}

.leftmenu li a {
  color: #444;
}

.leftmenu li a:hover {
  color: #f0a70a;
}

.leftmenu li.cur a {
  color: #f0a70a;
}
.content {
  padding-top: 20px;
  /*padding-left: 200px;*/
  padding-bottom: 20px;
  text-align: left;
  padding-left: 20px;
}

.content .ivu-col {
  text-align: left;
}

.content p {
  text-indent: 2em;
  margin-bottom: 10px;
  font-size: 16px;
}
.content > div {
  padding-bottom: 20px;
}
.content h3 {
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 20px;
}
.content h5 {
  font-size: 14px;
}
.WordSection1 span {
  color: black;
}
</style>
