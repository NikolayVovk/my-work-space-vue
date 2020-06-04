<template>
  <div class="pages">
    <h1>V-modal</h1>
    <p>работает только с input</p>
    <form @submit.prevent="onSubmit">
      <input v-model="message" type="text" placeholder="отредактируй меня">
      <button type="submit" name="button">Create</button>
      <button @click="onDelit" type="submit" name="button" class="Delete">Delete</button>
    </form>
    <p>Введённое сообщение: {{ message }}</p>
    <p>Результат: {{ messages }}</p>
    <br>
    <div class="demo">
       <input class="check" type="checkbox" value="Джек" v-model="checkedNames">
       <label>Джек</label>
       <input class="check" type="checkbox" value="Джон" v-model="checkedNames">
       <label>Джон</label>
    </div>
    <br>
    <span>Отмеченные имена: {{ checkedNames }}</span>
    <br>
    <br>
    <br>
    <select v-model="selected">
      <option v-for="(option,i) in options" :key="i" v-bind:value="option.value">{{option.text}}</option>
    </select>
    <br>
    <br>
    <span>Выбранное число: {{selected}}</span>
  </div>
</template>

<script>
export default{
  data(){
    return{
      message:"",
      messages:[],
      checkedNames: [],
      selected: 'А',
      options:[
        {value:"1" , text:"a"},
        {value:"2" , text:"b"},
        {value:"3" , text:"c"}
      ]
    }
  },
  methods:{
    onSubmit(){
      if (this.message !== "") {
        this.messages.push(this.message);
        this.message = ''
      }},
      onDelit(){
        this.messages = [];
      }
  }
}

</script>

<style scoped>

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
  border-bottom: 1px solid green;
  height: 50px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: green;
  outline:none;
  width: 100px;
  background: none;
  margin-left: 20px;
  transition: all 0.1s ease;
  cursor: pointer;
}

button:hover{
  height: 45px;
}

.Delete{
  color: red;
  border-bottom: 1px solid red;
}

.check{
  height: 20px;
  width: 20px;
  border: 1px solid #2c3e50;
  background: none;
  margin-left: 20px;
}

.demo{
  display: flex;
  align-items: center;
  justify-content: center;
}

select{
  border: none;
  border-bottom: 1px solid #2c3e50;
  height: 50px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: #2c3e50;
  outline:none;
  width: 100px;
}

</style>
