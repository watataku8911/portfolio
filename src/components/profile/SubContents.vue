<template>
  <div class="sub_content">
    <div class="sns">
      <div class="item">
        <a href="https://twitter.com/watataku8911" target="_blank">
          <img src="@/assets/icon/ico_tw.webp" alt="twitter" />
        </a>
      </div>
      <div class="item">
        <a href="https://www.instagram.com/watataku8911/" target="_blank">
          <img src="@/assets/icon/ico_inst.webp" alt="instagram" />
        </a>
      </div>
      <div class="item">
        <a href="https://github.com/watataku8911" target="_blank">
          <img src="@/assets/icon/github.logo.webp" alt="github" />
        </a>
      </div>
    </div>
  </div>
</template>

<style>

/*PC*/
@media screen and (min-width: 1026px) {
  .sub_content {
    background-color: #5bbee5;
    border-radius: 50px 50px 0px 0px;
  }

  .sns {
    display: flex;
    height: 45vh;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .sns img {
    width: 13vh;
    height: 13vh;
  }

  .sns img:hover {
    opacity: 0.3;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .sub_content {
    background-color: #5bbee5;
    border-radius: 50px 50px 0px 0px;
  }

  .sns {
    display: flex;
    height: 35vw;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .sns img {
    width: 10vw;
    height: 10vw;
  }

  .sns img:hover {
    opacity: 0.3;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .sub_content {
    background-color: #5bbee5;
    border-radius: 50px 50px 0px 0px;
  }

  .sns {
    display: flex;
    height: 30vh;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .sns img {
    width: 7vh;
    height: 7vh;
  }

  .sns img:hover {
    opacity: 0.3;
  }
}
</style>
