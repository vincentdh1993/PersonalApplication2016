Template.houses.helpers({
	HouseDatas:function(){ //get back tmrw
		//const price = $(".js-price").val();
		//console.log(price);
		return HouseDatas.find({});
	}

})

Template.houses.events({
	"click .js-addHouse": function(event){
		console.log("Clicked");
		const offeredBy = $(".js-name").val();
		const address = $(".js-address").val();
		const city = $(".js-city").val();
		const state = $(".js-state").val();
		const price = $(".js-price").val();
		const jan = $(".js-jan").val();
		const feb = $(".js-feb").val();
		const mar = $(".js-mar").val();
		const apr = $(".js-apr").val();
		const may = $(".js-may").val();
		const jun = $(".js-jun").val();
		const jul = $(".js-jul").val();
		const aug = $(".js-aug").val();
		const sep = $(".js-sep").val();
		const oct = $(".js-oct").val();
		const nov = $(".js-nov").val();
		const dec = $(".js-dec").val();

		const house = 
		//{name:name, city:city, state:state,months:[jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec]};
		{offeredBy:offeredBy, city:city, state:state,months:[jun,jul,aug], price:price, address:address};
		console.dir(house);
		HouseDatas.insert(house);
	}

})