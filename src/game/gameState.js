export default {
  numbers: [],
  board: {
    0: {0: '', 1: '', 2: '', 3: ''},
    1: {0: '', 1: '', 2: '', 3: ''},
    2: {0: '', 1: '', 2: '', 3: ''},
    3: {0: '', 1: '', 2: '', 3: ''}
  }
}

export const start = (state) => {
  const x = getIndex()
  const y = getIndex()
  const existing = state.numbers.filter(n => n.x === x && n.y === y)
  if (existing.length > 0) return start(state)
  state.board[y][x] = 2
  state.numbers.push({n: 2, x: x, y: y})
}

export const board = (state) => {
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
