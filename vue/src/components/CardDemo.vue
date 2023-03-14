<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <img :src="image" alt="" />
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "CardDemo",
  props: {
    title: String,
    description: String,
    image: String,
  },
};
</script>

<style>
.card {
  width: 30%;
  background-color: red;
  height: 500px;
  margin: 10px auto;
}
img {
  height: 30%;
}
</style>
