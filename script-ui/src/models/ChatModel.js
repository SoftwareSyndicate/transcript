import Notifications from '../services/NotificationService'

class ChatModel {
  constructor(){
    this.messages = [];
  }

  addMessage(message, avatar){
    let newMessageKey = firebase.database().ref().child('messages').push().key;
    let now = new Date().getTime();
    let newMessage = {
      id: newMessageKey,
      message: message,
      created_at: now,
      updated_at: now,
      avatar_url: avatar
    };

    var updates = {};
    updates['/messages/' + newMessageKey] = newMessage;
    return firebase.database().ref().update(updates);
  }

  watchAllMessages(){
    this.messagesRef = firebase.database().ref('messages').orderByChild("created_at");
    this.messagesRef.on('value', data => {
      this.messages = [];
      for(let key in data.val()){
        this.messages.push(data.val()[key]);
      }
      Notifications.notify("ChatModel.messagesUpdated");
    });
  }

}
export default new ChatModel();
