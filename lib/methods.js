Meteor.methods({
  "posthouses": function(houseObj){
    HouseDatas.insert(houseObj);
  },

  "postcomments": function(comment){
  	Comments.insert(comment);
  },


  "addwishlist": function(houseObj){
    console.dir(houseObj);
    houseObj.userId=this.userId;
    const wish={userId:this.userId, houseId:houseObj._id};
    Settings.remove(wish);
    Settings.insert(wish);
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