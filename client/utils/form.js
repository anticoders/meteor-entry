Form = {};

Form.toJSON = function(form) {
  var json = {};
  $(form).find('[name]').each(function () {
    json[this.name] = $(this).val();
  });
  return json;
};


