<template>
  <section>
    <div
      class="triangle-pc"
      :style="{
        borderTop: `${pcSize}px solid #${color}`,
        borderRight: `${pcSize}px solid #${color}`,
        borderBottom: `${pcSize}px solid transparent`,
        borderLeft: `${pcSize}px solid transparent`,
      }"
    ></div>

    <div
      class="triangle-tb"
      :style="{
        borderTop: `${tabSize}px solid #${color}`,
        borderRight: `${tabSize}px solid #${color}`,
        borderBottom: `${tabSize}px solid transparent`,
        borderLeft: `${tabSize}px solid transparent`,
      }"
    ></div>

    <div
      class="triangle-sp"
      :style="{
        borderTop: `${spSize}px solid #${color}`,
        borderRight: `${spSize}px solid #${color}`,
        borderBottom: `${spSize}px solid transparent`,
        borderLeft: `${spSize}px solid transparent`,
      }"
    ></div>
  </section>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      require: true,
    },
    pcSize: {
      type: Number,
      require: true,
    },
    tabSize: {
      type: Number,
      require: true,
    },
    spSize: {
      type: Number,
      require: true,
    },
  },
};
</script>

<style scoped>
/*PC*/
@media screen and (min-width: 1026px) {
  .triangle-pc {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -999;
  }

  .triangle-tb {
    display: none;
  }

  .triangle-sp {
    display: none;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .triangle-pc {
    display: none;
  }

  .triangle-tb {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -999;
  }

  .triangle-sp {
    display: none;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .triangle-pc {
    display: none;
  }

  .triangle-tb {
    display: none;
  }
  .triangle-sp {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -999;
  }
}
</style>
