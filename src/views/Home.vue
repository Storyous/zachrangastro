<template>
  <div class="row">
    <div class="col-xl">
      <guide-post @on-form-selected="onFormSelected" />
    </div>
    <div class="col-xl">
      <google-form v-if="showForm" :type="formType" />
      <instagram-feed />
    </div>
  </div>
</template>

<script>
import GuidePost from "../components/GuidePost.vue";
import GoogleForm from "../components/GoogleForm.vue";
import InstagramFeed from "../components/InstagramFeed.vue";

export default {
  name: "App",
  data() {
    return {
      showForm: false,
      formType: null
    };
  },
  methods: {
    onFormSelected(type) {
      if (type !== this.formType) {
        this.showForm = true;
      }
      if (type === this.formType) {
        this.showForm = !this.showForm;
      }
      this.formType = type;
    }
  },
  components: {
    GuidePost,
    GoogleForm,
    InstagramFeed
  }
};
</script>

<style lang="scss"></style>
