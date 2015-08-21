
(function($) {

			$('#input-form').one('submit',function(e){
					var firstName = encodeURIComponent($('#first-name').val());
					var firstNameID = "entry.438718222";
					var lastName = encodeURIComponent($('#last-name').val());
					var lastNameID = "entry.716806435";
					var email = encodeURIComponent($('#email').val());
					var emailID ="entry.919488926";
					var phoneNumber = encodeURIComponent($('#phone-number').val());
					var phoneNumberID = "entry.1839524636";
					var companyName = encodeURIComponent($('#company-name').val());
					var companyNameID = "entry.1337251801";
					var jobTitle = encodeURIComponent($('#job-title').val());
					var jobTitleID = "entry.1730128957";
					var biggestChallenge = encodeURIComponent($('#biggest-challenge').val());
					var biggestChallengeID = "entry.215307105";
				  if ($('#checkbox').is(":checked"))
				  {
  				 console.log('checked');
				 	}
				  else checkbox = encodeURIComponent($('#checkbox').val(0));
					var checkbox = encodeURIComponent($('#checkbox').val());
					var checkboxID = "entry.1712222729";
					var message = encodeURIComponent($('#message').val());
					var messageID = "entry.2129071544";
				
					var baseURL = 'https://docs.google.com/a/the1994.com/forms/d/1fQy9HaMwtNSbsjit3C88n6QQwOus4frrBT-gLR3xkpk/formResponse?';
					var submitRef = '&submit=Submit';
					var submitURL = (baseURL + firstNameID + "=" + firstName + "&" + lastNameID + "=" + lastName + "&" + emailID + "=" + email + "&" + phoneNumberID + "=" + phoneNumber + "&" + companyNameID + "=" + companyName + "&" + jobTitleID + "=" + jobTitle + "&" + biggestChallengeID + "=" + biggestChallenge + "&" + checkboxID + "=" + checkbox + "&" +  messageID + "=" + message + submitRef);
					console.log(submitURL);
					console.log(this);
					console.log(this[0]);
					$(this)[0].action=submitURL;
					console.log("got here");
					$(this).submit();
					e.preventDefault();
				  e.stopPropagation()
	// +        $('#name').addClass('active').val('Thank You!');
			});
	
	
	})(jQuery);