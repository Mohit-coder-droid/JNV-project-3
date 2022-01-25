// For history section

// Get the modal
var modal = document.getElementById("about_pop");

// Get the button that opens the modal
var btn = document.getElementById("about_history_open");

// Get the <span> element that closes the modal
var span = document.getElementById("close_history_pop");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  about_pop.style.display = "block";
  about_pop_objective.style.display = "none";
  about_pop_goals.style.display = "none";
  document.getElementById('campus_life').style.cssText = "margin-top:73vh;"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  about_pop.style.display = "none";
  document.getElementById('campus_life').style.cssText = "margin-top:0;"
}


//For goal section
var modal = document.getElementById("about_pop_goals");

// Get the button that opens the modal
var btn = document.getElementById("about_goal_open");

// Get the <span> element that closes the modal
var span = document.getElementById("close_goal_pop");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  about_pop_goals.style.display = "block";
  about_pop_objective.style.display = "none";
  about_pop.style.display = "none";

  // Get the campus life div and increase its margin so that cards get fit into the place
  document.getElementById('campus_life').style.cssText = "margin-top:50vh;"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  about_pop_goals.style.display = "none";
  document.getElementById('campus_life').style.cssText = "margin-top:0;"
}




//For objective section
var modal = document.getElementById("about_pop_objective");

// Get the button that opens the modal
var btn = document.getElementById("about_objective_open");

// Get the <span> element that closes the modal
var span = document.getElementById("close_objective_pop");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  about_pop_objective.style.display = "block";
  about_pop_goals.style.display = "none";
  about_pop.style.display = "none";
  document.getElementById('campus_life').style.cssText = "margin-top:39vh;"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  about_pop_objective.style.display = "none";
  document.getElementById('campus_life').style.cssText = "margin-top:0;"
}



// Do this for all
window.addEventListener('scroll' ,()=>{
	var about_pop_scroll =  window.scrollY;

	// If someone scroll ignoring the data then hide the popup
	if (about_pop_scroll>963) {
		about_pop.style.display = "none";
		document.getElementById('campus_life').style.cssText = "margin-top:0;"
	}

	if (about_pop_scroll>963) {
		about_pop_goals.style.display = "none";
		document.getElementById('campus_life').style.cssText = "margin-top:0;"
	}

	if (about_pop_scroll>963) {
		about_pop_objective.style.display = "none";
		document.getElementById('campus_life').style.cssText = "margin-top:0;"
	}
})