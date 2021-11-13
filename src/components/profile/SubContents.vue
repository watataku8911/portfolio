<template>
  <div class="sub_contents" id="sub_contents">
    <div class="sns">
      <div class="sns-item" :style="styleTw">
        <div class="chip" v-show="this.isOpenChipTw">
          Follow me.
        </div>
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
        <div class="chip" v-show="this.isOpenChipInst">
          Follow me.
        </div>
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
        <div class="chip" v-show="this.isOpenChipGit">
          Follow me.
        </div>
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
import IcoTw from "@/assets/icon/ico_tw.svg";
import IcoInst from "@/assets/icon/ico_inst.svg";
import GithubLogo from "@/assets/icon/github.logo.svg";

export default {
  components: {
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

.chip {
  position: relative;
  top: -1.5vh;
}

.chip::before {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  width: 0px;
  border-color: #e4e4e4;
  border-style: solid;
  border-width: 10px;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .sns {
    display: flex;
    height: 45vh;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .sns {
    display: flex;
    height: 35vw;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .sns {
    display: flex;
    height: 30vh;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
