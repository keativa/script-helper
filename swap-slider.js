// Swap Slider

$(function(){

	if (".hero h1 span") {
		swapElement = $(".hero h1 span");
		firstSwap1(swapElement);
	}

});


// Welcome page text cycle
function firstSwap1(swapElement) {	
	$(swapElement).delay(2000).fadeOut(200, function() {
		$(this).text("Website Company Profile?").fadeIn(200,
			function() {
				firstSwap(swapElement);
			}
		);
	});
}
function firstSwap(swapElement) {	
	$(swapElement).delay(2000).fadeOut(200, function() {
		$(this).text("Fotografi PreWedding?").fadeIn(200,
			function() {
				secondSwap(swapElement);
			}
		);
	});
}
function secondSwap(swapElement) {	
	$(swapElement).delay(2000).fadeOut(200, function() {
		$(this).text("Desain Logo Perusahaan?").fadeIn(200,
			function() {
				thirdSwap(swapElement);
			}
		);
	});
}
function thirdSwap(swapElement) {	
	$(swapElement).delay(2000).fadeOut(200, function() {
		$(this).text("atau Website Pribadi?").fadeIn(200,
			function() {
				forthSwap(swapElement);
			}
		);
	});
}
function forthSwap(swapElement) {	
	$(swapElement).delay(3000).fadeOut(200, function() {
		$(this).text("Jasa Desain Web Berkualitas").fadeIn(200,
			function() {
				firstSwap1(swapElement);
			}
		);
	});
}