<template>
  <div id="app">
    <chat :messages="messages"></chat>
  </div>
</template>

<script>
 import Chat from "./components/chat.vue"
 import ChatModel from "./models/ChatModel.js"
 import Notifications from './services/NotificationService'

 export default {
   components: {
     Chat
   },
   data(){
     return {
       messages: []
     }
   },
   created(){
     Notifications.listenFor("ChatModel.messagesUpdated", this.onMessagesUpdated, this);
     ChatModel.watchAllMessages();
   },

   methods: {
     onMessagesUpdated(e){
       console.log("Got mess");
       this.messages = ChatModel.messages;
     }
   }

 }
</script>

<style>
 body {
   font-family: Helvetica, sans-serif;
 }
</style>
