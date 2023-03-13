<template>
  <div class="home">
    <CoolButton @btn-click="bye">button one</CoolButton>
    <!-- @click works perfectly fine as well-->
    <CoolButton @btn-click="hello">button two</CoolButton>
  </div>
</template>

<script>
import CoolButton from "../components/CoolButton.vue";
export default {
  name: "home",
  components: {
    CoolButton,
  },
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
  computed: {
    now: function () {
      const time = new Date();
      return `${time.getHours()}:${time.getMinutes()}`;
    },
  },
  methods: {
    hello: function () {
      alert("hello");
    },
    bye: function () {
      alert("bye");
    },
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

<!-- use vbase -->
