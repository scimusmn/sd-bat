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

    'click .btn-home': function(e) {

        e.preventDefault();
        Router.go('/bats');
    }

});
