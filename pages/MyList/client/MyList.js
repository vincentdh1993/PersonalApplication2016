
Template.mylist.helpers({
	settings:function(){
		return Settings.find({});
	},

	username: function() {
    return Meteor.userId();
	},

	house:function(hId){
		const h = HouseDatas.findOne({_id:hId});
		console.dir(h);
		return h;
	},
})


Template.settingsrow.helpers({
	house:function(hId){
		return HouseDatas.find({_id:hId})
	},

})


/*
Template.mylist.events({
	"click .js-addWish": function(event){
		console.log("Clicked");
		console.dir(this);
		const userid = Meteor.userId();
		Meteor.call("addwishlist", this.h);
	},
});
*/
//Template.mylist.helpers({
	//Settings: function(){
		//return Settings.find({},{sort:{userId:userId}, limit:100});}
//})
//Template.mylist.helpers({
   //settings: function(){
       //return Meteor.subscribe;}
//})



//Template.mylist.helpers({
//  settings: function(){
      //return Settings.find({})
//})


/*
Template.mylist.helpers({
 Settings: function(){
Meteor.subscribe("mylist",Meteor.userId());
     return Settings.find({})
 }
})
*/
