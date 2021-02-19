<template>
  <section id="profile-contents" class="profile-contents">
    <Profile />
    <Table />
    <Blog />
    <SubContents />
  </section>
</template>

<script>

import Profile from "../components/profile/ProfileDetail";
import Table from "../components/profile/Table";
import Blog from "../components/profile/Blog";
import SubContents from "../components/profile/SubContents";

export default {
  components: {
    Profile,
    Table,
    Blog,
    SubContents,
  },
  data() {
    return {
      users: [],
      imageLoading: "stand-by",
    };
  }
};
</script>

<style scoped>
/*共通*/
.finish {
  letter-spacing: 5px;
  display: block;
  text-align: right;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .profile-contents {
    font-size: 2vh;
    border: 3px solid black;
    width: 85%;
    margin: 0 auto;
    background-color: #cdebf7;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .profile-contents {
    font-size: 2vh;
    border: 2px solid black;
    width: 90%;
    margin: 0 auto;
    background-color: #cdebf7;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .profile-contents {
    border: 2px solid black;
    width: 99%;
    margin: 0 auto;
    background-color: #cdebf7;
  }
}
</style>
