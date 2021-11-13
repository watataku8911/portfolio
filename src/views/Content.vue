<template>
  <section id="work-contents" class="work-contents">
    <h2 class="work-title">WORKS</h2>

    <!-- 画面中央に出しているやつ(ローディングなど) -->
    <div class="align-center">
      <p v-if="isEmptyWorks" class="msg">Coming Soon...</p>
      <CommutionError v-if="isCommunicationError" v-on:reLoad="reLoad" />
      <div class="module--spacing--large"></div>
      <pulse-loader :loading="isLoading"></pulse-loader>
    </div>
    <!-- 画面中央に出しているやつ(ローディングなど) -->

    <!-- 実際のWORK出力 -->
    <div class="items">
      <div
        class="item"
        v-for="(work, index) in getItems"
        v-bind:key="work[1][0]"
      >
        <router-link
          v-bind:to="{
            name: 'Detail',
            params: {
              id: work[1][0],
              page: currentPage,
              categoryId: categoryId,
            },
            hash: '#detail-contents',
          }"
          class="push"
          v-smooth-scroll="{ duration: 1000, offset: -50 }"
        >
          <div class="image-box">
            <img
              :src="work[1][1].imagePath"
              :alt="work[1][1].title"
              class="work_img"
              loading="lazy"
              @load="loadComplete(index)"
            />
            <Loading v-show="isImageLoaded[index]" />
          </div>
        </router-link>
      </div>
      <!-- 実際のWORK出力 -->
    </div>
    <Categories ref="categories" v-on:categoryId="changeCategoryId" />
    <paginate
      v-if="getPageCount > 1"
      v-show="isPaging"
      v-model="currentPage"
      :page-count="getPageCount"
      :click-handler="clickCallback"
      :page-range="3"
      :margin-pages="2"
      :prev-text="'＜'"
      :next-text="'＞'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    ></paginate>
  </section>
</template>

<script>
import { db } from "../firebase/index";

import Categories from "../components/work/Categories";
import CommutionError from "../components/UIKit/CommutionError";
import Loading from "../components/Loading";
import PulseLoader from "vue-spinner/src/PulseLoader";

export default {
  components: {
    Categories,
    CommutionError,
    Loading,
    PulseLoader,
  },
  data() {
    return {
      parPage: 4,
      currentPage: (this.currentPage = Number(this.$route.params.page) || 1),

      works: [],
      categoryId: this.$route.params.categoryId,
      isLoading: true,
      isCommunicationError: true,
      isEmptyWorks: true,
      isImageLoaded: [true, true, true, true],
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      isPaging: true,
    };
  },
  computed: {
    getPageCount() {
      return Math.ceil(this.works.length / this.parPage);
    },
    getItems() {
      const current = this.currentPage * this.parPage;
      const start = current - this.parPage;
      return Object.entries(this.works).slice(start, current);
    },
  },
  created() {
    this.isLoading = true;
    this.isCommunicationError = false;
    this.isEmptyWorks = false;

    this.getWorks();
  },
  methods: {
    changeCategoryId(categoryId) {
      this.categoryId = categoryId;
    },

    clickCallback() {
      this.isImageLoaded = [true, true, true, true];
      this.$router.push({
        name: "Content",
        params: {
          page: this.currentPage,
          categoryId: this.categoryId,
        },
      });
    },

    async getWorks() {
      let query = db
        .collection("works")
        .where("deleted_flg", "==", false)
        .orderBy("updated_at", "desc");
      query =
        Number(this.categoryId) != 0
          ? query.where("category_id", "==", Number(this.categoryId))
          : query;

      await query.get().then((resp) => {
        if (resp.metadata.fromCache) {
          this.isLoading = false;
          this.isCommunicationError = true;
          this.isPaging = false;
        } else {
          if (resp.size == 0) {
            this.isLoading = false;
            this.isCommunicationError = false;
            this.isEmptyWorks = true;
          } else {
            const workList = [];
            resp.forEach((doc) => {
              const data = doc.data();
              workList.push([doc.id, data]);
              this.works = workList;
            });

            this.isPaging = true;
            this.isLoading = false;
            this.isEmptyWorks = false;
            this.isCommunicationError = false;
          }
        }
      });
    },

    reLoad() {
      this.isLoading = true;
      this.isCommunicationError = false;
      setTimeout(() => {
        this.getWorks();
        this.$refs.categories.getCategories();
      }, 1000);
    },

    loadComplete(index) {
      this.$set(this.isImageLoaded, index, false);
    },
  },

  watch: {
    $route() {
      this.currentPage = Number(this.$route.params.page);
    },

    // セレクトボックスをタップすると実行
    categoryId() {
      this.works = [];
      this.isLoading = true;
      this.isCommunicationError = false;
      this.isEmptyWorks = false;
      this.isPaging = false;
      setTimeout(() => {
        this.getWorks();
      }, 1000);
    },
  },
};
</script>

