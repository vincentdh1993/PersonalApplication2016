Meteor.publish("theHouses",
	function(){return HouseDatas.find();})

//Meteor.publish("theHousesStates",
//	function(state){return HouseDatas.find(to:state);})


Meteor.publish("theComments",
	function(){return Comments.find();})


Meteor.publish("userData", function () {
	if (this.userId) {
		//return Meteor.users.find({});
		return Meteor.users.find({_id: this.userId},
			{fields:{profile:1, "services.google.email":1}});
	} else {
		this.ready();
	}
});

