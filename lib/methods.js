Meteor.methods({
  "posthouses": function(houseObj){
    HouseDatas.insert(houseObj);
  },


  "postbios": function(bioObj){
    Bios.insert(bioObj);
  },

  "postcomments": function(comment){
    check(comment.rating,Number);
    if(comment.rating<0 || comment.rating>5){
      throw new Meteor.Error(400,"Ratings out of range.");
    }
  	Comments.insert(comment);
  },


  "addwishlist": function(houseObj){
    console.dir(houseObj);
    houseObj.userId=this.userId;
    const wish={userId:this.userId, houseId:houseObj._id};
    console.dir(wish);
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

    "removeComments": function(){
    Comments.remove({});
    console.log("removed everything!");
  },

  "removeBios": function(){
    Bios.remove({});
    console.log("removed everything!");
  }, 
  
})




//  "updatelanguage": function(language){
//	Settings.insert(language);
//  },