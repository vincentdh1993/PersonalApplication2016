Meteor.startup(function(){
	HouseDatas.remove({});
	HouseDatas.insert({address:"70 Hope Ave", city:"Waltham", state:"MA",deposit:1000, price:900, offeredBy:"Hyon"});
	HouseDatas.insert({address:"60 Hope Ave", city:"Waltham", state:"MA",deposit:1000, price:900, offeredBy:"Sean"});
	HouseDatas.insert({address:"17 shakespeare road", city:"Newton", State: "MA",deposit:1000, price:700, offeredBy:"Jin"});
	HouseDatas.insert({address:"415 South Street", city:"Newton", State: "MA",deposit:1000, price: 1250, offeredBy:"Vincent"});
	HouseDatas.insert({address:"415 South Street", city:"Cambridge", State: "MA",deposit:1000, price: 1250, offeredBy:"Dong Ho Lee"});
	
})