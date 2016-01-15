if (Meteor.isClient) {
  Template.signupForm.events({
    'submit #signup-form' : function(e,t){
      e.preventDefault();

      Accounts.createUser({
        email: t.find('#signup-email').value,
        password: t.find('#signup-password').value,
        profile:{
          fullname: t.find('#signup-name').value
        }
      }, function(err){
          if(err){
            alert("Account is not created");
          }
      });
    }
  })

  Template.logoutForm.events({
    'submit #logout-form' : function(e,t){
      e.preventDefault();

      Meteor.logout(function(error){
        if(error)
        {
          alert("Unable to logout from the app");
        }
      })
    }
  })

  Template.loginForm.events({
    'submit #login-form' : function(e,t){
      e.preventDefault();

      var email= t.find("#login-email").value;
      var password= t.find("#login-password").value;

      Meteor.loginWithPassword(email,password,function(error){
        if(error)
        {
          alert("wrong Credentials");
        }
      })

    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


/*Template.register.events({
 'submit form': function(event, template){
 event.preventDefault();
 var emailVar= template.find('#email').value;
 var passwordVar = template.find('#password').value;
 Accounts.createUser({
 email: emailVar,
 password: passwordVar
 });
 }
 });

 Template.login.events({
 'submit form': function(event, template){
 event.preventDefault();
 var emailVar= template.find('#login-email').value;
 var passwordVar = template.find('#login-password').value;
 Meteor.loginWithPassword(emailVar,passwordVar);
 }
 });

 Template.dashboard.events({
 'click .logout': function(event){
 event.preventDefault();
 Meteor.logout();
 }
 });*/