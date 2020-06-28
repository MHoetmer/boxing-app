<template>
  <div>
    <p>Training</p>
    <BaseTimer v-bind:set="this.convertFromUrl()" />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseTimer from "@/components/BaseTimer.vue"
export default {
  name: "training",
  components: {
    BaseTimer
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
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
    }
  }
}
</script>
