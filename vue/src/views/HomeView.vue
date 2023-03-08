<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<!-- <template>
  <main>
    <TheWelcome />
  </main>
</template>
 -->
<template>
  <div class="home">
    <h1 v-if="graduated">{{ student }}</h1>
    <h1 v-else>"They did not yet graduate"</h1>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      student: "harry",
      graduated: true,
    };
  },
};
</script>

<style lang="css" scoped>
h1 {
  color: red;
}
</style>

<!-- use vbase -->
