<template>
	<a :href="this.href" target="blank" class="btn">
		{{this.msg}}
	</a>
</template>

<script>
export default {
	props: ["href", "msg"]
}
</script>

<style scoped>
/*PC*/
@media screen and (min-width: 1026px) {
  .btn {
    display: block;
    font-size: 1.5em;
    width: 20%;
    border-radius: 150px;
    letter-spacing: 5px;
    margin-left: auto;
    margin-right: 3%;
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
    margin-top: 10px;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .btn {
    display: block;
    font-size: 3vw;
    width: 35.5%;
    border-radius: 150px;
    letter-spacing: 5px;
    margin-left: auto;
    margin-right: 3%;
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
    margin-top: 10px;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .btn {
    display: block;
    font-size: 5vw;
    width: 55%;
    border-radius: 150px;
    letter-spacing: 5px;
    margin-left: auto;
    margin-right: 3%;
    background: linear-gradient(to bottom, #5bbee4 0%, #52eac1 100%);
  }
}
</style>

</style>