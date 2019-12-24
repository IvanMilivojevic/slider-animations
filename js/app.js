
jQuery(document).ready(function(){
	slideComposer();
	
	function slideComposer() {
	  var nameText = jQuery(".name-compose .slide-title").text();
	  var arrayName = nameText.split("");
	  jQuery(".name-compose .slide-title").html("");
	  jQuery(".name-compose .slide-title").append("<div class='word-wrapper word-wrapper-0'></div>");
	  var divCounter = 0;

	  for(var i=0; i<arrayName.length; i++) {
	    var nameCharacter = arrayName[i];

	    var rotationX = Math.floor(Math.random() * 461) - 100;
	    var rotationY = Math.floor(Math.random() * 461) - 100;
	    var rotationZ = Math.floor(Math.random() * 461) - 100;
	    var translationX = Math.floor(Math.random() * 201) - 100;
	    var translationY = Math.floor(Math.random() * 201) - 100;

	    if(nameCharacter == " ") {
			divCounter++;
			jQuery(".name-compose .slide-title").append("<div class='word-wrapper word-wrapper-" + divCounter + "'></div>");
	    }
	    else {
	        jQuery(".name-compose .slide-title .word-wrapper").eq(divCounter).append("<div class='char char-" + i + "'>" + nameCharacter + "</div>");
	        jQuery(".name-compose .char-" + i).css("transform", "rotateX(" + rotationX +"deg) rotateY(" + rotationY +"deg) rotateZ(" + rotationZ +"deg) translate3d(" + translationX + "px," + translationY + "px," + "0px)");
	    }
	  }
	}

	letterComposeAnimation();

	function letterComposeAnimation() {
		setTimeout(function(){ 
		  jQuery(".name-compose .slide-title").addClass("active");
		}, 500);
		setTimeout(function(){ 
		  jQuery(".name-compose .button-link").addClass("active");
		}, 3500);
	}

	slideFlowingVertical();

	function slideFlowingVertical() {
		var nameText = jQuery(".name-flowing-y .slide-title").text();
		var arrayName = nameText.split("");
		jQuery(".name-flowing-y .slide-title").html("");

		var showingDelay = 0;
		for(var i=0; i<arrayName.length; i++) {
			var nameCharacter = arrayName[i];
			showingDelay += 0.05;
			var showingDelayExact = showingDelay.toFixed(2);

			if(nameCharacter == " ") {
		      jQuery(".name-flowing-y .slide-title").append("<div class='char blank'>" + nameCharacter + "</div>");
		    }
		    else {
		      jQuery(".name-flowing-y .slide-title").append("<div class='char'>" + nameCharacter + "</div>");
		      jQuery(".name-flowing-y .slide-title > div").eq(i).css("transition-delay", showingDelayExact + "s");
		    }
		}
	}

	jQuery(".home-slider .slider-navigation li").eq(1).click(function(){
		letterFlowingAnimationVertical();
	});

	function letterFlowingAnimationVertical() {
		setTimeout(function(){ 
		  jQuery(".name-flowing-y .slide-title").addClass("active");
		}, 2000);
		setTimeout(function(){ 
		  jQuery(".name-flowing-y .button-link").addClass("active");
		}, 5500);
	}

	slideWordShow();

	function slideWordShow() {
		var nameText = jQuery(".word-showing .slide-title").text();
		var arrayName = nameText.split(" ");
		jQuery(".word-showing .slide-title").html("");
		var arrayNameWords = arrayName.length;
		var transitionArray = [];
		var transitionDuration = 0;

		for(var i=0; i<arrayNameWords; i++) {
			transitionDuration += 0.25;
			var transitionDurationExact = transitionDuration.toFixed(2);
			transitionArray.push(transitionDurationExact);
		}
		for(var k=0; k<arrayNameWords; k++) {
			jQuery(".word-showing .slide-title").append("<div class='split-word'>" + arrayName[k] + "</div>");
			var randomTransition = Math.floor((Math.random() * transitionArray.length) + 0);
			jQuery(".word-showing .slide-title > div").eq(k).css("transition-delay", transitionArray[randomTransition] + "s");
			transitionArray.splice(randomTransition,1);
		}
	}

	jQuery(".home-slider .slider-navigation li").eq(2).click(function(){
		wordAnimation();
	});	

	function wordAnimation() {
		setTimeout(function(){ 
		  jQuery(".word-showing .slide-title").addClass("active");
		}, 2000);
		setTimeout(function(){ 
		  jQuery(".word-showing .button-link").addClass("active");
		}, 4500);
	}

	slideFlowingHorizontal();

	function slideFlowingHorizontal() {
		var nameText = jQuery(".name-flowing-x .slide-title").text();
		var arrayName = nameText.split("");
		jQuery(".name-flowing-x .slide-title").html("");

		var showingDelay = 0;
		for(var i=0; i<arrayName.length; i++) {
			var nameCharacter = arrayName[i];
			showingDelay += 0.05;
			var showingDelayExact = showingDelay.toFixed(2);

			if(nameCharacter == " ") {
		      jQuery(".name-flowing-x .slide-title").append("<div class='char blank'>" + nameCharacter + "</div>");
		    }
		    else {
		      jQuery(".name-flowing-x .slide-title").append("<div class='char'>" + nameCharacter + "</div>");
		      jQuery(".name-flowing-x .slide-title > div").eq(i).css("transition-delay", showingDelayExact + "s");
		    }
		}
	}

	jQuery(".home-slider .slider-navigation li").eq(3).click(function(){
		letterFlowingAnimationHorizontal();
	});

	function letterFlowingAnimationHorizontal() {
		setTimeout(function(){ 
		  jQuery(".name-flowing-x .slide-title").addClass("active");
		}, 2000);
		setTimeout(function(){ 
		  jQuery(".name-flowing-x .button-link").addClass("active");
		}, 5500);
	}

	jQuery(".home-slider .slider-navigation li").click(function(){
		jQuery(".home-slider .slider-navigation li").removeClass("active");
		jQuery(this).addClass("active");
		var navIndex = jQuery(this).index();
		jQuery(".home-slider .slide").removeClass("activeSlide");
		jQuery(".home-slider .slide").removeClass("removeSlide");
		jQuery(".home-slider .slide").eq(navIndex).addClass("activeSlide");
		jQuery(".home-slider .slide.activeSlide").siblings(".slide").addClass("removeSlide");
	});
});