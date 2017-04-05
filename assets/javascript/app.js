$(document).ready(function() {
	localStorage.clear();
	

	//initialize firebase
	var config = {
	    apiKey: "AIzaSyCLAE-khTunF6AO87jASrMRnGlo3_FB278",
	    authDomain: "train-scheduler-app.firebaseapp.com",
	    databaseURL: "https://train-scheduler-app.firebaseio.com",
	    storageBucket: "train-scheduler-app.appspot.com",
	    messagingSenderId: "651649548981"
  	};


 	 firebase.initializeApp(config);
 	 var database = firebase.database();






	$(document).on('click', '.btn', function() {
		event.preventDefault();
		


		var $train = $('#train').val();
		var $destination = $('#destination').val().trim();
		var $time = $('#time').val().trim();
		var $frequency = $('#frequency').val().trim();
		var $table = $('.table');


		var train = {name:$train, destination:$destination, time:$time, frequency:$frequency};
		console.log(train.name+train.destination+train.time+train.frequency);

		localStorage.setItem('train', JSON.stringify(train));


		console.log(JSON.stringify(moment().hour($time)));




		database.ref('/trains ' + train.name).push(train);





		$table.append('<tr><td>'+$train+'</td><td>'+$destination+'</td><td>'+ $time+'</td><td>'+ $frequency+'</td></tr>');
	

		clearKeys();


	});


	function clearKeys(){
		console.log('is this being called??');
		$('#train').val('');
		$('#destination').val('');
		$('#time').val('');
		$('#frequency').val('');
	}

});