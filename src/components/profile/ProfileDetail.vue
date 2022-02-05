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
        <p class="message">
          はじめまして。この度は「Watataku's」をご覧いただき誠にありがとうございます。<br />
          こちらのサイトはマークアップエンジニア/フロントエンドエンジニア、Watatakuのホームページです。<br />
          <br />
          WEBサイト制作では<i style="font-weight:600">「デザイン崩れ」</i
          >がないサイト制作を目指し、アプリケーション開発では<i
            style="font-weight:600"
            >「バグがなく、UI/UXを意識した」</i
          >アプリケーション開発を目指しています。
          <br />
          <br />
          お仕事のご相談やその他感想などがございましたら、
          <router-link
            to="/contact#c-box"
            v-smooth-scroll="{ duration: 1000, offset: -50 }"
            >こちら</router-link
          >のお問い合わせフォームまたは<router-link
            to="/#sub_contents"
            v-smooth-scroll="{ duration: 1000, offset: -50 }"
            >Twitter/Instagram</router-link
          >のDMまでお願いします。
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
    font-size: 4em;
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
    width: 300px;
    height: 300px;
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
    text-align: left;
    line-height: 5vh;
    letter-spacing: 5px;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .profile-detail {
    overflow: hidden;
    margin-bottom: 20px;
  }

  .profile {
    font-weight: bold;
    letter-spacing: 30px;
    margin-left: 30px;
    margin-bottom: 20px;
  }

  .right-left {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .left img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 1px #777;
    -moz-box-shadow: 0px 0px 2px 1px #777;
    -webkit-box-shadow: 0px 0px 2px 1px #777;
  }

  .left .name {
    font-size: calc(1.5em + 12px);
    letter-spacing: 5px;
  }

  .right {
    width: 55%;
    margin-right: 3%;
    margin-top: 10px;
  }

  .right .message {
    text-align: left;
    font-size: calc(1.5vh + 1.5vw);
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
    width: 100px;
    height: 100px;
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
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 1px;
  }
}
</style>
