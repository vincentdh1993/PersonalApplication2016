Template.home.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,
    //language1: "english"

  });
  console.dir(this.state);
});


Template.home.helpers({
	theColor: function(){
		const instance = Template.instance();
		return instance.state.get("color");
	},
	theCounter: function(){
		const instance = Template.instance();
		return instance.state.get("counter");
	},

	userName: function() {
    return Meteor.user().profile.name;  
  	},

  	userEmail: function() {
    return Meteor.user().emails[0].address;  
  	},
})


Template.home.events({

	"change .js-color": function(event, instance){
		const c = instance.$(".js-color").val();
		instance.state.set("color",c);
	},

	"click .js-pusher": function(event, instance){ 
		console.log("Clicked");
		const p = instance.state.get("counter"); 
		instance.state.set("counter", 1+p); 
	},





});


