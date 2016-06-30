Meteor.methods({
  "posthouses": function(houseObj){
    HouseDatas.insert(houseObj);
  },

  "postcomments": function(comment){
  	Comments.insert(comment);
  },


  "addwishlist": function(houseObj){
    houseObj.userId=this.userId;
    Settings.insert(houseObj,this.userId);
  },

  "sayhilib": function(){
    console.log("hi");
  },


 
  
})




//  "updatelanguage": function(language){
//	Settings.insert(language);
//  },