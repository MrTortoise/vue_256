export const moveUp = function (state) {
  // console.log('up')

  function numberAtTop (number) {
    return number.y === 0
  }

  function numberAboveNumber (number, numbers) {
    return numbers.some(n => n.x === number.x && n.y === number.y - 1)
  }

  function moveNumberUp (number, numbers) {
    if (numberAtTop(number)) return number

    if (numberAboveNumber(number, numbers)) return number

    const num = {x: number.x, y: number.y - 1, n: number.n}
    return moveNumberUp(num, numbers)
  }

  const numbers = state.numbers.sort(compareY)
  const newNumbers = []
  numbers.forEach(number => {
    // console.log(`processing number ${JSON.stringify(number)}; newNumbers: ${JSON.stringify(newNumbers)} `)
    const newNumber = moveNumberUp(number, newNumbers)

    if (newNumber.y !== number.y) {
      // console.log(`moved number is not on same row ${JSON.stringify(newNumber)}`)
      number.y = newNumber.y
    }

    // console.log(`new number is ${JSON.stringify(number)}`)

    const numberAbove = newNumbers.find(n => n.y === number.y - 1)
    if (numberAbove && numberAbove.n === number.n) {
      numberAbove.n = numberAbove.n * 2
    } else {
      newNumbers.push(number)
    }
  })

  state.numbers = newNumbers

  updateBoard(state)
}

function compareY (a, b) {
  if (a.y < b.y) return -1
  if (a.y > b.y) return 1
  return 0
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
