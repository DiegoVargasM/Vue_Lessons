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
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#">More info</a>
      </template>
      <h1>Sign un for the Giveaway</h1>
      <p>Grab your comfy clothes for half the price.</p>
    </Modal>
  </teleport>
  <!-- Second Modal -->
  <teleport to="#modals" v-if="showSecondModal">
    <Modal @close="toggleSecondModal">
      <p>Original Price $399.99</p>
      <p>Now only $199.99</p>
    </Modal>
  </teleport>
  <!-- Modal btns -->
  <button @click.alt="toggleModal">Open Modal (Hold alt)</button>
  <button @click="toggleSecondModal">Open Prices</button>
  <br/>
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
      showModal: false,
      showSecondModal: false
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
    },
    toggleSecondModal() {
      this.showSecondModal = !this.showSecondModal
    }
  }
}
</script>

<style>
#app, #modals {
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
