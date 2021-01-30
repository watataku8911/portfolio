<template>
  <div class="inner">
    <div class="image">
      <img
        v-bind:src="this.image"
        v-bind:alt="this.title"
        class="detail-work_img"
      />
    </div>
    <p class="url" v-show="isHide">
      URL:
      <a v-bind:href="this.url" target="_blank">{{ this.url }}</a>
    </p>
    <p class="detail-message" v-show="isHide">
      <span v-html="nl2br(this.description)"></span>
    </p>
      <router-link
        v-bind:to="{
          name: 'Content',
          hash: '#work-contents',
          params: { page: this.page, categoryId: categoryId },
        }"
        v-smooth-scroll="{ duration: 1000, offset: -50 }"
        class="btn"
        v-show="isHide"
        >一覧へ戻る</router-link
      >
  </div>
</template>
<script>
import firebase from '../../firebase/firebace.config'

export default {
  components: {},
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
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
  },
  created() {
    this.$emit("loadStart");
    this.$emit("notCommunicationError");
    this.isHide = false;
    //API取得
    this.searchIdWork();
  },
  methods: {
    async searchIdWork() {
      const db = firebase.firestore();
      let query =  await db.collection("works").doc(this.id)
      query.get()
      .then((resp) => {
        const data = resp.data();
        this.title = data.title;
        this.image = data.imagePath;
        this.url = data.url;
        this.description = data.description;

        this.$emit("title", data.title);
        this.$emit("loadComplete");
        this.$emit("notCommunicationError");
        this.isHide = true;
      })
      .catch((err) => {
        this.$emit("communicationError");
        this.$emit("loadComplete");
        this.isHide = false;
      });
    },
    nl2br(str) {
      str = str.replace(/\r\n/g, "<br />");
      str = str.replace(/(\n|\r)/g, "<br />");
      return str;
    },
  },
};
</script>

<style>
/*PC*/
@media screen and (min-width: 1026px) {
  .inner {
    width: 100%;
    position: relative;
  }

  .inner .detail-work_img {
    max-width: 40%;
    border-radius: 5px;
    -moz-box-shadow: -8px 6px 5px -3px #b29d9e;
    -webkit-box-shadow: -8px 6px 5px -3px #b29d9e;
    -o-box-shadow: -8px 6px 5px -3px #b29d9e;
    -ms-box-shadow: -8px 6px 5px -3px #b29d9e;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .url a {
    margin-bottom: 10px;
    margin-top: 10px;
    overflow: auto;
    font-size: calc(112.5% + 0.25vw);
  }

  .detail-message {
    font-size: 2vh;
    width: 90%;
    height: calc(20vh + 3vw);
    margin: 0% auto;
    overflow-y: scroll;
    border: solid 1px #444;
    padding: 1%;
    text-align: left;
  }

  .btn {
    margin-top: 20px;
    width: 30%;
    border-radius: 150px;
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .inner {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .inner .detail-work_img {
    max-width: 40%;
    border-radius: 5px;
    -moz-box-shadow: -8px 6px 5px -3px #b29d9e;
    -webkit-box-shadow: -8px 6px 5px -3px #b29d9e;
    -o-box-shadow: -8px 6px 5px -3px #b29d9e;
    -ms-box-shadow: -8px 6px 5px -3px #b29d9e;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .url a {
    margin-bottom: 10px;
    margin-top: 10px;
    overflow: auto;
    font-size: calc(112.5% + 0.25vw);
  }

  .detail-message {
    width: 90%;
    height: calc(10vh + 8vw);
    margin: 0% auto;
    overflow-y: scroll;
    border: solid 1px #444;
    padding: 1%;
    text-align: left;
  }

  .btn {
    margin-top: 20px;
    width: 30%;
    border-radius: 150px;
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .inner {
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .inner .detail-work_img {
    max-width: 60%;
    border-radius: 5px;
    -moz-box-shadow: -8px 6px 5px -3px #b29d9e;
    -webkit-box-shadow: -8px 6px 5px -3px #b29d9e;
    -o-box-shadow: -8px 6px 5px -3px #b29d9e;
    -ms-box-shadow: -8px 6px 5px -3px #b29d9e;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .url a {
    margin-bottom: 10px;
    margin-top: 10px;
    overflow: auto;
    font-size: calc(112.5% + 0.25vw);
  }

  .detail-message {
    width: 95%;
    height: calc(23vh + 10vw);
    margin: 0% auto;
    overflow-y: scroll;
    border: solid 1px #444;
    padding: 1%;
    text-align: left;
  }

  .btn {
    margin-top: 20px;
    width: 50%;
    border-radius: 150px;
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
  }
}
</style>
