import axios from "axios"

export const state = () => ({
  jobs: [],
  job: null,
  request_status: 'pending',
})

export const getters = {
  getJob: (state) => state.job,
  getJobs: (state) => state.jobs,
  getRequestStatus: (state) => state.request_status,
}

export const actions = {
  fetchJobs({ commit }) {
    return new Promise((resolve, reject) => {
      commit('job_request')
      axios.get(`api/positions.json`)
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
  fetchMoreJobs({ commit }, page) {
    axios.get(`api/positions.json?page=2`).then(res => {
      commit('ADD_JOBS', res.data)
      resolve(res)
    }).catch(err => {
      commit('job_request_error', err)
      reject(err)
    })
  },
  fetchJob({ commit, state }, id) {
    return new Promise((resolve, reject) => {
      commit('job_request')
      axios.get(`api/positions/${id}.json?markdown=true`)
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

}

export const mutations = {
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

