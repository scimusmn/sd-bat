/* ---------------------------------------------------- +/

## Bats ##

All code related to the Bats collection goes here.

/+ ---------------------------------------------------- */

Bats = new Meteor.Collection('bats');

// Allow/Deny

Bats.allow({
  insert: function(userId, doc){
    return can.createBat(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return can.editBat(userId, doc);
  },
  remove:  function(userId, doc){
    return can.removeBat(userId, doc);
  }
});

// Methods

Meteor.methods({
  createBat: function(bat){
    if(can.createBat(Meteor.user()))
      Bats.insert(bat);
  },
  removeBat: function(bat){
    if(can.removeBat(Meteor.user(), bat)){
      Bats.remove(bat._id);
    }else{
      throw new Meteor.Error(403, 'You do not have the rights to delete this bat.')
    }
  }
});
