<template>
  <p>
    <a
      href="http://www.facebook.com/share.php?u=https://watataku-portfolio.web.app"
      target="_blank"
      class="share-link"
      ><FbSvgBlack v-if="this.color == 'black'" />
       <FbSvgWhite v-else />
      </a>
  </p>
</template>

<script>
import FbSvgBlack from "@/assets/icon/icon_facebook_black.svg"
import FbSvgWhite from "@/assets/icon/icon_facebook_white.svg"
export default {
  props: ["color"],
  components: {
    FbSvgBlack,
    FbSvgWhite
  }
};
</script>

<style scoped>
.share-link:hover {
  display: block;
  transform: scale(1.3, 1.3);
}
</style>