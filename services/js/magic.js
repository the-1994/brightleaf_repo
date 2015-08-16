// magic.js
$(document).ready(function() {

	// process the form
	$('form').submit(function(event) {

		$('.form-group').removeClass('has-error'); // remove the error class
		$('.help-block').remove(); // remove the error text

		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'firstname' 				: $('input[name=firstname]').val(),
			'lastname' 				: $('input[name=lastname]').val(),
			'email' 			: $('input[name=email]').val(),
			'msg' 	: $('textarea').val()
		};
		// process the form
		$.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: 'process.php', // the url where we want to POST
			data 		: formData, // our data object
			dataType 	: 'json', // what type of data do we expect back from the server
			encode 		: true
		})
			// using the done promise callback
			.done(function(data) {

				// log data to the console so we can see
				console.log(data); 

				// here we will handle errors and validation messages
				if ( ! data.success) {
					
					// handle errors for name ---------------
					if (data.errors.firstname) {
						$('#firstname-group').addClass('has-error'); // add the error class to show red input
						$('#firstname-group').append('<div class="help-block">' + data.errors.firstname + '</div>'); // add the actual error message under our input
					}
					if (data.errors.lastname) {
						$('#lastname-group').addClass('has-error'); // add the error class to show red input
						$('#lastname-group').append('<div class="help-block">' + data.errors.lastname + '</div>'); // add the actual error message under our input
					}

					// handle errors for email ---------------
					if (data.errors.email) {
						$('#email-group').addClass('has-error'); // add the error class to show red input
						$('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
					}

					// handle errors for superhero alias ---------------
					if (data.errors.msg) {
						$('#message-group').addClass('has-error'); // add the error class to show red input
						$('#message-group').append('<div class="help-block">' + data.errors.msg + '</div>'); // add the actual error message under our input
					}

				} else {
			
    $("#lets_talk_form").find('.lets_input').each(function() {
       
                $(this).val('');
         
    });

		$( "#dialog" ).dialog({
  draggable: false,
  modal: true,
  
});

					// ALL GOOD! just show the success message!
				//	$('.lets_talk_form_part').html('<div class="thankyou-msg">' + data.message + '</div>');
								
					}	
					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page

			})

			// using the fail promise callback
			.fail(function(data) {

				// show any errors
				// best to remove for production
				console.log(data);
			});

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});

});
