<template>
  <div class="random">
    <v-container :class="`d-flex justify-space-between`">
      <v-col class="options">
        <v-tooltip left>
          <template v-slot:activator="{ on }" fixed>
            <v-switch v-model="includeCombo" label="Include combo" v-on="on"></v-switch>
          </template>
          <span>Create under tab 'Combo'</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on }" fixed>
            <v-switch v-model="includeBreak" label="Include break" v-on="on"></v-switch>
          </template>
          <span v-if="includeBreak">Pussy!</span>
          <span v-if="!includeBreak">Coward!</span>
        </v-tooltip>
      </v-col>
      <v-select
        style="max-width:50px"
        :placeholder="includeCount"
        :items="counts"
        @input="i => setCount(i)"
        label="Count"
      ></v-select>
    </v-container>
    <v-btn @click="generateTraining" class="b-container">Generate random training</v-btn>
    <v-btn @click="removeTraining" class="b-container">Remove training</v-btn>
    <BaseTimer :key="this.$store.state.training[0]" />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseTimer from "@/components/BaseTimer.vue"

export default {
  name: "Random",
  components: {
    BaseTimer
  },
  data() {
    return {
      includeCombo: false,
      includeBreak: false,
      counts: [3, 4, 5, 6, 7, 8, 9, 10],
      includeCount: 3
    }
  },
  created: function() {
    this.$store.state.training = []
  },
  methods: {
    setCount(i) {
      this.includeCount = i
    },
    generateTraining() {
      var nr = this.includeCount
      var training = []
      var selection = []

      if (this.includeCombo) {
        for (var j in this.$store.state.combos) {
          selection.push(this.$store.state.combos[j].name)
        }
      }

      for (var k in this.$store.state.options) {
        if (this.$store.state.options[k].name == "Break" && this.includeBreak) {
          selection.push(this.$store.state.options[k].name)
        } else if (this.$store.state.options[k].name != "Break") {
          selection.push(this.$store.state.options[k].name)
        }
      }

      for (var i = 0; i < nr; i++) {
        var time = Math.floor(Math.random() * (6 - 1 + 1) + 1) * 10
        var exercise = Math.floor(Math.random() * (selection.length - 1 + 1))
        training.push({
          time: time,
          name: selection[exercise]
        })
      }

      //prevent Breaks at  start
      if (training[0].name == "Break") {
        training[0].name = training[1].name
        training[1].name = "Break"
        if (training[1].name == "Break") {
          training[0].name = "Jab"
        }
      }
      //prevent Breaks at  end
      if (training[training.length - 1].name == "Break") {
        training[training.length - 1].name = training[training.length - 2].name
        training[training.length - 2].name = "Break"
        if (training[training.length - 2].name == "Break") {
          training[training.length - 1].name = "Hook"
        }
      }
      //prevent multiple Breaks in a row
      for (var t in training) {
        if (t > 0 && t < training.length - 1) {
          if (
            training[t].name == training[t - 1].name &&
            training[t].name == "Break"
          ) {
            training[t].name = "Uppercut"
          }
        }
      }
      this.$store.commit("setTraining", training)
    },
    removeTraining() {
      this.$store.commit("setTraining", [])
    }
  }
}
</script>

<style scoped>
.random {
  margin: 5px;
}
.b-container {
  margin: 8px;
}
.options {
  margin-top: -10px;
  margin-bottom: -20px;
}
</style>
