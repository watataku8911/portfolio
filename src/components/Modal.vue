<template>
  <transition name="modal">
    <div class="overlay" @click="$emit('close')">
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
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
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

@media screen and (min-width: 1026px) {
  .panel img {
    object-fit: cover;
    height: 80vh;
    transform: scale(1.2);
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
