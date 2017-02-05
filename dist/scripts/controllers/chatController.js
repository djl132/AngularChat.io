//REFACTOR LATER TO IMPORT ONLY ROM METHODS. 

(function(){
  function chatController(Room, $uibModal, Message, $cookies){
//    this.currentUser = $cookies.get('blocChatCurrentUser');
    this.rooms = Room.all;
    this.add = Room.add;/*write an add function*/ 
    this.message = Message; /*message operations GET AND SETS ROOMID*/
    this.setRoom = Room.setRoom;
     /*function that opens a modal*/
    this.open = function () {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/newRoom.html',
        controller: 'ModalCtrl as modal'
        });
      };

  }
  
  angular
    .module('blocChat')
    .controller('chatController', ['Room', '$uibModal','Message','$cookies', chatController]);
})();


