Template.home.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,
    language1: "english"

  });
  console.log("creating the template");
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
  	english:function(){
		return ("Welcome Back");
	},

  	korean:function(){
		return ("안녕하세요");
	},
	japanese:function(){
		return ("Konichiwa");
	},
	language:function(){
		const instance = Template.instance();
		if(instance.state.get("language")==="English"){
			return english;
		}
		//return instance.state.get("language");
	}

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

	"change .js-language": function(event, instance){
		const language = instance.$(".js-language").val();
		console.log($(".js-language").val())
		instance.state.set("language",language);

		



	},




});


