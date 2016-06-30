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

  "addmyprofile": function(profileObj){
    UserProfiles.insert(profileObj);
  },
  
  //"removeAll": function(){
    //UserProfiles.remove({});
    //console.log("removed everything!");
  //},
  
})