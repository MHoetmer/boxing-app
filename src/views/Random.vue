<template>
  <div class="random">
    <BaseTimer v-bind:set="this.training" />
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
      training: [
        { time: 3, title: "Uppercut" },
        { time: 2, title: "BREAK" },
        { time: 3, title: "Jab" },
        { time: 4, title: "BREAK" },
        { time: 3, title: "Cross" }
      ]
    }
  }
}
</script>
