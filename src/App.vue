<template>
  <div id="app">
    <div class="opning" v-show="loading">
      <div id="bar" v-show="bar"></div>
        <!-- <Snowf
          :amount="80"
          :size="8"
          :speed="0.1"
          :wind="0"
          :opacity="0.8"
          :swing="1"
          :image="null"
          :zIndex="null"
          :resize="true"
          color="#fff"
        /> -->
        <div id="title">
          <p class="line-1">Watataku's</p>
        </div>
    </div>

    <!--ここからがメイン-->
    <transition name="fade">
      <div v-show="!loading">
        <div class="triangle_"></div>
        <Header class="header" v-bind:class="pStyle" />
        <MainImage
          v-on:image-load-finish="imageLoadFinish"
          v-bind:class="notfound"
        />
        <router-view v-on:image-load-finish="imageLoadFinish" />

        <section class="share-sns-area">
          <ShareTwitter imageName="icon_twitter_black.svg" />
          <ShareFacebook imageName="icon_facebook_black.svg" />
        </section>

        <Footer class="footer" />
      </div>
    </transition>
  </div>
</template>

<script>
import MainImage from "./components/MainImage";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Snowf from "vue-snowf";
import ShareTwitter from "./components/ShareTwitter.vue";
import ShareFacebook from "./components/ShareFacebook.vue";

export default {
  name: "app",
  components: {
    MainImage,
    Header,
    Footer,
    Snowf,
    ShareTwitter,
    ShareFacebook,
  },
  data() {
    return {
      loading: true,
      bar: false,
      scrollY: 0,
      pStyle: "",
      notfound: "",
      image: "stand-by",
    };
  },
  mounted() {
    //404ページにアクセスしたらローディング画面出さない処理
    if (this.$route.matched[0].path === "*") {
      this.loading = false;
      this.notfound = "hide";
    }
  },
  methods: {
    setMeta(to) {
      if (to.meta.title) {
        document.title = to.meta.title;
      }
    },

    //メインイメージの読み込み完了時に呼ばれるメソッド
    imageLoadFinish(finish) {
      this.image = finish;
      this.bar = true;
      setTimeout(() => {
        if ((this.image = "complete")) {
          this.loading = false;
        } else {
          this.loading = true;
        }
      }, 1200);
    },
  },
  watch: {
    $route(to) {
      this.setMeta(to);
    }
  }
};
</script>

<style>
@charset "UTF8";
/*共通*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  width: 100%;
}

.opning {
  background-color: #fff;
  width: 100%;
  height: 100vh;
}

p {
  font-family: "M PLUS 1p", sans-serif;
  font-size: calc(112.5% + 0.25vw);
}

#title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
}

.line-1 {
  /*対象のテキスト*/
  font-family: "Kaushan Script", cursive;
  font-family: "Bad Script", cursive;
  font-size: calc(4rem + ((1vw - 0.64rem) * 0.7143));
  letter-spacing: 2px;
  color: #555;
  overflow: hidden;
  transform: translateY(-50%);
}

#bar {
  /*アニメーションセッティング*/
  animation: typewriter 1s linear 0s 1 normal;
  height: 0.5vw;
  background: linear-gradient(to right, #5bbee4 0%, #52eac1 100%);
  position: absolute;
  top: 0;
}

@keyframes typewriter {
  /*タイプライターライクなアニメーション*/
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/*アニメーション中のスタイル*/
.fade-leave-active,
.fade-enter-active {
  transition: opacity 1.5s;
}

/* 表示アニメーション */
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.hide {
  display: none;
}

.share-sns-area {
  z-index: 10;
  display: flex;
  align-items: flex-end;
  flex-direction: column-reverse;
  position: fixed;
  right: 1vw;
  bottom: 0;
}

.share-link:hover {
  display: block;
  transform: scale(1.3, 1.3);
}


/*PC*/
@media screen and (min-width: 1026px) {
  .triangle_ {
    /* position: absolute;
      top: 0%;
      right: 0%;
      z-index: -9999;
      width: 0;
      height: 0;
      border: 500px solid transparent;
      border-top: 500px solid #c9e4eb;
      border-right: 500px solid #c9e4eb; */
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(assets/bg_triangle_top_right.png);
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vh;
    z-index: -999;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .header {
    z-index: 999;
    width: 100%;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .header {
    width: 100%;
    z-index: 999;
  }
}
</style>