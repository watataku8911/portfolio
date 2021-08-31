<template>
  <footer class="footer">
    <div class="f-top">
      <ul class="f-links">
        <li>
          <router-link
            to="/#profile-contents"
            class="link"
            v-smooth-scroll="{ duration: 1000, offset: -50 }"
            >PLOFILE</router-link
          >
        </li>
        <li>
          <router-link
            v-bind:to="{
              name: 'Content',
              hash: '#work-contents',
              params: { page: 1, categoryId: 0 },
            }"
            class="link"
            v-smooth-scroll="{ duration: 1000, offset: -50 }"
            >WORKS</router-link
          >
        </li>
        <li>
          <router-link
            to="/contact#c-box"
            class="link"
            v-smooth-scroll="{ duration: 1000, offset: -50 }"
            >CONTACT</router-link
          >
        </li>
      </ul>
      <section class="share-sns-area">
        <label for="share" style="font-size: 1.2em;letter-spacing: 1px;"
          >SHARE</label
        >
        <ShareTwitter color="black" />
        <ShareFacebook color="black" />
      </section>
    </div>

    <div class="f-under">
      <small
        ><a href="https://watataku-portfolio.web.app" target="_blank"
          >&copy; 2021 Watataku.
        </a></small
      >
    </div>
  </footer>
</template>

<script>
import ShareTwitter from "./ShareTwitter";
import ShareFacebook from "./ShareFacebook.vue";
export default {
  components: {
    ShareTwitter,
    ShareFacebook,
  },
};
</script>

<style scoped>
label {
  display: block;
}

.footer {
  z-index: 999;
  background-color: #5bbee5;
  height: 350px;
}

.f-top {
  height: 200px;
  width: 90%;
  margin: auto;
  border-bottom: #fff solid 2px;
}

.f-under {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.f-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.f-links a {
  font-size: 1.35em;
  display: inline-block;
  position: relative;
  overflow: hidden;
  color: #fff;
  text-decoration: none;
}

.f-links a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
  transform: translate(-100%, 0);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
  content: "";
}

.f-links a:hover:after {
  transform: translate(0, 0);
}

.f-under a {
  font-size: 1.5em;
  color: #fff;
  letter-spacing: 1px;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .share-sns-area {
    box-shadow: -29px 21px 46px -11px rgba(0, 0, 0, 0.6);
    width: 15%;
    height: 100px;
    padding: 1.5%;
    border-radius: 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .f-links {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .share-sns-area {
    box-shadow: -29px 21px 46px -11px rgba(0, 0, 0, 0.6);
    width: 23%;
    height: 100px;
    padding: 1.5%;
    border-radius: 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .f-links {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .share-sns-area {
    box-shadow: -29px 21px 46px -11px rgba(0, 0, 0, 0.6);
    height: 100px;
    padding: 1.5%;
    border-radius: 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .f-links {
    display: flex;
    flex-flow: column;
    align-items: baseline;
  }
}
</style>
