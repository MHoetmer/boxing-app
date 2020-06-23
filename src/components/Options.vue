<template>
  <span>
    <input v-bind:placeholder="this.title" />
  </span>
</template>

  <script>
export default {
  props: ["title"],
  data() {
    return {
      timePassed: 0
    }
  }
}
</script>