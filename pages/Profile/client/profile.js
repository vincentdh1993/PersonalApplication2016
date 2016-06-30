Template.profile.helpers({
	UserProfiles:function(){
		return UserProfiles.find({});
	}

})

Template.profile.events({
	"click .js-removeprofile": function(event){
    Meteor.call("removeAll")
  },

  "click .js-desired": function(event){
		console.log(event);
		event.preventDefault();
		console.log("entered data");
		const v = $(".js-desired").val();
		console.log(v)
		Meteor.subscribe("theHousesAt",v);
	},  
})


