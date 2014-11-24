/* ---------------------------------------------------- +/

## Bats ##

Code related to the bats template

/+ ---------------------------------------------------- */

Template.bats.created = function () {
    //
};

Template.bats.helpers({
    //
});

Template.bats.rendered = function () {
    //
};

Template.bats.events({
    'click .btn-bat': function(e) {

        e.preventDefault();
        destination = this;
        clicked = e.target;

        Router.go('bat', destination);
    }
});
