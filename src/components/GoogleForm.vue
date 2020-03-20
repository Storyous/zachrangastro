<template>
  <div class="col bg-pink" id="google-form">
    <iframe :style="styles" :src="source" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: "GoogleForm",
  props: {
    type: {
      required: true,
      type: String
    }
  },
  mounted() {
    window.document.getElementById('google-form').scrollIntoView();
  },
  computed: {
    source: function() {
      switch (this.type) {
        case "takeaway":
          return "https://docs.google.com/forms/d/1S-YJ2_0GggbSViXZlRf5uF7VV0wgF0ddsJ9O2nnur_k/edit?ts=5e74a8c4";
        case "delivery":
          return "https://docs.google.com/forms/d/1b45vWFV_3mPlW07nFoaAH_GQSfzma8u5-ZO_AnDc13c/edit";
        case "supplier":
          return "https://docs.google.com/forms/d/19ezYuPkXIktpI5komA80ddhWtsS9FC6UgAlA3p_3ld0/edit";
        case "personnel":
          return "https://docs.google.com/forms/d/1teuVHxwqqeVuYgOP7IjSbKzzjfLjuKn4ax1ov8PT1Cs/edit";
        case "waiter":
          return "https://docs.google.com/forms/d/12qXlyPsQh4GkvQ98YWWwKwscXehCWZ_CQcfDZf3a5rw/edit";
        default:
          return null;
      }
    },
    styles: () => {
      return {
        "min-height": `685px`
        //'min-height': `${window.document.body.scrollHeight - 180}px`
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
