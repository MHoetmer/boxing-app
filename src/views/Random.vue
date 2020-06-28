<template>
  <div class="random">
    <v-btn @click="generateTraining(3)" class="b-container">Generate random training</v-btn>
    <v-btn @click="removeTraining">Remove training</v-btn>
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
    return {}
  },
  created: function() {
    this.$store.state.training = []
  },
  methods: {
    generateTraining(nr) {
      var training = []
      for (var i = 0; i < nr; i++) {
        var time = Math.floor(Math.random() * (6 - 1 + 1) + 1) * 10
        var exercise = Math.floor(Math.random() * (4 - 0 + 1))
        if (this.$store.state.options[exercise].name == "Break") {
          exercise = -1
        }
        training.push({
          time: time,
          name: this.$store.state.options[exercise].name
        })
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
  margin: 5px;
}
</style>
