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
    var video = $('#bat-video')[0];
    video.onended = function(e) {
        $('#bat-video')[0].pause();
        video.currentTime = 0;
        $('.video-control .pause').addClass('disabled');
        $('.video-control .play').removeClass('disabled');
    };
};

Template.bat.events({

    'end #bat-video': function(e) {
        console.log('Video end');
    },

    'click .video-control .pause': function(e) {
        e.preventDefault();
        console.log('Pause button clicked.');
        $('#bat-video')[0].pause();
        $('.video-control .pause').addClass('disabled');
        $('.video-control .play').removeClass('disabled');
    },

    'click .video-control .play': function(e) {
        e.preventDefault();
        console.log('Play button clicked.');
        $('#bat-video')[0].play();
        $('.video-control .play').addClass('disabled');
        $('.video-control .pause').removeClass('disabled');
    },

    'click .btn-home': function(e) {
        e.preventDefault();
        Router.go('/bats');
    }

});

8
