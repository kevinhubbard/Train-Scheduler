$(document).ready(function() {
	localStorage.clear();

	$(document).on('click', '.btn', function() {
		event.preventDefault();
		


		var $train = $('#train').val();
		var $destination = $('#destination').val().trim();
		var $time = $('#time').val().trim();
		var $frequency = $('#frequency').val().trim();
		var $table = $('.table');

		console.log($train+$destination+$time+$frequency);

		var train = {name:$train, destination:$destination, time:$time, frequency:$frequency};
		console.log(train.name+train.destination+train.time+train.frequency);

		localStorage.setItem('train', JSON.stringify(train));

		$table.append('<tr><td>'+$train+'</td><td>'+$destination+'</td><td>'+ $time+'</td><td>'+ $frequency+'</td></tr>');
		document.append($table);

		$('#train').val('');
		$('#destination').val('');
		$('#time').val('');
		$('#frequency').val('');
	});
});