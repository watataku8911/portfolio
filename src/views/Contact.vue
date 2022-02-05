<template>
  <section id="c-box" class="c-box">
    <h2 class="contact-title">CONTACT</h2>
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
  .contact-title {
    font-weight: bold;
    font-size: 4em;
    letter-spacing: 20px;
    margin-left: 20px;
    margin-bottom: 5vh;
  }

  .c-box {
    width: 90%;
    padding-top: 1%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border: solid 3px black;
    margin-bottom: 50px;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .contact-title {
    font-weight: bold;
    font-size: 3.5em;
    letter-spacing: 20px;
    margin-left: 20px;
    margin-bottom: 5vh;
  }

  .c-box {
    width: 90%;
    padding-top: 1%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border: solid 3px black;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .contact-title {
    font-weight: bold;
    font-size: 3em;
    margin-bottom: 5vh;
  }

  .c-box {
    width: 90%;
    padding-top: 1%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    border: solid 3px black;
  }
}
</style>
