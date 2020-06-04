<template>
  <div class="pages">
   <h2>V-if</h2>
   <template
     class=""
     v-if="showEl"
     >
     <p>1</p>
     <p>2</p>
     <p>3</p>
     <p>4</p>
     <p>5</p>
     <p>...</p>
   </template>
   <template
     class=""
     v-else>
     <p>Елемента нет</p>
   </template>
   <button type="button" name="button" class="" @click="showEl = !showEl">
     <p v-show="showEl">Спрять елемент</p>
     <p v-show="!showEl">Показать елемент</p>
   </button>
   <br>
   <br>

    <br>
  </div>
</template>

<script>
 export default{
   data(){
     return{
       showEl:true,
       username: true,
     }
   },

   }


</script>

<style scoped>



</style>
