<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img :src="image" alt="" />
    <p>{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "CardDemo",
  props: {
    title: String,
    price: Number,
    image: String,
  },
  computed: {
    getImage: function () {
      return this.image;
    },
  },
};
</script>

<style>
.card {
  width: 100%;
  background-color: red;
  height: 500px;
  margin: 10px auto;
}
img {
  height: 50%;
}
</style>
