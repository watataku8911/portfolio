<template>
  <article class="watataku-blog">
    <div class="center">
      <CommutionError v-show="isCommunicationError" v-on:reLoad="reLoad" />
      <pulse-loader :loading="isLoading"></pulse-loader>
    </div>
    <div class="watataku-blog-area" ref="watatakuBlogArea">
      <div class="watataku-blog-box">
        <Card
          v-for="blog in blogs"
          :key="blog.id"
          :url="url + '/blog/' + blog.id"
          :img="blog.thumbnail.url"
          :title="blog.title"
          :date="blog.publishedAt"
        />
      </div>
      <p class="jump-watataku-blog">
        <a href="https://watataku-blog.vercel.app" target="_blank">
          <Button msg="MORE ▶︎" @push="jumpWatatakuBlog" v-show="finish" />
        </a>
      </p>
    </div>
  </article>
</template>

<script>
import CommutionError from "../UIKit/CommutionError";
import Button from "../UIKit/Button";
import PulseLoader from "vue-spinner/src/PulseLoader";
import axios from "axios";
import { endpoint, X_MICROCMS_API_KEY } from "../../seacretDirectory/seacret";
import Card from "../profile/Card.vue";

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
    Card,
  },
  created() {
    //API実行
    this.getBlog();
  },
  mounted() {
    const options = {};
    const observer = new IntersectionObserver(this.setItemAction, options);
    observer.observe(this.$refs.watatakuBlogArea);
  },
  methods: {
    setItemAction(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
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
      if (this.blogs.length > 4) {
        this.blogs.pop();
      }
    },
  },
};
</script>

<style scoped>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.watataku-blog-area.active {
  animation: example 0.5s ease 0.3s 1 forwards;
}

@keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 0px);
  }
}

.watataku-blog-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.jump-watataku-blog {
  text-align: right;
  padding-right: 25px;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .watataku-blog {
    height: 350px;
    position: relative;
  }

  .watataku-blog-area {
    opacity: 0;
    transform: translate(-30px, 0px);
    height: 100%;
  }

  .watataku-blog-box::after {
    display: block;
    width: 20vw;
    content: "";
  }

  .watataku-blog-box::before {
    display: block;
    width: 20vw;
    content: "";
    order: 1;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .watataku-blog {
    height: 680px;
    position: relative;
  }

  .watataku-blog-area {
    opacity: 0;
    transform: translate(-10px, 0px);
    height: 100%;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .watataku-blog {
    height: 430px;
    position: relative;
  }

  .watataku-blog-area {
    opacity: 0;
    transform: translate(0px, 20px);
    height: 100%;
  }
}
</style>
