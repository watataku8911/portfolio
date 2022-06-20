<template>
  <input type="checkbox" @change="updateValue" :checked="this.checked" />
</template>

<script>
export default {
  props: ["checked"],
  methods: {
    updateValue(e) {
      this.$emit("input", e.target.checked);
    },
  },
};
</script>

<style scoped></style>
