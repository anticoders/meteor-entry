Template.antiEntryHubForgotPassword.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var data = Form.toJSON(e.currentTarget);

    console.log("FORGOT", data);
    Meteor.call('antiEntry:forgotPassword', data.email, function(error, result) {
      if(error || !(result && result.success)) {
        AntiModals.alert('Error!');
        console.log('AE:FP ERROR', error, result);
      } else {
        AntiModals.alert('Email sent!');
      }
    });
// https://github.com/meteor/meteor/blob/devel/packages/accounts-password/password_server.js#L364-L385

  },

});

