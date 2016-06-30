Template.myprofile.helpers({
	UserProfiles:function(){ //get back tmrw
		//const price = $(".js-price").val();
		//console.log(price);
		return UserProfiles.find({});
	},
	specificFormData: function() {
    return {
      id: this._id,
      other: this.other,
      hard: 'Lolcats'
    }
  },


})

Template.myprofile.events({
	"click .js-addprofile": function(event){
		console.log("Clicked");
		

		const firstname = $(".js-firstname").val();
		const lastname = $(".js-lastname").val();
		const nickname = $(".js-nickname").val();
		const email = $(".js-email").val();
		const birthyear = $(".js-birthyear").val();
		const userid = Meteor.userId();
		

		const profile = 
		{firstname:firstname, lastname:lastname, nickname:nickname, email:email, birthyear:birthyear, userid:userid};
		console.dir(profile);
		//HouseDatas.insert(house);
		Meteor.call("addmyprofile",profile);
		alert("Your profile has been posted");
		window.location = '/profile';

	}

})