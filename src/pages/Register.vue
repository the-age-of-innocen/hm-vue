<template>
  <div class="register">
    <HmHeader>注册</HmHeader>

    <HmLogo></HmLogo>

    <HmInput
      type="text"
      placeholder="用户名/手机号码"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户名格式不对"
      ref="username"
    ></HmInput>

    <HmInput
      type="text"
      placeholder="昵称"
      v-model="nickname"
      :rule="/^[\u4e00-\u9fa5]{3,7}$/"
      message="用户的昵称必须是3-7位的中文"
      ref="nickname"
    ></HmInput>

    <HmInput
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/^\d{3,12}$/"
      message="用户密码格式错误"
      ref="password"
    ></HmInput>

    <HmLogoBtn @click="register">注册</HmLogoBtn>
    <div class="go-login">
      已有账号？去
      <router-link class="link" to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: ''
    };
  },
  methods: {
    register() {
      if (!this.$refs.username.validate(this.username)) {
        return;
      }
      if (!this.$refs.nickname.validate(this.nickname)) {
        return;
      }
      if (!this.$refs.password.validate(this.password)) {
        return;
      }

      this.$axios({
        method: 'post',
        url: '/register',
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res => {
        console.log(res.data);
        if (res.data.statusCode === 200) {
          // console.log(this.$router.push);
          // this.$router.push({
          //   path: '/login',
          //   query: {
          //     username: this.username,
          //     password: this.password
          //   }
          // });
          this.$router.push({
            name: 'login',
            params: { username: this.username, password: this.password }
          });
          this.$toast.success('注册成功');
        } else {
          this.$toast.fail('注册失败');
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.go-login {
  padding: 0 20px;
  font-size: 18px;
  text-align: right;
  .link {
    color: orange;
  }
}
</style>
