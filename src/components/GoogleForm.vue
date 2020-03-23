<template>
  <div class="col bg-pink">
    <iframe :src="source" :style="styles" ref="google-iframe" frameborder="0">
      Loading ...
    </iframe>
  </div>
</template>

<script>
import { forms } from "../googleForms.js";

export default {
  name: "GoogleForm",
  props: {
    type: {
      required: true,
      type: String
    }
  },
  mounted() {
    const iframe = this.$refs["google-iframe"];
    iframe.scrollIntoView();
  },
  computed: {
    source: function() {
      if (this.type in forms) {
        return forms[this.type].link;
      }
      return null;
    },
    styles: function() {
      return {
        height: `${forms[this.type].desktop}px`
      };
    }
  }
};
</script>

<style scoped>
iframe {
  margin: 15px 0;
  border-radius: 10px;
  width: 100%;
}
</style>
