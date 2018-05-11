import {moveUp} from '@/game/moves.js'
import state from '@/game/gameState.js'

describe('moveUp will', () => {
  it('leave a 2 alone if already at top on own', () => {
    state.numbers = [{n: 2, x: 0, y: 0}]
    moveUp(state)
    expect(state.numbers).toEqual([{n: 2, x: 0, y: 0}])
  })

  it('move a 2 to the top when called', () => {
    state.numbers = [{n: 2, x: 0, y: 1}]
    moveUp(state)
    expect(state.numbers).toEqual([{n: 2, x: 0, y: 0}])
  })

  it(`turn top 2 into a 4 if there are 2 adjacent on same column`, () => {
    state.numbers = [
      {n: 2, x: 0, y: 1},
      {n: 2, x: 0, y: 0}
    ]

    moveUp(state)
    expect(state.numbers).toEqual([{n: 4, x: 0, y: 0}])
  })

  it('should end with a 2 above a 4 in the same column', () => {
    state.numbers = [
      {n: 2, x: 0, y: 1},
      {n: 4, x: 0, y: 2}
    ]

    moveUp(state)
    expect(state.numbers).toEqual([
      {n: 2, x: 0, y: 0},
      {n: 4, x: 0, y: 1}])
  })

  it(`should collapse top 2 2's`, () => {
    state.numbers = [
      {n: 2, x: 0, y: 1},
      {n: 2, x: 0, y: 0},
      {n: 2, x: 0, y: 2}
    ]

    moveUp(state)
    expect(state.numbers).toEqual([
      {n: 4, x: 0, y: 0},
      {n: 2, x: 0, y: 1}
    ])
  })

  it('should collapse the right column', () => {
    state.numbers = [
      {n: 2, x: 0, y: 0},
      {n: 2, x: 1, y: 0},
      {n: 2, x: 2, y: 0},
      {n: 2, x: 3, y: 0},
      {n: 2, x: 2, y: 1}
    ]

    moveUp(state)
    expect(state.numbers).toEqual([
      {n: 2, x: 0, y: 0},
      {n: 2, x: 1, y: 0},
      {n: 4, x: 2, y: 0},
      {n: 2, x: 3, y: 0}
    ])
  })
})
