var $ = require('jquery');
$(window).on("load", function () {
	replaceImages();
});

function replaceImages() {
	var images = document.querySelectorAll("img");
	var allElements = document.querySelectorAll("*");
	for (var i = 0; i < images.length; i++) {
		images[i].src = getRandomCat();
	}
	for (var i = 0; i < allElements.length; i++) {
		var $thisElement = $(allElements[i]);
		if ($thisElement.css("background-image").indexOf("url") != -1) {
			$thisElement.css("background-image", "url(" + getRandomCat() + ")");
		}
	}
}

function getRandomCat() {
	var randomCat = Math.floor(Math.random() * 10 + 1);
	return "/assets/img/" + "cat" + randomCat + ".jpg";
}