<template>
  <main>
    <h1>Card Shop</h1>
    <div class="cart"></div>
    <div class="display">
      <ItemCard
        v-for="card in cards"
        :key="card.name"
        :name="card.name"
        :type="card.type"
        :price="card.price"
        :image="card.img"
      />
    </div>
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
      showingShop: true,
      cards: [
        {
          name: "Game Master",
          type: "Cheat",
          price: 140,
          img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-game-master-card-image.png.adapt.crop16x9.652w.png",
        },
        {
          name: "Explosive Dice",
          type: "Damage",
          price: 160,
          img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-game-explosive-dice-image.png.adapt.crop16x9.652w.png",
        },
        {
          name: "Ooma's Embrace",
          type: "Defense",
          price: 135,
          img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-game-ooma-s-blessing-image.png.adapt.crop16x9.652w.png",
        },
        {
          name: "Triplet Bombs",
          type: "Hazard",
          price: 200,
          img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-game-triplet-bombs-image.png.adapt.crop16x9.652w.png",
        },
        {
          name: "Hammer of Two",
          type: "Weapon",
          price: 235,
          img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/09/lir-game-hammer-of-two-image.png.adapt.crop16x9.652w.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.display {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
}
</style>
