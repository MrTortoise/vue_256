<template>
  <div class="hello">
    <h1>Yet Another 256 Game</h1>
    <Board/>
  </div>

</template>

<script>
import Board from './Board.vue'

export default {
  name: 'Hello256',
  components: { Board },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100%;
  width: 100%;
}
h1,
h2 {
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
