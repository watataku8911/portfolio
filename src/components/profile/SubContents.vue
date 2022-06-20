<template>
  <div class="sub_contents" id="sub_contents">
    <div class="sns">
      <div class="sns-item-tw" :style="styleTw" ref="snsItemTw">
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
      <div class="sns-item-inst" :style="styleInst" ref="snsItemInst">
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
      <div class="sns-item-git" :style="styleGit" ref="snsItemGit">
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
  mounted() {
    const options = {};
    let observer = new IntersectionObserver(this.setItemActive, options);
    observer.observe(this.$refs.snsItemTw);
    observer.observe(this.$refs.snsItemInst);
    observer.observe(this.$refs.snsItemGit);
  },
  methods: {
    setItemActive(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
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

.sns-item-tw,
.sns-item-inst,
.sns-item-git {
  opacity: 0;
  transform: translate(0, 50px);
}

.sns-item-tw.active {
  animation: example 0.3s ease 0.5s 1 forwards;
}

.sns-item-inst.active {
  animation: example 0.8s ease 0.5s 1 forwards;
}

.sns-item-git.active {
  animation: example 1.3s ease 0.5s 1 forwards;
}
@keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 0px);
  }
}
/*PC*/
@media screen and (min-width: 1026px) {
  .sns {
    display: flex;
    height: 600px;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .sns {
    display: flex;
    height: 400px;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .sns {
    height: 350px;
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
