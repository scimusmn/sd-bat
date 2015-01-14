Template.layout.rendered = function() {
    /**
     * Define without the var to make this accessible across the events
     *
     * 3 minute screen saver
     */
    sSaverTimeout = 180000;
    // Dev timeout
    //sSaverTimeout = 3000;
    saverEnabled = Router.current().params.query.saver;
    if (!saverEnabled) {
        saveScreen(sSaverTimeout);
    }
};

/**
 * Reset the screensaver everytime we get a mouse (touch) event
 */
Template.layout.events({
    'click #screensaver': function(event, template) {
        $('#screensaver').removeClass('animated fadeIn');
        $('#screensaver').addClass('animated fadeOut');
        setTimeout(function(){
            $('#screensaver').hide();
        }, 600);
    },

    'click': function(event, template) {
        // Reset the screensaver timer
        clearTimeout(sSaver);
        // Start the screensaver timer
        saveScreen(sSaverTimeout);
    },

    'dragstart': function(e) {
        e.preventDefault();
    }

});

/**
 * Set a timeout.
 *
 * If it elapses, go back to the homepage
 */
function saveScreen(sSaverTimeout) {
    sSaver = setTimeout(function(){

        // If you're not on the homepage,
        // go there and send a flag to turn on the screensaver
        var home = Meteor.settings.public.homeItem;

        if (Router.current().route._path == "/bats") {
            console.log("Route path equals /bats")
            $('#screensaver').removeClass('animated fadeOut');
            $('#screensaver').addClass('animated fadeIn');
            $('#screensaver').show();
        }
        else {
            Router.go(
                'bats',
                {link: home},
                {query: {saver: 'true'}}
            );
        }
    }, sSaverTimeout);
}
