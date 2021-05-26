<template>
  <header>
    <div
      class="navToggle"
      @click="naviOpen()"
      :class="{'is-active': active }"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="top">
      <nav class="navi" v-show="navi">
        <ul class="navi__wrap">
          <li>
            <router-link to="/#profile-contents" @click.native="naviClose()" v-smooth-scroll="{ duration: 1000, offset: -50 }">PLOFILE</router-link>
          </li>
          <li>
            <router-link
              v-bind:to="{
                name: 'Content',
                hash: '#work-contents',
                params: { page: 1, categoryId: 0 },
              }"
              @click.native="naviClose()"
              v-smooth-scroll="{ duration: 1000, offset: -50 }"
              >WORKS</router-link>
          </li>
          <li>
              <router-link to="/contact#c-box" @click.native="naviClose()" v-smooth-scroll="{ duration: 1000, offset: -50 }">CONTACT</router-link>
          </li>
        </ul>
        <section class="navi-share-sns-area">
          <ShareTwitter color="white" />
          <ShareFacebook color="white" />
        </section>
      </nav>
    </transition>
  </header>
</template>

<script>
import ShareTwitter from "./ShareTwitter.vue";
import ShareFacebook from "./ShareFacebook.vue";

export default {
  components: {
    ShareTwitter,
    ShareFacebook,
  },
  data() {
    return {
      active: false,
      navi: false,
      showContactModal: false,
    };
  },
  methods: {
    naviOpen() {
      this.no_scroll();

      this.active = !this.active;
      this.navi = !this.navi;

      if(!this.active && !this.navi) {
        this.ok_scroll();
      }
    },
    naviClose() {
      this.ok_scroll();

      this.active = false;
      this.navi = false;
    },
    // スクロール禁止
    no_scroll() {
      document.addEventListener("mousewheel", this.scroll_control, { passive: false });
      document.addEventListener("touchmove", this.scroll_control, { passive: false });
    },
    // スクロール禁止解除
    ok_scroll() {
      document.removeEventListener("mousewheel", this.scroll_control, { passive: false });
      document.removeEventListener('touchmove', this.scroll_control, { passive: false });
    },
    // スクロール関連メソッド
    scroll_control(event) {
        event.preventDefault();
    }
  }
};
</script>

<style scoped>
.top-enter-active,
.top-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.top-enter,
.top-leave-to {
  transform: translateY(-100vh) translateY(0px);
}

.navToggle {
  display: block;
  position: fixed; /* bodyに対しての絶対位置指定 */
  right: 13px;
  top: 12px;
  width: 42px;
  height: 51px;
  cursor: pointer;
  z-index: 999;
  text-align: center;
}

.navToggle span {
  display: block;
  position: absolute; /* .navToggleに対して */
  width: 30px;
  border-bottom: solid 3px #000;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  left: 6px;
}

.navToggle span:nth-child(1) {
  top: 9px;
}

.navToggle span:nth-child(2) {
  top: 18px;
}

.navToggle span:nth-child(3) {
  top: 27px;
}

.navToggle span:nth-child(4) {
  border: none;
  color: #eee;
  font-size: 9px;
  font-weight: bold;
  top: 34px;
}

/* 最初のspanをマイナス45度に */
.navToggle.is-active span {
  top: 18px;
  left: 6px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.navToggle.is-active span:nth-child(2),
.navToggle.is-active span:nth-child(3) {
  top: 18px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
}

.navi {
  z-index: 99;
  background-color: #5bbee4;
  position: fixed;
  top: 0%;
  height: 100%;
}

.navi__wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.navi li {
  width: 100%;
  padding: 5vh;
}

.navi li a {
  font-size: 5vh;
  letter-spacing: 5px;
}

.navi-share-sns-area {
  display: flex;
}

@media screen and (min-width: 1026px) {

}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  
}

@media screen and (max-width: 481px) {
  
}

</style>
