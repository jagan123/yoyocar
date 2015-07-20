Template.createRide.onRendered(function() {
  this.$('#datetimepicker4').datetimepicker({ 
      minDate:new Date(), 
    });  
})

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

