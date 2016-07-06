Template.commentRow.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,
    //language1: "english"

  });
  console.dir(this.state);
});


Template.comments.helpers({
	Comments: function(){
		return Comments.find({});
	},
})


Template.commentRow.helpers({
	theCounter: function(){
		const instance = Template.instance();
		return instance.state.get("counter");
	},
})



Template.comments.events({
	"click .js-submit-comment": function(event){
	   event.preventDefault();
	   //console.dir(event);
	   const comment_text = $(".js-user-comment").val();
	   if (comment_text==""){
	   	window.alert("You must enter a comment!");
	   	return;
	   }
	   const comment_rating =$(".js-rating-comment").val();
	   const comment_obj =
	   {text: comment_text,
	   	rating: parseInt(comment_rating),
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
	    userEmail: Meteor.user().emails[0].address};
	    //console.dir(comment_obj);
	    Meteor.call("postcomments",comment_obj);
	    //Comments.insert(comment_obj);
	    $(".js-user-comment").val("");
	    //Router.go('/');
	    //console.log("Did we get here????")
	},

	"click .js-remove-Comments": function(event){
    console.log("removing...");
    Meteor.call("removeComments");
  },
});

Template.commentRow.events({
	"click .js-delete-comment": function(event){
		console.log("clicked on the x");
		console.dir(this);
		Comments.remove(this.comment._id);
	},


	"click .js-like-comment": function(event, instance){ 
		console.log("Clicked");
		const p = instance.state.get("counter"); 
		instance.state.set("counter", 1+p); 
	},

})