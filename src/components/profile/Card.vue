<template>
  <a :href="url" target="_blank">
    <article class="card" ref="card">
      <div class="thumbnail">
        <img :src="img" :alt="title" />
      </div>
      <p class="title">{{ slice(title, 15) }}</p>
      <p class="date">{{ dates(date) }}</p>
    </article>
  </a>
</template>

<script>
import { datePlasticSurgery, split } from "../../functions/function";

export default {
  props: {
    url: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
  },

  methods: {
    dates(dateString) {
      return datePlasticSurgery(dateString);
    },

    slice(title, maxLength) {
      return split(title, maxLength);
    },
  },
};
</script>

<style scoped>
.thumbnail img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.date {
  padding-right: 3px;
  color: black;
  text-align: right;
}

.card:hover {
  transform: translate(0, -5px);
}

/* PC */
@media screen and (min-width: 1026px) {
  .card {
    width: 20vw;
    background-color: white;
    height: 255px;
  }

  .thumbnail {
    height: 145px;
    border-bottom: 1px solid black;
  }

  .title {
    padding-left: 3px;
    text-align: left;
    height: 70px;
    font-size: 1.2em;
    color: rgb(99, 103, 103);
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .card {
    width: 45vw;
    background-color: white;
    height: 280px;
  }

  .thumbnail {
    height: 170px;
    border-bottom: 1px solid black;
  }

  .title {
    padding-left: 3px;
    text-align: left;
    height: 80px;
    color: rgb(99, 103, 103);
    font-size: 2.5vw;
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .card {
    width: 48vw;
    background-color: white;
    height: 160px;
  }

  .thumbnail {
    height: 80px;
    border-bottom: 1px solid black;
  }

  .title {
    padding-left: 3px;
    text-align: left;
    height: 55px;
    color: rgb(99, 103, 103);
    letter-spacing: 0.1rem;
    font-family: Overpass, "Noto Sans JP", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
  }
}
</style>
