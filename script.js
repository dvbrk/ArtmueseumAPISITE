console.log("hello")
var apiKey = "?key=uKSFFfcX"
var baseURL ="https://www.rijksmuseum.nl/api/en/collection/"
// var rsearch = "&format=json&f.normalized32Colors.hex=%20%23"

var searchterm = "&imgonly=true&format=json&f.dating.period="

var searchBar = document.querySelector('input[type="text"]')

var search = function(event){

	var inputEl = event.srcElement
	if(event.keyCode === 13) {
		
		var userInput = inputEl.value 
		inputEl.value = ""	

var fullUrl = baseURL + apiKey + searchterm + userInput
	console.log(fullUrl)
	var pinkyPromise = $.getJSON(fullUrl)
	pinkyPromise.then(showData)

	}

}

var showData = function(jsonData) {
	var newHTMLstring = ""
	var imgArray = jsonData.artObjects

	console.log(jsonData)

	var container = document.querySelector("#container")
	
	for(var i=0; i < imgArray.length; i++) {
		imgObj = imgArray[i] 
		newHTMLstring += objectToHTML(imgObj)
	}
		container.innerHTML = newHTMLstring
		console.log(newHTMLstring)
}



var objectToHTML = function(imgObj) {

	var theUrl = imgObj.webImage.url
	var longTitle = imgObj.longTitle
	var maker = imgObj.principalOrFirstMaker
	console.log(imgObj.webImage)
	console.log(theUrl)
	var imageHTML = '<img class="art" src="' + theUrl + '"">"' + '<h3>' + imgObj.longTitle + '</h3>'
	return imageHTML
}

searchBar.addEventListener("keydown", search)

// pinkyPromise.then(showData) //setting up the showData function
</html>