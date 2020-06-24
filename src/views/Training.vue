<template>
  <div>
    <p>Training id:{{ this.$route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "training",
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {}
}
</script>
