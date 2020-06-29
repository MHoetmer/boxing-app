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
    <v-container>
      <v-row align="center" justify="center">
        <v-card outlined class="v_card" max-width="80%" min-width="200px" min-height="52px">
          <v-card-title class="v_card_title">
            <v-chip
              class="ex_chip"
              v-for="tag in selection"
              :key="tag.name"
              close
              @click:close="removeSelection(tag)"
            >
              <v-avatar
                left
                :class="getTypedClass(e, 1)"
                @click="i => toggleArm(i, tag)"
                :key="tag.side"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }" fixed>
                    <span v-on="on" :class="getTypedClass(e, 2)">{{ tag.side }}</span>
                  </template>
                  <span>Toggle arm</span>
                </v-tooltip>
              </v-avatar>
              <strong>{{ tag.name }}</strong>
            </v-chip>
            <v-icon @click="removeAllSelection" size="95%" class="close_icon">mdi-close</v-icon>
          </v-card-title>
        </v-card>
        <v-icon
          class="save_btn"
          v-bind="attrs"
          v-on="on"
          @click="saveSelection"
          v-if="selection.length < 5"
        >mdi-content-save</v-icon>
        <v-dialog v-model="dialog" width="500" v-if="selection.length > 4">
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              class="save_btn"
              v-bind="attrs"
              v-on="on"
              @click="saveSelection"
            >mdi-content-save</v-icon>
          </template>
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Level of risk management</v-card-title>
            <v-card-text>
              The level of risk management (and paperwork and/or network
              traffic) for usage of sport apps should be in proportion to the
              level of risk associated with the activity, BAC (boxing app
              challenge) Inc. responsibility for incidents or accidents is
              unlikely to arise in all but the rarest situation.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>

    <span v-for="o in this.$store.state.combos" :key="o.name">
      <div>
        <v-btn v-if="o.name !== `Break`" color="secondary" class="button">
          {{ o.name }}
          <v-btn
            @click="i => removeCombo(i, o)"
            flat
            width="16px"
            height="16px"
            class="close_btn"
            color="rgb(256,256,256,0.3)"
            fab
            dark
          >
            <v-icon size="16" color="secondary">mdi-close</v-icon>
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
      dialog: "false"
    }
  },

  methods: {
    removeSelection(item) {
      this.selection.splice(this.selection.indexOf(item), 1)
      this.selection = [...this.selection]
    },
    removeCombo(i, o) {
      for (var e in this.$store.state.combos) {
        if (this.$store.state.combos[e] == o) {
          this.$store.state.combos.splice(e, 1)
        }
      }
    },
    removeAllSelection() {
      this.selection = []
    },
    saveSelection() {
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
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  padding-right: 30px;
}

.v_card_title {
  margin: -10px;
}
.save_btn {
  margin-left: -8px;
}

.close_btn {
  margin-right: -7px;
  margin-left: 5px;
}

.ex_chip {
  margin: 3px;
}
.close_icon {
  position: absolute;
  right: 10px;
  top: 30%;
}
</style>
