<template>
  <div class="home">
    <CoolButton @btn-click="bye">button one</CoolButton>
    <!-- @click works perfectly fine as well-->
    <CoolButton @btn-click="hello">button two</CoolButton>
    <CardDemo
      title="hello world"
      description="wowie omg im writing stuff in the description and its gonna magically end up popping up onto the scren :DDDDD"
      image="https://images.wsj.net/im-140539?width=1280&size=1"
    />
  </div>
</template>

<script>
import CoolButton from "../components/CoolButton.vue";
import CardDemo from "../components/CardDemo.vue";
export default {
  name: "home",
  components: {
    CoolButton,
    CardDemo,
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
