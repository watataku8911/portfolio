<template>
  <article class="watataku-blog">
    <ul v-for="blog in blogs" v-bind:key="blog.id">
      <li class="watataku-blog-title">
        <a :href="url + '/blog/' + blog.id" target="_blank" class="click">
          ・{{ blog.title }}
        </a>
        <IconExternalLink />
      </li>
    </ul>
    <div class="module--spacing--verySmall"></div>
    <p class="jump-watataku-blog">
      <a href="https://watataku-blog.vercel.app" target="_blank">
        <Button msg="MORE ▶︎" @push="jumpWatatakuBlog" v-show="finish" />
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
import { endpoint, X_MICROCMS_API_KEY } from "../../seacretDirectory/seacret";
import IconExternalLink from "@/assets/icon/icon_external_link.svg";

export default {
  data() {
    return {
      blogs: [],
      isLoading: true,
      finish: false,
      isCommunicationError: false,
      url: "https://watataku-blog.vercel.app",
    };
  },
  components: {
    CommutionError,
    Button,
    PulseLoader,
    IconExternalLink,
  },
  created() {
    //API実行
    this.getBlog();
  },
  methods: {
    async getBlog() {
      await axios
        .get(endpoint, {
          headers: {
            "X-MICROCMS-API-KEY": X_MICROCMS_API_KEY,
          },
        })
        .then((resp) => {
          this.blogs = resp.data.contents;
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
    jumpWatatakuBlog() {
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
.jump-watataku-blog {
  text-align: right;
  padding-right: 25px;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .watataku-blog {
    height: 245px;
  }

  .watataku-blog-title {
    display: flex;
    align-items: center;
    text-align: left;
    margin-bottom: 10px;
    padding-left: 1%;
  }

  .watataku-blog-title a {
    display: block;
    font-size: 1.5em;
    color: rgb(99, 103, 103);
    letter-spacing: 0.3rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .watataku-blog-title a:hover {
    color: #5bbee4;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .watataku-blog {
    height: 223px;
  }

  .watataku-blog-title {
    display: flex;
    align-items: center;
    text-align: left;
    padding-left: 1%;
  }

  .watataku-blog-title a {
    display: block;
    color: rgb(99, 103, 103);
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .watataku-blog {
    height: 250px;
  }

  .watataku-blog-title {
    display: flex;
    align-items: center;
    text-align: left;
    margin-bottom: 5px;
    padding-left: 1px;
  }

  .watataku-blog-title a {
    display: block;
    color: rgb(99, 103, 103);
    font-size: 1.35em;
    font-weight: bold;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }
}
</style>
