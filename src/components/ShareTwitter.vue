<template>
  <p>
    <a
      href="https://twitter.com/share?text=Watataku's ポートフォリオサイト&url=https://watataku-portfolio.web.app"
      target="_blank"
      class="share-link"
      ><img :src="path" alt="ツイート" width="32" height="32"
    /></a>
  </p>
</template>

<script>
export default {
  props: ["imageName"],
  data() {
    return {
      path: require("@/assets/icon/" + this.imageName),
    };
  },
};
</script>