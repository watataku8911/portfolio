<template>
  <section class="hamburger-menu">
    <div
      class="navToggle"
      @click="naviToggle()"
      :class="{ 'is-active': active }"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="top">
      <nav class="navi" v-show="navi">
        <ul class="navi__wrap">
          <li>
            <router-link
              to="/#profile-contents"
              @click.native="naviToggle()"
              v-smooth-scroll="{ duration: 1000, offset: -50 }"
              >PLOFILE</router-link
            >
          </li>
          <li>
            <router-link
              v-bind:to="{
                name: 'Content',
                hash: '#work-contents',
                params: { page: 1, categoryId: 0 },
              }"
              @click.native="naviToggle()"
              v-smooth-scroll="{ duration: 1000, offset: -50 }"
              >WORKS</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact#c-box"
              @click.native="naviToggle()"
              v-smooth-scroll="{ duration: 1000, offset: -50 }"
              >CONTACT</router-link
            >
          </li>
        </ul>
        <section class="navi-share-sns-area">
          <ShareTwitter color="black" />
          <ShareFacebook color="black" />
        </section>
      </nav>
    </transition>
  </section>
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
    };
  },
  methods: {
    naviToggle() {
      this.active = !this.active;
      this.navi = !this.navi;
    },
  },
};
</script>

<style scoped>
.top-enter-active,
.top-leave-active {
  transform: translate(0px, 0px);
  transition: all 0.5s;
}

.top-enter,
.top-leave-to {
  transform: translate(100vw, 0px);
  transition: all 0.5s;
}

.navToggle {
  display: block;
  position: fixed; /* bodyに対しての絶対位置指定 */
  right: 8px;
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
  border-bottom: solid 4px #555;
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
  background-color: #ece4e4;
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
  color: black;
}

.navi-share-sns-area {
  position: absolute;
  bottom: 0;
  right: 13px;
  display: flex;
  gap: 8px;
}
</style>
