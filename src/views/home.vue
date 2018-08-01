<template>
  <div class="Home">
       <header-bar title="匀富联盟"></header-bar>
       <div class="list-content">
        <vertical-scroll
        ref="pullrefresh"
        :pullup="isShow"
        :pulldown="isShow"
        @pulldown="loadRefresh"
        @scrollToEnd="loadMore">
      <div class="swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item><router-link to="goodDetail?id=4"><img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20171113/20171113232814110405_original.jpg" alt="轮播图"></router-link></mt-swipe-item>
          <mt-swipe-item><router-link to="choose"><img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20171122/20171122174336166279_original.jpg" alt="轮播图"></router-link></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="main">
        <h2><span>爆款产品</span></h2>
        <ul>
          <li><div class="pro-img"><img src="../assets/images/600.jpg"></div>
          <div class="pro-content"><p>采购800元商品，送2400匀商宝享受直接会员和间接会员补贴享受引荐商家入驻1%补贴</p></div>
          <div class="btn btn-primary pro-apply">立即申请</div></li>
           <li><div class="pro-img"><img src="../assets/images/600.jpg"></div>
          <div class="pro-content"><p>采购800元商品，送2400匀商宝享受直接会员和间接会员补贴享受引荐商家入驻1%补贴</p></div>
          <div class="btn btn-primary pro-apply">立即申请</div></li>
           <li><div class="pro-img"><img src="../assets/images/600.jpg"></div>
          <div class="pro-content"><p>采购800元商品，送2400匀商宝享受直接会员和间接会员补贴享受引荐商家入驻1%补贴</p></div>
          <div class="btn btn-primary pro-apply">立即申请</div></li>
           <li><div class="pro-img"><img src="../assets/images/600.jpg"></div>
          <div class="pro-content"><p>采购800元商品，送2400匀商宝享受直接会员和间接会员补贴享受引荐商家入驻1%补贴</p></div>
          <div class="btn btn-primary pro-apply">立即申请</div></li>

        </ul>
      </div>
          <!-- loading 组件 -->
      <div v-show="sequenceList.length" class="loading-container">
        <loading></loading>
      </div>
     </vertical-scroll>
       </div>
</div>
</template>
<script>
// import myScroll from "@/components/myScroll/myScroll";
import { Swipe, SwipeItem, MessageBox } from "mint-ui";
export default {
  name: "Home",
  components: {
    // myScroll
  },
  data () {
    return {
      list: [],
      sequenceList: [],
      isShow: true,
      page: 1

    };
  },
  mounted: function () {
    this.getData();
  },
  methods: {
    loadRefresh () {
      this.list = [];
      // 下拉刷新重新初始化
      this.$refs.pullrefresh.$emit("pullrefresh.finishLoad");
      // this._getData(1)
    },
    loadMore () {
      if (!this.page) return;
      this.page++;
      // 上拉加载重新初始化
      this.$refs.pullrefresh.$emit("infinitescroll.reInit");
      // this._getData(this.page)
    },
    getData: function (page) {
      this.Api.home.getruleapi(page).then(resp => {
        if (resp.list.length >= 10) {
          this.list = [...this.list, ...resp.list];
          // 单次请求数据加载完毕后
          this.$refs.pullrefresh.$emit("infinitescroll.finishLoad");
        } else {
          // 把page设置成false 数据已经加载完毕了 不用在加载了
          this.page = false;
          // 所有数据加载完毕后
          this.$refs.pullrefresh.$emit("infinitescroll.loadedDone");
        }
      });
    }
  }

};
</script>

<style lang="less" scoped>
.Home {
  border-bottom: 10px;
}
.Homeheader i {
  font-size: 0.55rem;
}
.Homeheader {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.35rem;
  padding-left: 0.3rem;
  background: white;
}
.swipe {
  height: 3.75rem;
  margin-top: 1px;
}
.swipe img {
  width: 100%;
  height: 3.75rem;
}
.list-content {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0.44rem;
  bottom: 0;
  overflow: hidden;
}
.main_box {
  /* margin-bottom: 34px;  */
  height: 339px;
}
.loading-container {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.main {
  h2 {
    display: block;
    height: 1.3rem;
    background: white;
    font-size: 0.35rem;
    line-height: 1.3rem;
    padding-left: 0.3rem;
  }
  ul {
    padding: 0.1rem;
    li {
      position: relative;
      display: flex;
      -webkit-box-align: center;
      min-height: 100px;
      margin-bottom: 0.2rem;
      .pro-img {
        // flex: 0 0 100px;
        // width: 100px;
        // height: 100px;
        // overflow: hidden;
        img {
             width: 2.3rem;
             max-width: none;
             height: auto;
        }
      }
      .pro-apply {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .pro-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

        p {
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

        }
      }
    }
  }
}
</style>
