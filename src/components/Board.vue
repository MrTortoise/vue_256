<template>
  <div class="game">
    <div class="menu">
      <button @click="start">start</button>

    </div>
    <div class="boardWrapper">
      <div class="r0c0" >{{ board[0][0] }}</div><div class="r0c1" >{{ board[0][1] }}</div><div class="r0c2" >{{ board[0][2] }}</div><div class="r0c3" >{{ board[0][3] }}</div>
      <div class="r1c0" >{{ board[1][0] }}</div><div class="r1c1" >{{ board[1][1] }}</div><div class="r1c2" >{{ board[1][2] }}</div><div class="r1c3" >{{ board[1][3] }}</div>
      <div class="r2c0" >{{ board[2][0] }}</div><div class="r2c1" >{{ board[2][1] }}</div><div class="r2c2" >{{ board[2][2] }}</div><div class="r2c3" >{{ board[2][3] }}</div>
      <div class="r3c0" >{{ board[3][0] }}</div><div class="r3c1" >{{ board[3][1] }}</div><div class="r3c2" >{{ board[3][2] }}</div><div class="r3c3" >{{ board[3][3] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
  data () {
    return {
      board: {
        0: {0: '', 1: '', 2: '', 3: ''},
        1: {0: '', 1: '', 2: '', 3: ''},
        2: {0: '', 1: '', 2: '', 3: ''},
        3: {0: '', 1: '', 2: '', 3: ''}
      }
    }
  },
  created: function () {
    window.addEventListener('keyup', this.handleKeys)
  },
  methods: {
    start: function () {
      const x = getIndex()
      const y = getIndex()
      this.board[y][x] = 2
    },
    handleKeys: function (args) {
      const key = args.which
      switch (key) {
        case 38:
          this.moveUp()
          break
        case 39:
          this.moveRight()
          break
        case 40:
          this.moveDown()
          break
        case 37:
          this.moveLeft()
      }
    },
    moveUp: function () {

    },
    moveRight: function () {

    },
    moveDown: function () {

    },
    moveLeft: function () {

    },
    click: function () {
      this.y++
    }
  }
}

function getIndex () {
  return Math.floor(Math.random() * 4)
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
