Helpers = {};

Meteor.startup(function() {

  _.each(Helpers, function (helper, key) {
    Template.registerHelper(key, helper)
  });

});

