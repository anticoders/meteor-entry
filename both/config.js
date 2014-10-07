
var settings = {};

AntiEntry.config = function(params) {
  if(settings.initialized) {
    throw new Error('AntiEntry.config() can be only called once!');
  }

  _.extend(settings, {
    appname:                Meteor.absoluteUrl(''),

    verifyEmail:            true,
    requireInvitation:      false,
    registerCode:           false,

    restorePasswordPath:    '/entry/restore/:token',
    verifyEmailPath:        '/entry/verify/:token',
    invitationPath:         '/entry/invitation/:token',

    postVerifyEmailPath:    '/',

    entryPath:              '/entry',
    logInPath:              '/entry/login',
    signUpPath:             '/entry/signup',
    logoutPath:             '/entry/logout',
    forgotPasswordPath:     '/entry/forgot',
    requestInvitationPath:  '/entry/request',
  }, params);

  settings.initialized = true;

  AntiEntry._initRoutes(settings);  
  AntiEntry._config(settings);
};




