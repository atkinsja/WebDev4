

function logIn() {
	var userName = prompt("Please enter your name");
	var phrase = userName + ", " + document.getElementsByTagName("h2")[0].innerHTML;
	document.getElementsByTagName("h2")[0].innerHTML = phrase;

}//end function logIn()

var numImages = 2;
var imageArray = new Array();

for (var i = 0; i < numImages; i++) {
    //set image src property to image path, preloading image in the process
    imageArray[i] = new Image();
    imageArray[i].src = "images/brightIdea" + (i+1) + ".png";
    
}


var i4_circleThru = 0; // global variable ( be careful) use for the function CicleThru()


function circleThru() {

    //if browser does not support the image object, exit.
    if(!document.)
    //  write images, from imageArray to HTML doc
    document.getElementById("blinking_image").src = imageArray[i4_circleThru].src;
    i4_circleThru=(i4_circleThru+1)%imageArray.length;

    // call the setTimeout method on circleThru
    setTimeout("circleThru()", 1000);


}//end circleThru()

// call circleThru()
	
	circleThru();
			




