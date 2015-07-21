Template.createRide.onRendered(function() {
  this.$('#datetimepicker4').datetimepicker({ 
      minDate:new Date(), 
    });  
  Meteor.typeahead.inject();    
});

Template.list.helpers({
 rides: function(){
  return Rides.find();
 } 
}),

Template.myRides.helpers({
  myRides: function() {
    return Rides.find({'ride.userId':Meteor.userId()});
  }
}),
Template.createRide.helpers({
  cities: function() {
    //return Cities.find().fetch().map(function(it){ return it.name; })
    return ["Bangalore", "Chennai", "Hyderabad", "Goa", "Cochin", "Mumbai", "Visakhapatnam", "Vijayawada"]
    //Meteor.call('fetchCities');
  }
}),  

Template.createRide.events({
  'submit': function(e) {
    var ride = {
      from: e.target.from.value,
      to: e.target.to.value,
      date: e.target.date.value,
      desc: e.target.desc.value,
      seats: e.target.seats.value,
      createdAt: new Date(),
      userId: Meteor.user()._id
    };
    Meteor.call('createRide', ride);
      $('textarea').val('');
      Router.go('/view/all');
      return false;
  }
})

