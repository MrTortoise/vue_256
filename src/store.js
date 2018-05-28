import Vue from 'vue'
import Vuex from 'vuex'

import gameState, {start, updateBoard} from '@/game/gameState.js'

import {moveUp, moveBoardUp} from '@/game/moves.js'

Vue.use(Vuex)

export const mutations = {
  start,
  updateBoard,
  moveUp
}

export const actions = {
  moveBoardUp
}

var store = new Vuex.Store({
  state: gameState,
  mutations,
  actions
})

export default store
