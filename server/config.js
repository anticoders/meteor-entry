
var settings = {};

AntiEntry.config = function(params) {
  if(settings.initialized) {
    throw new Error('AntiEntry.config() can be only called once!');
  }

  _.extend({
    verifyEmail: true,
    restorePasswordPath: '/entry/restore/:token',
    verifyEmailPath: '/entry/verify/:token',
    invitationPath: '/entry/invitation/:token',
  }, params);

  settings.initialized = true;



  if(!settings.verifyEmail) {
    Accounts.config({
      sendVerificationEmail: true,
    });

    Accounts.validateLoginAttempt(function(attempt) {
      if(!attempt.allowed) return false;
      if(!attempt.user) return;
      console.log("USER ATTEMPT", attempt.user.emails[0]);
      if(attempt.user.emails[0].verified) return true;
      throw new Meteor.Error(1024, 'You need to verify your email first.');
    });
  }

  

};




