<template>
  <div id="app">
    <div class="opning" v-show="loading">
      <div id="bar" v-show="bar"></div>
      <div id="title">
        <p class="line-1">Watataku's</p>
      </div>
    </div>

    <!--ここからがメイン-->
    <transition name="fade">
      <div v-show="!loading">
        <div class="triangle_"></div>
        <Header />
        <MainImage
          v-on:image-load-finish="imageLoadFinish"
        />
        <main>
          <router-view v-on:image-load-finish="imageLoadFinish" />
        </main>
        <div class="module--spacing--large"></div>
        <div class="module--spacing--large"></div>
        <Footer />
      </div>
    </transition>
  </div>
</template>

<script>
import MainImage from "./components/MainImage";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";


export default {
  name: "app",
  components: {
    MainImage,
    Header,
    Footer
  },
  data() {
    return {
      loading: true,
      bar: false,
      image: "stand-by",
    };
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
        if (this.image == "complete") {
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
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');

.opning {
  background-color: #fff;
  width: 100%;
  height: 100vh;
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
  font-family: "Bad Script", cursive;
  font-size: calc(4rem + ((1vw - 0.64rem) * 0.7143));
  letter-spacing: 2px;
  color: #555;
  overflow: hidden;
  transform: translateY(-50%);
}

#bar {
  /*アニメーションセッティング*/
  animation: typewriter 1s ease-in 0s 1 normal;
  height: 5px;
  background: linear-gradient(to right, #5bbee4 0%, #52eac1 100%);
  position: absolute;
  top: 0;
  will-change: transform;
}

@keyframes typewriter {
  /*タイプライターライクなアニメーション*/
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.loader {
  position: absolute;
  bottom: 0%;
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

/*PC*/
@media screen and (min-width: 1026px) {
  .triangle_ {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -999;
    border-top: 550px solid #B1E0F3;
    border-right: 550px solid #B1E0F3;
    border-bottom: 550px solid transparent;
    border-left: 550px solid transparent;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .triangle_ {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -999;
    border-top: 300px solid #B1E0F3;
    border-right: 300px solid #B1E0F3;
    border-bottom: 300px solid transparent;
    border-left: 300px solid transparent;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .triangle_ {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -999;
    border-top: 150px solid #B1E0F3;
    border-right: 150px solid #B1E0F3;
    border-bottom: 150px solid transparent;
    border-left: 150px solid transparent;
  }
}
</style>