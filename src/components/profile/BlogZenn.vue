<template>
  <article class="zenn">
    <ul v-for="blog in blogs" v-bind:key="blog.id">
      <li>
        <p class="zenn-title">
          <a v-bind:href="blog.link" target="_blank" class="click">
            {{ blog.title }}
          </a>
        </p>
      </li>
    </ul>
    <div class="module--spacing--small"></div>
    <p class="jump-zenn">
      <a href="https://zenn.com/watataku" target="_blank">
        <Button msg="MORE ▶︎" @push="jumpZenn" v-show="finish" />
      </a>
    </p>
    <p class="just-minutes" v-if="isEmptyFlg">Coming Soon...</p>
  </article>
</template>

<script>
import Button from "../UIKit/Button";
import axios from "axios";
import { getZennData } from "../../seacretDirectory/seacret";

export default {
  data() {
    return {
      blogs: [],
      finish: false,
      isEmptyFlg: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
  },
  components: {
    Button,
  },
  created() {
    //API実行
    this.getZenn();
  },
  methods: {
    async getZenn() {
      axios
        .get(getZennData())
        .then((resp) => {
          if (resp.data.items.length == 0) {
            this.isEmptyFlg = true;
            this.finish = false;
          } else {
            this.blogs = resp.data.items;
            this.isEmptyFlg = false;
            this.finish = true;
          }
        })
        .catch(() => {});
    },
    jumpZenn() {
      return;
    },
  },
  watch: {
    blogs() {
      if (this.blogs.length > 2) {
        this.blogs.pop();
      }
    },
  },
};
</script>

<style scoped>
/*PC*/
@media screen and (min-width: 1026px) {
  .zenn {
    height: 245px;
  }

  .zenn-title {
    text-align: left;
    margin-bottom: 10px;
    padding-left: 1%;
  }

  .zenn-title a {
    font-size: 3vh;
    color: rgb(99, 103, 103);
    line-height: 1.75;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .zenn-title a:hover {
    color: #5bbee4;
    border-bottom: #5bbee4 2px solid;
  }

  .jump-zenn {
    text-align: right;
    padding-right: 25px;
  }

  .just-minutes {
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 8em;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .zenn {
    height: 223px;
  }

  .zenn-title {
    text-align: left;
    padding-left: 1%;
  }

  .zenn-title a {
    color: rgb(99, 103, 103);
    line-height: 1.75;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .jump-zenn {
    text-align: right;
    padding-right: 25px;
  }

  .just-minutes {
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 5em;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .zenn {
    height: calc(28vh + 50px);
  }

  .zenn-title {
    text-align: left;
    margin-bottom: 5px;
    padding-left: 1%;
  }

  .zenn-title a {
    color: rgb(99, 103, 103);
    line-height: 1.75;
    font-size: 3vh;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .just-minutes {
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 4em;
  }
}
</style>
