<template>
  <div class="boxing">
    <v-app>
      <span v-for="o in this.$store.state.options" :key="o.name">
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
                <v-select :items="times" chips :label="e.time">{{ e.time }}</v-select>
              </v-avatar>
              {{ e.name }}
            </v-chip>
          </v-item>
        </v-item-group>
      </v-row>
      <div>
        <router-link to="/random">
          <v-btn class="start" color="orange" @click="startExercise">Start</v-btn>
        </router-link>
      </div>
    </v-app>
  </div>
</template>

<script>
//import Options from "@/components/Options"
export default {
  data() {
    return {
      excercise: [{ name: "Jab", time: 30 }],
      times: [30, 60, 90]
    }
  },
  components: {},

  created() {
    this.excercise = []
    var split = this.$route.params.id.split("-")
    for (var e = 0; e < split.length; e++) {
      var exercise = Math.floor(split[e] / 100)
      var secs = split[e] % 100
      var name = this.$store.state.options[exercise].name
      this.excercise.push({ name: name, time: secs })
    }
  },
  methods: {
    addExercise(input, e) {
      this.excercise.push({ name: e.name, time: 30 })
      this.$router.push("/select/" + this.$route.params.id + "-" + e.id + 30)
    },
    startExercise() {
      console.log("store", this.$store.state.options)
    },
    addTime(input, e) {
      this.excercise[this.excercise.indexOf(e)].time = input
    },
    removeExercise(input, e) {
      var split = this.$route.params.id.split("-")
      var idx = this.excercise.indexOf(e)
      split.splice(idx, 1)
      var joined = split.join("-")
      this.excercise.splice(this.excercise.indexOf(e), 1)
      this.$router.push("/select/" + joined)
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
