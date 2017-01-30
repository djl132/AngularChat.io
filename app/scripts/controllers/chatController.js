(function(){
  function chatController(Room){
    this.rooms = Room.all;
    this.add = Room.add;
  }
  
  angular
    .module('blocChat')
    .controller('chatController', ['Room', chatController]);
})();