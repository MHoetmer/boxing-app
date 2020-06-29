<template>
  <v-app>
    <span v-for="o in this.$store.state.options" :key="o.name">
      <div>
        <v-btn
          v-if="o.name !== `Break`"
          @click="i => addExercise(i, o)"
          color="primary"
          class="button"
        >{{ o.name }}</v-btn>
      </div>
    </span>
    <span v-for="o in this.combo" :key="o.name">
      <div>
        <v-btn
          v-if="o.name !== `Break`"
          @click="i => addExercise(i, o)"
          color="secondary"
          class="button"
        >{{ o.name }}</v-btn>
      </div>
    </span>

    <v-card outlined class="v_card" max-width="80%" height="60px">
      <v-card-title>
        <v-chip v-for="tag in selection" :key="tag.name" close @click:close="remove(tag)">
          <v-avatar
            left
            :class="getTypedClass(e, 1)"
            @click="i => toggleArm(i, tag)"
            :key="tag.side"
          >
            <span :class="getTypedClass(e, 2)">{{ tag.side }}</span>
          </v-avatar>
          <strong>{{ tag.name }}</strong>&nbsp;
        </v-chip>
        <v-icon class="save_btn" @click="selectAll">mdi-content-save</v-icon>
      </v-card-title>
    </v-card>

    <span v-for="o in this.$store.state.combos" :key="o.name">
      <div>
        <v-btn v-if="o.name !== `Break`" color="secondary" class="button">
          {{ o.name }}
          <v-btn
            @click="i => removeCombo(i, o)"
            flat
            width="20px"
            height="20px"
            style="margin-right:-7px; margin-left:5px"
            color="grey"
            fab
            dark
          >
            <v-icon size="95%" color="black">mdi-close</v-icon>
          </v-btn>
        </v-btn>
      </div>
    </span>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      selection: [],
      combo: [],
      items: ["Streaming", "Eating"]
    }
  },
  created: function() {
    //this.chips = this.$store.state.training
  },

  methods: {
    remove(item) {
      this.selection.splice(this.selection.indexOf(item), 1)
      this.selection = [...this.selection]
    },
    removeCombo(i, o) {
      for (var e in this.$store.state.combos) {
        if (this.$store.state.combos[e] == o) {
          this.$store.state.combos.splice(e, 1)
          console.log("rm", this.$store.state.combos)
        }
      }
      console.log("removeCombo", i, o)
    },
    selectAll() {
      var stringert = this.selection[0].side + ":" + this.selection[0].name
      for (var e in this.selection) {
        if (e > 0) {
          stringert =
            stringert +
            "-" +
            this.selection[e].side.toString() +
            ":" +
            this.selection[e].name.toString()
        }
      }

      console.log("selectAll", this.selection, stringert)
      //this.combo.push({ name: stringert })
      //var latestid = this.$store.state.options[this.$store.state.options.lengt - 1].id
      this.$store.state.combos.push({ name: stringert })
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
    addExercise(i, o) {
      this.selection.push({ name: o.name, side: "L" })
    },
    toggleArm(i, o) {
      console.log("toggleArm", i, o)
      for (var e in this.selection) {
        if (this.selection[e] == o) {
          if (o.side == "L") {
            this.selection[e].side = "R"
          } else {
            this.selection[e].side = "L"
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.button {
  margin: 5px;
}

.v_card {
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
}
.save_btn {
  margin-left: 80%;
  position: fixed;
  margin-top: -5%;
}
</style>
