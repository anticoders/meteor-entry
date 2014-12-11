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
              AntiModals.alert('Invalid or outdated token');
              return;
            }
            Router.go(settings.postVerifyEmailPath);
          });
        }
      });
    });
  }

  if(settings.logOutPath) {
    Router.map(function() {
      this.route('antiEntryLogOut', {
        path: settings.logOutPath,
        action: function() {
          Meteor.logout(function(error) {
            if(error) {
              AntiModals.alert('Could not log out!');
              console.log("LogOut Error", error);
            } else {
              Router.go(settings.postLogOutPath);
            }
          });
        } 
      });
    });
  }


};




