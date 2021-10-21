<template>
  <div class="profile-detail">
    <h2 class="profile">PLOFILE</h2>
    <div class="right-left">
      <div class="left">
        <picture>
          <source
            srcset="@/assets/Hight_icon_watataku's_radius.webp"
            type="image/webp"
          />
          <img
            src="@/assets/Hight_icon_watataku's_radius.png"
            width="200"
            height="200"
            alt="Watatakuのアイコン"
          />
        </picture>
        <p class="name">Watataku</p>
      </div>

      <div class="right">
        <p class="message" style="text-align: left">
          はじめまして。この度は「Watataku's」をご覧いただき誠にありがとうございます。<br />
          こちらのサイトはマークアップエンジニア/フロントエンドエンジニア、Watatakuのホームページです。<br />
          <br />
          WEBサイト制作では<i style="font-weight:600">「デザイン崩れ」</i
          >がないサイト制作を目指し、アプリケーション開発では<i
            style="font-weight:600"
            >「バグがなく、UI/UXを意識した」</i
          >アプリケーション開発を目指しています。<br />
          お仕事のご相談やその他感想などがございましたら、
          <router-link
            to="/contact#c-box"
            v-smooth-scroll="{ duration: 1000, offset: -50 }"
            >こちら</router-link
          >または<router-link
            to="/#sub_contents"
            v-smooth-scroll="{ duration: 1000, offset: -50 }"
            >Twitter/Instagram</router-link
          >のDMまでお願いします
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["users"],
};
</script>
<style>
/*PC*/
@media screen and (min-width: 1026px) {
  .profile-detail {
    overflow: hidden;
    margin-bottom: 30px;
  }

  .profile {
    font-size: 7vh;
    font-weight: bold;
    letter-spacing: 50px;
    margin-left: 50px;
    color: #343437;
  }

  .right-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left {
    width: 35%;
  }

  .left img {
    width: 25vh;
    height: 25vh;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 1px #777;
    -moz-box-shadow: 0px 0px 2px 1px #777;
    -webkit-box-shadow: 0px 0px 2px 1px #777;
  }

  .left .name {
    letter-spacing: 5px;
    font-size: calc((112.5% + 0.25vw) * 2);
  }

  .right {
    width: 55%;
    margin-right: 3%;
    margin-top: 10px;
  }

  .right .message {
    font-size: calc(112.5% + 0.25vw);
    line-height: 5vh;
    letter-spacing: 5px;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .profile-detail {
    overflow: hidden;
    margin-bottom: 30px;
  }

  .profile {
    font-weight: bold;
    letter-spacing: 15px;
    margin-left: 15px;
  }

  .right-left {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .left {
    width: 35%;
  }

  .left img {
    width: 23vh;
    height: 23vh;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 1px #777;
    -moz-box-shadow: 0px 0px 2px 1px #777;
    -webkit-box-shadow: 0px 0px 2px 1px #777;
  }

  .left .name {
    font-size: 1.5em;
    letter-spacing: 5px;
  }

  .right {
    width: 55%;
    margin-right: 3%;
    margin-top: 10px;
  }

  .right .message {
    font-size: 1.3em;
    line-height: 5vh;
    letter-spacing: 3px;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .left {
    width: 100%;
    float: none !important;
  }

  .profile {
    font-weight: bold;
    letter-spacing: 2px;
    margin-left: 2px;
  }

  .left img {
    width: 18vh;
    height: 18vh;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 1px #777;
    -moz-box-shadow: 0px 0px 2px 1px #777;
    -webkit-box-shadow: 0px 0px 2px 1px #777;
  }

  .left .name {
    font-size: 25px;
    letter-spacing: 5px;
  }

  .right {
    float: none !important;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .right .message {
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 1px;
  }
}
</style>
