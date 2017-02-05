//CONTROLLER FOR USERNAMESETTING UI THAT ADDS INFORMATION THROUGH $COOKIES SERVICE AND CLOSES THE OPENED MODAL OF THE COOKIES SERVICE.
(function(){
  function LoginController($uibModalInstance, $cookies){
    //LET'S FIND OUT THE VALUE OF THE UIBMODALinstancE
  
   this.setUsername = function(username){
     
     //if username exists and is not empty
     if(username && username !== '')
       
       //RECORD USERNAME IN COOKIES!!
          $cookies.put('blocChatCurrentUser',username);
          $uibModalInstance.close();
    }
  }
   
  angular
    .module('blocChat')
    .controller('LoginController',['$uibModalInstance','$cookies', LoginController]);
})();