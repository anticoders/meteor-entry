
Package.describe({
  summary:  "Advanced entry modals",
  name:     "anti:entry",
  version:  "0.5.0",
  git:      "https://github.com/anticoders/meteor-entry.git",
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.0.1');
  
  api.use([
    'accounts-password',
    'deps',
    'reactive-var',
    'reactive-dict',
    'spacebars',
    'templating',
    'ui',
    'underscore',
    'iron:router@1.0.3'
  ], ['client', 'server']);

  api.use(['anti:modals@0.4.0'], 'client');
  api.imply(['anti:modals'], 'client');

  api.export('AntiEntry', ['client', 'server']);

  api.addFiles([
    'both/index.js',
    'both/config.js',
    'both/routes.js',
  ], ['client', 'server']);

  api.addFiles([
    'client/index.js',
    'client/config.js',

    'client/utils/form.js',
    'client/utils/formFields.html',
    'client/utils/formFields.css',
    
    'client/button/antiEntryButton.html',
    'client/button/antiEntryButton.js',

    'client/hub/antiEntryHub.html',
    'client/hub/antiEntryHub.js',
    'client/hub/antiEntryHubForgotPassword.html',
    'client/hub/antiEntryHubForgotPassword.js',
    'client/hub/antiEntryHubLogIn.html',
    'client/hub/antiEntryHubLogIn.js',
    'client/hub/antiEntryHubRequestInvitation.html',
    'client/hub/antiEntryHubRequestInvitation.js',
    'client/hub/antiEntryHubSignUp.html',
    'client/hub/antiEntryHubSignUp.js',

    'client/modals/antiEntryModalChangeEmail.html',
    'client/modals/antiEntryModalChangeEmail.js',
    'client/modals/antiEntryModalChangePassword.html',
    'client/modals/antiEntryModalChangePassword.js',
    'client/modals/antiEntryModalReceiveInvitation.html',
    'client/modals/antiEntryModalReceiveInvitation.js',

  ], 'client');


  api.addFiles([
    'server/config.js',
    'server/methods.js',
    
  ], 'server');

});






