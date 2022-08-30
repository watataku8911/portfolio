<template>
  <div id="app">
    <div class="opning" v-show="!isActive">
      <div class="bar" v-if="bar"></div>
      <p class="line-1">Watataku's</p>
    </div>

    <!--  これがサイトのメイン -->
    <transition name="fade">
      <div v-show="isActive">
        <div class="module--spacing--large"></div>
        <Header v-on:image-load-finish="imageLoadFinish" />
        <div class="module--spacing--veryLarge"></div>
        <main class="site-main">
          <router-view />
        </main>
        <div class="module--spacing--veryLarge"></div>
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
      bar: false,
      image: "stand-by",
      isActive: false,
    };
  },

  mounted() {
    this.no_scroll();
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
          this.isActive = true;
          this.ok_scroll();
        } else {
          this.isActive = false;
          this.no_scroll();
        }
      }, 1600);
    },
    // スクロール禁止
    no_scroll() {
      document.addEventListener("mousewheel", this.scroll_control, {
        passive: false,
      });
      document.addEventListener("touchmove", this.scroll_control, {
        passive: false,
      });
    },
    // スクロール禁止解除
    ok_scroll() {
      document.removeEventListener("mousewheel", this.scroll_control, {
        passive: false,
      });
      document.removeEventListener("touchmove", this.scroll_control, {
        passive: false,
      });
    },
    // スクロール関連メソッド
    scroll_control(event) {
      event.preventDefault();
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

.line-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Bad Script", cursive;
  font-size: calc(4rem + ((1vw - 0.64rem) * 0.7143));
  letter-spacing: 2px;
  color: #666;
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

/* --------------------------------------------------------------------------------------------------------------------
----------------------------------------------- transition animation ---------------------------------------------------
------------------------------------------------------------------------------------------------------------------------ */
.fade-leave-active,
.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>
