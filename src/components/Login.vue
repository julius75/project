<template>
  <div class="login">
    <h3>Login To Your Account</h3>
    <input type="text" placeholder="Email"><br>
    <input type="text" placeholder="Password"><br>
    <button @click="login">Connection</button>

    <p>Create account here  <router-link to="/sign-up">Create</router-link></p>

  </div>
</template>

<script>
export default {
  name: 'login',
  data:function () {
    return {}
  },
    methods: {
    login:function () {
      this.$router.replace('/')
    }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lofgin{
    margin-top: 40px;

  }
  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p{
    margin-top: 40px;
    font-size: 13px;
  }
  p a{
    text-decoration: underline;
    cursor: pointer;
  }

</style>
