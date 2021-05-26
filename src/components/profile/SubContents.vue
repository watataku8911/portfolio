<template>
  <div class="sub_contents">
    <div class="sns">
      <div class="item">
        <a href="https://twitter.com/watataku8911" target="_blank" class="myAccount">
          <IcoTw />
        </a>
      </div>
      <div class="item">
        <a href="https://www.instagram.com/watataku8911/" target="_blank" class="myAccount">
          <IcoInst />
        </a>
      </div>
      <div class="item">
        <a href="https://github.com/watataku8911" target="_blank" class="myAccount">
          <GithubLogo />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IcoTw from "@/assets/icon/ico_tw.svg"
import IcoInst from "@/assets/icon/ico_inst.svg"
import GithubLogo from "@/assets/icon/github.logo.svg"

export default {
  components: {
    IcoTw,
    IcoInst,
    GithubLogo
  }
}
</script>

<style>
.myAccount {
  display: block;
}

.myAccount:hover {
  opacity: 0.3;
}

.sub_contents {
  background-color: #5bbee5;
  border-radius: 50px 50px 0px 0px;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .sns {
    display: flex;
    height: 45vh;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
}

/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .sns {
    display: flex;
    height: 35vw;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .sns {
    display: flex;
    height: 30vh;
    flex-flow: wrap;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
