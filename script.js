
console.clear();


let lineHeight = 4;
let startCircleSize = 100;
let startMainDiv = 0;
let scrollSpeed = 20;

let workContentState = 0;

let spinner = document.getElementById("spinner");
let innerCircle = document.getElementById("inner-circle");

let mainDiv = document.getElementById("main-div");
let workMedia = document.getElementById("work-media");
let workHeader = document.getElementById("work-header");
let workContainer = document.getElementById("maincontent");
let workBackground = document.getElementById("work-background");
let workText = document.getElementById("work-text");
let header = document.getElementById("title");
let arrows = document.getElementById("arrows");
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let infoButton = document.getElementById("info-button");

let homeNav = document.getElementById("home-link");
let workNav = document.getElementById("work-link");
let workAnch = document.getElementById("work-anchor");
let aboutAnch = document.getElementById("about-anchor");
let homeAnch = document.getElementById("home-anchor");


let itemCount = document.getElementById("item-count");


let aboutNav = document.getElementById("about-link");


let aboutMeContainer = document.getElementById("about-me-container");


let currentClicknumber = 0;
let prevClicknumber = 0;
let changedUp = false;
let changedDown = false;



function initialize() {
	mainDiv.style.height = startMainDiv + "vh";
	spinner.style.height = startCircleSize + "vh";
	spinner.style.width = startCircleSize + "vh";
}


initialize();

// index.js
window.onscroll = function () {
	//scrollRotate();
	pageTurner();
	changeHeaders();
};

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
  }

function changeHeaders() {
	if (window.pageYOffset < 800) {
		header.innerHTML = "Robin van Soelen";

		if ($(window).width() < 2500){
			header.style.fontSize = "4em";
		}
		else{
			header.style.fontSize = "6em";
		}

		console.log($(window).width());
		header.style.color = "rgba(0,0,0,0.3)";
		header.style.fontWeight = "800";
		homeNav.style.color = "red";
		workNav.style.color = "black";
		aboutNav.style.color = "black";
		//header.style.backgroundSize = 100 - pageYOffset / 10 + "%";
		header.style.backgroundPositionY = 10 + pageYOffset / 50 + "%";
		aboutMeContainer.style.opacity = "0%";
	}

	if (window.pageYOffset >= 800 && window.pageYOffset < 5570) {
		if ($(window).width() < 800){
			header.style.fontSize = "2em";
		}
		else{
			header.style.fontSize = "4em";
		}
		header.innerHTML = "Creative technologist with a passion for music"
		//header.style.fontSize = "3em";
		header.style.color = "rgba(132, 165, 157, 0.7)";
		header.style.fontWeight = "200";
		header.style.backgroundPositionY = 10 + pageYOffset / 50 + "%";

		header.style.fill = "#84A59D";
		arrows.style.opacity = "0%";
		homeNav.style.color = "red";
		workNav.style.color = "black";
		aboutNav.style.color = "black";
		aboutMeContainer.style.opacity = "0%";
		infoButton.innerHTML = "";

	}

	if (window.pageYOffset < 9900) {
		workMedia.style.opacity = "0%;"
		workContainer.style.opacity = "0%";
		mainDiv.style.backgroundColor = "#3F5765";
		aboutMeContainer.style.opacity = "0%";


	}
	if (window.pageYOffset > 9900) {
		mainDiv.style.background = "#BDD4DE"
		aboutMeContainer.style.opacity = "0%";

	}

	if (window.pageYOffset >= 5570 && window.pageYOffset < 11800) {
		workNav.style.color = "red";
		homeNav.style.color = "black";
		aboutNav.style.color = "black";

		header.innerHTML = "";
		workContainer.style.opacity = "100%";
		workMedia.style.zIndex = "-10";
		workMedia.style.transform = "translate(0%," + (window.pageYOffset - 5570)/150 +"%)";
		workSection();
		arrows.style.opacity = "100%";

	}

	if (window.pageYOffset >= 10000) {
		header.style.color = "black";
		infoButton.innerHTML = "";

		arrows.style.opacity = "0%";
		workContainer.style.opacity = "0%";
		homeNav.style.color = "black";
		workNav.style.color = "black";
		aboutNav.style.color = "red";
		aboutMeContainer.style.opacity = "100%";
	}

	if (window.pageYOffset >= 15307) {

	}
}


