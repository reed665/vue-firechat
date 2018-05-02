<template>
  <div class="home container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat" novalidate>
          <label for="name">Enter your name</label>
          <input type="text" name="name" v-model="name" required>
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      feedback: '',
    }
  },
  methods: {
    enterChat () {
      if (!this.name) {
        this.feedback = 'You must enter a name to join'
        return
      }
      this.$router.push({ name: 'chat', params: { name: this.name } })
    }
  }
}
</script>

<style scoped>
  .home {
    margin-top: 100px;
    max-width: 400px;
  }
  h2 {
    font-size: 3em;
  }
  label {
    font-size: 1.2em;
  }
  button {
    margin-top: 30px;
    margin-bottom: 30px;
  }
</style>
