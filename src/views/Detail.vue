<template>
  <section id="detail-contents" class="detail-contents">
    <!-- 画面中央に出しているやつ(ローディングなど) -->
    <div class="align-center">
      <CommutionError v-if="isCommunicationError" v-on:reLoad="reLoad" />
      <div class="module--spacing--large"></div>
      <pulse-loader :loading="isLoading"></pulse-loader>
    </div>
    <!-- 画面中央に出しているやつ(ローディングなど) -->

    <h2 class="detail-title">{{ this.title }}</h2>
    <div class="image">
      <img
        v-bind:src="this.image"
        v-bind:alt="this.title"
        class="detail-work-img"
        loading="eager"
      />
    </div>
    <p v-show="isHide">
      <a v-bind:href="this.url" target="_blank" class="url">{{ this.url }}</a>
    </p>
    <p class="detail-message" v-show="isHide">
      <span v-html="nl2br(this.description)"></span>
    </p>
    <div class="module--spacing--small"></div>
    <router-link
      v-bind:to="{
        name: 'Content',
        hash: '#work-contents',
        params: { page: this.page, categoryId: categoryId },
      }"
      v-smooth-scroll="{ duration: 1000, offset: -50 }"
    >
      <Button msg="一覧へもどる" @push="backPage" v-show="isHide" />
    </router-link>
  </section>
</template>

<script>
import { db } from "../firebase/index";
import Button from "../components/UIKit/Button";
import PulseLoader from "vue-spinner/src/PulseLoader";
import CommutionError from "../components/UIKit/CommutionError";

export default {
  components: {
    Button,
    PulseLoader,
    CommutionError,
  },
  data() {
    return {
      id: this.$route.params.id,
      page: this.$route.params.page,
      categoryId: this.$route.params.categoryId,
      title: "",
      image: "",
      url: "",
      description: "",
      isHide: false,
      isLoading: true,
      isCommunicationError: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
  },
  created() {
    this.isCommunicationError = false;
    this.isHide = false;
    //API取得
    this.searchIdWork();
  },
  methods: {
    async searchIdWork() {
      let query = db.collection("works").doc(this.id);
      await query
        .get()
        .then((resp) => {
          const data = resp.data();
          this.title = data.title;
          this.image = data.imagePath;
          this.url = data.url;
          this.description = data.description;

          this.isLoading = false;
          this.isCommunicationError = false;
          this.isHide = true;
        })
        .catch(() => {
          this.isLoading = false;
          this.isCommunicationError = true;
          this.isHide = false;
        });
    },
    nl2br(str) {
      str = str.replace(/\r\n/g, "<br />");
      str = str.replace(/(\n|\r)/g, "<br />");
      return str;
    },
    backPage() {
      return;
    },
    reLoad() {
      this.isLoading = true;
      this.isCommunicationError = false;
      setTimeout(() => {
        this.searchIdWork();
      }, 1000);
    },
  },
};
</script>

<style scoped>
.align-center {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.url:hover {
  text-decoration: underline;
}

.btn:hover {
  text-decoration: none;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .detail-contents {
    position: relative;
    border: 3px solid black;
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
    height: calc(55vw + 55vh);
    background-color: #cdebf7;
  }

  .detail-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 7vh;
    text-align: center;
  }

  .detail-work-img {
    max-width: 95%;
    height: 80vh;
    border-radius: 5px;
    box-shadow: -8px 6px 5px -3px #b29d9e;
    margin-bottom: 10px;
    object-fit: cover;
    background-color: #eee;
  }

  .url {
    display: block;
    margin-bottom: 10px;
    overflow: auto;
    font-size: calc(112.5% + 0.25vw);
  }

  .detail-message {
    font-size: 2vh;
    width: 90%;
    height: calc(20vh + 3vw);
    margin: 0% auto;
    word-break: break-all;
    overflow-y: scroll;
    border: solid 1px #444;
    padding: 1%;
    text-align: left;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .detail-contents {
    position: relative;
    border: 2px solid black;
    width: 90%;
    margin: 0 auto;
    height: calc(75vw + 35vh);
    background-color: #cdebf7;
  }

  .detail-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 5vh;
    text-align: center;
  }

  .detail-work-img {
    max-width: 90%;
    height: calc(35vw + 15vh);
    border-radius: 5px;
    box-shadow: -8px 6px 5px -3px #b29d9e;
    margin-bottom: 10px;
    object-fit: cover;
    background-color: #eee;
  }

  .url {
    display: block;
    margin-bottom: 10px;
    overflow: auto;
    font-size: calc(112.5% + 0.25vw);
  }

  .detail-message {
    width: 90%;
    height: calc(3vh + 20vw);
    word-break: break-all;
    margin: 0% auto;
    overflow-y: scroll;
    border: solid 1px #444;
    padding: 1%;
    text-align: left;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .detail-contents {
    position: relative;
    border: 2px solid black;
    width: 99%;
    margin: 0 auto;
    height: calc(85vh + 80px);
    background-color: #cdebf7;
  }

  .detail-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 3vh;
    text-align: center;
  }

  .detail-work-img {
    max-width: 95%;
    height: 30vh;
    border-radius: 5px;
    box-shadow: -8px 6px 5px -3px #b29d9e;
    margin-bottom: 10px;
    object-fit: cover;
    background-color: #eee;
  }

  .url {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    overflow: auto;
    font-size: calc(100% + 0.2vw);
  }

  .detail-message {
    width: 95%;
    height: calc(23vh + 10vw);
    word-break: break-all;
    margin: 0% auto;
    overflow-y: scroll;
    border: solid 1px #444;
    padding: 1%;
    text-align: left;
  }
}
</style>
