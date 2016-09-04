<template>
  <div id="app">
    <chat :messages="messages" :create-message="createMessage" :current-message.sync="currentMessage"></chat>
    <!-- <web-video></web-video> -->
  </div>
</template>

<script>
 import Chat from "./components/chat.vue"
 import WebVideo from "./components/video.vue"
 import ChatModel from "./models/ChatModel.js"
 /* import Slave from "./models/Slave.js" */
 import Master from "./models/Master.js"
 import Notifications from './services/NotificationService'

 export default {
   components: {
     Chat,
     WebVideo
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
