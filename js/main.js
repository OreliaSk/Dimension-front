
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
 

	// * FUNCTION SELECT NAV ELEMENTS : ADD OR REMOVE ACTIVE CLASS
	let tabs = document.querySelectorAll('.tabs li');
	for (let i = 0; i < tabs.length; i++){
		tabs[i].addEventListener('click', function(e){

			let headerActive = document.querySelector('#header');
			headerActive.classList.remove('active');

			if (tabs[i] == tabs[0]) {
				let intro = document.querySelector('#intro');
				intro.classList.add('active');
			} else if (tabs[i] == tabs[1]){
				let work = document.querySelector('#work');
				work.classList.add('active');
			}else if (tabs[i] == tabs[2]){
				let about = document.querySelector('#about');
				about.classList.add('active');
			}else if (tabs[i] == tabs[3]){
				let contact = document.querySelector('#contact');
				contact.classList.add('active');
			}else {
				console.log('error');
			}
			
		});
	}

	// * FUNCTION SELECT CONTENTS ELEMENTS : ADD OR REMOVE ACTIVE CLASS
	let headerActive = document.querySelector('#header');
	let close = document.querySelectorAll('div.close');

	for (let i = 0; i < close.length; i++) {
		close[i].addEventListener('click', function(){

		article = this.parentNode;

		// * REMOVE active class on actif tab
		article.classList.remove('active');

		//* ADD active class on header
		headerActive.classList.add('active');
		});
	}

 }); // end DOMContentLoaded