<style>
.align-center {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.item:nth-child(1) {
  animation: example 0.5s ease 0.5s 1 forwards;
}

.item:nth-child(2) {
  animation: example 0.5s ease 1s 1 forwards;
}

.item:nth-child(3) {
  animation: example 0.5s ease 1.5s 1 forwards;
}

.item:nth-child(4) {
  animation: example 0.5s ease 2s 1 forwards;
}

@keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 0px);
  }
}

.item .work_img:hover {
  box-shadow: 0 0 0 0 rgba(115, 112, 112, 0.6);
}
/*PC*/
@media screen and (min-width: 1026px) {
  .work-contents {
    position: relative;
    border: 3px solid black;
    width: 85%;
    margin: 0 auto;
    height: 670px;
    background-color: #cdebf7;
  }

  .work-title {
    font-weight: bold;
    font-size: 7vh;
    letter-spacing: 50px;
    margin-left: 50px;
  }

  .items {
    text-align: center;
    width: 100%;
    height: 500px;
    display: flex;
    flex-flow: row;
  }

  .item {
    width: 25%;
    opacity: 0;
    transform: translate(0, 20px);
  }

  .item .image-box {
    border: black solid 1px;
    width: calc(9vh + 12vw);
    height: 490px;
    border-radius: 89px 5px 87px 68px;
    margin: 0 auto;
    transform: rotate(5deg);
  }

  .item .work_img {
    box-shadow: 11px 12px 26px 7px rgba(115, 112, 112, 0.6);
    height: 490px;
    border-radius: 89px 5px 87px 68px;
    width: 100%;
    height: 490px;
    object-fit: cover;
  }

  .msg {
    width: 100%;
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 15em;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .work-contents {
    position: relative;
    border: 2px solid black;
    width: 92%;
    margin: 0 auto;
    height: calc(52vw + 34px);
    background-color: #cdebf7;
  }

  .work-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: calc(2vh + 3vw);
    margin-left: 15px;
  }

  .items {
    width: 100%;
    height: calc(35vw + 17px);
    display: flex;
    flex-flow: row;
  }

  .item {
    width: 25%;
    opacity: 0;
    transform: translate(0, 20px);
  }

  .item .image-box {
    border: black solid 1px;
    width: calc(3vh + 16.5vw);
    height: calc(30vw + 45px);
    border-radius: 89px 5px 87px 68px;
    margin: 0 auto;
    transform: rotate(5deg);
  }

  .item .work_img {
    box-shadow: 11px 12px 26px 7px rgba(115, 112, 112, 0.6);
    width: 100%;
    height: calc(30vw + 45px);
    border-radius: 89px 5px 87px 68px;
    object-fit: cover;
  }

  .msg {
    width: 100%;
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: calc(9em - 6vw);
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .work-contents {
    position: relative;
    border: 2px solid black;
    width: 99%;
    margin: 0 auto;
    height: 650px;
    background-color: #cdebf7;
  }

  .work-title {
    font-weight: bold;
    letter-spacing: 15px;
    margin-left: 15px;
    font-size: 3vh;
  }

  .items {
    width: 100%;
    height: 530px;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
  }

  .item {
    width: 50%;
    opacity: 0;
    transform: translate(0, 20px);
  }

  .item .image-box {
    border: solid #000 1px;
    transform: rotate(5deg);
    width: 90%;
    height: 260px;
    margin: 0 auto;
    border-radius: 89px 5px 87px 68px;
  }

  .item .work_img {
    box-shadow: 11px 12px 26px 7px rgba(115, 112, 112, 0.6);
    width: 100%;
    height: 260px;
    border-radius: 89px 5px 87px 68px;
    object-fit: cover;
  }

  .msg {
    width: 100%;
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: calc(4.5em - 2vh);
  }
}
</style>
