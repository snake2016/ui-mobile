<template>
  <div class="home">
    首页
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
