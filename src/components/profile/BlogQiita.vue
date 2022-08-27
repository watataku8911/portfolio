<template>
  <section class="qiita">
    <div class="qiita-area" ref="qiitaArea">
      <div class="qiita-box">
        <Card
          v-for="blog in blogs"
          :key="blog.id"
          :url="blog.url"
          :img="image"
          :title="blog.title"
          :date="blog.created_at"
        />
        <div class="center">
          <p class="just-minutes" v-if="isEmptyFlg">Coming Soon...</p>
          <CommutionError v-if="isCommunicationError" v-on:reLoad="reLoad" />
          <pulse-loader :loading="isLoading"></pulse-loader>
        </div>
      </div>
      <p class="jump-qiita" ref="qiitaButton">
        <a href="https://qiita.com/watataku8911" target="_blank">
          <Button msg="MORE ▶︎" @push="jumpQiita" v-show="finish" />
        </a>
      </p>
    </div>
  </section>
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
      isEmptyFlg: false,
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
  mounted() {
    const options = {};
    const observer = new IntersectionObserver(this.setItemAction, options);
    observer.observe(this.$refs.qiitaArea);
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
        .get(qiitaApiURL, { headers: this.headers })
        .then((resp) => {
          if (resp.status == 200) {
            if (resp.data.length == 0) {
              this.isEmptyFlg = true;
              this.isLoading = false;
              this.isCommunicationError = false;
            } else {
              this.blogs = resp.data;
              this.isLoading = false;
              this.finish = true;
              this.isCommunicationError = false;
            }
          }
        })
        .catch((err) => {
          if (err) {
            this.isLoading = false;
            this.isCommunicationError = true;
          }
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
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.qiita-area.active {
  animation: example 0.5s ease 0.3s 1 forwards;
}

@keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 0px);
  }
}

.qiita-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.jump-qiita {
  text-align: right;
  padding-right: 25px;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .qiita {
    height: 350px;
    position: relative;
  }

  .qiita-area {
    opacity: 0;
    transform: translate(-30px, 0px);
    height: 100%;
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

  .just-minutes {
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 4em;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .qiita {
    height: 680px;
    position: relative;
  }

  .qiita-area {
    opacity: 0;
    transform: translate(-10px, 0px);
    height: 100%;
  }

  .just-minutes {
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 5vw;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .qiita {
    height: 430px;
    position: relative;
  }

  .qiita-area {
    opacity: 0;
    transform: translate(0px, 20px);

    height: 100%;
  }

  .just-minutes {
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 2em;
  }
}
</style>
