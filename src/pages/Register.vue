<template>
  <div class="register">
    <HmHeader>注册</HmHeader>

    <HmLogo></HmLogo>

    <HmInput type="text" placeholder="请输入用户名"></HmInput>
    <HmInput type="password" placeholder="请输入密码"></HmInput>
    <HmInput type="password" placeholder="请确认密码"></HmInput>

    <HmLogoBtn @click="register">注册</HmLogoBtn>
  </div>
</template>

<script>
export default {
  methods: {
    register() {
      console.log('注册');
    }
  }
};
</script>

<style scoped>
</style>