<template>
  <div class="chat container">
    <h2 class="center teal-text">FireChat</h2>

    <div class="card">
      <div class="card-content">
        <ul class="message-list">
          <li class="message" v-for="msg of messages" :key="msg.id">
            <span class="message-name teal-text">{{ msg.name }}</span>
            <span class="message-content grey-text text-darken-3">
              {{ msg.content }}
            </span>
            <span class="grey-text message-time">{{ msg.timestamp }}</span>
          </li>
        </ul>
      </div>

      <div class="card-action">
        <chat-input :name="name" />
      </div>
    </div>
  </div>
</template>


<script>
import ChatInput from '@/components/ChatInput.vue'
import db from '@/firebase'
import formatDate from 'date-fns/format'

export default {
  components: { ChatInput },
  props: ['name'],
  data () {
    return {
      messages: [],
    }
  },
  created () {
    const msgsCollection = db.collection('messages').orderBy('timestamp')
    const messages = this.messages
    msgsCollection.onSnapshot(snapshot => {
      snapshot.docChanges.forEach(({ type, doc }) => {
        if (type !== 'added') return
        const { name, content, timestamp } = doc.data()
        messages.push({
          id: doc.id,
          name,
          content,
          timestamp: formatDate(timestamp, 'MMM D, YYYY HH:mm A'),
        })
      })
    })
  }
}
</script>


<style scoped>
h2 {
  font-size: 2.5em;
  margin-bottom: 40px;
}
.message-name,
.message-content {
  font-size: 1.4em;
}
.message-time {
  display: block;
  font-size: .8em;
}
</style>
