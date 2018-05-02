<template>
  <div class="chat-input">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add)</label>
      <input type="text" name="new-message" v-model="newMessage">
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>


<script>
import db from '@/firebase'

export default {
  props: ['name'],
  data () {
    return {
      newMessage: '',
      feedback: '',
    }
  },
  methods: {
    addMessage () {
      if (!this.newMessage) {
        this.feedback = 'You must enter a message in order to send one'
        return
      }
      this.feedback = ''
      const doc = {
        content: this.newMessage,
        name: this.name,
        timestamp: Date.now()
      }
      db.collection('messages').add(doc)
        .then(() => {
          this.newMessage = ''
        })
        .catch(console.error)
    }
  }
}
</script>
