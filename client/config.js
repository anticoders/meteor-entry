/*
  routes: true | default | {
    logIn               (/entry/login)
    signUp              (/entry/singup)
    logOut              (/entry/logout)
    verifyEmail         (/entry/verify/:token)
    forgotPassword      (/entry/forgot/:token)
    receiveInvitation   (/entry/)
    changeEmail
    changePassword
  }
  messages: {
    loggedIn:
    loggedOut:
    signedUp:
    
  }
  requireVerifiedEmail:

*/

var settings = {};


AntiEntry.config = function(options) {
  if(settings.initialized) {
    throw new Error('AntiEntry.config() can be only called once!');
  }
  settings.initialized = true;


  AntiEntry._initRoutes(settings);
};

