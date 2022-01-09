<template>
  <article class="qiita">
    <ul v-for="blog in blogs" v-bind:key="blog.id">
      <li class="qiita-title">
        <a v-bind:href="blog.url" target="_blank" class="click">
          {{ blog.title }} ↗︎
        </a>
      </li>
    </ul>
    <div class="module--spacing--small"></div>
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

export default {
  data() {
    return {
      blogs: [],
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
  },
  created() {
    //API実行
    this.getBlog();
  },
  methods: {
    async getBlog() {
      await axios
        .get(qiitaApiURL(1, 2), { headers: this.headers })
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
};
</script>

<style scoped>
.jump-qiita {
  text-align: right;
  padding-right: 25px;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .qiita {
    height: 245px;
  }

  .qiita-title {
    text-align: left;
    margin-bottom: 10px;
    padding-left: 1%;
  }

  .qiita-title a {
    font-size: 3vh;
    color: rgb(99, 103, 103);
    line-height: 1.75;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .qiita-title a:hover {
    color: #5bbee4;
    border-bottom: #5bbee4 2px solid;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .qiita {
    height: 223px;
  }

  .qiita-title {
    text-align: left;
    padding-left: 1%;
  }

  .qiita-title a {
    color: rgb(99, 103, 103);
    line-height: 1.75;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .qiita {
    height: calc(28vh + 50px);
  }

  .qiita-title {
    text-align: left;
    margin-bottom: 5px;
    padding-left: 1%;
  }

  .qiita-title a {
    color: rgb(99, 103, 103);
    line-height: 1.75;
    font-size: 3vh;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }
}
</style>
