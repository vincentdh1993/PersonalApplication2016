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

  "seelist": function(houseObj){
    Settings.find().fetch();
  },

   "removeAll": function(){
    Settings.remove({});
    console.log("removed everything!");
  },


 
  
})




//  "updatelanguage": function(language){
//	Settings.insert(language);
//  },