<template>
  <div>
    <v-app>
      <span v-for="o in this.$store.state.options" :key="o.name">
        <div>
          <v-btn @click="i => addExercise(i, o)" color="primary" class="button">{{ o.name }}</v-btn>
        </div>
      </span>
      <span v-for="o in this.$store.state.combos" :key="o.name">
        <div>
          <v-btn @click="i => addExercise(i, o)" color="secondary" class="button">{{ o.name }}</v-btn>
        </div>
      </span>
      <v-row>
        <v-item-group multiple class="e-container" style="margin-left:20px">
          <v-subheader>Training</v-subheader>
          <v-item v-for="e in this.$store.state.training" :key="e.name" v-slot:default="{ active }">
            <v-tooltip left>
              <template v-slot:activator="{ on }" fixed>
                <v-chip
                  v-on="on"
                  :text-color="getClass(e)"
                  :input-value="active"
                  close
                  v-bind:class="getClass(e)"
                  outlined
                  @click:close="i => removeExercise(i, e)"
                >
                  <v-avatar left :class="getClass(e)">
                    <v-select
                      class="time"
                      :items="$store.state.times"
                      chips
                      :label="e.time"
                      @input="i => addTime(i, e)"
                      :key="e.time"
                    ></v-select>
                  </v-avatar>
                  {{ e.name }}
                </v-chip>
              </template>
              <span>Pick interval</span>
            </v-tooltip>
          </v-item>
        </v-item-group>
      </v-row>
      <v-row>
        <v-container class="e-container">
          <router-link :to="getUrl()" class="button start">
            <v-btn color="orange" @click="startExercise">Start</v-btn>
          </router-link>
        </v-container>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$store.state.training = []
    var split = this.$route.params.id.split("-")
    for (var e = 0; e < split.length; e++) {
      var exercise = Math.floor(split[e] / 100)
      var secs = split[e] % 100
      var name = this.$store.state.options[exercise].name
      this.$store.state.training.push({ name: name, time: secs })
    }
    this.convertToUrl(this.$store.state.training)
  },
  methods: {
    addExercise(input, e) {
      this.$store.state.training.push({ name: e.name, time: 30 })
      this.$router.push("/select/" + this.$route.params.id + "-" + e.id + 30)
    },
    startExercise() {
      this.$store.commit("setTraining", this.$store.state.training)
    },
    addTime(input, e) {
      var split = this.$route.params.id.split("-")
      var idx = this.$store.state.training.indexOf(e)
      var exercise = Math.floor(split[idx] / 100)
      split[idx] = exercise.toString() + input
      var joined = split.join("-")
      this.$store.state.training[
        this.$store.state.training.indexOf(e)
      ].time = input
      this.$router.push("/select/" + joined)
    },
    removeExercise(input, e) {
      var split = this.$route.params.id.split("-")
      var idx = this.$store.state.training.indexOf(e)
      split.splice(idx, 1)
      var joined = split.join("-")
      this.$store.state.training.splice(
        this.$store.state.training.indexOf(e),
        1
      )
      this.$router.push("/select/" + joined)
    },
    getClass(input) {
      if (input.name == "Break") {
        return "grey e-item"
      } else return "blue e-item"
    },
    convertToUrl(array) {
      var url = []
      for (var e = 0; e < array.length; e++) {
        var code = e.toString() + array[e].time
        if (e > 0) {
          url += "-"
        }
        url += code
      }
      return url
    },
    convertFromUrl() {
      var array = []
      var split = this.$route.params.id.split("-")
      for (var e = 0; e < split.length; e++) {
        var exercise = Math.floor(split[e] / 100)
        var secs = split[e] % 100
        var name = this.$store.state.options[exercise].name
        array.push({ name: name, time: secs })
      }
      return array
    },
    getUrl() {
      var params = this.convertToUrl(this.$store.state.training)
      return "/training/" + params
    }
  }
}
</script>

<style scoped lang="scss">
.e-container {
  align-items: center;
}

.e-item {
  margin: 5px;
}

.button {
  margin: 5px;
}

.start {
  text-decoration: none;
}
.time {
  margin-left: 7px;
  margin-top: 19px;
}
</style>
