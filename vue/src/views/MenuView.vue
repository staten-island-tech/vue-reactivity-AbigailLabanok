<template>
  <main>
    <h1>Shop</h1>
  </main>
</template>

<script>
import ItemCard from "../components/ItemCard.vue";
export default {
  name: "main",
  components: {
    ItemCard,
  },
  data() {
    return {
      ItemArr: [
        {
          name: "Game Master",
          type: "Cheat",
          price: 1225,
          img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-game-master-card-image.png.adapt.crop16x9.652w.png",
        },
        {
          name: "Explosive Dice",
          type: "Damage",
          price: 1775,
          img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-game-explosive-dice-image.png.adapt.crop16x9.652w.png",
        },
        {
          name: "Ooma's Embrace",
          type: "Defense",
          price: 935,
          img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-game-ooma-s-blessing-image.png.adapt.crop16x9.652w.png",
        },
        {
          name: "Triplet Bombs",
          type: "Hazard",
          price: 875,
          img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-game-triplet-bombs-image.png.adapt.crop16x9.652w.png",
        },
        {
          name: "Hammer of Two",
          type: "Weapon",
          price: 875,
          img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-game-hammer-of-two-image.png.adapt.crop16x9.652w.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
