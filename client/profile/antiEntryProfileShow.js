Template.antiEntryProfileShow.events({

});

Template.antiEntryProfileShow.helpers({
  userGravatarUrl: function () { 
    return Helpers.gravatar(Meteor.user().emails[0].address);
  }
});
