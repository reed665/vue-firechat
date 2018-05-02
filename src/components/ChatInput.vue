<template>
  <div class="chat-input">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add)</label>
      <input type="text" name="new-message" v-model="newMessage">
    </form>
  </div>
</template>

<script>
export default {
  props: ['name'],
  data () {
    return {
      newMessage: '',
    }
  },
  methods: {
    addMessage () {
      if (!this.newMessage) {
        return
      }
      console.log(this.newMessage, this.name, Date.now())
    }
  }
}
</script>
