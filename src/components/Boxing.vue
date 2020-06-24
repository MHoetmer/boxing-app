<template>
  <div class="boxing">
    <v-app>
      <span v-for="o in options" :key="o.name">
        <div>
          <v-btn @click="i => addExercise(i, o)" color="primary" class="button">{{ o.name }}</v-btn>
        </div>
      </span>
      <v-row>
        <v-item-group multiple class="e-container">
          <v-subheader>Training</v-subheader>

          <v-item v-for="e in excercise" :key="e.name" v-slot:default="{ active }">
            <v-chip
              :text-color="getClass(e)"
              @click="i => addTime(i, e)"
              :input-value="active"
              close
              v-bind:class="getClass(e)"
              outlined
              @click:close="i => removeExercise(i, e)"
            >
              <v-avatar left :class="getClass(e)">
                <v-select :items="times" chips :label="e.time">
                  {{
                  e.time
                  }}
                </v-select>
              </v-avatar>
              {{ e.name }}
            </v-chip>
          </v-item>
        </v-item-group>
      </v-row>
      <div>
        <v-btn class="start" color="orange" @click="startExercise">Start</v-btn>
      </div>
    </v-app>
  </div>
</template>

<script>
//import Options from "@/components/Options"
export default {
  data() {
    return {
      excercise: [{ name: "jab", time: 30 }],
      options: [
        { name: "jab" },
        { name: "uppercut" },
        { name: "cross" },
        { name: "hook" },
        { name: "break" }
      ],
      times: [30, 60, 90]
    }
  },
  components: {},
  methods: {
    addExercise(input, e) {
      console.log("addExercise", input, e)
      this.excercise.push({ name: e.name, time: 30 })
    },
    startExercise() {
      console.log("starting", this.excercise)
    },
    addTime(input, e) {
      console.log(input, e.time)
      //this.excercise[this.excercise.indexOf(e)].time = input
      console.log(this.excercise)
    },
    removeExercise(input, e) {
      this.excercise.splice(this.excercise.indexOf(e), 1)
      console.log(input, e)
    },
    getClass(input) {
      if (input.name == "break") {
        return "grey e-item"
      } else return "blue e-item"
    }
  }
}
</script>

<style scoped lang="scss">
.e-container {
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.e-item {
  margin-left: 5px;
}

.button {
  margin: 5px;
}

.start {
  margin-bottom: 300px;
}
</style>
