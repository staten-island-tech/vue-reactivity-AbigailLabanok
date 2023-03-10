<template>
  <div class="home">
    <Button />
  </div>
</template>

<script>
import Button from "../components/CoolButton.vue";
export default {
  name: "home",
  components: {
    Button,
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
