<template>
  <p>
    <a
      href="https://twitter.com/share?text=Watataku's ポートフォリオサイト&url=https://watataku-portfolio.web.app"
      target="_blank"
      class="share-link"
    >
      <TwitterSvgBlack v-if="this.color == 'black'" />
      <TwitterSvgWhite v-if="this.color == 'white'" />
      <TwitterSvgRed v-if="this.color == 'red'" />
    </a>
  </p>
</template>

<script>
import TwitterSvgBlack from "@/assets/icon/icon_twitter_black.svg";
import TwitterSvgWhite from "@/assets/icon/icon_twitter_white.svg";
import TwitterSvgRed from "@/assets/icon/icon_twitter_red.svg";
export default {
  props: ["color"],
  components: {
    TwitterSvgBlack,
    TwitterSvgWhite,
    TwitterSvgRed,
  },
};
</script>

<style scoped>
.share-link:hover {
  display: block;
  transform: scale(1.3, 1.3);
}
</style>
