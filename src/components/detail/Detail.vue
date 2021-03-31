<template>
  <div class="inner">
    <div class="image">
      <img
        v-bind:src="this.image"
        v-bind:alt="this.title"
        class="detail-work-img"
      />
    </div>
    <p class="url" v-show="isHide">
      <a v-bind:href="this.url" target="_blank">{{ this.url }}</a>
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
      v-smooth-scroll="{ duration: 1000, offset: -50 }">
      <Button msg="一覧へもどる" @push="backPage" v-show="isHide"/>
    </router-link>
  </div>
</template>
<script>
import {db} from '../../firebase/index'
import Button from '../UIKit/Button'

export default {
  components: {
    Button
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
      .catch(() => {
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
    backPage() {
      return;
    }
  },
};
</script>

<style>
.inner a:hover {
  text-decoration: underline;
}
.inner .btn:hover {
  text-decoration: none;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .inner {
    width: 100%;
    height: 95%;
    position: relative;
  }

  .inner .detail-work-img {
    max-width: 90%;
    height: 80vh;
    border-radius: 5px;
    box-shadow: -8px 6px 5px -3px #b29d9e;
    margin-bottom: 10px;
    object-fit: cover;
    background-color: #eee;
  }

  .url a {
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
  .inner {
    width: 100%;
    height: 95%;
    overflow: hidden;
    position: relative;
  }

  .inner .detail-work-img {
    max-width: 90%;
    height: calc(35vw + 15vh);
    border-radius: 5px;
    box-shadow: -8px 6px 5px -3px #b29d9e;
    margin-bottom: 10px;
    object-fit: cover;
    background-color: #eee;
  }

  .url a {
    display: block;
    margin-bottom: 10px;
    overflow: auto;
    font-size: calc(112.5% + 0.25vw);
  }

  .detail-message {
    width: 90%;
    height: calc(10vh + 8vw);
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
  .inner {
    width: 100%;
    height: 95%;
    overflow: hidden;
    position: relative;
  }

  .inner .detail-work-img {
    max-width: 95%;
    height: 40vh;
    border-radius: 5px;
    box-shadow: -8px 6px 5px -3px #b29d9e;
    margin-bottom: 10px;
    object-fit: cover;
    background-color: #eee;
  }

  .url a {
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
