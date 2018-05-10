import Vue from 'vue'
import Vuex from 'vuex'

import gameState, {start} from '@/game/gameState.js'

import {moveUp} from '@/game/moves.js'

Vue.use(Vuex)

export const mutations = {
  start,
  moveUp: moveUp
}

var store = new Vuex.Store({
  state: gameState,
  mutations
})

export default store