workNav.addEventListener("click", event => {
	workAnch.scrollIntoView({ behavior: "smooth" });
}
)

homeNav.addEventListener("click", event => {
	homeAnch.scrollIntoView({ behavior: "smooth" });
}
)

aboutNav.addEventListener("click", event => {
	aboutAnch.scrollIntoView({ behavior: "smooth" });
}
)

window.addEventListener("mousemove", (e) => {
	//header.style.backgroundPositionX = e.offsetX *0.05 + "px";
	//header.style.backgroundPositionY = e.offsetY*0.05 + "px";
})

arrowRight.addEventListener("click", event => {
	workContentState += 1;
	fadeOutRight();
	setTimeout(function () {
		workSection();
		fadeInRight();
	}, 150);
	workMedia.style.transform = "translate(0%," + (window.pageYOffset - 5570)/150 +"%)";

});

arrowLeft.addEventListener("click", () => {
	workContentState -= 1;
	fadeOutLeft();
	setTimeout(function () {
		workSection();
		fadeInLeft();
	}, 150);
	workMedia.style.transform = "translate(0%," + (window.pageYOffset - 5570)/150 +"%)";

});

function fadeOutRight() {
	workMedia.style.transform = "translate(500px, 0)"
	workMedia.style.opacity = "0%"
	workBackground.style.transform = "translate(500px, 0)"
	workBackground.style.opacity = "0%"
	infoButton.style.transform = "translate(500px, 0)"
	infoButton.style.opacity = "0%"
}

function fadeInRight() {
	setTimeout(function () {
		workMedia.style.transform = "translate(-500px, 0)"
		workBackground.style.transform = "translate(-500px, 0)"
		infoButton.style.transform = "translate(-500px, 0)"
		setTimeout(function () {
			workMedia.style.transform = "translate(0, 0)"
			workMedia.style.opacity = "100%"
			workMedia.style.zIndex = "-10"
			workBackground.style.transform = "translate(0, 0)"
			workBackground.style.opacity = "100%"
			infoButton.style.transform = "translate(0, 0)"
			infoButton.style.opacity = "100%"
		}, 150)
	}, 10)
}

function fadeOutLeft() {
	workMedia.style.transform = "translate(-500px, 0)"
	workMedia.style.opacity = "0%"
	workBackground.style.transform = "translate(-500px, 0)"
	workBackground.style.opacity = "0%"
	infoButton.style.transform = "translate(-500px, 0)"
	infoButton.style.opacity = "0%"
}

function fadeInLeft() {
	setTimeout(function () {
		workMedia.style.transform = "translate(500px, 0)"
		workBackground.style.transform = "translate(500px, 0)"
		infoButton.style.transform = "translate(500px, 0)"
		setTimeout(function () {
			workMedia.style.transform = "translate(0, 0)"
			workMedia.style.opacity = "100%"
			workMedia.style.zIndex = "-10"
			workBackground.style.transform = "translate(0, 0)"
			workBackground.style.opacity = "100%"
			infoButton.style.transform = "translate(0, 0)"
			infoButton.style.opacity = "100%"
		}, 150)
	}, 10)
}


