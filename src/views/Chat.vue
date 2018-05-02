<template>
  <div class="chat container">
    <h2 class="center teal-text">FireChat</h2>

    <div class="card">
      <div class="card-content">
        <ul class="message-list">
          <li class="message">
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">
              {{ 'message' }}
            </span>
            <span class="grey-text message-time">time</span>
          </li>
        </ul>
      </div>

      <div class="card-action">
        <input type="text">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['name'],
}
</script>


<style scoped>
h2 {
  font-size: 2.5em;
  margin-bottom: 40px;
}
.message span {
  font-size: 1.4em;
}
.message-text {
  
}
.message-time {
  display: block;
  font-size: 1.2em;
}
</style>
