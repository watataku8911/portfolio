<template>
  <ul class="inner">
    <li
      class="item"
      v-for="work in getItems"
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
          hash: '#detail-contents'
        }"
        class="push"
        v-smooth-scroll="{ duration: 1000, offset: -50 }"
      >
        <img
          v-bind:src="work[1][1].imagePath"
          v-bind:alt="work[1][1].title"
          class="work_img"
        />
      </router-link>
    </li>
  </ul>
</template>

<script>
import firebase from '../../firebase/firebace.config'

export default {
  props: ["currentPage", "parPage", "categoryId"],

  data() {
    return {
      flg: false,
      works: [],

      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
  },
  computed: {
    getItems() {
      const current = this.currentPage * this.parPage;
      const start = current - this.parPage;
      return Object.entries(this.works).slice(start, current)
    },
  },
  created() {
    this.$emit("loadStart");
    this.$emit("hidePageBar");
    this.$emit("notEmptyWorks");
    this.$emit("notCommunicationError");

    //work検索API実行
    this.getWorks();
  },
  methods: {
     async getWorks() {
      const db = firebase.firestore();
      let query = await db.collection("works").where("deleted_flg", "==", false).orderBy("updated_at", "desc")
      query = (Number(this.categoryId) != 0) ? query.where('category_id', '==', Number(this.categoryId)) : query;

      query.get()
      .then((resp) => {
        const workList = [];
        resp.forEach((doc) => {
          const data = doc.data();
          workList.push([doc.id, data]);
          this.works = workList;
        })
          this.$emit("works", this.works);
          this.$emit("loadComplete");
          if (this.works.length == 0) {
            this.$emit("hidePageBar");
            this.$emit("emptyWorks");
          } else {
            this.$emit("showPageBar");
            this.$emit("notEmptyWorks");
          }
        })
        .catch((err) => {
          this.$emit("communicationError");
          this.$emit("loadComplete");
          this.$emit("hidePageBar");
          this.$emit("notEmptyWorks");
        });
    },
  },
  watch: {
    // セレクトボックスをタップすると実行
    categoryId() {
      this.works = [];

      this.$emit("loadStart");
      this.$emit("hidePageBar");
      this.$emit("notCommunicationError");
      this.$emit("notEmptyWorks");
      setTimeout(() => {
        this.getWorks();
      }, 1000);
    },
  },
};
</script>

<style scoped>
/*------------------------------------------------
 WOKEリストアニメーション
--------------------------------------------------- */
.inner .item:nth-child(1) {
  -webkit-animation: example 0.5s ease 0.5s 1 forwards;
  animation: example 0.5s ease 0.5s 1 forwards;
}

.inner .item:nth-child(2) {
  -webkit-animation: example 0.5s ease 1s 1 forwards;
  animation: example 0.5s ease 1s 1 forwards;
}

.inner .item:nth-child(3) {
  -webkit-animation: example 0.5s ease 1.5s 1 forwards;
  animation: example 0.5s ease 1.5s 1 forwards;
}

.inner .item:nth-child(4) {
  -webkit-animation: example 0.5s ease 2s 1 forwards;
  animation: example 0.5s ease 2s 1 forwards;
}

@-webkit-keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 0px);
  }
}
@keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 0px);
  }
}

.item-title {
  z-index: 20;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
}


/*PC*/
@media screen and (min-width: 1026px) {
  .inner {
    width: 100%;
    overflow: hidden;
  }

  .inner .item {
    position: relative;
    width: 25%;
    float: left;
    opacity: 0;
    transform: translate(0, 50px);
  }

  .inner .item .work_img {
    z-index: 10;
    width: calc(9vh + 12vw);
    height: 490px;
    border-radius: 89px 5px 87px 68px;
    -moz-box-shadow: -8px 6px 5px -3px #b29d9e;
    -webkit-box-shadow: -8px 6px 5px -3px #b29d9e;
    -o-box-shadow: -8px 6px 5px -3px #b29d9e;
    -ms-box-shadow: -8px 6px 5px -3px #b29d9e;
    object-fit: cover;
    transform: rotate(5deg);
  }

  .inner .item .work_img:hover {
    -moz-box-shadow: 0px 0px 0px 0px #2f2d33;
    -webkit-box-shadow: 0px 0px 0px 0px #2f2d33;
    -o-box-shadow: 0px 0px 0px 0px #2f2d33;
    -ms-box-shadow: 0px 0px 0px 0px #2f2d33;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .inner {
    width: 100%;
    overflow: hidden;
  }

  .inner .item {
    width: 25%;
    float: left;
    margin-top: 3%;
    margin-bottom: calc(8vw - 18px);
    opacity: 0;
    transform: translate(0, 50px);
  }

  .inner .item .work_img {
    width: calc(3vh + 16.5vw);
    height: calc(30vw + 7vh);
    border-radius: 89px 5px 87px 68px;
    -moz-box-shadow: -8px 6px 5px -3px #b29d9e;
    -webkit-box-shadow: -8px 6px 5px -3px #b29d9e;
    -o-box-shadow: -8px 6px 5px -3px #b29d9e;
    -ms-box-shadow: -8px 6px 5px -3px #b29d9e;
    z-index: 10;
    object-fit: cover;
    transform: rotate(5deg);
  }

  .inner .item .work_img:hover {
    -moz-box-shadow: 0px 0px 0px 0px #2f2d33;
    -webkit-box-shadow: 0px 0px 0px 0px #2f2d33;
    -o-box-shadow: 0px 0px 0px 0px #2f2d33;
    -ms-box-shadow: 0px 0px 0px 0px #2f2d33;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .inner {
    width: 100%;
    overflow: hidden;
  }

  .inner .item {
    width: 50%;
    float: left;
    margin-top: 3%;
    opacity: 0;
    transform: translate(0, 50px);
  }

  .inner .item .work_img {
    transform: rotate(5deg);
    z-index: 10;
    width: 90%;
    height: 260px;
    border-radius: 89px 5px 87px 68px;
    -moz-box-shadow: -8px 6px 5px -3px #b29d9e;
    -webkit-box-shadow: -8px 6px 5px -3px #b29d9e;
    -o-box-shadow: -8px 6px 5px -3px #b29d9e;
    -ms-box-shadow: -8px 6px 5px -3px #b29d9e;
    object-fit: cover;
  }

  .inner .item .work_img:hover {
    -moz-box-shadow: 0px 0px 0px 0px #2f2d33;
    -webkit-box-shadow: 0px 0px 0px 0px #2f2d33;
    -o-box-shadow: 0px 0px 0px 0px #2f2d33;
    -ms-box-shadow: 0px 0px 0px 0px #2f2d33;
  }
}
</style>
