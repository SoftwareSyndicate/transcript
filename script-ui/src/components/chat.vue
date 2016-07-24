<template>
  <div class="chat">
    <div class="board">
      <div class="message" v-for="message in messages">
        {{message.message}}
      </div>
    </div>
    <h1>{{ msg }}</h1>
    <input type="text" placeholder="Add your message..." class="input-msg" v-model="currentMessage"></input>
    <div @click="createMessage(currentMessage); currentMessage=''" class="btn btn-solid">Send</div>
  </div>
</template>

<script>
 import ChatModel from '../models/ChatModel.js'
 export default {
   data() {
    return {
      currentMessage: ''
    }
   },
   props: {
     messages: {
       type: Array,
       default: () => []
     },
     createMessage: {}
   },
   created () {
     console.log('chat intialized');
     console.log(this.messages);
   }
 }
</script>

<style>

/*inherited style*/

body {
  font-family: Helvetica, sans-serif;
}

/*script-ui style*/

.message {
  width: 92%;
  padding: 10px 12px;
  margin-bottom: 1em;
  color: #4A4A4A;
  font-size: 12px;
  font-weight: 400;
  border-radius: 12px;
  background: #F5F6FA;
}

.input-msg {
  width: 92%;
  padding: 10px 12px;
  margin-bottom: 0.8em;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #EAEEF9;
  border-radius: 2px;
  border-style: solid;
}

.input-msg:focus {
  border: 1px solid #11C362;
  outline: none;
  color: #4A4A4A;
}

.btn {
  width: 92%;
  padding: 10px 12px;
  margin-bottom: 1em;
  color: #14B143;
  font-size: 12px;
  font-weight: 300;
  background: #ffffff;
  border: 1px solid #11C362;
  border-radius: 2px;
}

.btn-solid {
  color: #ffffff;
  background: #11C362;
}

.btn-solid:hover {
  border-bottom: 2px solid #0DB158;
}

.btn-solid:active {
  background: #0DB158;
}

.btn-solid:visited {
  background: #11C362;
  border-bottom: none;

}

</style>
