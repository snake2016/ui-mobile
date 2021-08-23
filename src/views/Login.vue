<template>
  <div class="login">
    <div class="logo-wrap">
      <div class="logo">
        <img src="../assets/logo.png" alt="logo" />
        <img src="../assets/GoldCardCloud.png" alt="GoldCardCloud" />
      </div>
      <p class="txt">金卡云 移动互联平台</p>
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="account"
          label="账号"
          placeholder="请输入您的账号"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入您的密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div class="submit-btn">
        <van-button round block type="primary" native-type="submit">
          登 录
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
      postLogin(values).then((res) => {
        if (res) {
          router.push({ path: "/home" });
        }
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
<style lang="less" scoped>
.login {
  height: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  .logo-wrap {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 80px;
    margin-bottom: 60px;
    img:nth-child(1) {
      width: 36px;
    }
    img:nth-child(2) {
      width: 64px;
    }
    .txt {
      margin-top: 10px;
      font-size: 14px;
      color: #2f87fe;
      font-weight: bold;
    }
  }
  ::v-deep .van-form {
    width: 100%;
    .van-cell-group {
      margin: 0;
    }
    .van-cell {
      flex-direction: column;
      padding: 0;
      padding-bottom: 40px;
      .van-cell__title {
        font-size: 18px;
      }
      .van-field__body {
        border-bottom: 1px solid #b3b3b3;
      }
      &::after {
        border-bottom: 0;
      }
    }
  }
  .submit-btn {
    margin-top: 27px;
    .van-button {
      height: 40px;
    }
  }
}
</style>
