<template>
  <div class="blog" id="blog">
    <h2 class="b-new-article">ブログ記事</h2>
    <h3 class="article-h3">- Qiita</h3>
    <div class="module--spacing--verySmall"></div>
    <BlogQiita />
    <div class="module--spacing--small"></div>
    <h3 class="article-h3">- Zenn</h3>
    <div class="module--spacing--verySmall"></div>
    <BlogZenn />
    <div class="module--spacing--small"></div>
    <h3 class="article-h3">- Watataku&apos;s ブログ</h3>
    <div class="module--spacing--verySmall"></div>
    <Blogwatataku />
    <div class="module--spacing--small"></div>
  </div>
</template>
<script>
import BlogQiita from "./BlogQiita";
import BlogZenn from "./BlogZenn";
import Blogwatataku from "./Blogwatataku";

export default {
  components: {
    BlogQiita,
    BlogZenn,
    Blogwatataku,
  },
};
</script>
<style scoped>
.blog {
  position: relative;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .b-new-article {
    font-size: 2.5em;
    font-weight: bold;
    letter-spacing: 50px;
    margin-left: 50px;
    color: #343437;
  }

  .article-h3 {
    text-align: left;
    font-size: 1.5em;
    margin-left: 1%;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .b-new-article {
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 10px;
    margin-left: 10px;
    color: #343437;
  }

  .article-h3 {
    text-align: left;
    font-size: 1.5rem;
    margin-left: 1%;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .b-new-article {
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 10px;
    margin-left: 10px;
    color: #343437;
  }

  .article-h3 {
    text-align: left;
    font-size: 1.5em;
    margin-left: 1%;
  }
}
</style>
