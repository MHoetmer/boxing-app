<template>
  <div class="random">
    <v-btn @click="generateTraining(3)" class="b-container">Generate random training</v-btn>
    <v-btn @click="removeTraining">Remove training</v-btn>
    <BaseTimer v-bind:set="this.training" :key="this.training[0]" />
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
      training: [],
      options: [
        { name: "Jab" },
        { name: "Uppercut" },
        { name: "Cross" },
        { name: "Hook" },
        { name: "Break" }
      ]
    }
  },
  methods: {
    generateTraining(nr) {
      for (var i = 0; i < nr; i++) {
        var time = Math.floor(Math.random() * (6 - 1 + 1) + 1) * 10
        console.log("random time", time)
        this.training.push({ time: time, title: this.options[i].name })
      }
    },
    removeTraining() {
      this.$forceUpdate()
      this.training = []
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
