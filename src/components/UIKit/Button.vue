<template>
  <button class="btn waves-effect waves-light button" @click="push">
    {{ this.msg }}
  </button>
</template>

<script>
export default {
  props: ["msg"],
  methods: {
    push() {
      this.$emit("push");
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1026px) {
  .button {
    font-size: 1.5em;
    border-radius: 20px;
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
    color: #fff;
    border-style: none;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .button {
    font-size: 3vw;
    border-radius: 15px;
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
    color: #fff;
    border-style: none;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .button {
    font-size: 1.5em;
    border-radius: 15px;
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
    color: #fff;
    border-style: none;
  }
}
</style>
