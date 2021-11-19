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
  font-size: 2.5em;
  letter-spacing: 1px;
}
</style>
