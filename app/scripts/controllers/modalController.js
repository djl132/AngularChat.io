(function(){
  
  function ModalCtrl($modalInstance){
      this.close = function(){
        $modalInstance.close();
      }
  }
  
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$modalInstance', ModalCtrl]);
  
})();