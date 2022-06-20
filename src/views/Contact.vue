<template>
  <section id="c-box" class="c-box">
    <ContactForm />
  </section>
</template>

<script>
import ContactForm from "../components/contact/ContactForm";

export default {
  components: {
    ContactForm,
  },
};
</script>

<style>
/*PC*/
@media screen and (min-width: 1026px) {
  .c-box {
    width: 80%;
    padding-top: 1%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border: solid 3px black;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .c-box {
    width: 92%;
    padding-top: 1%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border: solid 3px black;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .c-box {
    width: 99%;
    padding-top: 1%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border: solid 3px black;
  }
}
</style>
