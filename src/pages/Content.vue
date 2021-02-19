<template>
  <section id="work-contents" class="work-contents">
    <h2 class="work-title">WORKS</h2>
    <pulse-loader :loading="isLoading" class="load"></pulse-loader>
    <Categories ref="categories" v-on:categoryId="changeCategoryId" />

    <WorkList
      ref="work"
      v-bind:currentPage="this.currentPage"
      v-bind:parPage="this.parPage"
      v-bind:categoryId="this.categoryId"
      v-on:works="getItems"
      v-on:loadStart="onLoadStart"
      v-on:loadComplete="onLoadComplete"
      v-on:showPageBar="onShowPageBar"
      v-on:hidePageBar="onHidePageBar"
      v-on:notCommunicationError="communication"
      v-on:communicationError="communicationError"
      v-on:emptyWorks="emptyWorks"
      v-on:notEmptyWorks="notEmptyWorks"
    />

    <CommutionError
      v-show="isCommunicationError"
      v-on:loadStart="onLoadStart"
      v-on:hidePageBar="onHidePageBar"
      v-on:notCommunicationError="communication"
      v-on:notEmptyWorks="notEmptyWorks"
      v-on:reLoad="reLoad"
    />

    <p v-show="isEmptyWorks" class="msg">Coming Soon...</p>

    <a href="#work-contents" v-smooth-scroll="{ duration: 1000, offset: -50 }">
      <paginate
        v-show="isPaginate"
        v-model="currentPage"
        :page-count="getPageCount"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'＜'"
        :next-text="'＞'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      ></paginate>
    </a>
  </section>
</template>

<script>
import Categories from "../components/work/Categories";
import WorkList from "../components/work/WorkList";
import CommutionError from "../components/UIKit/CommutionError";

import PulseLoader from "vue-spinner/src/PulseLoader";

export default {
  components: {
    Categories,
    WorkList,
    CommutionError,
    PulseLoader,
  },
  data() {
    return {
      parPage: 4,
      currentPage: (this.currentPage = Number(this.$route.params.page) || 1),

      works: [],
      categoryId: this.$route.params.categoryId,
      isLoading: true,
      isPaginate: true,
      isCommunicationError: true,
      isEmptyWorks: true,
    };
  },
  methods: {
    getItems(works) {
      this.works = works;
    },
    changeCategoryId(categoryId) {
      this.categoryId = categoryId;
    },

    onLoadStart() {
      this.isLoading = true;
    },
    onLoadComplete() {
      this.isLoading = false;
    },

    onShowPageBar() {
      this.isPaginate = true;
    },
    onHidePageBar() {
      this.isPaginate = false;
    },

    communicationError() {
      this.isCommunicationError = true;
    },
    communication() {
      this.isCommunicationError = false;
    },

    emptyWorks() {
      this.isEmptyWorks = true;
    },
    notEmptyWorks() {
      this.isEmptyWorks = false;
    },

    clickCallback(pageNum) {
      this.$router.push({
        name: "Content",
        params: {
          page: this.currentPage,
        },
      });

    },

    reLoad() {
      setTimeout(() => {
        this.$refs.work.getWorks();
        this.$refs.categories.getCategories();
      }, 1000);
    },
  },
  computed: {
    getPageCount() {
      return Math.ceil(this.works.length / this.parPage);
    },
  },
  watch: {
    $route(to, from) {
      this.currentPage = Number(this.$route.params.page);
    },
  },
};
</script>

<style>
.load {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.pagination {
  position: absolute;
  bottom: 1.5vh;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
/*PC*/
@media screen and (min-width: 1026px) {
  .work-title {
    font-weight: bold;
    font-size: 7vh;
    letter-spacing: 50px;
  }

  .work-contents {
    position: relative;
    border: 3px solid black;
    width: 85%;
    margin: 0 auto;
    height: 775px;
    background-color: #cdebf7;
  }

  .msg {
    width: 100%;
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 150px;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .work-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 5vh;
  }

  .work-contents {
    position: relative;
    border: 2px solid black;
    width: 90%;
    margin: 0 auto;
    height: calc(60vw + 40px);
    background-color: #cdebf7;
  }
  .msg {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 100px;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .work-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 5vh;
  }

  .work-contents {
    position: relative;
    border: 2px solid black;
    width: 99%;
    margin: 0 auto;
    height: 750px;
    background-color: #cdebf7;
  }

  .msg {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 48%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-family: "Kaushan Script", cursive;
    font-family: "Bad Script", cursive;
    font-size: 55px;
  }
}
</style>
