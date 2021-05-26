<template>
  <div class="communicationError">
    <span>ConnectionError!!</span>
    <br />
    <button v-on:click="retry" class="retry">try again</button>
  </div>
</template>

<script>
export default {
  props: ["methods"],
  methods: {
    retry() {
      this.$emit("loadStart");
      this.$emit("hidePageBar");
      this.$emit("notEmptyWorks");
      this.$emit("notCommunicationError");

      // 親のreLoadメソッド実行
      this.$emit("reLoad");
    },
  },
};
</script>

<style>
.communicationError {
  font-size: 4vh;
  position: absolute;
  top: 50%;
  left: 50%;
  letter-spacing: 1px;

  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>