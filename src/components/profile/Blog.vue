<template>
  <div class="blog">
    <h2 class="b-new-article" >最新記事</h2>
    <BlogQiita  />
  </div>
</template>
<script>
import BlogQiita from "./BlogQiita"

export default {
  components: {
    BlogQiita
  }
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
}
</style>
