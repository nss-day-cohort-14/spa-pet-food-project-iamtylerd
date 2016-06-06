var container = document.getElementById("wrapper");	
var brandsContainer = document.getElementById("brands");	
var typeContainer = document.getElementById("type");	
var sizeContainer = document.getElementById("size");
var breedsContainer = document.getElementById("breeds");	

var dataHolder = "";
function dogFood () {
	var data = JSON.parse(this.responseText);

	for (var i = 0; i < data.dog_brands.length; i++) {
		var currentBrand = data.dog_brands[i];
		console.log(data.dog_brands[i].types);
		brandsContainer.innerHTML += `<div class="brands">${currentBrand.name}</div>`;
		for (var j = 0; j < currentBrand.types.length; j++) {
			var currentType = currentBrand.types[j];
			typeContainer.innerHTML += `<div class="types">${currentType.type}</div>`;
			for (var k = 0; k < currentType.volumes.length; k++) {
				var currentPrice = currentType.volumes[k];
				sizeContainer.innerHTML += `<div class="volumeName">${currentPrice.name}</div>`;
				sizeContainer.innerHTML += `<div class="volumePrice">${currentPrice.price}</div>`;
			};
		};
	}
	;
}

function catFood () {
	var data = JSON.parse(this.responseText);

	for (var i = 0; i < data.dog_brands.length; i++) {
		var currentBrand = data.dog_brands[i];
		console.log(data.dog_brands[i].types);
		brandsContainer.innerHTML += `<div class="brands">${currentBrand.name}</div>`;
		for (var j = 0; j < currentBrand.types.length; j++) {
			var currentType = currentBrand.types[j];
			typeContainer.innerHTML += `<div class="types">${currentType.type}</div>`;
			for (var k = 0; k < currentType.volumes.length; k++) {
				var currentPrice = currentType.volumes[k];
				sizeContainer.innerHTML += `<div class="volumeName">${currentPrice.name}</div>`;
				sizeContainer.innerHTML += `<div class="volumePrice">${currentPrice.price}</div>`;
			};
		};
	};
	
	for (var b = 0; b < data.dog_brands.length; b++) {
		breedsContainer.innerHTML += `<div class="breeds">${data.dog_brands[b].breeds}</div>`;
	}
}
var myRequest = new XMLHttpRequest();
var myRequest2 = new XMLHttpRequest();

myRequest.addEventListener("load", dogFood);
myRequest2.addEventListener("load", catFood);

myRequest.open("GET", "food.json");
myRequest2.open("GET", "food2.json");

myRequest.send();
myRequest2.send();