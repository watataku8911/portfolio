<template>
	<textarea class="materialize-textarea"
		:placeholder="this.placeholder"
		:cols="this.cols"
		:rows="this.rows"
		@input="updateValue"
		:value="this.value"
		>
	</textarea>
</template>

<script>
export default {
	props: ["placeholder", "cols", "rows", "value"],
	methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    }
  }
}
</script>

<style scoped>

.materialize-textarea {
  height: 180px !important;
}
</style>