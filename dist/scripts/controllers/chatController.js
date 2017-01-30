(function(){
  function chatController(Room, $uibModal){
    this.rooms = Room.all;
    this.add = Room.add; /*write an add function*/ 
    
    /*function that opens a modal*/
    this.open = function () {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/newRoom.html',
        controller: 'ModalCtrl as dialog'    
        });
      };
  }
  
  angular
    .module('blocChat')
    .controller('chatController', ['Room', '$uibModal', chatController]);
})();


