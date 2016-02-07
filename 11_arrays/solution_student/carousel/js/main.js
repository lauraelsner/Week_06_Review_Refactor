var carouselImages = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg"];
var currentIndex = 0;

// click next
$('#next').on('.click', function (){
	// show next image
	$('#image-to-vote-on').attr('src', carouselImages[1]);
	// if there is no next image

		// then show the disabled button 
		// the button does not do anything
});

// click previous
$('#prev').on('.click', function (){
	// show next image
	// if there is no next image
		// then show the disabled button 
		// the button does not do anything
});




// $('#image-to-vote-on').attr('src', carouselImages[1]);