
function numberAtTop (number) {
  return number.y === 0
}

function numberAboveNumber (number, numbers) {
  return numbers.some(n => n.x === number.x && n.y === number.y - 1)
}

export const moveBoardUp = function ({commit, dispatch, state}) {
  const numbers = moveUp(state)
  commit('updateNumbers', numbers)
  dispatch('updateBoard', numbers)
    .then(response => {
      commit('start')
    }, reason => {
      console.log(reason)
    })
}

export const updateBoard = ({state, commit}, numbers) => {
  return new Promise((resolve, reject) => {
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        let newNumbers = numbers.filter(num => num.x === x && num.y === y)
        if (newNumbers.length === 0) {
          commit('updateCell', {y, x, n: ''})
        } else {
          commit('updateCell', {y, x, n: newNumbers[0].n})
        }
      }
    }
    resolve()
  })
}

export const moveUp = function (state) {
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

    const numberAbove = newNumbers.find(n => n.y === newNumber.y - 1 && n.x === newNumber.x)

    if (numberAbove && numberAbove.n === newNumber.n) {
      numberAbove.n = numberAbove.n * 2
    } else {
      newNumbers.push(newNumber)
    }
  })

  return newNumbers
}

function compareXY (a, b) {
  if (a.x < b.x) return -1
  if (a.x > b.x) return 1
  if (a.y < b.y) return -1
  if (a.y > b.y) return 1
  return 0
}
