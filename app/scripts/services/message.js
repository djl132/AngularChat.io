(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    return {
      currentMessages : null,
      getRoomById: function(roomId){
        ref.orderByChild("roomId").equalTo(roomId).on("child_added", function(message){
          this.currentMessages = messages;
        });
      }
    };
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
