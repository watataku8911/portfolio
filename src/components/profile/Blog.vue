<template>
  <div class="blog">
    <h2 class="b-new-article">最新記事</h2>
    <h3 class="article-h3">- Qiita</h3>
    <BlogQiita />
    <h3 class="article-h3">- Zenn</h3>
    <BlogZenn />
  </div>
</template>
<script>
import BlogQiita from "./BlogQiita";
import BlogZenn from "./BlogZenn";

export default {
  components: {
    BlogQiita,
    BlogZenn,
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
    font-size: 5vh;
    font-weight: bold;
    letter-spacing: 50px;
    margin-left: 50px;
    color: #343437;
  }

  .article-h3 {
    text-align: left;
    font-size: 3vh;
    margin-left: 1%;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .b-new-article {
    font-size: 5vw;
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
    font-size: 5vh;
    font-weight: bold;
    letter-spacing: 10px;
    margin-left: 10px;
    color: #343437;
  }

  .article-h3 {
    text-align: left;
    font-size: 3vh;
    margin-left: 1%;
  }
}
</style>
