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

  
  
})


