import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    numbers: [],
    board: {
      0: {0: '', 1: '', 2: '', 3: ''},
      1: {0: '', 1: '', 2: '', 3: ''},
      2: {0: '', 1: '', 2: '', 3: ''},
      3: {0: '', 1: '', 2: '', 3: ''}
    }
  },
  mutations: {
    start (state) {
      const x = getIndex()
      const y = getIndex()
      state.board[y][x] = 2
      state.numbers.push({n: 2, x: x, y: y})
    },
    moveUp: function (state) {
      console.log('up')
      function isNotAtTop (number) {
        return number.y !== 0
      }
      for (let i = 0; i < state.numbers.length; i++) {
        const number = state.numbers[i]
        if (isNotAtTop(number)) {
          // let numbersAbove = numbers.filter(n => n.x == number.x && n.y < number.y);
          number.y = 0
        }
      }

      updateBoard(state)
    }
  }
})

function updateBoard (state) {
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      let numbers = state.numbers.filter(num => num.x === x && num.y === y)
      if (numbers.length === 0) {
        state.board[y][x] = ''
      } else {
        state.board[y][x] = numbers[0].n
      }
    }
  }
}

function getIndex () {
  return Math.floor(Math.random() * 4)
}

export default store
