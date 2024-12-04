let contentGridElement = document.getElementById('contentGrid');
let contentGridElement2 = document.getElementById('contentGrid2');
let contentGridElement3 = document.getElementById('contentGrid3');

let tvKid = {
	"title" : "TV Kids",
	"blurb" : "Learn more about TV kids.",
	"font-size" : "30px",
	"size" : "40%",
	// opacity below
	"color" : "rgba(0,0,0,0.2)",
	"picture_url" : "tvkid.jpg",
	"padding" : "0px 1em 1em 1em",
	"border" : "5px solid #000",
	"font" : "Courier New",
	"align" : "center"
}

let ipadBaby = {
	"title" : "iPad Babies",
	"blurb" : "Learn more about iPad babies.",
	"font-size" : "30px",
	"size" : "40%",
	// opacity below
	"color" : "rgba(0,0,0,0.2)",
	"picture_url" : "ipadbaby.jpg",
	"padding" : "0px 1em 1em 1em",
	"border" : "5px solid #000",
	"font" : "Times New Roman"
}

let theFuture = {
	"title" : "The Future",
	"blurb" : "What is the next iteration?",
	"font-size" : "30px",
	"size" : "40%",
	// opacity below
	"color" : "rgba(0,0,0,0.2)",
	"picture_url" : "vrkids.jpg",
	"padding" : "0px 1em 1em 1em",
	"border" : "5px solid #000",
	"font" : "Garamond"
}

createElementTV();
createElementIPAD();
createElementFUTURE();

function createElementTV() {
	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = tvKid['color'];
  	newContentElement.style.fontFamily = tvKid['font'];
  	newContentElement.style.height = tvKid['size']
  	// newContentElement.style.width = tvKid['size']
  	newContentElement.style.fontSize = tvKid['font-size']
  	newContentElement.style.alignSelf = tvKid['align'];
  	// newContentElement.style.border = tvKid['border']
  	newContentElement.style.padding = tvKid['padding']
  	newContentElement.style.lineHeight = "20px"
  	newContentElement.classList.add('contentItem');

  	let newContentHeading = document.createElement("H3");
  	newContentHeading.classList.add('contentTitle');
  	newContentHeading.innerText = tvKid['title'];
  	newContentElement.appendChild(newContentHeading);

  	let newContentSubhead = document.createElement("H4");
  	newContentSubhead.innerText = tvKid["blurb"];
  	newContentElement.appendChild(newContentSubhead);

  	let newImage = document.createElement("IMG");
  	newImage.classList.add("footerImage");
  	newImage.src = tvKid['picture_url'];
  	newContentElement.appendChild(newImage);

  	contentGridElement.appendChild(newContentElement);
}

function createElementIPAD() {
	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = ipadBaby['color'];
  	newContentElement.style.fontFamily = ipadBaby['font'];
  	newContentElement.style.height = ipadBaby['size']
  	// newContentElement.style.width = ipadBaby['size']
  	newContentElement.style.fontSize = ipadBaby['font-size']
  	// newContentElement.style.border = ipadBaby['border']
  	newContentElement.style.padding = ipadBaby['padding']
  	  	newContentElement.style.lineHeight = "20px"
  	newContentElement.classList.add('contentItem');

  	let newContentHeading = document.createElement("H3");
  	newContentHeading.classList.add('contentTitle');
  	newContentHeading.innerText = ipadBaby['title'];
  	newContentElement.appendChild(newContentHeading);

  	let newContentSubhead = document.createElement("H4");
  	newContentSubhead.innerText = ipadBaby["blurb"];
  	newContentElement.appendChild(newContentSubhead);

  	let newImage = document.createElement("IMG");
  	newImage.classList.add("footerImage");
  	newImage.src = ipadBaby['picture_url'];
  	newContentElement.appendChild(newImage);

  	contentGridElement2.appendChild(newContentElement);
}

function createElementFUTURE() {
	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = theFuture['color'];
  	newContentElement.style.fontFamily = theFuture['font'];
  	newContentElement.style.height = theFuture['size']
  	// newContentElement.style.width = theFuture['size']
  	newContentElement.style.fontSize = theFuture['font-size']
  	// newContentElement.style.border = theFuture['border']
  	newContentElement.style.padding = theFuture['padding']
  	  	newContentElement.style.lineHeight = "20px"
  	newContentElement.classList.add('contentItem');

  	let newContentHeading = document.createElement("H3");
  	newContentHeading.classList.add('contentTitle');
  	newContentHeading.innerText = theFuture['title'];
  	newContentElement.appendChild(newContentHeading);

  	let newContentSubhead = document.createElement("H4");
  	newContentSubhead.innerText = theFuture["blurb"];
  	newContentElement.appendChild(newContentSubhead);

  	let newImage = document.createElement("IMG");
  	newImage.classList.add("footerImage");
  	newImage.src = theFuture['picture_url'];
  	newContentElement.appendChild(newImage);

  	contentGridElement3.appendChild(newContentElement);
}