(function(){
  
  /*refer to the modalInstance that was just created*/
  function ModalCtrl($uibModalInstance, Room){
    this.room = Room;
    this.add = Room.add;
  }
  
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();