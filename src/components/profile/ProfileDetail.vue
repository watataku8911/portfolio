<template>
  <div class="profile-detail">
    <h2 class="profile">PLOFILE</h2>
    <div class="left">
      <img v-bind:src="this.qiita.profile_image_url" width="200" height="200" />
      <p class="name">Watataku</p>
    </div>

    <!-- <div class="right">
      <p class="message">
        初めまして。この度は「Watataku's」をご覧いただき誠にありがとうございます。フロントエンドエンジニアの<span>Watataku</span>です。
        <br />こちらのサイトはフロントエンドエンジニアの<span>Watataku</span>が個人開発・運営しています。
        誰しもが<i style="font-weight: bold">「使いやすく、見やすく、多種多様のデバイスから見てもデザイン崩れのないページ・アプリ開発」</i>を心がけています。
        <br />お仕事のご相談やその他感想などがございましたら、
        <router-link to="/contact#c-box" v-smooth-scroll="{ duration: 1000, offset: -50 }>こちら</router-link>からお願いします。
      </p>
    </div> -->
    <div class="right">
      <p class="message">
        はじめまして。この度は「Watataku's」をご覧いただき誠にありがとうございます。<br />
        こちらのサイトはフロントエンドエンジニア志望のWatatakuが制作したページです。<br />
        誰しもが<i style="font-weight: bold">「使いやすく、見やすく、多種多様のデバイスから見てもデザイン崩れのないページ・アプリ開発」</i>を心がけています。よろしくお願いします。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["qiita"],
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
    color: #343437;
  }

  .left {
    width: 35%;
    float: left;
    margin-top: 1vh;
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
    float: right;
    margin-right: 3%;
    margin-top: 10px;
  }

  .right .message {
    text-align: ;
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
  }

  .left {
    width: 45%;
    float: left;
    margin-top: 8vh;
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
    font-size: 1.5em;
    letter-spacing: 5px;
  }

  .right {
    width: 45%;
    float: right;
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
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 1px;
  }
}
</style>
