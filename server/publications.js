Meteor.publish("theHouses",
	function(){return HouseDatas.find();})

//Meteor.publish("theHousesAt",
//	function(city){return HouseDatas.find(city:city);}) // 이거 설명


Meteor.publish("theComments",
	function(){return Comments.find();})


Meteor.publish("userData", function () {
	if (this.userId) {
		//return Meteor.users.find({});
		return Meteor.users.find({_id: this.userId},
			{fields:{profile:1, "services.google.email":1}});  //이거설명
	} else {
		this.ready();
	}
});

