
var settings = {};

AntiEntry.config = function(params) {
  if(settings.initialized) {
    throw new Error('AntiEntry.config() can be only called once!');
  }

  if(settings.initializedOnce) {
    _.extend(settings, params);
  } else {
    _.extend(settings, {
      appname:                Meteor.absoluteUrl(''),

      verifyEmail:            true,
      requireInvitation:      false,
      registrationCode:       false,

      restorePasswordPath:    '/entry/restore/:token',
      verifyEmailPath:        '/entry/verify/:token',
      invitationPath:         '/entry/invitation/:token',

      postVerifyEmailPath:    '/',
      postLogOutPath:         '/',

      logInTemplate:              'antiEntryHubLogIn',
      signUpTemplate:             'antiEntryHubSignUp',
      forgotPasswordTemplate:     'antiEntryHubForgotPassword',
      requestInvitationTemplate:  'antiEntryHubRequestInvitation',

      entryPath:                  '/entry',
      logInPath:                  '/entry/login',
      signUpPath:                 '/entry/signup',
      logOutPath:                 '/entry/logout',
      forgotPasswordPath:         '/entry/forgot',
      requestInvitationPath:      '/entry/request',
    }, params);
  }

  settings.initialized = true;

  if(Meteor.isServer && settings.serverSideConfig) {
    if(!settings.initializedOnce) {
      settings.initializedOnce = true;
      settings.initialized = false;
      return;
    }
  }

  // console.log("CONF", settings.initializedOnce, settings.verifyEmail);



  AntiEntry._initRoutes(settings);  

  if(Meteor.isClient) {
    AntiEntry._configClient(settings);
  }

  if(Meteor.isServer) {
    AntiEntry._configServer(settings);
  }
  
};




