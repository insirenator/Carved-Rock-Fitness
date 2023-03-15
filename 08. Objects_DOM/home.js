// Objects in Javascript

const car = {
	company: 'Tesla',
	model: 'S3',
	type: 'electric',
	mileage: 50,	// 50 miles per charge 

	info() {
		return `Company : ${this.company}\n` + 
				`Model : ${this.model}\n` +
				`Type : ${this.type}\n` +
				`Mileage : ${this.mileage}\n`;
	}
};

console.log(car.info());

/*
	In the object 'car', 
	Properties : company, model, type, mileage.
	Methods    : info()

*/

// Passing objects to function

function displayinfo(obj) {
	for (let key in obj) {
		console.log(obj[key]);
	}
}

displayinfo(car);

// Styling DOM elements using JS
const header = document.getElementById('message');
header.style.color = 'red';
header.style.color = '#FF7890'; // Hex colors

header.style.fontWeight = '300';

// Detecting Button Clicks
const button = document.getElementById('see-review');
button.addEventListener('click', function() {
	console.log('Button Clicked!');
});

button.addEventListener('click', function() {
	const review = document.getElementById('review');

	if(review.classList.contains('d-none')) {
		review.classList.remove('d-none');
		button.textContent = 'CLOSE REVIEW';
	} 
	else {
		review.classList.add('d-none');
		button.textContent = 'SEE REVIEW';
	}
});