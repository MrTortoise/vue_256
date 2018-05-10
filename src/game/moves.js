function moveUp (state) {
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

export default {
  moveUp
}
