var message = new ReactiveVar(false);


Template.antiEntryHubSignUp.rendered = function() {
  message.set(false);
};

Template.antiEntryHubSignUp.helpers({
  message: function() {
    return message.get();
  },
});


Template.antiEntryHubSignUp.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var data = Form.toJSON(e.currentTarget);
    console.log('singup', data);

    Accounts.createUser({
      username: data.username,
      email:    data.email,
      password: data.password,
    }, function(error) {
      if(error && error.error !== 1024) {
        message.set(error.reason)
    //     AntiModals.alert('An error occured');
        console.log("ENTRY ERROR", error);
        return;
      }
      AntiModals.dismissOverlay(e.target);
      AntiModals.alert({
        title: "You're signed up.",
        closer: true,
        modal: true,
        message: 'Click the link in email you just received to finish.',
      });
    // //   // Crater.dismissOverlay(e.target);
    // //   // Router.go('home');
    });
  },
});




