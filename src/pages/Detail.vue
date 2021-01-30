<template>
  <section id="detail-contents" class="detail-contents">
    <h2 class="detail-title">{{ this.title }}</h2>
    <pulse-loader :loading="isLoading" class="load"></pulse-loader>
    <Detail
      ref="detail"
      v-on:loadStart="onLoadStart"
      v-on:loadComplete="onLoadComplete"
      v-on:notCommunicationError="communication"
      v-on:communicationError="communicationError"
      v-on:title="getTitle"
    />

    <CommutionError
      v-show="isCommunicationError"
      v-on:loadStart="onLoadStart"
      v-on:notCommunicationError="communication"
      v-on:reLoad="reLoad"
    />
  </section>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader";
import Detail from "../components/detail/Detail";
import CommutionError from "../components/UIKit/CommutionError";

export default {
  components: {
    PulseLoader,
    Detail,
    CommutionError,
  },
  data() {
    return {
      title: "",

      isLoading: true,
      isCommunicationError: true,
    };
  },
  methods: {
    getTitle(title) {
      this.title = title;
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
    reLoad() {
      setTimeout(() => {
        this.$refs.detail.searchIdWork();
      }, 1000);
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

.CommunicationError {
  font-size: 4vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

/*PC*/
@media screen and (min-width: 1026px) {
  .detail-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 7vh;
    text-align: center;
  }

  .detail-contents {
    position: relative;
    border: 3px solid black;
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
    height: calc(100vw + 20px);
    background-color: #cdebf7;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .detail-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 5vh;
    text-align: center;
  }

  .detail-contents {
    position: relative;
    border: 2px solid black;
    width: 90%;
    margin: 0 auto;
    height: calc(90vw + 280px);
    background-color: #cdebf7;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .detail-title {
    font-weight: bold;
    letter-spacing: 15px;
    font-size: 3vh;
    text-align: center;
  }

  .detail-contents {
    position: relative;
    border: 2px solid black;
    width: 99%;
    margin: 0 auto;
    height: calc(98vh + 200px);
    background-color: #cdebf7;
  }
}
</style>
