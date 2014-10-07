AntiEntry._initRoutes = function(settings) {
  if(!Router) return;

  if(settings.verifyEmailPath) {
    Router.map(function() {
      this.route('antiEntryVerifyEmail', {
        path: settings.verifyEmailPath,
        action: function() {
          console.log("ACTION FOR", this.params);
          Accounts.verifyEmail(this.params.token, function(error) {
            if(error) {
              AntiModal.alert('Invalid or outdated token');
              return;
            }
            Router.go(settings.postVerifyEmailPath);
          });
        }
      })
    });
  }


};




