Meteor.publish('allUsers', function(limit) {

	return Meteor.users.find({},
			{fields: {"username": 1,"profile": 1}}
		);
});

Meteor.publish('allItineraries', function(userId) {
	return Itinerary.find({owner_id: userId});
});

Meteor.publish('allLocations', function(itineraryId) {
	return Location.find({itinerary_id: itineraryId});
});