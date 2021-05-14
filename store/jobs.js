import axios from "axios"

export const state = () => ({
  isDarkMode: false,
  jobs: [],
  job: null,
  job_page: 1,
  request_status: 'loading',
})

export const getters = {
  getDarkMode: (state) => state.isDarkMode,
  getJob: (state) => state.job,
  getJobs: (state) => state.jobs,
  getRequestStatus: (state) => state.request_status,
}

export const actions = {
  toggleDarkMode({ commit }) {
    commit('TOGGLE_DISPLAY')
  },
  fetchJobs({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('job_request')
      axios.get(`/api/positions.json?page=${state.job_page}`)
        .then(res => {
          commit('SET_JOBS', res.data)
          commit('job_request_success')
          resolve(res)
        })
        .catch(err => {
          commit('job_request_error', err)
          reject(err)
        })
    })
  },
  fetchMoreJobs({ commit, state }) {
    commit('job_request')
    commit('increment_job_page')
    axios.get(`/api/positions.json?page=${state.job_page}`).then(res => {
      commit('ADD_JOBS', res.data)
      commit('job_request_success')
      resolve(res)
    }).catch(err => {
      commit('job_request_error', err)
      reject(err)
    })
  },
  fetchJob({ commit }, id) {
    return new Promise((resolve, reject) => {
      commit('job_request')
      axios.get(`/api/positions/${id}.json?markdown=true`)
        .then(res => {
          commit('SET_JOB', res.data)
          commit('job_request_success')
          resolve(res)
        })
        .catch(err => {
          commit('job_request_error', err)
          reject(err)
        })
    })
  },
  searchJobs({ commit }, description, location) {
    return new Promise((resolve, reject) => {
      commit('job_request')
      axios.get(`/api/positions.json?description=${description}`)
        .then(res => {
          commit('SET_JOBS', res.data)
          commit('job_request_success')
          resolve(res)
        })
        .catch(err => {
          commit('job_request_error', err)
          reject(err)
        })
    })
  }

}

export const mutations = {
  increment_job_page(state) {
    state.job_page++;
  },
  TOGGLE_DISPLAY(state) {
    state.isDarkMode = !state.isDarkMode
  },
  SET_JOBS(state, data) {
    state.jobs = data
  },
  ADD_JOBS(state, data) {
    state.jobs = (state.jobs).concat(data)
  },
  SET_JOB(state, data) {
    state.job = data
  },

  job_request(state) {
    state.request_status = 'loading'
  },
  job_request_success(state) {
    state.request_status = 'success'
  },
  job_request_error(state, err) {
    state.request_status = 'error'
    state.request_message = err.response.data.message
  },
}

