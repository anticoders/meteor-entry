var dict = new ReactiveDict();

Template.antiEntryHubLogIn.rendered = function() {
  dict.set('message', false);
};

Template.antiEntryHubLogIn.message = function() {
  return dict.get('message');
};


Template.antiEntryHubLogIn.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var data = Form.toJSON($(e.currentTarget));

    Meteor.loginWithPassword(data.email, data.password, function(error) {
      console.log("LWP", error);
      if (error) {
        if(error.reason === 'Incorrect password' || error.reason === 'User not found') {
          dict.set('message', 'Incorrect email or password.');
        } else if(error.error === 1024) {
          dict.set('message', 'You need to verify your email first.');
        } else {
          dict.set('message', 'Could not log in. \n' + error.reason);
        }
      } else {
        AntiModals.dismissOverlay(e.currentTarget);
      }
    });

  },

});

