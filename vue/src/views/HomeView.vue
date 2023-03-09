<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<!-- <template>
  <main>
    <TheWelcome />
  </main>
</template>
 -->
<template>
  <div class="home">
    <!--         <h1 v-if="graduated">{{ student }}</h1>
    <h1 v-else>"They did not yet graduate"</h1>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul>
    <button @click="authState" v-if="loggedIn">Log Out</button>
    <button @click="authState" v-else>Login</button>
    <input type="text" placeholder="edit me" v-model="message">
    <p>{{ message }}</p>
    <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
    <label for="jack">jack</label>
    <input type="checkbox" id="john" value="john" v-model="checkedNames">
    <label for="john">john</label>
    <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
    <label for="mike">mike</label>
    <span>checkedNames: {{ checkedNames }}</span> -->
    <select v-model="selected">
      <option>a</option>
      <option>b</option>
      <option>c</option>
    </select>
    <span>{{ selected }}</span>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      selected: "",
      checkedNames: [],
      student: "harry",
      graduated: true,
      animals: ["Pig", "horse", "donkey", "cow", "duck"],
      loggedIn: false,
      message: "",
    };
  },
  methods: {
    authState: function () {
      if (this.loggedIn === false) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    },
  },
};
</script>

<style lang="css" scoped>
h1 {
  color: red;
}
</style>

/* use vbase */
