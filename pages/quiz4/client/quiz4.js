Template.quiz4.helpers({
	Bios:function(){ 
		return Bios.find({});
	},
})

Template.quiz4.events({
	"click .js-postbio": function(event){
		console.log("Clicked");

		

		const name = $(".js-name").val();
		const bio = $(".js-bio").val();
		

		const updatebio = 
		{name:name, bio:bio};
		console.dir(updatebio);
		Meteor.call("postbios",updatebio);
		alert("Your bio has been updated");
	},

	"click .js-removebio": function(event){
    console.log("removing...");
    Meteor.call("removeBios");
  }

})