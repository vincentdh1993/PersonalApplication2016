Template.posthouses.helpers({
	HouseDatas:function(){ //get back tmrw
		//const price = $(".js-price").val();
		//console.log(price);
		return HouseDatas.find({});
	},
	specificFormData: function() {
    return {
      id: this._id,
      other: this.other,
      hard: 'Lolcats'
    }
  },


})

Template.posthouses.events({
	"click .js-addHouse": function(event){
		console.log("Clicked");
		var months = [];
		if ($(".js-jan").is(":checked"))
		{
			months.push("January")
		}
		if ($(".js-feb").is(":checked"))
		{
			months.push("February")
		}
		if ($(".js-mar").is(":checked"))
		{
			months.push("March")
		}
		if ($(".js-apr").is(":checked"))
		{
			months.push("April")
		}
		if ($(".js-may").is(":checked"))
		{
			months.push("May")
		}
		if ($(".js-jun").is(":checked"))
		{
			months.push("June")
		}
		if ($(".js-jul").is(":checked"))
		{
			months.push("July")
		}
		if ($(".js-aug").is(":checked"))
		{
			months.push("August")
		}
		if ($(".js-sep").is(":checked"))
		{
			months.push("September")
		}
		if ($(".js-oct").is(":checked"))
		{
			months.push("October")
		}
		if ($(".js-nov").is(":checked"))
		{
			months.push("November")
		}
		if ($(".js-dec").is(":checked"))
		{
			months.push("December")
		}

		const offeredBy = $(".js-offeredBy").val();
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

		const image =$(".js-image").val();
		const images=$(".js-images").val();

		const house = 
		//{name:name, city:city, state:state,months:[jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec]};
		{offeredBy:offeredBy, city:city, state:state,months:months, price:price, address:address, images:images};
		console.dir(house);
		HouseDatas.insert(house);
		alert("Your house has been posted");
	}

})