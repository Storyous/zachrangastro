<template>
  <div class="row">
    <div class="col-xl">
      <guide-post />
    </div>
    <div class="col-xl">
      <i-frame />
      <instagram-feed />
    </div>
  </div>
</template>

<script>
import GuidePost from "../components/GuidePost.vue";
import IFrame from "../components/IFrame.vue";
import InstagramFeed from "../components/InstagramFeed.vue";

export default {
  name: "App",
  components: {
    GuidePost,
    IFrame,
    InstagramFeed
  }
};
</script>

<style lang="scss"></style>
