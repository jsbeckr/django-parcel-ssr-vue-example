<template>
  <Layout>
    <h2 class="title is-2">Count {{ count }}</h2>
    <p class="subtitle">Please 👇 the buttons!</p>
    <button class="button primary" @click="decrement">-</button>
    <button class="button primary" @click="increment">+</button>
  </Layout>
</template>

<script>
import Layout from '../components/layout'

export default {
  components: {
    Layout
  },
  props: {
    initialCount: Number
  },
  data() {
    return {
      count: this.initialCount
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
</script>

<style scoped>
div {
  color: #333;
}
</style>
