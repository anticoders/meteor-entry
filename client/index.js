
_.extend(AntiEntry, {

  show: function(mode) {

  },

  logIn: function() {
    AntiModals.overlay('antiEntryHub', {data:{
      mode: 'logIn',
    }});
  },

  signUp: function() {
    AntiModals.overlay('antiEntryHub', {data:{
      mode: 'signUp',
    }});
  },

  logOut: function() {
    Meteor.logout();
  },

  forgotPassword: function() {
    AntiModals.overlay('antiEntryHub', {data:{
      mode: 'forgotPassword',
    }});
  },

  requestInvitation: function() {

  },

  changeEmail: function() {
    AntiModals.overlay('antiEntryModalChangeEmail');
  },

  changePassword: function() {
    AntiModals.overlay('antiEntryModalChangePassword');
  },



  receiveInvitation: function() {

  },



  confirmEmailVerified: function() {

  },

  confirmPasswordReset: function() {

  },

  confirmEmailChange: function() {

  },

  confirmPasswordChange: function() {

  },



});



