Template.tripInfo.helpers({
	currentTime: function() {	
		var time = setInterval( function () {
	        Session.set("dateval",moment().format("HH:mm:ss"));
	    }, 1000 );
	    return Session.get("dateval");
	}
});