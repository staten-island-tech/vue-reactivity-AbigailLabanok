<template>
  <h1>CART</h1>
  <h2>Total Price: {{ totalPrice }} Coins</h2>
  <div v-for="item in cartArr" class="cart">
    <h3>{{ item.name }}</h3>
    <h4>({{ item.price }} Coins)</h4>
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
  methods: {
    RemovefromCart: function () {
      this.cartArr.splice(this.name, 1);
      this.totalPrice -= this.price;
      console.log(this.cartArr, this.totalPrice);
    },
  },
};
</script>

<style scoped>
.cart {
  width: 25%;
  background-color: #97d3f3;
  border: solid 0.5rem #2b2d32;
  border-radius: 1rem;
  height: 100%;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}
</style>
