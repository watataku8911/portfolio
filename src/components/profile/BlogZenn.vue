<template>
  <article class="zenn">
    <ul v-for="blog in blogs" v-bind:key="blog.id">
      <li class="zenn-title">
        <a v-bind:href="blog.link" target="_blank" class="click">
          ・{{ blog.title }}
        </a>
        <IconExternalLink />
      </li>
    </ul>

    <div class="module--spacing--verySmall"></div>
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
import IconExternalLink from "@/assets/icon/icon_external_link.svg";

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
    IconExternalLink,
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
      if (this.blogs.length > 3) {
        this.blogs.pop();
      }
    },
  },
};
</script>

<style scoped>
.jump-zenn {
  text-align: right;
  padding-right: 25px;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .zenn {
    height: 245px;
  }

  .zenn-title {
    text-align: left;
    margin-bottom: 10px;
    padding-left: 1%;
    display: flex;
    align-items: center;
  }

  .zenn-title a {
    display: block;
    font-size: 1.5em;
    color: rgb(99, 103, 103);
    letter-spacing: 0.3rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .zenn-title a:hover {
    color: #5bbee4;
  }

  .just-minutes {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 6em;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .zenn {
    height: 223px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .zenn-title {
    text-align: left;
    padding-left: 1%;
    display: flex;
    align-items: center;
  }

  .zenn-title a {
    display: block;
    color: rgb(99, 103, 103);
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .just-minutes {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 2em;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .zenn {
    height: 250px;
  }

  .zenn-title {
    text-align: left;
    margin-bottom: 5px;
    padding-left: 1px;
    display: flex;
    align-items: center;
  }

  .zenn-title a {
    display: block;
    color: rgb(99, 103, 103);
    font-size: 1.15em;
    font-weight: bold;
    letter-spacing: 0.2rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .just-minutes {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 2em;
  }
}
</style>
