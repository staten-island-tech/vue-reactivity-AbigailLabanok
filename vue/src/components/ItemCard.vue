<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <h3>({{ type }})</h3>
    <img :src="image" alt="" />
    <p>{{ price }}</p>
    <button>Add To Cart</button>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    title: String,
    type: String,
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
@import "../assets/main.css";
.card {
  width: 30%;
  background-color: #97d3f3;
  border: solid 1rem #2b2d32;
  border-radius: 2rem;
  height: 70rem;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}
p {
  font-size: 3.375rem;
}
img {
  height: 60%;
}
</style>
