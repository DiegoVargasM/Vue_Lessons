<template>
  <h1>{{title}}</h1>
  <br/>
  <!-- Temp refs example -->
  <input type="text" ref="name">
  <br/>
  <button @click="handleClick">Click me</button>

  <!-- Modal -->
  <Modal />
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
      title: 'My first Vue App'
    }
  },
  methods: {
    // temp refs example
    handleClick() {
      console.log(this.$refs.name.value)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
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
