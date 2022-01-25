// // All the JS will be written here 

// // So lets get started


var string = "Come to learn, Go to serve";
			// Lets create a list to in which we will append every letter of the string so that we can add them in our paragraph one by one
			letters = []
			for (var num = 0; num < string.length; num = num+1) {
				var letter  = (string.slice(num, num+1));
				letters.push(letter);
			};
			var num = 0;
			var nums = 0
			var mytext = document.getElementById('heading_para').innerHTML;
			var me =  setInterval(() => {
					if (num<string.length+1) {
						// Slicing the list one by one
						var towrite = letters.slice(num, num+1);
						document.getElementById('heading_para').innerHTML += towrite;
						// Increasing the variable so that all can get the letters can get a chance to add on the paragraph
						num = num+1;
					}
					else if (num==string.length+1) {
						// Now what we want is that delete a letter one by one from end
						var deletes = string.slice(0, (string.length-nums));
						// Making the innerhtml equal to delets
						document.getElementById('heading_para').innerHTML = deletes;
						// Increasing nums so that all the numbers get deleted
						nums = nums+1
						if (nums==string.length+1) {
							// After deletion of all the numbers make all the variables 0 to start all the things from starting
							num = 0;
							nums = 0;
						}
					}
					
			}, 100);
