<template>
  <div>
    <div :class="['application', {modal: modalOpen}]">
      <div class="grid-y grid-padding-x grid-padding-y">
        <div class="actions cell small-2 grid-x grid-padding-x grid-padding-y">
          <div class="cell small-1">
            <div class="toggle-button toggle-button-honour">
              <ToggleButton v-model="isHonour" :width="80" :height="36" :color="{checked: '#44c700', unchecked: '#d3d3d3'}" :labels="{checked: 'Honour', unchecked: 'Honour'}" />
            </div>
          </div>
          <div class="cell small-1">
            <div class="toggle-button toggle-button-failed">
              <ToggleButton v-model="isFailed" :width="80" :height="36" :color="{checked: '#FF0000', unchecked: '#d3d3d3'}" :labels="{checked: 'Failed', unchecked: 'Failed'}" />
            </div>
          </div>
          <div class="cell small-3">
            <input type="search" v-model="searchTerms" class="search-text" />
          </div>
          <div class="cell small-4">
            <select v-model="sortTopic">
              <option value="course">Course</option>
              <option value="mark">Mark</option>
            </select>
          </div>
          <div class="cell small-1">
            <div class="grid-y">
              <div class="cell small-6">
                <button type="button" @click.prevent="sortClicked('asc')" :disabled="sortDirection == 'asc'">
                  <img :src="iconAsc" class="sort-icon">
                </button>
              </div>
              <div class="cell small-6">
                <button type="button" @click.prevent="sortClicked('desc')" :disabled="sortDirection == 'desc'">
                  <img :src="iconDesc" class="sort-icon" />
                </button>
              </div>
            </div>
          </div>
          <div class="cell small-2">
            <button type="button" @click="createGradeClicked" class="button expanded small hollow create-button">Create</button>
          </div>
        </div>

        <div class="content cell small-8 grid-x grid-padding-x grid-padding-y">
          <table class="stack">
            <thead>
              <th>Course</th>
              <th>Mark</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td class="text-left">Math</td>
                <td class="text-left">80</td>
                <td class="action-buttons" width="100">
                  <div class="action-button">
                    <button type="button" @click.prevent="gradeItemDeleteClicked">
                      <img :src="iconDelete" class="action-icon" />
                    </button>
                  </div>
                  <div class="action-button">
                    <button type="button" @click.prevent="gradeItemEditClicked">
                      <img :src="iconEdit" class="action-icon" />
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
    </div>

    <div :class="['modal', 'modal-grade-edit-add', {open: modalOpen}]">
      <h4>{{ modalTitle }}</h4>
      <div class="grid-x grid-padding-x grid-padding-y">
        <div class="cell small-6">
          <input type="text" v-model="modalCourseValue" placeholder="Course">
        </div>
        <div class="cell small-6">
          <input type="number" v-model="modalGradeValue" min="0" max="100" placeholder="Grade">
        </div>
      </div>
      <button class="close-button" aria-label="Close modal" type="button" @click.prevent="closeModalClicked">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { ToggleButton } from 'vue-js-toggle-button'

Vue.component('ToggleButton', ToggleButton)

export default {
  name: 'Grades',
  components: {
    ToggleButton
  },
  data () {
    return {
      iconDesc: require('../assets/desc.png'),
      iconAsc: require('../assets/asc.png'),
      iconDelete: require('../assets/delete.png'),
      iconEdit: require('../assets/edit.png'),
      isHonour: false,
      isFailed: false,
      sortTopic: 'course',
      sortDirection: 'desc',
      searchTerms: '',
      modalTitle: 'Add Grade',
      modalOpen: false,
      modalGradeValue: null,
      modalCourseValue: null
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
    createGradeClicked () {
      this.modalOpen = true
    },
    gradeItemDeleteClicked () {},
    gradeItemEditClicked () {},
    sortClicked (direction) {
      this.sortDirection = direction
    },
    closeModalClicked () {
      this.modalOpen = false
    }
  }
}
</script>

<style scoped>
input[type=search],
select {
  border-radius: 5px;
}

button[type=button]:disabled {
  opacity: 0.3;
}

.application {
  filter: blur(0px);
  transition: filter 0.3s ease-in-out;
}

.application.modal {
  filter: blur(2px);
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

table.stack {
  width: 90%;
  margin: auto;
}

.action-icon,
.sort-icon {
  width: 20px;
  height: 20px;
}

.action-buttons {
  position: relative;
}

.action-button {
  display: inline;
}

.modal.modal-grade-edit-add {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -350px;
  margin-top: -175px;
  width: 700px;
  height: 350px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px;
  box-shadow: -5px 5px 10px 0 rgba(0,0,0,0.05);
  border-radius: 10px;
}

.modal.modal-grade-edit-add.open {
  display: block;
}

.modal.modal-grade-edit-add .close-button {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
