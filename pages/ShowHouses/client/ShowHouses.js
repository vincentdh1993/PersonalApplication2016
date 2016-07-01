Template.houses.helpers({
	HouseDatas:function(){ //get back tmrw
		//const price = $(".js-price").val();
		//console.log(price);
		return HouseDatas.find({});
	}

})

Template.houses.events({
	"click .js-removeall": function(event){
    Meteor.call("removeall",$(".js-password".val()))
  },

  "click .js-desired": function(event){
		console.log(event);
		event.preventDefault();
		console.log("entered data");
		const v = $(".js-desired").val();
		console.log(v)
		Meteor.subscribe("theHousesAt",v);
	},
	"click .js-remove-All": function(event){
    console.log("removing...");
    Meteor.call("removeAll");
  },

});

Template.housedatarow.events({
	"click .js-addWish": function(event){
		console.log("Clicked");
		console.dir(this);
		const userid = Meteor.userId();
		Meteor.call("addwishlist", this.h);
	},
});
//	"click .js-remove-All1": function(event){
//    console.log("removing...");
//    Meteor.call("removeAll");
//  },





/*
	"click .js-posted": function(event){
		console.log(event);
		event.preventDefault();
		console.log("entered data");
		const v = $(".js-posted").val();
		console.log(v);
		Meteor.subscribe("theHousesBy",v);
	},
*/
 


