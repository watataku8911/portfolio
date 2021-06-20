<template>
	<input
			:type="this.type"
			:placeholder="this.placeholder"
			@input="updateValue"
			:value="this.value"
		/>
</template>

<script>
export default {
	props: ["type", "placeholder", "value"],
	methods: {
    updateValue(e) {
      this.$emit("input", e.target.value);
    }
  }
}
</script>

<style  scoped>

</style>