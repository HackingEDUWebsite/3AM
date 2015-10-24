var myDataRef = new Firebase('https://glowing-heat-5533.firebaseio.com/');

$('#messageInput').keypress(function (e) {
    console.log("What a pain");
    if (e.keyCode == 13) {
    	console.log("Enter key");
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        myDataRef.set('User ' + name + ' says ' + text);
        // Get a database reference to our posts
		// Attach an asynchronous callback to read the data at our posts reference
		myDataRef.on("value", function(snapshot) {
		    console.log(snapshot.val());
		}, function (errorObject) {
		    console.log("The read failed: " + errorObject.code);
		});
        //$('#messageInput').val('');
    }
});