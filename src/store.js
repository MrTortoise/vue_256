import Vue from 'vue'
import Vuex from 'vuex'

import gameState, {start, updateCell, updateNumbers} from '@/game/gameState.js'

import {moveBoardUp, updateBoard} from '@/game/moves.js'

Vue.use(Vuex)

export const mutations = {
  start,
  updateCell,
  updateNumbers
}

export const actions = {
  moveBoardUp,
  updateBoard
}

var store = new Vuex.Store({
  state: gameState,
  mutations,
  actions
})

export default store
