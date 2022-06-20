<template>
  <div class="profile-detail">
    <h2 class="profile" ref="profile">PLOFILE</h2>
    <div class="right-left">
      <div class="left" ref="left">
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

      <div class="right" ref="right">
        <p class="message">
          はじめまして。この度は「Watataku's」をご覧いただき誠にありがとうございます。<br />
          こちらのサイトはマークアップエンジニア/フロントエンドエンジニア、Watatakuのホームページです。<br />
        </p>
        <br />
        <br />
        <p class="message">
          WEBサイト制作では<i style="font-weight:600">「デザイン崩れ」</i
          >がないサイト制作を目指し、アプリケーション開発では<i
            style="font-weight:600"
            >「バグがなく、UI/UXを意識した」</i
          >アプリ開発を目指しています。
        </p>
        <br />
        <br />
        <p class="message">
          <i style="font-weight: 600">「インタラクティブなもの」</i>や、<i
            style="font-weight: 600"
            >「動くグラフィック」</i
          >が好きなので、少しユーモアのあるインタラクションを取り入れたサイト制作やアプリ開発を目指しています。
        </p>
        <br />
        <br />
        <p class="message">
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
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const options = {};
    const observer = new IntersectionObserver(this.setItemAction, options);
    observer.observe(this.$refs.profile);
    observer.observe(this.$refs.left);
    observer.observe(this.$refs.right);

    const messages = this.$el.querySelectorAll(".message");
    messages.forEach((el) => {
      observer.observe(el);
    });
  },
  methods: {
    setItemAction(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
  },
};
</script>
<style>
.profile.active {
  animation: example 0.5s ease 0.5s 1 forwards;
}

.left.active {
  animation: example 0.5s ease 0.5s 1 forwards;
}

.right.active {
  animation: example 0.5s ease 0.5s 1 forwards;
}

.message.active {
  animation: example 0.5s ease 0.5s 1 forwards;
}

@keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 0px);
  }
}
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
    opacity: 0;
    transform: translate(0px, 30px);
  }

  .right-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left {
    width: 35%;
    opacity: 0;
    transform: translate(-30px, 0);
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
    opacity: 0;
    transform: translate(30px, 0);
  }

  .right .message {
    font-size: calc(112.5% + 0.25vw);
    text-align: left;
    line-height: 5vh;
    letter-spacing: 5px;
    opacity: 0;
    transform: translate(30px, 0);
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
    opacity: 0;
    transform: translate(0px, 20px);
  }

  .right-left {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .left {
    opacity: 0;
    transform: translate(-10px, 0);
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
    opacity: 0;
    transform: translate(10px, 0);
  }

  .right .message {
    text-align: left;
    font-size: calc(1.5vh + 1.5vw);
    letter-spacing: 3px;
    opacity: 0;
    transform: translate(10px, 0);
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .profile {
    font-weight: bold;
    letter-spacing: 2px;
    margin-left: 2px;
    opacity: 0;
  }

  .left {
    width: 100%;
    opacity: 0;
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
    margin-top: 10px;
    margin-bottom: 20px;
    opacity: 0;
  }

  .right .message {
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 1px;
    opacity: 0;
  }
}
</style>
