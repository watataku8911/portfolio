<template>
  <div id="app">
    <div id="topLoading" :class="{ active: isActive }">
      <div class="topLoading-mask">
        <div class="bar" v-if="bar"></div>
        <p class="line-1">Watataku's</p>
      </div>
    </div>

    <!--  これがサイトのメイン -->
    <div class="module--spacing--large"></div>
    <Header v-on:image-load-finish="imageLoadFinish" />
    <div class="module--spacing--veryLarge"></div>
    <div class="module--spacing--small"></div>
    <main class="site-main">
      <router-view />
    </main>
    <div class="module--spacing--large"></div>
    <div class="module--spacing--large"></div>
    <Footer />
    <!-- /これがサイトのメイン -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      loading: true,
      bar: false,
      image: "stand-by",
      isActive: false,
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
    },

    loading() {
      if (!this.loading) {
        this.isActive = true;
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bad+Script&display=swap");

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

#topLoading {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  min-width: 1240px;
  min-height: 640px;
  z-index: 10000;
}

.topLoading-mask {
  content: "";
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  -webkit-mask: url(/img/btn_sprite.png);
  mask: url(/img/btn_sprite.webp);
  -webkit-mask-size: 2300% 100%;
  mask-size: 2300% 100%;
}

#topLoading.active .topLoading-mask {
  animation: ani 1s steps(22) 0.3s both;
}

.bar {
  animation: typewriter 1s ease-in 0s 1 normal;
  height: 5px;
  background: linear-gradient(to right, #5bbee4 0%, #52eac1 100%);
  position: absolute;
  top: 0;
}

.line-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  font-family: "Bad Script", cursive;
  font-size: calc(4rem + ((1vw - 0.64rem) * 0.7143));
  letter-spacing: 2px;
  color: #555;
}

/* --------------------------------------------------------------------------------------------------------------
---------------------------------------------- アニメーション設定 ----------------------------------------------------
---------------------------------------------------------------------------------------------------------------- */
@keyframes ani {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@keyframes typewriter {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
