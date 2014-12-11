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


AntiEntry._configClient = function(settings) {

  Template.registerHelper('antiEntry', function() {
    return {
      template: {
        logIn: settings.logInTemplate,
        signUp: settings.signUpTemplate,
        forgotPassword: settings.forgotPasswordTemplate,
        requestInvitation: settings.requestInvitationTemplate,
      },
    };
  });

};

