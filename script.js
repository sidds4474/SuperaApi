// Trigger function get Data on each keyup event in input
document.getElementById('hero-name').onkeyup = getData;

//hero id
let heroId = 0;

function getData() {
	// console.log("inside getData");
	var val = document.getElementById('hero-name').value;
	var list = document.getElementById('lists');
	// console.log(val);
	clearList();
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onload = function() {
		var result = JSON.parse(xmlhttp.response);
		// console.log(result);
		// Do something with the retrieved data ( found in xmlhttp.response )

		// Getting all the available data
		var data = result.results;
		console.log(data);

		if (data == null) {
			alert('not found');
			clearList();
		} else {
			for (var i of data) {
				// creating individual list item and appending it
				var li = document.createElement('li');
				li.innerText = i.name;
				li.id = i.id;
				// console.log(i.name);

				li.classList.add('list-group-item');
				li.addEventListener('click', function() {
					heroId = this.id;
					console.log('heroID:' + heroId);
					document.getElementById('hero-name').value = this.innerText;
					clearList();
					// brings the focus to input
					document.getElementById('hero-name').focus();
					return;
				});
			}
			var ul = document.getElementById('lists').appendChild(li);
		}
	};
	method = 'GET';
	url = 'https://www.superheroapi.com/api.php/3328323083897178/search/' + val;
	xmlhttp.open(method, url, true);
	xmlhttp.send();
}
// handling enter key event
document.getElementById('hero-name').addEventListener('keydown', function(event) {
	if (event.keyCode == 13) {
		if (heroId == 0) {
			alert('No hero found! slect new hero from the list');
		} else {
			alert('hero found ');
			showHero();
		}
	}
});

// Function to clear the list items from list
function clearList() {
	var list = document.getElementById('lists');
	while (list.hasChildNodes()) {
		list.removeChild(list.firstChild);
	}
	// heroId=null;
}

// on clicking search button
document.getElementById('btn-search').addEventListener('click', showHero);
function showHero() {
	var name = document.getElementById('hero-name').value;
	if (name == '') {
		alert('Enter the name to be searched');
	} else if (heroId == 0) {
		alert('No hero found! Try selecting the hero from the list');
	} else {
		window.open('superhero_details.html?id=' + heroId, 'blank');
	}
	// console.log(hero);
}

document.getElementById('btn-favourite').addEventListener('click', function() {
	window.location.assign('favourite.html');
});
