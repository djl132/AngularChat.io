
//RUN A SERVICE AT THE START.... CHECK IF THERE IS ANY USERNAME BEFORE ENTERING
//DEAL WITH COOKIE-RELATED-OPREATIONS AND STORES COOKIES 
(function (){
  function BlocChatCookies($cookies, $uibModal){
    //STORE CURRENT USERNAME
    this.currentUser = $cookies.get('blocChatCurrentUser');
    console.log( $cookies.get('blocChatCurrentUser'));
//    CHECK IF THERE IS A USERNAME
    if(!currentUser || currentUser === ''){
//      GET COOKIE iNFO (user info) THROUGH A MODAL
        $uibModal.open({
          templateUrl: "templates/login.html",
          controller: "LoginController as login",
          
          //PREVENT KEYBOARD ESC & CLICKOUT
          backdrop: 'static',
          keyboard: false
        });
    }
  }
  
  angular
    .module('blocChat')
  // run- SET UP CODE TO CONFIGURE APP - 
  //PREP ALL PARAMETERS
    .run(['$cookies', '$uibModal', BlocChatCookies]);   
})();

