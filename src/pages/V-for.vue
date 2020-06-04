<template>
  <div class="te">
    <h2>V-for</h2>
    <div
      class="lists"
      v-for="(lists,id) in lists"
      v-bind:key = "id"
    >
    <h3>{{lists.title}}</h3>
    <p>Имя: {{lists.name}}</p>
    <p>Детально:{{lists.text}}</p>
    </div>


  </div>
</template>

<script>
export default{
  props:['lists']
}
</script>


<style scoped>
.te{
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
 .lists{
   width: 400px;
   height: 200px;
   border: 1px solid #2c3e50;
   margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
 }

</style>
