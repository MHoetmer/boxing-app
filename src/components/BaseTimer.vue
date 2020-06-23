<template>
  <div>
    <p v-bind:class="{ active: firstSet }">{{ this.set[0].time }} sec {{ this.set[0].title }}</p>
    <p v-bind:class="{ active: secondSet }">{{ this.set[1].time }} sec {{ this.set[1].title }}</p>
    <p v-bind:class="{ active: thirdSet }">{{ this.set[2].time }} sec {{ this.set[2].title }}</p>
    <p v-bind:class="{ active: fourthSet }">{{ this.set[3].time }} sec {{ this.set[3].title }}</p>
    <p v-bind:class="{ active: fifthSet }">{{ this.set[4].time }} sec {{ this.set[4].title }}</p>
    <div class="base-timer container">
      <div class="overlay">
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

      <p>{{ this.set[this.currentSet].title }}</p>
    </div>
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

//var TIME_LIMIT = 20

export default {
  props: ["set"],
  data() {
    return {
      timePassed: 0,
      timerInterval: null,
      start: 1,
      currentSet: 0,
      firstSet: true,
      secondSet: false,
      thirdSet: false,
      fourthSet: false,
      fifthSet: false
    }
  },

  computed: {
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

      return `${minutes}:${seconds}`
    },

    timeLeft() {
      return this.set[this.currentSet].time - this.timePassed
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / this.set[this.currentSet].time
      return (
        rawTimeFraction -
        (1 / this.set[this.currentSet].time) * (1 - rawTimeFraction)
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
    },
    currentSet(newValue) {
      console.log("newValue", newValue)
      if (newValue == 0) {
        console.log("focus 0", newValue)
      }
      if (newValue == 1) {
        this.firstSet = false
        this.secondSet = true
      }
      if (newValue == 2) {
        this.secondSet = false
        this.thirdSet = true
      }
      if (newValue == 3) {
        this.thirdSet = false
        this.fourthSet = true
      }
      if (newValue == 4) {
        this.fourthSet = false
        this.fifthSet = true
      }
    }
  },

  mounted() {
    console.log("set", this.set)
  },

  methods: {
    onTimesUp() {
      console.log("times up")
      clearInterval(this.timerInterval)
      this.start = 3
      this.timePassed = 0
      this.time = this.set[this.currentSet].time
      if (this.currentSet < this.set.length) {
        this.currentSet += 1
      }
      this.startTimer()
    },

    startTimer() {
      this.start = 2
      console.log("starting")
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000)
    },
    pauseTimer() {
      this.start = 1
      console.log("pauzing")
      clearInterval(this.timerInterval)
    },
    resetTimer() {
      this.start = 2
      console.log("restarting")
      this.timePassed = 0
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  width: 50%;
}
p.active {
  font-weight: bold;
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
    top: 23%;
    margin-left: 3%;
    size: 300%;
    z-index: 2;
  }
}
</style>
