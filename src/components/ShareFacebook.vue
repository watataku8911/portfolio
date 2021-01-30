<template>
  <p>
    <a
      href="http://www.facebook.com/share.php?u=https://watataku-portfolio.web.app"
      target="_blank"
      class="share-link"
      ><img :src="path" alt="いいね!!"
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