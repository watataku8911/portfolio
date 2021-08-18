<template>
  <div id="app">
    <div class="opning" v-show="loading">
      <div class="bar" v-if="bar"></div>
      <p class="line-1">Watataku's</p>
      <div class="now-loading">
        <p class="str-loading" :class="{ visible: isActive }">
          <span>N</span>
          <span>o</span>
          <span>w</span>
          <span>&nbsp;</span>
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </p>
      </div>
    </div>

    <!--  これがサイトのメイン -->
    <transition name="fade">
      <div v-show="!loading">
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
      </div>
    </transition>
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
      isActive: false,
      image: "stand-by",
    };
  },

  mounted() {
    setInterval(() => {
      this.isActive = true;
      setTimeout(() => {
        this.isActive = false;
      }, 1200);
    }, 2700);
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

.opning {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100vh;
}

.bar {
  animation: typewriter 1s ease-in 0s 1 normal;
  height: 5px;
  background: linear-gradient(to right, #5bbee4 0%, #52eac1 100%);
  position: absolute;
  top: 0;
}

@keyframes typewriter {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
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

.now-loading {
  position: absolute;
  right: 1vw;
  bottom: 0.5vh;
}

.now-loading .str-loading span {
  display: block;
  transform: translate(0, -25.5%);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
}

.now-loading .str-loading.visible span {
  transform: translate(0, 0);
}

.now-loading .str-loading span:nth-child(2) {
  transition-delay: 0.06s;
}

.now-loading .str-loading span:nth-child(3) {
  transition-delay: 0.12s;
}

.now-loading .str-loading span:nth-child(4) {
  transition-delay: 0.18s;
}

.now-loading .str-loading span:nth-child(5) {
  transition-delay: 0.24s;
}

.now-loading .str-loading span:nth-child(6) {
  transition-delay: 0.3s;
}

.now-loading .str-loading span:nth-child(7) {
  transition-delay: 0.36s;
}

.now-loading .str-loading span:nth-child(8) {
  transition-delay: 0.42s;
}

.now-loading .str-loading span:nth-child(9) {
  transition-delay: 0.48s;
}

.now-loading .str-loading span:nth-child(10) {
  transition-delay: 0.54s;
}

.now-loading .str-loading span:nth-child(11) {
  transition-delay: 0.6s;
}

.now-loading .str-loading span:nth-child(12) {
  transition-delay: 0.6s;
}

.now-loading .str-loading span:nth-child(13) {
  transition-delay: 0.75s;
}

.now-loading .str-loading span:nth-child(14) {
  transition-delay: 0.85s;
}

/* ----------------------------------------------
----------- transition animation ----------------
------------------------------------------------ */
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .now-loading .str-loading {
    font-size: 1.3em;
    display: flex;
    letter-spacing: 3px;
    color: #5bbee4;
    font-weight: 900;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .now-loading .str-loading {
    font-size: 1em;
    display: flex;
    letter-spacing: 10px;
    color: #5bbee4;
    font-weight: 900;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .now-loading .str-loading {
    font-size: 0.5em;
    display: flex;
    letter-spacing: 5px;
    color: #5bbee4;
    font-weight: 900;
  }
}
</style>
