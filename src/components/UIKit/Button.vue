<template>
  <button 
    class="btn waves-effect waves-light button"
    @click="push">
		{{this.msg}}
	</button>
</template>

<script>
export default {
	props: ["msg"],
	methods:{
		push() {
			this.$emit("push");
		}
	}
}
</script>

<style scoped>
.button {
	width: 30% !important;
	font-size: 1em;
	background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
	color: #fff;
	border-style: none;
}
</style>