<template>
  <div class="cart">
    <h1>CART</h1>
    <h2>Total Price: {{ totalPrice }} Coins</h2>
  </div>
  <div class="card">
    <h2 v-for="item in cartArr">{{ item.title }}</h2>
    <h3 v-for="item in cartArr">{{ item.price }} Coins</h3>
    <button @click="RemovefromCart">Remove from Cart</button>
  </div>
</template>

<script>
import { cart } from "../CartArr";
export default {
  name: "cart",
  components: {},
  data() {
    return {
      totalPrice: cart.totalPrice,
      cartArr: cart.cartArr,
    };
  },
};
</script>

<style></style>
