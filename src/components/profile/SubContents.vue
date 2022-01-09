<template>
  <div class="sub_contents" id="sub_contents">
    <div class="sns">
      <div class="sns-item" :style="styleTw">
        <Chip msg="Follow me." v-show="this.isOpenChipTw" />
        <a
          href="https://twitter.com/watataku8911"
          target="_blank"
          class="myAccount"
          v-on:mouseover="mouseoverTw"
          v-on:mouseleave="mouseleaveTw"
        >
          <IcoTw />
        </a>
      </div>
      <div class="sns-item" :style="styleInst">
        <Chip msg="Follow me." v-show="this.isOpenChipInst" />
        <a
          href="https://www.instagram.com/watataku8911/"
          target="_blank"
          class="myAccount"
          v-on:mouseover="mouseoverInst"
          v-on:mouseleave="mouseleaveInst"
        >
          <IcoInst />
        </a>
      </div>
      <div class="sns-item" :style="styleGit">
        <Chip msg="Follow me." v-show="this.isOpenChipGit" />
        <a
          href="https://github.com/watataku8911"
          target="_blank"
          class="myAccount"
          v-on:mouseover="mouseoverGit"
          v-on:mouseleave="mouseleaveGit"
        >
          <GithubLogo />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Chip from "../UIKit/Chip.vue";
import IcoTw from "@/assets/icon/ico_tw.svg";
import IcoInst from "@/assets/icon/ico_inst.svg";
import GithubLogo from "@/assets/icon/github.logo.svg";

export default {
  components: {
    Chip,
    IcoTw,
    IcoInst,
    GithubLogo,
  },
  data() {
    return {
      isOpenChipTw: false,
      isOpenChipInst: false,
      isOpenChipGit: false,
      styleTw: "",
      styleInst: "",
      styleGit: "",
    };
  },
  methods: {
    mouseoverTw() {
      this.isOpenChipTw = true;
      this.styleTw = "margin-top: -36px";
    },
    mouseleaveTw() {
      this.isOpenChipTw = false;
      this.styleTw = "";
    },

    mouseoverInst() {
      this.isOpenChipInst = true;
      this.styleInst = "margin-top: -36px";
    },
    mouseleaveInst() {
      this.isOpenChipInst = false;
      this.styleInst = "";
    },

    mouseoverGit() {
      this.isOpenChipGit = true;
      this.styleGit = "margin-top: -36px";
    },
    mouseleaveGit() {
      this.isOpenChipGit = false;
      this.styleGit = "";
    },
  },
};
</script>

<style>
.myAccount {
  display: block;
}

.myAccount:hover {
  opacity: 0.3;
}

.sub_contents {
  background-color: #5bbee5;
  border-radius: 50px 50px 0px 0px;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .sns {
    display: flex;
    height: 65vh;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .sns {
    display: flex;
    height: 42vw;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .sns {
    height: 35vh;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .sns-item {
    width: 120px;
  }
}
</style>
