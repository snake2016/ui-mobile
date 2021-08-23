<template>
  <div class="home">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { postLogin } from "@/api/login";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const router = useRouter();
    const onSubmit = (values) => {
      console.log("submit", values);
      router.push({ path: "/home" });
      postLogin(values).then((res) => {
        console.log(res);
      });
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
};
</script>
