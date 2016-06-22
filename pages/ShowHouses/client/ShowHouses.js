Template.houses.helpers({
	HouseDatas:function(){ //get back tmrw
		//const price = $(".js-price").val();
		//console.log(price);
		return HouseDatas.find({});
	}

})

Template.houses.events({
	
})


Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }
});

