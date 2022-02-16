<template>
  <header class="header">
    <HamburgerMenu />
    <div class="main_image">
      <p>Watataku's</p>
    </div>
    <div class="pic_down">
      <IconDown />
    </div>
  </header>
</template>
<script>
import HamburgerMenu from "../components/HamburgerMenu";
import imagesLoaded from "imagesloaded";
import IconDown from "@/assets/icon/icon_down.svg";

export default {
  components: {
    HamburgerMenu,
    IconDown,
  },
  mounted() {
    window.onload = () => {
      setTimeout(() => {
        imagesLoaded(
          document.getElementsByClassName("main_image"),
          { background: true },
          () => {
            this.$emit("image-load-finish", "complete");
          }
        );
      }, 500);
    };
  },
};
</script>

<style>
.pic_down {
  width: 85%;
  margin: 0 auto;
  animation-name: picdown;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  will-change: transform;
}

@keyframes picdown {
  /*タイプライターライクなアニメーション*/
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
}

@media screen and (min-width: 1026px) {
  .main_image {
    position: relative;
    border-radius: 150pt;
    box-shadow: 7px 10px 22px 9px #2f2d33;
    max-width: 85%;
    height: 80vh;
    margin: 0 auto;
    background-image: url(../assets/Hight_main.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }

  .main_image p {
    position: absolute;
    top: 35%;
    left: 35%;
    transform: translateX(-50%) translateY(-50%);
    font-weight: bold;
    color: #eee;
    font-size: 8em;
    font-family: "Bad Script", cursive;
    letter-spacing: 5px;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .main_image {
    position: relative;
    border-radius: 40pt;
    box-shadow: -10px 10px 13px -2px #2f2d33;
    width: 75%;
    height: 630px;
    margin: 0 auto;
    background-image: url(../assets/Hight_main.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }

  .main_image p {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 6em;
    font-weight: bold;
    color: #eee;
    font-family: "Bad Script", cursive;
    letter-spacing: 5px;
  }
}

@media screen and (max-width: 481px) {
  .main_image {
    position: relative;
    border-radius: 10%;
    box-shadow: -5px 5px 13px -2px #2f2d33;
    width: 85%;
    height: 350px;
    margin: 0 auto;
    background-image: url(../assets/Hight_main.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
  }

  .main_image p {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 3em;
    font-weight: bold;
    color: #eee;
    font-family: "Bad Script", cursive;
    letter-spacing: 5px;
  }
}
</style>
