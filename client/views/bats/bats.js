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

Template.bats.rendered = function() {
    /**
     * Define without the var to make this accessible across the events
     */
    saverEnabled = Router.current().params.query.saver;
    if (saverEnabled) {
        $('#screensaver').removeClass('animated fadeOut');
        $('#screensaver').addClass('animated fadeIn');
        $('#screensaver').show();
    }
};

Template.bats.events({
    'click .btn-bat': function(e) {

        e.preventDefault();
        destination = this;
        clicked = e.target;

        Router.go('bat', destination);
    }
});
