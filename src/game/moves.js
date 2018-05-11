export const moveUp = function (state) {
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

  const numbers = state.numbers.sort(compareXY)
  const newNumbers = []
  numbers.forEach(number => {
    const newNumber = moveNumberUp(number, newNumbers)

    if (newNumber.y !== number.y) {
      number.y = newNumber.y
    }

    const numberAbove = newNumbers.find(n => n.y === number.y - 1 && n.x === number.x)
    if (numberAbove && numberAbove.n === number.n) {
      numberAbove.n = numberAbove.n * 2
    } else {
      newNumbers.push(number)
    }
  })

  state.numbers = newNumbers
}

function compareXY (a, b) {
  if (a.x < b.x) return -1
  if (a.x > b.x) return 1
  if (a.y < b.y) return -1
  if (a.y > b.y) return 1
  return 0
}
