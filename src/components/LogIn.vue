<template>
  <div class="pages" >
    <h2>Войдите на сайт</h2>

    <div >

       <template
         v-if="username">
         <form @submit.prevent="check" class="login">
           <label>Имя пользователя</label>
           <input placeholder="Введите имя пользователя" v-model=" name" key="username-input">
           <button type="button" name="button" @click="check">Записать данные</button>
         </form>
       </template>

       <template
         v-else
        >
        <form @submit.prevent="checkPassword" class="login">
           <label>Пароль пользователя</label>
           <input placeholder="Пароль" v-model="password" key="email-input" >
           <button type="button" name="button" @click="checkPassword">Записать данные</button>
        </form>
        </template>
      </div>

    </div>
</template>

<script>
export default {
  data(){
    return{
      username: true,
      name: "",
      password: "",
    }
  },
  methods:{
    check(){
      if (this.name.toUpperCase() === "ВЛАД") {
        this.username = !this.username}
      },
     checkPassword(){
      if (this.password.toUpperCase() === "1234567890") {
         console.log(this.password);
         this.$emit('exitLogin')
      }}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pages{
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.login{
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}


input{
  width: 300px;
}

button{
  width: 200px;
}

</style>
