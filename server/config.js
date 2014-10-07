AntiEntry._config = function(settings) {
  
  if(settings.verifyEmail) {
    enableEmailVerification(settings);
  }

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


