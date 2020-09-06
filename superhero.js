//Accessing the hero//
var xhrRequest = new XMLHttpRequest();
// Accessing the hero id from current window object
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var heroId = urlParams.get('id');
let heroObject = null;
xhrRequest.onload = function() {
	var result = JSON.parse(xhrRequest.response);
	// Getting all the available data
	var data = result;
	heroObject = data;
	fillHeroData(heroObject);
	document.getElementById('hero-image').attributes.src = heroObject.image.url;
};
xhrRequest.open('get', 'https://www.superheroapi.com/api.php/3328323083897178/' + heroId);
xhrRequest.send();

function fillHeroData(data) {
	var img = document.getElementById('hero-image');
	img.setAttribute('src', data.image.url);
	document.getElementById('hero-name').innerText = data.name;
	// document.getElementById('hero-details').innerText = data.biography;
	console.log(data.biography);
	// document.getElementById('aliases').innerText = data.biography.aliases;
	// console.log(data.biography.aliases);
	// document.getElementById('alignment').innerText = data.biography.alignment;
	// console.log(data.biography.alignment);
	// document.getElementById('publisher').innerText = data.biography.publisher;

	let object = data.biography;
	for (const property in object) {
		document.getElementById('full-name').innerText = `${'full - name'}: ${object['full-name']}`;
		document.getElementById('alter-egos').innerText = `${'alter-egos'}: ${object['alter-egos']}`;
		document.getElementById('aliases').innerText = `${'aliases'}: ${object['aliases']}`;
		document.getElementById('place-of-birth').innerText = `${'place-of-birth'}: ${object['place-of-birth']}`;
		document.getElementById('first-appearance').innerText = `${'first-appearance'}: ${object['first-appearance']}`;
		document.getElementById('publisher').innerText = `${'publisher'}: ${object['publisher']}`;
		document.getElementById('alignment').innerText = `${'alignment'}: ${object['alignment']}`;

		console.log(`${property}: ${object[property]}`);
	}
}

//Function to show toast message
document.getElementById('add-fav-link').addEventListener('click', addToFavourite);
function showToastMesage(added) {
	var message;
	if (added) {
		message = 'Added your SuperHero to Favourites Successfully!';
	} else {
		message = 'Superhero Already Added!';
	}
	var elem = document.getElementById('msg-container');
	elem.innerText = message;
	elem.style.display = 'block';
	setTimeout(function() {
		elem.style.display = 'none';
	}, 1300);
}

// function to add the superhero

function addToFavourite() {
	let heroName = heroObject.name;
	let heroImage = heroObject.image;
	var hero = {
		id: heroId,
		name: heroName,
		image: heroImage.url
	};
	// accessing and pushing data from and to local storage

	var favHeroName = JSON.parse(localStorage.getItem('names') || '[]');

	if (favHeroName == null) {
		var names = [];
		names.push(hero);
		window.localStorage.setItem('names', JSON.stringify(names));
		showToastMesage(true);
	} else {
		var res = containsObject(heroId, favHeroName);
		console.log(res);
		if (!res) {
			favHeroName.push(hero);
			window.localStorage.setItem('names', JSON.stringify(favHeroName));
			showToastMesage(true);
		} else {
			showToastMesage(false);
		}
	}

	console.log(favHeroName);
}

// Function to check if hero already added

function containsObject(id, list) {
	for (let i = 0; i < list.length; i++) {
		if (list[i].id == id) {
			return true;
		}
	}
	return false;
}
// on clicking my favourite button
document.getElementById('MY_FAV').addEventListener('click', function() {
	window.location.assign('favourite.html');
});
