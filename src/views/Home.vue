<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <van-button type="primary" size="normal">普通按钮</van-button>
    <FooterTabs tab="home" />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterTabs from "@/components/FooterTabs.vue";
export default {
  name: "Home",
  components: {
    FooterTabs,
  },
};
</script>
