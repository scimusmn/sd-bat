/* ---------------------------------------------------- +/

## Publications ##

All publications-related code.

/+ ---------------------------------------------------- */

// Publish all bats

Meteor.publish('allBats', function() {
  return Bats.find();
});

// Publish a single bat

Meteor.publish('singleBat', function(id) {
  return Bats.find(id);
});
