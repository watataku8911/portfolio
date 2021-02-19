<template>
  <footer class="footer">
    <ul class="f-links">
      <li>
        <a
          href="#profile-contents"
          v-smooth-scroll="{ duration: 1000, offset: -50 }"
        >
          <router-link to="/" class="link">PLOFILE</router-link>
        </a>
      </li>
      <li>
        <a
          href="#work-contents"
          v-smooth-scroll="{ duration: 1000, offset: -50 }"
        >
          <router-link
            v-bind:to="{ name: 'Content', params: { page: 1, categoryId: 0 } }"
            class="link"
            >WORKS</router-link
          >
        </a>
      </li>
      <li>
        <a href="#c-box" v-smooth-scroll="{ duration: 1000, offset: -50 }">
          <router-link to="/contact" class="link">CONTACT</router-link>
        </a>
      </li>
    </ul>
    <small> &copy; 2019 Watataku. </small>
  </footer>
</template>

<style scoped>
.f-links {
  display: flex;
  justify-content: space-between;
  width: 65%;
  margin: 0 auto;
}

footer .link {
  display: block;
  letter-spacing: 1px;
}

footer .link:hover {
  border-bottom: #fff solid 1px;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .footer {
    text-align: center;
    margin-top: 8vh;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    height: 250px;
    position: relative;
    clear: both;
    width: 100%;
    background-color: #555;
  }

  .footer .link {
    color: #fff;
    font-size: 3vh;
    padding-top: 2.5%;
    padding-right: 2.5%;
    padding-left: 2.5%;
  }

  .footer small {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    display: block;
    color: #fff;
    font-size: 2.5vh;
    letter-spacing: 1px;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .footer {
    text-align: center;
    margin-top: 8vh;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    height: 200px;
    position: relative;
    clear: both;
    width: 100%;
    background-color: #555;
  }

  .footer .link {
    color: #fff;
    font-size: calc(2vh + 2vw);
    padding-top: 2.5%;
    padding-right: 2.5%;
    padding-left: 2.5%;
  }

  .footer small {
    margin-top: 3vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    display: block;
    color: #fff;
    font-size: calc(2vh + 1vw);
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .footer {
    text-align: center;
    margin-top: 8vh;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    height: 200px;
    position: relative;
    clear: both;
    width: 100%;
    background-color: #555;
  }

  .footer .link {
    color: #fff;
    font-size: 2vh;
    padding-top: 2.5%;
    padding-right: 2.5%;
    padding-left: 2.5%;
  }

  .footer small {
    margin-top: 2vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    display: block;
    color: #fff;
    font-size: 1.5vh;
  }
}
</style>
