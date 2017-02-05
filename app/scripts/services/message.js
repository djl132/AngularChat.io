//PROVIDE MESSAGES AND GETTING MESSAGES AND SENDING MESSAGES
(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages"); //create query object for messags.
    var messages = $firebaseArray(ref); //FOR UPDATING BACKEN
    
    var Message = {
      currentMessages : messages,
      currentRoomId : null,
      getRoomById: function(roomId){
        
        //store value for messages sent in a room
        Message.currentRoomId = roomId;
        
        //if there is a roomId store it.
        ref.orderByChild("roomId").equalTo(roomId).on("value", function(data){
          // on value returns an object containing query data that is the ocntnet inside of hte 
          // val() property on data returns the actual object
          var messages = data.val();
                    
//          // messagesArray will contain all of the messages in an array format
//          var messagesArray = [];
//          
//          // turn the object into an array
//          for (var messageId in messages) {
//            messagesArray.push(messages[messageId]);
//          }
//          
          // Set the property on the service that the view is binding to
          // chat.message.currentMessages 
          Message.currentMessages = messages;

          // this === window, so we are creating a global variable called
          // currentMessages, which is why this code did not work
          //this.currentMessages = messages;
        });
      },
      
      //update MESSAGES OBJECT ABOUT new messages
      send: function(message){
        messages.$add({content:message, roomId: Message.currentRoomId, username: $cookies.get('blocChatCurrentUser')});
      }
    };
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies', Message]);
})();


//Logic for Listing Messages:
//
//- Attach a value(roomId) to the view of each each room li (home.html) value=room.roomId. Then NFL-click that getsRoomById(value)
//- getRoomById: set currentMessages array to that returned by orderbychild and equalto (messages.js)  that the view ng-repeats.
//- Update the addRoom method to add a property roomId. Whenever a room is created.
//
//
//
