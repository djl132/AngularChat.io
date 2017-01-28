(function(){
  function chatController(Room){
    this.rooms = Room.all;
        console.log(Room.all);
  }
  
  angular
    .module('blocChat')
    .controller('chatController', ['Room', chatController]);
})();