(function(){
  function chatController(Room, $uibModal, Message){
    this.rooms = Room.all;
    this.add = Room.add;/*write an add function*/ 
    this.message = Message; /*message operations GET AND SETS ROOMID*/
    
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
    .controller('chatController', ['Room', '$uibModal','Message', chatController]);
})();


