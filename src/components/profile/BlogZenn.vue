<template>
  <article class="zenn">
    <div class="zenn-area" ref="zennArea">
      <div class="zenn-box">
        <Card
          v-for="blog in blogs"
          :key="blog.id"
          :url="blog.link"
          :img="image"
          :title="blog.title"
          :date="blog.pubDate"
        />
        <p class="just-minutes" v-if="isEmptyFlg">Coming Soon...</p>
      </div>
      <p class="jump-zenn">
        <a href="https://zenn.com/watataku" target="_blank">
          <Button msg="MORE ▶︎" @push="jumpZenn" v-show="finish" />
        </a>
      </p>
    </div>
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

  .zenn-area {
    opacity: 0;
    transform: translate(10px, 0px);
    height: 100%;
  }

  .just-minutes {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 5vw;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .zenn {
    height: 430px;
  }

  .zenn-area {
    opacity: 0;
    transform: translate(0px, 20px);
    height: 100%;
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
</style>
