<template>
    <div class="card">
      <h2>{{ title }}</h2>
      <h3>{{ type }}</h3>
      <img :src="image" alt="" />
      <p>{{ price }}</p>
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