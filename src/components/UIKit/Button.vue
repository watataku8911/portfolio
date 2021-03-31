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
@media screen and (min-width: 1026px) {
.button {
	width: 30% !important;
	font-size: 1em;
	border-radius: 20px;
	background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
	color: #fff;
	border-style: none;
}
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
.button {
	width: 30% !important;
	font-size: 1em;
	border-radius: 20px;
	background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
	color: #fff;
	border-style: none;
}
}
/*スマホ*/
@media screen and (max-width: 481px) {
.button {
	width: 80% !important;
	font-size: 1em;
	border-radius: 20px;
	background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
	color: #fff;
	border-style: none;
}
}

</style>