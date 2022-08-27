<template>
  <section class="zenn">
    <div class="zenn-area" ref="zennArea">
      <div class="zenn-box">
        <Card
          v-for="blog in blogs"
          v-bind:key="blog.id"
          :url="blog.link"
          :img="image"
          :title="blog.title"
          :date="blog.pubDate"
        />
        <div class="center">
          <p class="just-minutes" v-if="isEmptyFlg">Coming Soon...</p>
          <CommutionError v-if="isCommunicationError" v-on:reLoad="reLoad" />
          <pulse-loader :loading="isLoading"></pulse-loader>
        </div>
      </div>
      <p class="jump-zenn">
        <a href="https://zenn.dev/watataku" target="_blank">
          <Button msg="MORE ▶︎" @push="jumpZenn" v-show="finish" />
        </a>
      </p>
    </div>
  </section>
</template>

<script>
import CommutionError from "../UIKit/CommutionError";
import PulseLoader from "vue-spinner/src/PulseLoader";
import axios from "axios";
import { getZennData } from "../../seacretDirectory/seacret";
import Button from "../UIKit/Button";
import Card from "../profile/Card.vue";

export default {
  data() {
    return {
      blogs: [],
      image: require("@/assets/zenn.png"),
      isLoading: false,
      isCommunicationError: false,
      finish: false,
      isEmptyFlg: true,
    };
  },
  components: {
    CommutionError,
    PulseLoader,
    Button,
    Card,
  },
  created() {
    //API実行
    this.getZenn();
  },
  mounted() {
    const options = {};
    const observer = new IntersectionObserver(this.setItemAction, options);
    observer.observe(this.$refs.zennArea);
  },
  methods: {
    setItemAction(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    async getZenn() {
      await axios
        .get(getZennData())
        .then((resp) => {
          if (resp.status == 200) {
            if (resp.data.items.length == 0) {
              this.isEmptyFlg = true;
              this.finish = false;
            } else {
              this.blogs = resp.data.items;
              this.isEmptyFlg = false;
              this.finish = true;
            }
          }
        })
        .catch((err) => {
          if (err) {
            this.isLoading = false;
            this.isCommunicationError = true;
            this.isEmptyFlg = false;
          }
        });
    },
    reLoad() {
      this.isLoading = true;
      this.isCommunicationError = false;
      setTimeout(() => {
        this.getZenn();
      }, 1000);
    },
    jumpZenn() {
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

.zenn-area.active {
  animation: example 0.5s ease 0.5s 1 forwards;
}

@keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 0px);
  }
}
.zenn-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.jump-zenn {
  text-align: right;
  padding-right: 25px;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .zenn {
    height: 350px;
    position: relative;
  }

  .zenn-area {
    opacity: 0;
    transform: translate(30px, 0px);
    height: 100%;
  }

  .zenn-box::after {
    display: block;
    width: 20vw;
    content: "";
  }

  .zenn-box::before {
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
  .zenn {
    height: 680px;
    position: relative;
  }

  .zenn-area {
    opacity: 0;
    transform: translate(10px, 0px);
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
  .zenn {
    height: 430px;
    position: relative;
  }

  .zenn-area {
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
