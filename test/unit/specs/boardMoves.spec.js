import {moveUp} from '@/game/moves.js'
import state from '@/game/gameState.js'

describe('moveUp will', () => {
  it('leave a 2 alone if already at top on own', () => {
    state.numbers = [{n: 2, x: 0, y: 0}]
    moveUp(state)
    expect(state.board[0][0]).toEqual(2)
  })

  it('move a 2 to the top when called', () => {
    state.numbers = [{n: 2, x: 0, y: 1}]
    moveUp(state)
    expect(state.board[1][0]).toEqual('')
    expect(state.board[0][0]).toEqual(2)
  })

  it(`turn top 2 into a 4 if there are 2 adjacent on same column`, () => {
    state.numbers = [
      {n: 2, x: 0, y: 1},
      {n: 2, x: 0, y: 0}
    ]

    moveUp(state)
    expect(state.board[0][0]).toEqual(4)
  })
})
