Meteor.methods({

  'antiEntry:forgotPassword': function(email) {
    var user = Meteor.users.findOne({"emails.address": email});
    if (!user) {
      return {
        success: false,
        reason: "Password not found",
      };
    }

    var token = Random.secret();
    var tokenRecord = {
      token: token,
      email: email,
      when: new Date(),
    };

    Meteor.users.update(user._id, {$set: {
      "services.password.reset": tokenRecord
    }});

    var text = _.template([
      'Hello, <%= username %>!',
      '',
      'To restore your password, click the link below:',
      '',
      '<%= url %>',
      '',
      'Thanks!'
    ].join('\n'), {
      username: user.username,
      // appname: settings.appname,
      url: Meteor.absoluteUrl('///' + '/entry/restore/:token'.replace(':token', token)).replace(/\/{3,}/g, '/'),
    });

    Email.send({
      to: email,
      // from:
      subject: 'Restore password',
      text: text,
    });

    return {
      success: true,
    };
  },

});

