<template>
  <div class="grid-y grid-padding-x grid-padding-y">
    <div class="actions cell small-2 grid-x grid-padding-x grid-padding-y">
      <div class="cell small-2">
        <div class="toggle-button toggle-button-honour">
          <ToggleButton v-model="isHonour" :width="80" :height="36" :labels="{checked: 'Honour', unchecked: 'Honour'}" />
        </div>
      </div>
      <div class="cell small-1">
        <div class="toggle-button toggle-button-failed">
          <ToggleButton v-model="isFailed" :width="80" :height="36" :labels="{checked: 'Failed', unchecked: 'Failed'}" />
        </div>
      </div>
      <div class="cell small-3">
        <input type="search" v-model="searchTerms" class="search-text" />
      </div>
      <div class="cell small-3">
        <select v-model="sortTopic">
          <option value="course">Course</option>
          <option value="mark">Mark</option>
        </select>
      </div>
      <div class="cell small-1">
        <div class="grid-y">
          <div class="cell small-6">
            <button type="button" :click="sortAscClicked">
              <img src="/assets/logo.png">
            </button>
          </div>
          <div class="cell small-6">
            <button type="button" :click="sortDescClicked">
              <img src="/assets/desc.png">
            </button>
          </div>
        </div>
      </div>
      <div class="cell small-2">
        <button type="button" @click="createGradeClicked" class="button small hollow create-button">Create</button>
      </div>
    </div>

    <div class="content cell small-8 grid-x grid-padding-x grid-padding-y">
      <table class="stacked">
        <thead>
          <th>Course</th>
          <th>Mark</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Math</td>
            <td class="text-left">80</td>
            <td class="action-buttons grid-x">
              <div class="cell small-6">
                <button type="button" @click="gradeItemDeleteClicked">
                  <img src="/assets/delete.png" />
                </button>
              </div>
              <div class="cell small-6">
                <button type="button" @click="gradeItemEditClicked">
                  <img src="/assets/edit.png" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="results cell small-2 grid-x grid-padding-x grid-padding-y">
      <div class="cell small-4">
        <h5>Minimum</h5>
        <div>{{ minimumMark }} / 100</div>
      </div>
      <div class="cell small-4">
        <h5>Maximum</h5>
        <div>{{ maximumMark }} / 100</div>
      </div>
      <div class="cell small-4">
        <h5>Average</h5>
        <div>{{ averageMark }} / 100</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { ToggleButton } from 'vue-js-toggle-button'

Vue.component('ToggleButton', ToggleButton)

export default {
  name: 'Grades',
  data () {
    return {
      isHonour: false,
      isFailed: false,
      sortTopic: 'course',
      sortDirection: 'desc',
      searchTerms: ''
    }
  },
  computed: {
    minimumMark () {
      return 0
    },
    maximumMark () {
      return 0
    },
    averageMark () {
      return 0
    }
  },
  methods: {
    createGradeClicked () {},
    gradeItemDeleteClicked () {},
    gradeItemEditClicked () {},
    sortDescClicked () {},
    sortAscClicked () {}
  },
  components: {
    ToggleButton
  }
}
</script>

<style scoped>
input[type=search],
select {
  border-radius: 5px;
}

.search-text {
  background: url('~@/assets/search.png') center right no-repeat;
  background-size: contain;
}

.create-button {
  border-radius: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

table.stacked {
  width: 90%;
  margin: auto;
}
</style>
