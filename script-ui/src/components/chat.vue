<template>
  <div class="chat">
    <h1>{{ msg }}</h1>
    <input type="text" placeholder="Add your message..." class="input-msg"></input>
    <div class="btn btn-solid">Send</div>
  </div>
</template>

<script>
import ChatModel from '../models/ChatModel.js'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Chat!'
    }
  },
  created () {
    console.log('chat intialized');
  }
}
</script>

<style>

/*inherited style*/

body {
  font-family: Helvetica, sans-serif;
}

/*script-ui style*/

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
