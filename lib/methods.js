Meteor.methods({
  "posthouses": function(houseObj){
    HouseDatas.insert(houseObj);
  },

  "postcomments": function(comment){
  	Comments.insert(comment);
  },

  "updatelanguage": function(language){
  	Settings.insert(language);
  },



  "sayhilib": function(){
		console.log("hi");
	},


 
  
})