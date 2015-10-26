$(function() {
alert("hello");
	$('.form_type').click(function(e) {
		var formType = e.target.className.split(' ')[1];
		console.log(formType);
		var query = 'http://45.55.41.12/SIDAHTML/sidaHtml.php?dir_name=init&form_type=' + formType;
		console.log(query);
		$('.display').html('Loading...');
		$.get(query, function(data) {
			console.log(data);
			var files  = data.split(',');
			files.splice(0, 2);
			files.splice(files.length - 1, 1);
			console.log(files);

			$('.dates').html('');
			files.map(function(item) {
				$('<div class="dir_name">' + item + '</div>').appendTo('.dates');
			});
			$('.display').html('');

			$('.dir_name').click(function(e) {
				var dirName = e.target.innerHTML;
				//original path
				var query = 'http://45.55.41.12/SIDAHTML/sidaHtml.php?dir_name=' + dirName + '&form_type=' + formType;
				
				//new path (to test repo port 9002)
				//var query = 'http://45.55.41.12:9002/non-psql/SIDAHTML/sidaHtml.php?dir_name=' + dirName + '&form_type=' + formType;
				$('.display').html('Loading...');
				$.get(query, function(data) {
					console.log(data);
					var files  = data.split(',');
					files.splice(0, 2);
					files.splice(files.length - 1, 1);
					console.log(files);

					$('.result').html('');
					files.map(function(item) {
						var html = '<div class="item"><a href="http://45.55.41.12/SIDAHTML/output_' + formType + '/' + dirName + 
							'/' + item +  '" target="_blank">' + item + '</a></div>';
							console.log(html);
						$(html).appendTo('.result');
						$('.display').html('');
					});
				}).fail(function() {
					console.log('failed');
				});
			});
		}).fail(function() {
				console.log('failed');
		});
	});
	var result;
})
