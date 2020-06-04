<template>
  <div id="app">
    <main>
      <img alt="Vue logo" src="./assets/logo.png" class="img">
      <nav v-show="rightlogin">
        <router-link to="/">Home</router-link>
        <router-link to="/V-modal">V-modal</router-link>
        <router-link to="/LocalStorage">Local Storage</router-link>
        <router-link to="/v-for">V-for</router-link>
        <router-link to="/v-if">V-if</router-link>
        <router-link to="/pixi">Pixi</router-link>
        <router-link to="/json">Json</router-link>
      </nav>
    </main>
    <section class="section">
      <Login
        @exitLogin="exitLogin"
        v-show="exitLoginBlock"
      />
      <transition name="fade">
        <router-view
        v-show="rightlogin"
        v-bind:lists="lists"
        />
      </transition>
    </section>
  </div>
</template>

<script>
import Login from '@/components/LogIn.vue'
 export default{
   data(){
     return{
       lists:[
         {id:1, title:"Новый сотрудник", name:"Николай", text:"Очень крутой"},
         {id:2, title:"Новый сотрудник", name:"Игорь", text:"Вот он не очень"},
         {id:2, title:"Новый сотрудник", name:"Игорь", text:"Вот он не очень"}
       ],
       rightlogin:false,
       exitLoginBlock: true
     }
   },
   mounted(){
     if ( localStorage.login){
       var x = Boolean(localStorage.login);
       this.rightlogin = x
     }
     if( localStorage.loginpass){
       this.exitLoginBlock = false;
     }
   },
   methods:{
     exitLogin(){
         this.rightlogin = true
         this.exitLoginBlock = false
         localStorage.login = this.rightlogin
         localStorage.loginpass = this.exitLoginBlock
      }
   },
   components: {
     Login
   },
 }
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  width: 100%;
}

main{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #000;
  background-image: url(./assets/Background.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.4s ease;
  filter:brightness(0.4) ;
}

main:hover{
  filter: none;
}

.img{
  transition: all 0.4s ease;
}

main:hover .img {
  transform: rotateY(180deg);
}

.section{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.linkNow{
  color: green;
}

nav{
  display: flex;
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  width: 600px;
  align-items: center;
  justify-content: space-around;
  height: 60px;
}

a{
  color: #fff;
  text-decoration: none;
}

.pages{
  padding-top: 200px;
  background: none;
  overflow: auto;
  width: 100%;
}

.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active{
  transition: all .0s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(100px);
}

input{
  border: none;
  border-bottom: 1px solid #2c3e50;
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: #2c3e50;
  outline:none;
}

button{
  border: none;
  border: 1px solid green;
  height: 50px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: green;
  outline:none;
  width: 200px;
  background: none;
  transition: all 0.1s ease;
  cursor: pointer;
}

button:hover{
  background: green;
  color: #fff;
}
</style>
