<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <h3>({{ type }})</h3>
    <img :src="image" alt="" />
    <p>{{ price }} Coins</p>
    <button @click="AddtoCart">Add To Cart</button>
  </div>
</template>

<script>
import { cart } from "../CartArr";

export default {
  name: "ItemCard",
  props: {
    title: String,
    type: String,
    price: Number,
    image: String,
  },
  methods: {
    AddtoCart: function () {
      cart.cartArr.push({
        name: this.name,
        price: this.price,
        image: this.image,
      });
      cart.totalPrice += this.price;
      console.log(cart.cartArr, cart.totalPrice);
    },
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
