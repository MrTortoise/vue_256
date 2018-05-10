import moves from '@/game/moves.js'
const {moveUp} = moves

describe('moveUp will', () => {
  it('move a 2 to the top when called', () => {
    const state = {
      numbers: [{n: 2, x: 0, y: 1}]
    }
    moveUp(state)
    expect(state.numbers[0].y).toEqual(0)
  })
})
