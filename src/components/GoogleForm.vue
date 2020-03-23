<template>
  <div class="col bg-pink" id="google-form">
    <iframe :style="styles" :src="source" frameborder="0"></iframe>
  </div>
</template>

<script>
import { links } from "../googleForms.js";

export default {
  name: "GoogleForm",
  props: {
    type: {
      required: true,
      type: String
    }
  },
  mounted() {
    window.document.getElementById("google-form").scrollIntoView();
  },
  computed: {
    source: function() {
      if (this.type in links) {
        return links[this.type];
      }
      return null;
    },
    styles: () => {
      return {
        "min-height": `75vh`
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
