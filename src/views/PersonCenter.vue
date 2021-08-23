<template>
  <div class="wrap">
    我的个人中心页面
    <FooterTabs tab="me" />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterTabs from "@/components/FooterTabs.vue";
export default {
  name: "PersonCenter",
  components: {
    FooterTabs,
  },
};
</script>
