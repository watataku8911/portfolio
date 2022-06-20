<template>
  <p>
    <a
      href="http://www.facebook.com/share.php?u=https://watataku-portfolio.web.app"
      target="_blank"
      class="share-link"
      ><FbSvgBlack v-if="this.color == 'black'" />
      <FbSvgWhite v-if="this.color == 'white'" />
      <FbSvgRed v-if="this.color == 'red'" />
    </a>
  </p>
</template>

<script>
import FbSvgBlack from "@/assets/icon/icon_facebook_black.svg";
import FbSvgWhite from "@/assets/icon/icon_facebook_white.svg";
import FbSvgRed from "@/assets/icon/icon_facebook_red.svg";
export default {
  props: ["color"],
  components: {
    FbSvgBlack,
    FbSvgWhite,
    FbSvgRed,
  },
};
</script>

<style scoped>
.share-link:hover {
  display: block;
  transform: scale(1.3, 1.3);
}
</style>
