Meteor.methods({
  "posthouses": function(houseObj){
    HouseDatas.insert(houseObj);
  },

  "sayhilib": function(){
		console.log("hi");
	},
 
  
})