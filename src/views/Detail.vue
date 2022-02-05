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
    <div class="image_box">
      <img
        :src="this.image"
        :alt="this.title"
        class="detail-work-img"
        loading="eager"
        @click="openModal"
      />
      <Modal
        :image="this.image"
        :alt="this.title"
        v-if="isOpenModal"
        @close="closeModal"
      />
    </div>
    <div class="module--spacing--verySmall"></div>
    <p v-show="isHide" class="link">
      <a v-bind:href="this.url" target="_blank" class="url">{{ this.url }}</a>
    </p>
    <div class="module--spacing--verySmall"></div>
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
import Modal from "../components/Modal";
import Button from "../components/UIKit/Button";
import PulseLoader from "vue-spinner/src/PulseLoader";
import CommutionError from "../components/UIKit/CommutionError";

export default {
  components: {
    Modal,
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
      isImgLoading: true,
      isLoading: true,
      isCommunicationError: true,
      isOpenModal: false,
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

    openModal() {
      this.isOpenModal = true;
      this.no_scroll();
    },
    closeModal() {
      this.isOpenModal = false;
      this.ok_scroll();
    },
    // スクロール禁止
    no_scroll() {
      document.addEventListener("mousewheel", this.scroll_control, {
        passive: false,
      });
      document.addEventListener("touchmove", this.scroll_control, {
        passive: false,
      });
    },
    // スクロール禁止解除
    ok_scroll() {
      document.removeEventListener("mousewheel", this.scroll_control, {
        passive: false,
      });
      document.removeEventListener("touchmove", this.scroll_control, {
        passive: false,
      });
    },
    // スクロール関連メソッド
    scroll_control(event) {
      event.preventDefault();
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

.detail-work-img:hover {
  box-shadow: 0 0 0 0 rgba(115, 112, 112, 0.6);
}
/*PC*/
@media screen and (min-width: 1026px) {
  .detail-contents {
    position: relative;
    border: 3px solid black;
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
    height: 1350px;
    background-color: #cdebf7;
  }

  .detail-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 4em;
    text-align: center;
  }

  .image_box {
    height: 600px;
  }

  .detail-work-img {
    box-shadow: 5px 3px 5px 2px rgba(115, 112, 112, 0.6);
    max-width: 95%;
    height: 590px;
    border-radius: 5px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .url {
    font-size: 2.2em;
  }

  .detail-message {
    font-size: 1.2em;
    width: 90%;
    height: 350px;
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
    height: 950px;
    background-color: #cdebf7;
  }

  .detail-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 3em;
    text-align: center;
  }

  .image_box {
    height: 410px;
  }

  .detail-work-img {
    box-shadow: 5px 3px 5px 2px rgba(115, 112, 112, 0.6);
    max-width: 90%;
    height: 400px;
    border-radius: 5px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .url {
    display: block;
    overflow: auto;
    font-size: 2em;
  }

  .detail-message {
    width: 90%;
    height: 220px;
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
    height: 750px;
    background-color: #cdebf7;
  }

  .detail-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 2em;
    text-align: center;
  }

  .image_box {
    height: 210px;
  }

  .detail-work-img {
    box-shadow: 5px 3px 5px 2px rgba(115, 112, 112, 0.6);
    max-width: 95%;
    height: 200px;
    border-radius: 5px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .url {
    font-size: 1.5rem;
    margin-top: 10px;
  }

  .detail-message {
    width: 95%;
    height: 250px;
    word-break: break-all;
    margin: 0% auto;
    overflow-y: scroll;
    border: solid 1px #444;
    padding: 1%;
    text-align: left;
  }
}
</style>
