<template>
  <div>
    <v-app>
      <v-item-group multiple>
        <v-item
          v-for="e in this.$store.state.training"
          :key="e.name"
          v-slot:default="{ active }"
          class="e-container"
        >
          <v-chip
            @click:close="i => removeExercise(i, e)"
            close
            :color="getTypedClass(e.name, 0)"
            :input-value="active"
            :outlined="!getCurrentClass(e)"
            :class="{ active: getCurrentClass(e) }"
          >
            <v-avatar left :class="getTypedClass(e, 1)">
              <span :class="getTypedClass(e, 2)">{{ e.time }}</span>
            </v-avatar>
            {{ e.name }}
          </v-chip>
        </v-item>
      </v-item-group>

      <div class="base-timer container">
        <div :class="classObject">
          <button v-if="start == 1" v-on:click="startTimer">
            <v-icon size="200">mdi-play</v-icon>
          </button>
          <button v-if="start == 2" v-on:click="pauseTimer">
            <v-icon size="200">mdi-pause</v-icon>
          </button>
        </div>
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
            <path
              v-bind:stroke-dasharray="circleDasharray"
              class="base-timer__path-remaining"
              v-bind:class="remainingPathColor"
              d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
            />
          </g>
        </svg>
        <span class="base-timer__label">{{ formattedTimeLeft }}</span>

        <p>{{ this.$store.state.training[this.currentSet].name }}</p>
      </div>
    </v-app>
  </div>
</template>

<script>
const FULL_DASH_ARRAY = 283
const WARNING_THRESHOLD = 10
const ALERT_THRESHOLD = 5

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
}

export default {
  data() {
    return {
      timePassed: 0,
      timerInterval: null,
      start: 1, //decides if button is a play or pause action
      currentSet: 0 //keeps track of which icon to highlight,
    }
  },
  created: function() {},
  computed: {
    classObject() {
      if (this.$route.path.includes("training")) {
        return {
          "training-path": true,
          overlay: true
        }
      } else
        return {
          "training-path": false,
          overlay: true
        }
    },

    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`
    },

    formattedTimeLeft() {
      const timeLeft = this.timeLeft
      const minutes = Math.floor(timeLeft / 60)
      let seconds = timeLeft % 60

      if (seconds < 10) {
        seconds = `0${seconds}`
      }
      if (
        seconds < 2 &&
        this.currentSet == this.$store.state.training.length - 1
      ) {
        return `0:00`
      }

      return `${minutes}:${seconds}`
    },

    timeLeft() {
      return this.$store.state.training[this.currentSet].time - this.timePassed
    },

    timeFraction() {
      const rawTimeFraction =
        this.timeLeft / this.$store.state.training[this.currentSet].time
      return (
        rawTimeFraction -
        (1 / this.$store.state.training[this.currentSet].time) *
          (1 - rawTimeFraction)
      )
    },

    remainingPathColor() {
      const { alert, warning, info } = COLOR_CODES

      if (this.timeLeft <= alert.threshold) {
        return alert.color
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color
      } else {
        return info.color
      }
    }
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp()
      }
    }
  },
  methods: {
    onTimesUp() {
      this.sleep(300)
      clearInterval(this.timerInterval)
      this.sleep(300)
      this.start = 3
      this.timePassed = 0
      this.time = this.$store.state.training[this.currentSet].time
      if (this.currentSet < this.$store.state.training.length) {
        this.currentSet += 1
      }
      this.startTimer()
    },
    sleep(milliseconds) {
      var start = new Date().getTime()
      for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
          break
        }
      }
    },
    startTimer() {
      this.start = 2
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000)
    },
    pauseTimer() {
      this.start = 1
      clearInterval(this.timerInterval)
    },
    resetTimer() {
      this.start = 2
      this.timePassed = 0
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000)
    },
    getTypedClass(i, type) {
      if (type == 2) {
        //text
        if (this.$store.state.training[this.currentSet] == i) {
          return "blue--text"
        } else return "white--text"
      } else if (type == 1) {
        //avatar
        if (this.$store.state.training[this.currentSet] == i) {
          return "white"
        } else if (i.name == "Break") {
          return "grey"
        } else {
          return "primary"
        }
      } else if (type == 0) {
        //normal break
        if (i == "Break") {
          return "grey"
        } else {
          return "primary"
        }
      }
      return "white"
    },
    getCurrentClass(i) {
      if (this.$store.state.training[this.currentSet] == i) {
        return true
      } else {
        return false
      }
    },
    removeExercise(input, e) {
      this.$store.state.training.splice(
        this.$store.state.training.indexOf(e),
        1
      )
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 5%;
  width: 10%;
}
.active {
  font-weight: bold;
}

.e-container {
  margin: 5px;
}
.base-timer {
  position: relative;
  width: 300px;
  height: 300px;

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__label {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }
  .overlay {
    position: fixed;
    top: 31%;
    margin-left: 2.5%;
    size: 300%;
    z-index: 2;
  }
  .training-path {
    top: 26%;
  }
}
.time {
  margin-left: 8px;
  margin-top: 18px;
}
</style>
