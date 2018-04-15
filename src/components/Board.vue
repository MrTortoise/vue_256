<template>
  <div class="boardWrapper">
    <div class="r0c0" /><div class="r0c1" /><div class="r0c2" /><div class="r0c3" />
    <div class="r1c0" /><div class="r1c1" /><div class="r1c2" /><div class="r1c3" />
    <div class="r2c0" /><div class="r2c1" /><div class="r2c2" /><div class="r2c3" />
    <div class="r3c0" /><div class="r3c1" /><div class="r3c2" /><div class="r3c3" />
  </div>
</template>

<script>
export default {
  name: 'Board',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.boardWrapper{
  margin: 10%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  background-color: pink;
}

.r0c0{
  grid-column: 1 / 1;
  grid-row: 1;
}

.r0c1{
  grid-column: 2 / 2;
  grid-row: 1;
}

.r0c2{
  grid-column: 3 / 3;
  grid-row: 1;
}

.r0c3{
  grid-column: 4 / 4;
  grid-row: 1;
}

.r1c0{
  grid-column: 1 / 1;
  grid-row: 2;
}

.r1c1{
  grid-column: 2 / 2;
  grid-row: 2;
}

.r1c2{
  grid-column: 3 / 3;
  grid-row: 2;
}

.r1c3{
  grid-column: 4 / 4;
  grid-row: 2;
}

.r2c0{
  grid-column: 1 / 1;
  grid-row: 3;
}

.r2c1{
  grid-column: 2 / 2;
  grid-row: 3;
}

.r2c2{
  grid-column: 3 / 3;
  grid-row: 3;
}

.r2c3{
  grid-column: 4 / 4;
  grid-row: 3;
}

.r3c0{
  grid-column: 1 / 1;
  grid-row: 4;
}

.r3c1{
  grid-column: 2 / 2;
  grid-row: 4;
}

.r3c2{
  grid-column: 3 / 3;
  grid-row: 4;
}

.r3c3{
  grid-column: 4 / 4;
  grid-row: 4;
}

.board{
  background-color: brown;
}
.square{
  width: 50px;
  height: 50px;
  padding: 5px;
  background-color: yellow;
}
</style>
