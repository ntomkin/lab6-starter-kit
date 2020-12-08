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
      });
    }
  },
  getters: {
    all: (state) => {
      return state.grades;
    },
  }
})

export default store
