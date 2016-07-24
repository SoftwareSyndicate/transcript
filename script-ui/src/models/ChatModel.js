class ChatModel {
  addMessage(message){
    let newMessageKey = firebase.database().ref().child('messages').push().key;
    let now = new Date().getTime();
    let newMessage = {
      id: newMessageKey,
      message: message,
      created_at: now,
      updated_at: now,
    };

    var updates = {};
    updates['/messages/' + newMessageKey] = newMessage;
    return firebase.database().ref().update(updates);
  }

}
export default new ChatModel();
