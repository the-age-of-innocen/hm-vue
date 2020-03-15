<template>
  <div class="login">
    <HmHeader>登录</HmHeader>

    <HmLogo></HmLogo>

    <HmInput
      type="text"
      placeholder="请输入用户名"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></HmInput>

    <HmInput
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></HmInput>

    <HmLogoBtn @click="login">登录</HmLogoBtn>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      // let refuser = this.$refs.username.validate(this.username);
      // let refpass = this.$refs.password.validate(this.password);
      if (!this.$refs.username.validate(this.username)) {
        return;
      }
      if (!this.$refs.password.validate(this.password)) {
        return;
      }
      // console.log(axios);
      this.$axios({
        method: 'post',
        url: '/login',
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        // console.log(res.data);
        if (res.data.statusCode == 200) {
          // console.log(this.$router);
          this.$router.push('/user');
          this.$toast.success('登录成功');
        } else {
          this.$toast.fail('登录失败');
        }
      });
    }
  },
  data() {
    return {
      username: '',
      password: ''
    };
  }
};
</script>

<style scoped></style>
