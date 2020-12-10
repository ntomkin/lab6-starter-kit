import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    grades: []
  },
  mutations: {
    addGrade: (state, data) => {
      state.grades.push({
        course_name: data.course_name,
        grade: data.grade
      })
    },
    deleteGrade: (state, data) => {
      state.grades.forEach((ele, idx) => {
        if (ele.course_name === data.course_name && ele.grade === data.grade) {
          state.grades.splice(idx, 1)
        }
      })
    },
    saveGrade: (state, data) => {
      state.grades[data.row] = { course_name: data.course_name, grade: data.grade }
    }
  },
  getters: {
    all: (state) => {
      return state.grades
    },
    honours: (state) => {
      let honourGrades = []
      state.grades.forEach((item, idx) => {
        if (item.grade >= 80) {
          honourGrades.push(item)
        }
      })
      return honourGrades
    },
    minimum: (state) => {
      return 0
    },
    maximum: (state) => {
      return 0
    },
    average: (state) => {
      return 0
    }
  }
})

export default store
