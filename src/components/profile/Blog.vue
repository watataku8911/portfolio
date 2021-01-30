<template>
  <div class="blog">
    <h2 class="b-new-article">最新記事(Qiita)</h2>
    <div class="load">
      <pulse-loader :loading="isLoading"></pulse-loader>
    </div>
    <div class="article">
      <ul class="articles" v-for="blog in blogs" v-bind:key="blog.id">
        <li class="title">
          <a v-bind:href="blog.url" target="_blank" class="click">
            {{ blog.title }}
          </a>
        </li>
      </ul>
      <a
        href="https://qiita.com/watataku8911"
        target="_blank"
        class="btn"
        v-show="finish"
        >MORE ＞</a
      >
    </div>
  </div>
</template>
<script>
import PulseLoader from "vue-spinner/src/PulseLoader";
import axios from "axios";
import {qiitaApiURL} from "../../seacretDirectory/seacret"

export default {
  components: {
    PulseLoader,
  },
  data() {
    return {
      blogs: [],
      isLoading: true,
      finish: false,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
  },
  created() {
    //API実行
    this.getBlog();
  },
  methods: {
    async getBlog() {
      await axios
        .get(
          qiitaApiURL(),
          { headers: this.headers }
        )
        .then((resp) => {
          //console.log(resp.data);
          this.blogs = resp.data;
          this.isLoading = false;
          this.finish = true;
          this.$emit("qiitaAPI", resp.data[0].user);
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = true;
        });
    },
  },
};
</script>
<style scoped>
.load {
  position: relative;
  top: 50%;
  z-index: 1000;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .blog {
    position: relative;
  }

  .b-new-article {
    font-size: 5vh;
    font-weight: bold;
    letter-spacing: 50px;
    color: #343437;
  }

  .title {
    text-align: left;
    margin-bottom: 10px;
    padding-left: 1%;
  }

  .title a {
    font-size: 3vh;
    color: rgb(99, 103, 103);
    line-height: 1.75;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .title a:hover {
    color: #5bbee4;
    border-bottom: #5bbee4 2px solid;
  }

  .btn {
    font-size: 1.5em;
    width: 20%;
    border-radius: 150px;
    letter-spacing: 5px;
    position: absolute;
    right: calc(0px + 5%);
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
    margin-top: 10px;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .blog {
    position: relative;
  }

  .b-new-article {
    text-align: center;
    font-size: 2.5em;
    font-weight: bold;
    letter-spacing: 10px;
    color: #343437;
  }

  .title {
    text-align: left;
    padding-left: 1%;
  }

  .title a {
    color: rgb(99, 103, 103);
    line-height: 1.75;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .btn {
    font-size: 3vw;
    width: 35.5%;
    border-radius: 150px;
    letter-spacing: 5px;
    position: absolute;
    right: calc(0px + 5%);
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
    margin-top: 10px;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .b-new-article {
    font-size: 5vh;
    font-weight: bold;
    letter-spacing: 10px;
    color: #343437;
  }

  .title {
    text-align: left;
    margin-bottom: 5px;
    padding-left: 1%;
  }

  .title a {
    color: rgb(99, 103, 103);
    line-height: 1.75;
    font-size: 3vh;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }

  .btn {
    width: 40%;
    border-radius: 150px;
    letter-spacing: 5px;
    margin-left: 50%;
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
  }
}
</style>
