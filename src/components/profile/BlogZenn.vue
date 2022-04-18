<template>
  <article class="zenn">
    <div class="zenn-box">
      <Card
        v-for="blog in blogs"
        v-bind:key="blog.id"
        :url="blog.link"
        :img="image"
        :title="blog.title"
        :date="blog.pubDate"
      />
    </div>

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
import Card from "../profile/Card.vue";

export default {
  data() {
    return {
      blogs: [],
      image: require("@/assets/zenn.png"),
      finish: false,
      isEmptyFlg: true,
    };
  },
  components: {
    Button,
    Card,
  },
  created() {
    //API実行
    this.getZenn();
  },
  methods: {
    async getZenn() {
      await axios
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
      if (this.blogs.length > 1) {
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

.zenn-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .zenn {
    height: 350px;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 4em;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .zenn {
    height: 680px;
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
    height: 430px;
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
