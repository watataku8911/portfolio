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
      v-on:notCommunicationError="communication"
      v-on:communicationError="communicationError"
      v-on:emptyWorks="emptyWorks"
      v-on:notEmptyWorks="notEmptyWorks"
      v-on:showPaginate="showPaginate"
      v-on:hidePaginate="hidePaginate"
    />
    <CommutionError
      v-show="isCommunicationError"
      v-on:loadStart="onLoadStart"
      v-on:notCommunicationError="communication"
      v-on:notEmptyWorks="notEmptyWorks"
      v-on:reLoad="reLoad"
    />
    <p v-show="isEmptyWorks" class="msg">Coming Soon...</p>
  
    <paginate v-if="(getPageCount > 1)"
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
      isCommunicationError: true,
      isEmptyWorks: true,
      isPaging: true
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

    showPaginate() {
      this.isPaging = true;
    },
    hidePaginate() {
      this.isPaging = false;
    },

    clickCallback() {
      this.$router.push({
        name: "Content",
        params: {
          page: this.currentPage,
          categoryId: this.categoryId
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
    $route() {
      this.currentPage = Number(this.$route.params.page);
    },
  },
};
</script>

<style>
.pagination {
  position: absolute;
  bottom: 0;
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
    margin-left: 50px;
  }

  .work-contents {
    position: relative;
    border: 3px solid black;
    width: 85%;
    margin: 0 auto;
    height: 670px;
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
    font-size: calc(2vh + 3vw);
    margin-left: 15px;
  }

  .work-contents {
    position: relative;
    border: 2px solid black;
    width: 90%;
    margin: 0 auto;
    height: calc(52vw + 34px);
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
    margin-left: 15px;
    font-size: 3vh;
  }

  .work-contents {
    position: relative;
    border: 2px solid black;
    width: 99%;
    margin: 0 auto;
    height: 650px;
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
