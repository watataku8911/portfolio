<template>
  <header class="header">
    <HamburgerMenu />
    <div class="main_image">
      <p>Watataku's</p>
    </div>
    <div class="pic_down"></div>
  </header>
</template>
<script>
import HamburgerMenu from "../components/HamburgerMenu";
import imagesLoaded from "imagesloaded";

export default {
  components: {
    HamburgerMenu,
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
  text-align: -webkit-center;
  animation-name: picdown;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  will-change: transform;
}

.pic_down::after {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  border-top: 5px solid #000;
  border-right: 5px solid #000;
  transform: rotate(135deg);
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
    font-size: 8.5vw;
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
    height: 60vh;
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
    font-size: 8vw;
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
    height: calc(45vh + 25vw);
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
    font-size: 6vh;
    font-weight: bold;
    color: #eee;
    font-family: "Bad Script", cursive;
    letter-spacing: 5px;
  }
}
</style>
