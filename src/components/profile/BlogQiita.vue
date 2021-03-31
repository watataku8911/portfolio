<template>
	<article class="qiita">
		<div class="load">
      <pulse-loader :loading="isLoading"></pulse-loader>
    </div>
		<h3 class="qiita-h3" v-show="finish">- Qiita</h3>
		<ul class="articles" v-for="blog in blogs" v-bind:key="blog.id">
			<li class="title">
				<p><a v-bind:href="blog.url" target="_blank" class="click">
					{{ blog.title }}
				</a></p>
			</li>
		</ul>
		<LocationHref
			href="https://qiita.com/watataku8911"
			msg="MORE ＞"
			v-show="finish"
		/>
	</article>
</template>

<script>
import LocationHref from "../UIKit/LocationHref"
import PulseLoader from "vue-spinner/src/PulseLoader";
import axios from "axios";
import {qiitaApiURL} from "../../seacretDirectory/seacret"

export default {
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
	components: {
		LocationHref,
		PulseLoader
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
          this.blogs = resp.data;
          this.isLoading = false;
          this.finish = true;
        })
        .catch(() => {
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
  .qiita-h3 {
    text-align: left;
    font-size: 3vh;
    margin-left: 1%;
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
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
	.qiita-h3 {
    text-align: left;
    font-size: 1.5rem;
    margin-left: 1%;
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
}
/*スマホ*/
@media screen and (max-width: 481px) {
	.qiita-h3 {
    text-align: left;
    font-size: 3vh;
    margin-left: 1%;
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
}
</style>
