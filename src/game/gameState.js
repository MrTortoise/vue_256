export default {
  numbers: [],
  board: {
    0: {0: '', 1: '', 2: '', 3: ''},
    1: {0: '', 1: '', 2: '', 3: ''},
    2: {0: '', 1: '', 2: '', 3: ''},
    3: {0: '', 1: '', 2: '', 3: ''}
  }
}

export const setBoard = (state, newBoard) => {
  state.board = newBoard
}

export const start = (state) => {
  const x = getIndex()
  const y = getIndex()
  const existing = state.numbers.filter(n => n.x === x && n.y === y)
  if (existing.length > 0) return start(state)
  state.board[y][x] = 2
  state.numbers.push({n: 2, x: x, y: y})
}

export const updateCell = (state, {x, y, n}) => {
  state.board[y][x] = n
}

export const updateNumbers = (state, numbers) => {
  console.log(`numbers: ${JSON.stringify(numbers)}`)
  state.numbers = numbers
}

function getIndex () {
  return Math.floor(Math.random() * 4)
}
