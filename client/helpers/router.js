/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    trackPageView: true
});

// Routes

Router.map(function() {

    // Bats

    this.route('bats', {
        path: '/',
        waitOn: function () {
            return Meteor.subscribe('allBats');
        },
        data: function () {
            return {
                bats: Bats.find()
            };
        }
    });

    this.route('bat', {
        path: '/bats/:_id',
        waitOn: function () {
            return Meteor.subscribe('singleBat', this.params._id);
        },
        data: function () {
            return {
                bat: Bats.findOne(this.params._id)
            };
        }
    });

    this.route('content');

    // Users

    this.route('login');

    this.route('signup');

    this.route('forgot');

});
