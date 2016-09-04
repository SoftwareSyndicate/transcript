<template>
  <div class="video">
    <div class="video-container">
      <video id="localVideo"></video>
    </div>
    <div class="video-container">
      <video id="remoteVideo"></video>
    </div>
  </div>
</template>

<script>
 import Notifications from '../services/NotificationService.js'
 export default {
   name: "WebVideo",
   data() {
    return {
    }
   },
   props: {

   },
   created () {

   },
   methods: {

   }
 }
</script>

<style>

 .video {
   display: flex;

   .video-container {
     display: flex;
     flex-basis: 50%;
   }
 }

</style>
