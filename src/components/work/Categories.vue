<template>
  <!-------- div.categories -------->
  <div
    class="categories"
    v-on:mouseover="mouseover"
    v-on:mouseleave="mouseleave"
  >
    <a href="javascript:void[0]" class="category">Category</a>
    <ul v-show="isCategoryFlg">
      <li>
        <router-link
          v-bind:to="{
            name: 'Content',
            params: { page: 1, categoryId: 0 },
            hash: '#work-contents'
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
            hash: '#work-contents'
          }"
          @click.native="click(item.category_id)"
          v-smooth-scroll="{ duration: 1000, offset: -50 }"
          >{{ item.category_name }}</router-link
        >
      </li>
    </ul>
  </div>
  <!---- /div.categories ------->
</template>
<script>
import firebase from '../../firebase/firebace.config'

export default {
  data() {
    return {
      isCategoryFlg: false,
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
      const db = firebase.firestore();
      let query = await db.collection("categories").orderBy("category_id");
      query.get()
      .then((resp) => {
        const categoryList = [];
        resp.forEach((doc) => {
          const data = doc.data();
          categoryList.push(data);
          this.categories = categoryList;
        })
      })
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
    position: absolute;
    right: 3vh;
    top: 1vh;
    z-index: 20;
  }

  .categories .category {
    font-size: 2vh;
    font-weight: bold;
    color: #000;
    letter-spacing: 2px;
  }

  .categories ul {
    background-color: white;
    padding: 1vh;
    border-radius: 5px;
    box-shadow: 0px 0px 31px -13px #000;
  }

  .categories ul li {
    font-size: 1.5vh;
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
    position: absolute;
    right: 3.5vh;
    top: 1vh;
    z-index: 20;
  }

  .categories .category {
    font-size: 2vh;
    font-weight: bold;
    color: #000;
    letter-spacing: 2px;
  }

  .categories ul {
    background-color: white;
    padding: 1vh;
    border-radius: 5px;
    box-shadow: 0px 0px 31px -13px #000;
  }

  .categories ul li {
    font-size: 1.5vh;
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
/*スマホ*/
@media screen and (max-width: 481px) {
  .categories {
    position: absolute;
    left: 0.5vh;
    top: 1vh;
    z-index: 20;
  }

  .categories .category {
    font-size: 1.5vh;
    font-weight: bold;
    color: #000;
    letter-spacing: 2px;
  }

  .categories ul {
    background-color: white;
    padding: 1vh;
    border-radius: 5px;
    box-shadow: 0px 0px 31px -13px #000;
  }

  .categories ul li {
    font-size: 1.5vh;
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