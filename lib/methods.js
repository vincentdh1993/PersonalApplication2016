Meteor.methods({
  "posthouses": function(houseObj){
    HouseDatas.insert(houseObj);
  },

  "postcomments": function(comment){
  	Comments.insert(comment);
  },


  "addwishlist": function(houseObj){
    Settings.insert(houseObj);
  },

  "sayhilib": function(){
    console.log("hi");
  },


 
  
})




//  "updatelanguage": function(language){
//	Settings.insert(language);
//  },