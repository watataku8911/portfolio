<template>
  <footer class="footer">
    <ul class="f-links">
      <li>
        <router-link to="/#profile-contents" class="link" v-smooth-scroll="{ duration: 1000, offset: -50 }">PLOFILE</router-link>
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
          <router-link to="/contact#c-box" class="link" v-smooth-scroll="{ duration: 1000, offset: -50 }">CONTACT</router-link>
      </li>
    </ul>
    <small> &copy; 2021 Watataku. </small>
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
    letter-spacing: 2.5px;
    padding-top: 2.5%;
    padding-right: 2.5%;
    padding-left: 2.5%;
  }

  .footer small {
    position: absolute;
    top: 50%;
    left: 50%;
    letter-spacing: 3px;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    display: block;
    color: #fff;
    font-size: 2.5vh;
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
    letter-spacing: 3px;
    font-size: calc(1vh + 2vw);
    padding-top: 2.5%;
    padding-right: 2.5%;
    padding-left: 2.5%;
  }

  .footer small {
    letter-spacing: 1px;
    margin-top: 3vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    text-align: center;
    display: block;
    color: #fff;
    font-size: calc(1vh + 1vw);
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
    letter-spacing: 1px;
  }
}
</style>
