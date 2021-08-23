<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home"
      ><i class="iconfont icon-home"></i>首页</van-tabbar-item
    >
    <van-tabbar-item name="me"
      ><i class="iconfont icon-me"></i>个人中心</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "FooterTabs",
  props: { tab: String },
  setup(props) {
    let active = ref(props.tab || "home");
    const router = useRouter();

    watch(active, (newV) => {
      router.push({ path: "/" + newV });
    });
    return { active };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
