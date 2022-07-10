import data from '@/content'

export const state = () => ({
  siteData: data,
  isMobile: false,
  muted: true
})

export const mutations = {
  setIsMobile: (state, bool) => {
    state.isMobile = bool
  },
  setMuted: (state, bool) => {
    state.muted = bool
  }
}

export const actions = {
  setIsMobile ({ commit }, bool) {
    commit('setIsMobile', bool)
  },
  setMuted ({ commit }, bool) {
    commit('setMuted', bool)
  }
}
