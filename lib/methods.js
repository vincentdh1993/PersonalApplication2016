Meteor.methods({
  "posthouses": function(houseObj){
    HouseDatas.insert(houseObj);
  },

  "postcomments": function(comment){
  	Comments.insert(comment);
  },

  "sayhilib": function(){
		console.log("hi");
	},
 
  
})