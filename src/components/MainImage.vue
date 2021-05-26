<template>
  <div id="image_box">
    <div class="module--spacing--large"></div>
    <div id="main_image">
      <p>Watataku's</p>
    </div>
    <div id="pic_down"></div>

    <div class="module--spacing--veryLarge"></div>
    <div class="module--spacing--small"></div>

    <div class="bg_header_inpage_nomal">
      <picture>
        <source srcset="@/assets/Hight_bg_flower01_pc.webp" type="image/webp" media="(min-width: 1026px)" />
        <source srcset="@/assets/Hight_bg_flower01_pc.png" type="image/png"  media="(min-width: 1026px)" />
        <source srcset="@/assets/bg_flower01.webp" type="image/webp" media="(max-width: 482px)"/>
        <img src="@/assets/bg_flower01.png" class="flower"/>
      </picture>

    </div>
  </div>
</template>
<script>
import imagesLoaded from "imagesloaded";

export default {
  mounted() {
    window.onload = () => {
      imagesLoaded(
        document.getElementById("main_image"),
        { background: true },
        () => {
          this.$emit("image-load-finish", "complete");
        }
      );
    }
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');

#pic_down {
  text-align: -webkit-center;
  animation-name: picdown;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  will-change: transform;
}

#pic_down::after {
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
  #main_image {
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

  #main_image p {
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

  .bg_header_inpage_nomal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -999;
  }

  .flower {
    width: 95vw;
    height: 90vw;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  #main_image {
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

  #main_image p {
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

  .bg_header_inpage_nomal {
    position: absolute;
    top: 15%;
    left: 0;
    z-index: -999;
  }

  .flower {
    width: calc(10vh + 80vw);
    height: calc(60vh + 10vw);
  }
}

@media screen and (max-width: 481px) {
  #main_image {
    position: relative;
    border-radius: 10%;
    box-shadow: -5px 5px 13px -2px #2f2d33;
    width: 85%;
    height: calc(45vh + 25vw);
    margin: 0 auto;
    background-image: url(../assets/Hight_main.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }

  #main_image p {
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

  .bg_header_inpage_nomal {
    position: absolute;
    top: 20%;
    left: 0;
    z-index: -999;
  }

  .flower {
    width: 80vw;
    height: 50vh;
  }
}
</style>
