if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
Meteor.methods({
  createRide: function(ride) {
    Rides.insert({
      ride: ride
    })
  }
})