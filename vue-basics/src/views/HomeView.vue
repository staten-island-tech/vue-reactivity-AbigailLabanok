<template>
  <div class="home">
    <!--     <h1 v-if="graduated">{{ student }}</h1>
    <h1 v-else>"They did not yet graduate"</h1>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul> -->
    <button @click="authState" v-if="loggedIn">Log Out</button>
    <button @click="authState" v-else>Login</button>
    <!-- <input type="text" placeholder="edit me" v-model="message" />
    <p>{{ message }}</p>
    <input type="checkbox" id="jack" value="jack" v-model="checkedNames" />
    <label for="jack">jack</label>
    <input type="checkbox" id="john" value="john" v-model="checkedNames" />
    <label for="john">john</label>
    <input type="checkbox" id="mike" value="mike" v-model="checkedNames" />
    <label for="mike">mike</label>
    <span>checkedNames: {{ checkedNames }}</span>
    <select v-model="selected">
      <option>a</option>
      <option>b</option>
      <option>c</option>
    </select>
    <span>{{ selected }}</span>
    <h2>{{ now }}</h2> -->
    <CoolButton @btn-click="bye">button one</CoolButton>
    <!-- @click works perfectly fine as well-->
    <CoolButton @btn-click="hello">button two</CoolButton>
    <!--     <CardDemo
      title="hello world"
      description="wowie omg im writing stuff in the description and its gonna magically end up popping up onto the scren :DDDDD"
      image="https://images.wsj.net/im-140539?width=1280&size=1" -->
    <CardDemo
      v-for="gun in guns"
      :key="gun.name"
      :title="gun.name"
      :price="gun.price"
      :image="gun.img"
    />
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
      guns: [
        {
          name: "Aero Phantom",
          mainColor: "red",
          price: 1225,
          img: "https://valorantstrike.com/wp-content/uploads/Valorant-Aero-Collection-Phantom-HD.jpg",
          inStock: false,
        },
        {
          name: "Spline Phantom",
          mainColor: "blue",
          price: 1775,
          img: "https://files.cults3d.com/uploaders/21595173/illustration-file/64eca9c9-5732-43d9-963d-585ab2e29c3d/Valorant-Spline-Collection-Phantom-HD.jpg",
          inStock: true,
        },
        {
          name: "Kingdom Phantom",
          mainColor: "yellow",
          price: 935,
          img: "https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Kingdom-Phantom-hd.jpg",
          inStock: false,
        },
        {
          name: "Smite Phantom",
          mainColor: "blue",
          price: 875,
          img: "https://valorantstrike.com/wp-content/uploads/2020/09/Valorant-Smite-Collection-Phantom-HD.jpg",
          inStock: true,
        },
      ],
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
