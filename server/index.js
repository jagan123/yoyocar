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
  },

  /*fetchCities: function(){
    var url = "http://www.travelyaari.com/api/resource/cities";
    Meteor.http.get(url, function(err, result) {
      if (err) {
         console.log('http get FAILED!');
      } else {
        if (result.statusCode === 200) {
          console.log('Status code = 200!');
          console.log(result.content);
        }
      }
    });
  },*/

});