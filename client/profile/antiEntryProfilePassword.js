var message = new ReactiveVar(false);


Template.antiEntryProfilePassword.rendered = function() {
  message.set(false);
};

Template.antiEntryProfilePassword.helpers({
  message: function() {
    return message.get();
  },
});

Template.antiEntryProfilePassword.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var data = Form.toJSON(e.currentTarget);
    console.log('password', data['password']);
    console.log('old_password', data['old_password']);
    
    Accounts.changePassword( 
      data['password'],
      data['new_password'],
      function(error) {
        if (error && error.error !== 1024) {
          message.set(error.reason)
          AntiModals.alert('An error occured: ' + error.reason);
          console.log("ENTRY ERROR", error);
          return;
        } else {
          AntiModals.alert({
            title: "Password updated!",
            closer: true,
            modal: true,
          });
        }
      }
    );
  }
});

