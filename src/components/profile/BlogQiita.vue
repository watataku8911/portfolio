<template>
  <article class="qiita">
    <div class="qiita-box">
      <Card
        v-for="blog in blogs"
        v-bind:key="blog.id"
        :url="blog.url"
        :img="image"
        :title="blog.title"
        :date="blog.created_at"
      />
    </div>
    <div class="module--spacing--verySmall"></div>
    <p class="jump-qiita">
      <a href="https://qiita.com/watataku8911" target="_blank">
        <Button msg="MORE ▶︎" @push="jumpQiita" v-show="finish" />
      </a>
    </p>
    <CommutionError v-show="isCommunicationError" v-on:reLoad="reLoad" />
    <div class="module--spacing--large"></div>
    <pulse-loader :loading="isLoading"></pulse-loader>
  </article>
</template>

<script>
import CommutionError from "../UIKit/CommutionError";
import Button from "../UIKit/Button";
import PulseLoader from "vue-spinner/src/PulseLoader";
import axios from "axios";
import { qiitaApiURL } from "../../seacretDirectory/seacret";

import Card from "../profile/Card.vue";

export default {
  data() {
    return {
      blogs: [],
      image: require("@/assets/qiita-ogp.png"),
      isLoading: true,
      finish: false,
      isCommunicationError: false,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
  },
  components: {
    CommutionError,
    Button,
    PulseLoader,
    Card,
  },
  created() {
    //API実行
    this.getBlog();
  },
  methods: {
    async getBlog() {
      await axios
        .get(qiitaApiURL, { headers: this.headers })
        .then((resp) => {
          this.blogs = resp.data;
          this.isLoading = false;
          this.finish = true;
          this.isCommunicationError = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.isCommunicationError = true;
        });
    },
    reLoad() {
      this.isLoading = true;
      this.isCommunicationError = false;
      setTimeout(() => {
        this.getBlog();
      }, 1000);
    },
    jumpQiita() {
      return;
    },
  },
  watch: {
    blogs() {
      if (this.blogs.length > 4) {
        this.blogs.pop();
      }
    },
  },
};
</script>

<style scoped>
.jump-qiita {
  text-align: right;
  padding-right: 25px;
}

.qiita-box {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .qiita {
    height: 350px;
  }

  .qiita-box::after {
    display: block;
    width: 20vw;
    content: "";
  }

  .qiita-blog-box::before {
    display: block;
    width: 20vw;
    content: "";
    order: 1;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .qiita {
    height: 680px;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .qiita {
    height: 430px;
  }
}
</style>
