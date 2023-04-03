<template>
  <div class="cart">
    <h1>CART</h1>
    <h2>Total Price:</h2>
  </div>
  <div class="display">
    <CartCard
      v-for="item in cartitems"
      :key="item.name"
      :title="item.name"
      :type="item.type"
      :price="item.price"
      :image="item.img"
    />
  </div>
</template>

<script>
import CartCard from "../components/CartCard.vue";
import { cart } from "../CartArr";
export default {
  name: "cart",
  components: {
    CartCard,
  },
  cartitems: cart.cartArr,
};
</script>

<style></style>
