<template>
  <div class="pages">
    <i class="fab fa-500px"></i>
    <h2>Ваш акаунт ограблен</h2>
    <input v-model="name" type="text" placeholder="Введите ваше имя">
    <br>
    <input v-model="age" type="number" placeholder="Введите ваш возраст">
    <br>
    <button @click="persist">Сохранить</button>
    <br>
    <p>Имя:</p>
    <strong> {{ name }}</strong>
    <br>
    <br>
    <p>Возраст:</p>
    <strong> {{ age }}</strong>

    <div>
     <h2>Коты</h2>
     <p>
       <input v-model="newCat">
       <button @click="addCat">Добавить кота</button>
     </p>
     <div v-for="(cat, n) in cats" :key="n">
     <p>
      <span class="cat">{{ cat }}</span>
      <button @click="removeCat(n)">Удалить</button>
     </p>
    </div>
</div>
  </div>
</template>

<script>
export default{
data(){
  return{
  name: "",
  age: 0,
  cats: [],
  newCat: null
}},
mounted(){
  if (localStorage.name){
    this.name = localStorage.name;
  }
  if(localStorage.age){
    this.age = localStorage.age;
  }
  if (localStorage.getItem('cats')) {
    try {
      this.cats = JSON.parse(localStorage.getItem('cats'));
    } catch(e) {
      localStorage.removeItem('cats');
    }
  }
},
 methods: {
   addCat() {
     // убедиться, что было что-либо введено
     if (!this.newCat) {
       return;
     }

     this.cats.push(this.newCat);
     this.newCat = '';
     this.saveCats();
   },
   removeCat(x) {
     this.cats.splice(x, 1);
     this.saveCats();
   },
   saveCats() {
     const parsed = JSON.stringify(this.cats);
     localStorage.setItem('cats', parsed);
   },
   persist(){
     localStorage.name = this.name;
     localStorage.age = this.age;
   }
 }
}
</script>

<style scoped>

.pages{
  overflow:auto;
  width: 100%;
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
  margin: 20px 0px;
}

button{
  border: none;
  border-bottom: 1px solid green;
  height: 50px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: green;
  outline:none;
  width: 100px;
  background: none;
  margin: 40px 0px;
  transition: all 1s ease;
  cursor: pointer;
  opacity: 0.5;
}

button:hover{
 opacity: 1;
}
</style>
