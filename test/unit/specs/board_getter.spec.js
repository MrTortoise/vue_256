import state, {board} from '@/game/gameState.js'

describe('the board getter will', () => {
  it('will show correct empty when state empty', () => {
    state.numbers = []
    board(state)
    expect(state.board).toEqual({
      0: {0: '', 1: '', 2: '', 3: ''},
      1: {0: '', 1: '', 2: '', 3: ''},
      2: {0: '', 1: '', 2: '', 3: ''},
      3: {0: '', 1: '', 2: '', 3: ''}
    })
  })

  it('will show filled in square when it should', () => {
    state.numbers = [{n: 1234, x: 2, y: 2}]
    board(state)
    expect(state.board).toEqual({
      0: {0: '', 1: '', 2: '', 3: ''},
      1: {0: '', 1: '', 2: '', 3: ''},
      2: {0: '', 1: '', 2: 1234, 3: ''},
      3: {0: '', 1: '', 2: '', 3: ''}
    })
  })
})
