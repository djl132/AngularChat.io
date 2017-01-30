(function(){
  function chatController(Room, $modal){
    this.rooms = Room.all;
    this.add = Room.add; /*write an add function*/ 
    
    /*function that opens a modal*/
    this.open = function () {
      var modalInstance = $modal.open({
        templateUrl: '/templates/newRoom.html',
        controller: 'chatController as chat'    
        });
      };
  }
  
  angular
    .module('blocChat')
    .controller('chatController', ['Room', '$modal', chatController]);
})();


