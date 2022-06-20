<template>
  <transition name="modal">
    <div class="overlay">
      <div class="closeButton" @click="$emit('close')">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="panel" @click.stop>
        <img :src="this.image" :alt="this.title" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["image", "title"],
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.overlay {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  transition: all 0.5s ease;
}

.panel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.closeButton {
  display: block;
  position: fixed; /* bodyに対しての絶対位置指定 */
  right: 20px;
  top: 12px;
  width: 42px;
  height: 42px;
  cursor: pointer;
  z-index: 999;
  text-align: center;
  background: white;
}

.closeButton span {
  display: block;
  position: absolute; /* .navToggleに対して */
  width: 30px;
  border-bottom: solid 3px #000;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  left: 6px;
}
/* 最初のspanをマイナス45度に */
.closeButton span {
  top: 18px;
  left: 6px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.closeButton span:nth-child(1),
.closeButton span:nth-child(2) {
  top: 18px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media screen and (min-width: 1026px) {
  .panel img {
    object-fit: cover;
    height: 80vh;
    transform: scale(1);
  }
}

@media screen and (min-width: 482px) and (max-width: 1025px) {
  .panel img {
    object-fit: cover;
    height: calc(30vw + 15vh);
    transform: scale(1.2);
  }
}

@media screen and (max-width: 481px) {
  .panel img {
    object-fit: cover;
    height: 25vh;
    transform: scale(1.2);
  }
}
</style>
