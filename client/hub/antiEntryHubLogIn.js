var data = new ReactiveDict();

Template.antiEntryHubLogIn.rendered = function() {
  data.set('message', false);
};

Template.antiEntryHubLogIn.messages = function() {
  return data.get('messages');
};


Template.antiEntryHubLogIn.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var data = Form.toJSON($(e.currentTarget));

    Meteor.loginWithPassword(data.email, data.password, function(error) {
      if (error) {
        if(error.reason === 'Incorrect password' || error.reason === 'User not found') {
          data.set('messages', ['Incorrect email or password.']);
        } else {
          data.set('messages', ['Could not log in.', error.reason]);
        }
      } else {
        AntiModals.dismissOverlay(e.currentTarget);
      }
    });

  },

});

