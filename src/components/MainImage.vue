<template>
  <div id="image">
    <div id="main_image">
      <p>Watataku's</p>
    </div>

    <div id="pic_down">
      <img src="@/assets/pic_down.webp" width="88" height="31" />
    </div>

    <div id="bg_header_inpage_nomal">
      <img src="@/assets/line_perple_top.webp" class="line_perple_top" alt />
      <img src="@/assets/line_blue_top.webp" class="line_blue_top" alt />
      <img src="@/assets/line_pink_top.webp" class="line_pink_top" alt />
      <img src="@/assets/line_pink_top2.webp" class="line_pink_top2" alt />
    </div>
  </div>
</template>
<script>
import imagesLoaded from "imagesloaded";

export default {
  mounted() {
    imagesLoaded(
      document.getElementById("main_image"),
      { background: true },
      () => {
        this.$emit("image-load-finish", "complete");
      }
    );
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');

.line_perple_top {
  width: 100vw;
  z-index: -99;
  position: absolute;
  top: 0;
  left: 0;
}

.line_blue_top {
  height: 50vh;
  width: 100vw;
  z-index: -99;
  position: absolute;
  top: -10vh;
  right: 0;
}

.line_pink_top {
  height: 50vh;
  width: 100vw;
  z-index: -99;
  position: absolute;
  top: 30vh;
  right: 0;
}

.line_pink_top2 {
  width: 100vw;
  z-index: -99;
  position: absolute;
  top: 60vh;
  right: 0;
}

#pic_down {
  position: relative;
  width: 30%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 60px;
  animation-name: picdown;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}

@keyframes picdown {
  /*タイプライターライクなアニメーション*/
  from {
    top: 0px;
  }
  to {
    top: 20px;
  }
}

@media screen and (min-width: 1026px) {
  #main_image {
    position: relative;
    border-radius: 150pt;
    box-shadow: 7px 10px 22px 9px #2f2d33;
    max-width: 80%;
    height: 75vh;
    margin: 0 auto;
    background-image: url(../assets/main.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    margin-bottom: 5vh;
    margin-top: 3vw;
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
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  #main_image {
    position: relative;
    border-radius: 40pt;
    box-shadow: -10px 10px 13px -2px #2f2d33;
    width: 75%;
    height: 55.5vh;
    margin: 0 auto;
    background-image: url(../assets/main.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    margin-bottom: 60px;
    margin-top: 5vw;
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
}

@media screen and (max-width: 481px) {
  #main_image {
    position: relative;
    border-radius: 10%;
    box-shadow: -5px 5px 13px -2px #2f2d33;
    width: 85%;
    height: 50vh;
    margin: 0 auto;
    background-image: url(../assets/main.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    margin-bottom: 30px;
    margin-top: 25px;
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
}
</style>
