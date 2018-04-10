<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <ul>
        <li
          v-for="user in users"
          :key="user.firstname">
          {{ user.firstname }} {{ user.lastname }}
        </li>
      </ul>
      <TestComponent/>
    </div>
  </div>
</template>

<script>
import TestComponent from './TestComponent.vue'

export default {
  name: 'HelloWorld',
  components: {TestComponent},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
        {firstname: 'Sebastian', lastname: 'Eschweiler'},
        {firstname: 'Bill', lastname: 'Smith'},
        {firstname: 'John', lastname: 'Porter'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
