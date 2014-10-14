
var data = new ReactiveDict();



Template.antiEntryProfile.rendered = function() {
  console.log("AEP", this.data);
  data.set('mode', this.data.mode);
};


Template.antiEntryProfile.helpers({
  modeIs: function(value) {
    return data.get('mode') === value;
  },
});

Template.antiEntryProfile.events({
  'click .__mode': function(e, t) {
    console.log("SET MODE");
    data.set('mode', $(e.currentTarget).data('mode'));
  },
});

