
var data = new ReactiveDict();



Template.antiEntryHub.rendered = function() {
  data.set('mode', this.data.mode);
};


Template.antiEntryHub.helpers({
  modeIs: function(value) {
    return data.get('mode') === value;
  },

});

Template.antiEntryHub.events({
  'click .__mode': function(e, t) {
    data.set('mode', $(e.currentTarget).data('mode'));
  },
});

