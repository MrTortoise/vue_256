export default {
  numbers: [],
  board: {
    0: {0: '', 1: '', 2: '', 3: ''},
    1: {0: '', 1: '', 2: '', 3: ''},
    2: {0: '', 1: '', 2: '', 3: ''},
    3: {0: '', 1: '', 2: '', 3: ''}
  }
}

export const start = function (state) {
  const x = getIndex()
  const y = getIndex()
  state.board[y][x] = 2
  state.numbers.push({n: 2, x: x, y: y})
}

function getIndex () {
  return Math.floor(Math.random() * 4)
}
