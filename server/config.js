AntiEntry._configServer = function(settings) {
  
  if(settings.verifyEmail)
    enableEmailVerification(settings);

  if(settings.requireUsername)
    enableRequireUsername(settings);

  if(settings.registrationCode)
    enableRegistrationCode(settings);

};




var enableEmailVerification = function(settings) {
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


  Accounts.emailTemplates.verifyEmail.text = function(user, originalUrl) {
    var token = _.last(originalUrl.split('/'));
    var url = Meteor.absoluteUrl(settings.verifyEmailPath.replace(':token', token), {
      secure: true
    }).replace(/\/\//g, '/');
    return _.template([
      'Hello, <%= username %>!',
      '',
      'Welcome to <%= appname %>.',
      'To verify your email, simply click the link below:',
      '',
      '<%= url %>',
      '',
      'Thanks!'
    ].join('\n'), {
      username: user.username,
      appname: settings.appname,
      url: url,
    });
  };

};



var enableRequireUsername = function(settings) {
  Accounts.validateNewUser(function(user) {
    if (user.username && user.username.length >= 3)
      return true;
    throw new Meteor.Error(1025, "Username must have at least 3 characters");
  });
};


var enableRegistrationCode = function(settings) {
  Accounts.validateNewUser(function(user) {
    if (user.profile && user.profile.registrationCode && (user.profile.registrationCode === settings.registrationCode)) {
      delete user.profile.registrationCode;
      return true;
    }
    throw new Meteor.Error(1026, "Registration code is required");
  });
};






