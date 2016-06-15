Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});


Router.route('/',{name: "home"});
Router.route('/about', {name: 'about'});
Router.route('/comments', {name: 'comments'});
Router.route('/houses', {name: 'houses'});