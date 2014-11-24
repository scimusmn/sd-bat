/* ---------------------------------------------------- +/

## Publications ##

All publications-related code.

/+ ---------------------------------------------------- */

// Publish all bats

Meteor.publish('allBats', function() {
  return Bats.find({}, {sort: {order: 1}});
});

// Publish a single bat

Meteor.publish('singleBat', function(id) {
  return Bats.find(id);
});
