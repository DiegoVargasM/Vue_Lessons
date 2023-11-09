<template>
  <h1>{{title}}</h1>
  <br/>
  <p>Lasagna con camaroni</p>
  <br/>
  <!-- Temp refs example -->
  <input type="text" ref="name">
  <br/>
  <button @click="handleClick">Click me</button>

  <!-- Modal -->
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
  </div>
  <br/>
  <button @click.alt="toggleModal">Open Modal (Hold alt)</button>
</template>

<script>
import Modal from './components/Modal.vue'

// represents the root component of the Vue app
export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My first Vue App',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your comfy clothes for half the price.',
      showModal: false,
    }
  },
  methods: {
    // temp refs example
    handleClick() {
      console.log(this.$refs.name.value)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

.active {
  border: 1px solid red;
}
</style>