function workSection() {
	//workMedia.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/nhJEbcDCL5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	console.log(workContentState);
	let amountOfStates = 8;

	if (workContentState >= amountOfStates) {
		workContentState = 0;
	}

	if (workContentState < 0) {
		workContentState = amountOfStates - 1;
	}

	itemCount.innerHTML = workContentState+1 + "/" + amountOfStates;

	


	if (workContentState == 0) {
		//workMedia.innerHTML = '<img class="work-media" src=thesis_video.PNG>'
		workHeader.innerHTML = "Embodied music controller"
		workText.innerHTML = "I built an embodied music controller that allows performing artists of electronic music to perform their music through gestures and movements"
		infoButton.innerHTML = '<a href="work.html" class="info-button">More info</a>'
	}

	if (workContentState == 1) {
		//workMedia.innerHTML = ''
		workHeader.innerHTML = "BlandaBand"
		workText.innerHTML = "A music player that combines the joy of collecting physical records with modern music streaming."
		infoButton.innerHTML = '<a href="work.html#blandaband" class="info-button">More info</a>'
	}

	if (workContentState == 2) {
		//workMedia.innerHTML = '<img class="work-media" src=terratree.jpg>'
		workHeader.innerHTML = "TerraTree"
		workText.innerHTML = "An interactive art installation designed for the boerenkerkhof in Enschede."
		infoButton.innerHTML = '<a href="work.html#terratree" class="info-button">More info</a>'
	}

	if (workContentState == 3) {
		//workMedia.innerHTML = '<img class="work-media" src="Singing game.jpg">'
		workHeader.innerHTML = "Internship SoundLAB"
		workText.innerHTML = "I created multiple novel musical instruments during my internship at SoundLAB Enschede"
		infoButton.innerHTML = '<a href="work.html#soundlab" class="info-button">More info</a>'
	}

	if (workContentState == 4) {
		//workMedia.innerHTML = ''
		workHeader.innerHTML = "Waveshape"
		workText.innerHTML = "A research project during which we used the emotional quality of a song to generate 3D shapes"
		infoButton.innerHTML = '<a href="work.html#waveshape" class="info-button">More info</a>'
	}

	if (workContentState == 5) {
		//workMedia.innerHTML = ''
		workHeader.innerHTML = "PentaSynth"
		workText.innerHTML = "A system designed for making children aware of the instrumentation of modern music and of the joy of improvising "
		infoButton.innerHTML = '<a href="work.html#pentasynth" class="info-button">More info</a>'
	}

	if (workContentState == 6) {
		//workMedia.innerHTML = ''
		workHeader.innerHTML = "Drop by drop"
		workText.innerHTML = "An interactive data physicalisation about earthquakes in Groningen, The Netherlands"
		infoButton.innerHTML = '<a href="work.html#dropbydrop" class="info-button">More info</a>'
	}

	if (workContentState == 7) {
		//workMedia.innerHTML = ''
		workHeader.innerHTML = "Stafel"
		workText.innerHTML = "The design of a fun tool that of encourages broken hip patients to carry out their rehabilitation excercises "
		infoButton.innerHTML = '<a href="work.html#stafel" class="info-button">More info</a>'
	}
}

function scrollRotate() {
	spinner.style.transform = "rotate(" + window.pageYOffset / 10 * -1 + "deg)";
	const vinylTexts = ["Hello there!", "I am Robin!", "Welcome on my website", "woooo"]

	if ((Math.round(window.pageYOffset / 10) + 180) % 360 < 30) {
		let vinylText = document.getElementById("vinyl-text");
		vinylText.innerHTML = vinylTexts[Math.floor(Math.random() * vinylTexts.length)];
	}
}

function scrollDivResizer(direction, offset) {
	console.log(window.pageYOffset);
	spinner.style.height = offset - (window.pageYOffset / scrollSpeed) * direction + "vh";
	spinner.style.width = offset - (window.pageYOffset / scrollSpeed) * direction + "vh";
	//if (spinner.style.height > startCircleSize){
	//	container.style.top = 100 - window.pageYOffset/scrollSpeed + "%";
	//}
}

function pageTurner() {

	if (window.pageYOffset < 2000) {
		scrollDivResizer(1, startCircleSize, 0);
		spinner.style.background = "#FF530D";
		innerCircle.style.background = "#EFEFEF";
		innerCircle.style.opacity = "1";

	}

	if (window.pageYOffset >= 1500 && window.pageYOffset < 10000) {
		innerCircle.style.background = "#FF530D";
	}

	if (window.pageYOffset >= 2000 && window.pageYOffset < 10000) {
		scrollDivResizer(-1, -100);
		spinner.style.background = "#EFEFEF";
		innerCircle.style.opacity = "1";

	}
	if (window.pageYOffset >= 10000 && window.pageYOffset < 16000) {
		scrollDivResizer(1, 800);
		spinner.style.background = "#EFEFEF";
		innerCircle.style.background = "#FF530D";
		innerCircle.style.opacity = "0";
	}

	if (window.pageYOffset >= 16000) {
		innerCircle.style.background = "#BDD4DE";
		//mainDiv.style.height = 100 - ((window.pageYOffset -15350) / scrollSpeed) + "vh";
		console.log("test");
	}
	else {
		mainDiv.style.height = startMainDiv + (window.pageYOffset / scrollSpeed) + "vh";
	}
}

var distance = $('div').offset().top,
	$window = $(window);

$window.scroll(function () {
	if ($window.scrollTop() >= distance) {

	}
});