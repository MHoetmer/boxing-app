<template>
  <v-app id="inspire">
    <div id="app">
      <v-card>
        <v-tabs
          slider-color="rgb(255, 152, 0)"
          text-color="white"
          background-color="white"
          centered
          flat
          style="margin-bottom:30px"
          class="elevation-0"
        >
          <v-tab>
            <router-link class="menu" to="/">
              <a>Home</a>
            </router-link>&nbsp;
          </v-tab>
          <v-tab>
            <router-link class="menu" to="/random">
              <a>Random</a>
            </router-link>&nbsp;
          </v-tab>
          <v-tab>
            <router-link class="menu" to="/select/030">
              <a>Select</a>
            </router-link>
          </v-tab>
          <v-tab>
            <router-link class="menu" to="/combo" :key="this.$store.state.training[0]">
              <a>Combo</a>
            </router-link>
          </v-tab>
        </v-tabs>
      </v-card>

      <router-view />
      <v-footer absolute>
        <v-spacer></v-spacer>
        <a>
          &copy; Boxing App Challenge Incorporation
          {{ new Date().getFullYear() }}
        </a>
      </v-footer>
    </div>
  </v-app>
</template>

<style>
@font-face {
  font-family: "Bosk";
  src: url("/Users/mel/Projects/javascript/timer/boxing-app/public/font/Bosk.ttf");
}

@font-face {
  font-family: "Bungee Shade";
  src: url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");
}

@import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");
@import url("/Users/mel/Projects/javascript/timer/boxing-app/public/font/Bosk.ttf");
#app {
  font-family: Roboto, Playfair, Raleway, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.a {
  color: rgb(26, 117, 210);
}

#nav a.router-link-exact-active {
  font-weight: bold;
}
.menu {
  text-decoration: none;
  color: red;
}
.v-tabs,
.v-card,
.v-app {
  box-shadow: none !important;
}
</style>
