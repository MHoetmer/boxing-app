<template>
  <div class="boxing">
    <h1>Boxing</h1>
    <span v-for="o in options" :key="o.name">
      <div>
        <button @click="addExercise">{{o.name}}</button>
      </div>
    </span>
    <span v-for="e in excercise" :key="e.name">
      <Options :title="e.name" />
    </span>
    <div>
      <button @click="startExercise">Start</button>
    </div>
  </div>
</template>


<script>
import Options from "@/components/Options"
export default {
  data() {
    return {
      excercise: [{ name: "jab" }],
      options: [
        { name: "jab" },
        { name: "uppercut" },
        { name: "cross" },
        { name: "hook" }
      ]
    }
  },
  components: { Options },
  methods: {
    addExercise() {
      console.log("addExercise")
      this.excercise.push({ name: "test" })
      this.exercise.push({ name: "break" })
    },
    startExercise() {
      console.log("starting")
    }
  }
}
</script>