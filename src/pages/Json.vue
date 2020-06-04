<template>

  <div class="pages">
    <h2>Json</h2>
    <div
      class="post"
      v-for="(post,i) in allPosts"
      :key="i"
      >
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
    </div>

  </div>

</template>

<script>
import { mapGetters } from "vuex"
export default{
  
  computed: mapGetters(["allPosts"]),
  async mounted(){
    this.$store.dispatch("fetchPosts")
  }

}

</script>

<style scoped>

.post{
  width: 400px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 40px;
}

</style>
