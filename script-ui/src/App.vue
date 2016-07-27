<template>
  <div id="app">
    <chat :messages="messages" :create-message="createMessage" :current-message.sync="currentMessage"></chat>
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
       messages: [],
       currentMessage: ''
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
     },
     createMessage(message){
       ChatModel.addMessage(message);
       this.currentMessage= '';
     }
   }

 }
</script>

<style>
 body {
   font-family: Helvetica, sans-serif;
 }
</style>
