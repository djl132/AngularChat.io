(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    
    var Message = {
      currentMessages : null,
      getRoomById: function(roomId){
        // this === Message
        ref.orderByChild("roomId").equalTo(roomId).on("value", function(data){
          // on value returns an object containing query data
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
      }
    };
    
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();


//Logic for Listing Messages:
//
//- Attach a value(roomId) to the view of each each room li (home.html) value=room.roomId. Then NFL-click that getsRoomById(value)
//- getRoomById: set currentMessages array to that returned by orderbychild and equalto (messages.js)  that the view ng-repeats.
//- Update the addRoom method to add a property roomId. Whenever a room is created.
//
//
//
