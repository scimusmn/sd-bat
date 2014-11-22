/* ---------------------------------------------------- +/

## Bat ##

Code related to the bat template

/+ ---------------------------------------------------- */

Template.bat.created = function () {
  //
};

Template.bat.helpers({

  myHelper: function () {
    //
  }

});

Template.bat.rendered = function () {
  //
};

Template.bat.events({

  'click .delete': function(e, instance){
    var bat = this;
    e.preventDefault();
    Meteor.call('removeBat', bat, function(error, result){
      alert('bat deleted.');
      Router.go('/bats');
    });
  }

});
