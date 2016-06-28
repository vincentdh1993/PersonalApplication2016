Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});


Router.route('/',{name: "home"});
Router.route('/about', {name: 'about'});
Router.route('/comments', {name: 'comments'});
Router.route('/houses', {name: 'houses'});
Router.route('/posthouses', {name: 'posthouses'});
Router.route('/testing', {name: 'testing'});
Router.route('/quiz1', {name: 'quiz1'});

Router.route('/showhouses/:_id',
	{name:"showhouses",
		data: function(){
			const c = HouseDatas.findOne({_id:this.params._id})
			console.dir(c);
		return c
		}
	}
);








/*
Router.route('/post/:_id', function () {
  this.render('Post', {
    data: function () {
      return Posts.findOne({_id: this.params._id});
    }
  });
*/
 

//Router.route('/profile/:_id')