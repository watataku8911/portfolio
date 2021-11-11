<template>
  <div
    class="categories"
    v-on:mouseover="mouseover"
    v-on:mouseleave="mouseleave"
    v-if="isCategoriesLoaded == true"
  >
    <a href="javascript:void[0]" class="category">Category</a>
    <ul v-if="isCategoryFlg">
      <li>
        <router-link
          v-bind:to="{
            name: 'Content',
            params: { page: 1, categoryId: 0 },
            hash: '#work-contents',
          }"
          @click.native="click(0)"
          v-smooth-scroll="{ duration: 1000, offset: -50 }"
          >全て</router-link
        >
      </li>
      <li v-for="item in this.categories" v-bind:key="item.category_id">
        <router-link
          v-bind:to="{
            name: 'Content',
            params: { page: 1, categoryId: item.category_id },
            hash: '#work-contents',
          }"
          @click.native="click(item.category_id)"
          v-smooth-scroll="{ duration: 1000, offset: -50 }"
          >{{ item.category_name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { db } from "../../firebase/index";

export default {
  data() {
    return {
      isCategoryFlg: false,
      isCategoriesLoaded: false,
      categories: [],
      categoryId: this.$route.params.categoryId,
    };
  },
  created() {
    //category取得API実行
    this.getCategories();
  },
  methods: {
    async getCategories() {
      let query = db.collection("categories").orderBy("category_id");
      await query.get().then((resp) => {
        const categoryList = [];
        resp.forEach((doc) => {
          const data = doc.data();
          categoryList.push(data);
          this.categories = categoryList;
          this.isCategoriesLoaded = true;
        });
      });
    },
    mouseover() {
      this.isCategoryFlg = true;
    },
    mouseleave() {
      this.isCategoryFlg = false;
    },

    // クリックイベント
    click(categoryId) {
      this.mouseleave();
      this.$emit("categoryId", categoryId);
    },
  },
};
</script>

<style scoped>
/*PC*/
@media screen and (min-width: 1026px) {
  .categories {
    z-index: 1;
    position: absolute;
    top: 1vh;
    right: 1vw;
  }

  .categories .category {
    font-size: 1.5em;
    font-weight: bold;
    color: #000;
    letter-spacing: 2px;
  }

  .categories ul {
    padding-left: 5px;
    padding-right: 5px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 31px -13px #000;
  }

  .categories ul li {
    font-size: 1em;
    line-height: 5vh;
  }

  .categories ul li a {
    display: block;
    color: #5bbee5;
  }

  .categories ul li a:hover {
    border-bottom: #5bbee5 solid 2px;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .categories {
    z-index: 1;
    position: absolute;
    top: 1vh;
    right: 1vh;
  }

  .categories .category {
    font-size: 3vw;
    font-weight: bold;
    color: #000;
    letter-spacing: 2px;
  }

  .categories ul {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 31px -13px #000;
  }

  .categories ul li {
    font-size: 2vw;
    line-height: calc(2.5vh + 2.5vw);
  }

  .categories ul li a {
    display: block;
    color: #5bbee5;
  }

  .categories ul li a:hover {
    border-bottom: #5bbee5 solid 2px;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .categories {
    z-index: 1;
    position: absolute;
    right: 0;
  }

  .categories .category {
    font-size: 1.3em;
    font-weight: bold;
    color: #000;
    letter-spacing: 2px;
  }

  .categories ul {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 31px -13px #000;
  }

  .categories ul li {
    font-size: 1em;
    line-height: 5vh;
  }

  .categories ul li a {
    display: block;
    color: #5bbee5;
  }

  .categories ul li a:hover {
    border-bottom: #5bbee5 solid 2px;
  }
}
</style>
