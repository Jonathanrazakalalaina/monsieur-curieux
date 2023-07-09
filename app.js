
var classes_to_remove = ["hair-look-left", "hair2-look-left", "head-look-left", "ear1-look-left", "ear2-look-left", "hairfront-look-left", "hairfront2-look-left", "hairfront3-look-left", "eye1-look-left", "eye2-look-left", "mouth-look-left", "nose-look-left", "neck-look-left",
"hair-look-right", "hair2-look-right", "head-look-right", "ear1-look-right", "ear2-look-right", "hairfront-look-right", "hairfront2-look-right", "hairfront3-look-right", "eye1-look-right", "eye2-look-right", "mouth-look-right", "nose-look-right", "neck-look-right",
"hair-look-down", "hair2-look-down", "head-look-down", "ear1-look-down", "ear2-look-down", "hairfront-look-down", "hairfront2-look-down", "hairfront3-look-down", "eye1-look-down", "eye2-look-down", "mouth-look-down", "nose-look-down", "neck-look-down", 
"hair-look-up", "hair2-look-up", "head-look-up", "ear1-look-up", "ear2-look-up", "hairfront-look-up", "hairfront2-look-up", "hairfront3-look-up", "eye1-look-up", "eye2-look-up", "mouth-look-up", "nose-look-up", "neck-look-up",
"hair-look-up-right", "hair2-look-up-right", "head-look-up-right", "ear1-look-up-right", "ear2-look-up-right", "hairfront-look-up-right", "hairfront2-look-up-right", "hairfront3-look-up-right", "eye1-look-up-right", "eye2-look-up-right", "mouth-look-up-right", "nose-look-up-right", "neck-look-up-right",
"hair-look-up-left", "hair2-look-up-left", "head-look-up-left", "ear1-look-up-left", "ear2-look-up-left", "hairfront-look-up-left", "hairfront2-look-up-left", "hairfront3-look-up-left", "eye1-look-up-left", "eye2-look-up-left", "mouth-look-up-left", "nose-look-up-left", "neck-look-up-left",
"hair-look-down-right", "hair2-look-down-right", "head-look-down-right", "ear1-look-down-right", "ear2-look-down-right", "hairfront-look-down-right", "hairfront2-look-down-right", "hairfront3-look-down-right", "eye1-look-down-right", "eye2-look-down-right", "mouth-look-down-right", "nose-look-down-right", "neck-look-down-right",
"hair-look-down-left", "hair2-look-down-left", "head-look-down-left", "ear1-look-down-left", "ear2-look-down-left", "hairfront-look-down-left", "hairfront2-look-down-left", "hairfront3-look-down-left", "eye1-look-down-left", "eye2-look-down-left", "mouth-look-down-left", "nose-look-down-left", "neck-look-down-left"
];

$(document).ready(function() {
  removeClasses();
               
function removeClasses () {
	for(var x = 0;x<classes_to_remove.length;x++) {
		$(".head").removeClass(classes_to_remove[x]);
		$(".hair").removeClass(classes_to_remove[x]);
		$(".hair2").removeClass(classes_to_remove[x]);
    $(".ear1").removeClass(classes_to_remove[x]);
    $(".ear2").removeClass(classes_to_remove[x]);
    $(".hairfront").removeClass(classes_to_remove[x]);
    $(".hairfront2").removeClass(classes_to_remove[x]);
    $(".hairfront3").removeClass(classes_to_remove[x]);
    $(".eye1").removeClass(classes_to_remove[x]);
    $(".eye2").removeClass(classes_to_remove[x]);
    $(".nose").removeClass(classes_to_remove[x]);
    $(".mouth").removeClass(classes_to_remove[x]);
    $(".neck").removeClass(classes_to_remove[x]);
	};
};

function direction(e) {
	//look left
	if( e.clientX<= window.innerWidth/2) { 
		removeClasses();

		$(".head").addClass("head-look-left");
		$(".hair").addClass("hair-look-left");
		$(".hair2").addClass("hair2-look-left");
    $(".ear1").addClass("ear1-look-left");
    $(".ear2").addClass("ear2-look-left");
    $(".hairfront").addClass("hairfront-look-left");
    $(".hairfront2").addClass("hairfront2-look-left");
    $(".hairfront3").addClass("hairfront3-look-left");
    $(".eye1").addClass("eye1-look-left");
    $(".eye2").addClass("eye2-look-left");
    $(".nose").addClass("nose-look-left");
    $(".mouth").addClass("mouth-look-left");
    $(".neck").addClass("neck-look-left");
  }
 	//look right
	if( e.clientX >= (window.innerWidth-(window.innerWidth/2))) { 
		removeClasses();

		$(".head").addClass("head-look-right");
		$(".hair").addClass("hair-look-right");
		$(".hair2").addClass("hair2-look-right");
    $(".ear1").addClass("ear1-look-right");
    $(".ear2").addClass("ear2-look-right");
    $(".hairfront").addClass("hairfront-look-right");
    $(".hairfront2").addClass("hairfront2-look-right");
    $(".hairfront3").addClass("hairfront3-look-right");
    $(".eye1").addClass("eye1-look-right");
    $(".eye2").addClass("eye2-look-right");
    $(".nose").addClass("nose-look-right");
    $(".mouth").addClass("mouth-look-right");
    $(".neck").addClass("neck-look-right");
	}
  	//look down
	if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5))) {
		removeClasses();

    $(".head").addClass("head-look-down");
		$(".hair").addClass("hair-look-down");
		$(".hair2").addClass("hair2-look-down");
    $(".ear1").addClass("ear1-look-down");
    $(".ear2").addClass("ear2-look-down");
    $(".hairfront").addClass("hairfront-look-down");
    $(".hairfront2").addClass("hairfront2-look-down");
    $(".hairfront3").addClass("hairfront3-look-down");
    $(".eye1").addClass("eye1-look-down");
    $(".eye2").addClass("eye2-look-down");
    $(".nose").addClass("nose-look-down");
    $(".mouth").addClass("mouth-look-down");
    $(".neck").addClass("neck-look-down");
	}

	// look up  
	if( e.clientY <= ((window.innerHeight/2.5))) { 
		removeClasses();

    $(".head").addClass("head-look-up");
		$(".hair").addClass("hair-look-up");
		$(".hair2").addClass("hair2-look-up");
    $(".ear1").addClass("ear1-look-up");
    $(".ear2").addClass("ear2-look-up");
    $(".hairfront").addClass("hairfront-look-up");
    $(".hairfront2").addClass("hairfront2-look-up");
    $(".hairfront3").addClass("hairfront3-look-up");
    $(".eye1").addClass("eye1-look-up");
    $(".eye2").addClass("eye2-look-up");
    $(".nose").addClass("nose-look-up");
    $(".mouth").addClass("mouth-look-up");
    $(".neck").addClass("neck-look-up");
	}

	// look down right 
	if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) { 
		removeClasses();
    
    $(".head").addClass("head-look-down-right");
    $(".hair").addClass("hair-look-down-right");
    $(".hair2").addClass("hair2-look-down-right");
    $(".ear1").addClass("ear1-look-down-right");
    $(".ear2").addClass("ear2-look-down-right");
    $(".hairfront").addClass("hairfront-look-down-right");
    $(".hairfront2").addClass("hairfront2-look-down-right");
    $(".hairfront3").addClass("hairfront3-look-down-right");
    $(".eye1").addClass("eye1-look-down-right");
    $(".eye2").addClass("eye2-look-down-right");
    $(".nose").addClass("nose-look-down-right");
    $(".mouth").addClass("mouth-look-down-right");
    $(".neck").addClass("neck-look-down-right");
	}

	// look down left
	if( e.clientY >= (window.innerHeight -(window.innerHeight/2.5)) &&  e.clientX<= window.innerWidth/3) {
		removeClasses();
    
    $(".head").addClass("head-look-down-left");
    $(".hair").addClass("hair-look-down-left");
    $(".hair2").addClass("hair2-look-down-left");
    $(".ear1").addClass("ear1-look-down-left");
    $(".ear2").addClass("ear2-look-down-left");
    $(".hairfront").addClass("hairfront-look-down-left");
    $(".hairfront2").addClass("hairfront2-look-down-left");
    $(".hairfront3").addClass("hairfront3-look-down-left");
    $(".eye1").addClass("eye1-look-down-left");
    $(".eye2").addClass("eye2-look-down-left");
    $(".nose").addClass("nose-look-down-left");
    $(".mouth").addClass("mouth-look-down-left");
    $(".neck").addClass("neck-look-down-left");
	}

//	look up right 
	if( e.clientY <= ((window.innerHeight/2.5)) && e.clientX >= (window.innerWidth-(window.innerWidth/3))) { 
		removeClasses();
    
    $(".head").addClass("head-look-up-right");
    $(".hair").addClass("hair-look-up-right");
    $(".hair2").addClass("hair2-look-up-right");
    $(".ear1").addClass("ear1-look-up-right");
    $(".ear2").addClass("ear2-look-up-right");
    $(".hairfront").addClass("hairfront-look-up-right");
    $(".hairfront2").addClass("hairfront2-look-up-right");
    $(".hairfront3").addClass("hairfront3-look-up-right");
    $(".eye1").addClass("eye1-look-up-right");
    $(".eye2").addClass("eye2-look-up-right");
    $(".nose").addClass("nose-look-up-right");
    $(".mouth").addClass("mouth-look-up-right");
    $(".neck").addClass("neck-look-up-right");
	}

	// look up left
	if( e.clientY <= ((window.innerHeight/2.5)) &&  e.clientX<= window.innerWidth/3) {
		removeClasses();
    
    $(".head").addClass("head-look-up-left");
    $(".hair").addClass("hair-look-up-left");
    $(".hair2").addClass("hair2-look-up-left");
    $(".ear1").addClass("ear1-look-up-left");
    $(".ear2").addClass("ear2-look-up-left");
    $(".hairfront").addClass("hairfront-look-up-left");
    $(".hairfront2").addClass("hairfront2-look-up-left");
    $(".hairfront3").addClass("hairfront3-look-up-left");
    $(".eye1").addClass("eye1-look-up-left");
    $(".eye2").addClass("eye2-look-up-left");
    $(".nose").addClass("nose-look-up-left");
    $(".mouth").addClass("mouth-look-up-left");
    $(".neck").addClass("neck-look-up-left");
	}

	if( e.clientX >  window.innerWidth/3 &&  e.clientX < (window.innerWidth - (window.innerWidth/3)) && 
	 e.clientY >  window.innerHeight/2.5 &&  e.clientY < (window.innerHeight - (window.innerHeight/2.5)) ) {
		removeClasses();
	}
}
window.addEventListener("mousemove", function (e) {
  	direction(e);
})

window.addEventListener("click", function (e) {
  	direction(e);
});
})





//MOUSE ANIMATION
var tmax_opts = {
  delay: 0.5,
  repeat: -1,
  repeatDelay: 0.5,
  yoyo: true
};

var tmax_tl = new TimelineMax(tmax_opts);
var svg_path = $('path');
var path_duration = 1.2;
var path_stagger = 0;

var pathFrom = {
  scale: 0,
  opacity: 0,
  transformOrigin: 'center center',
};

var pathTo = {
  opacity: 1,
  scale: 1,
  ease: Elastic.easeInOut
};

tmax_tl.staggerFromTo(svg_path, path_duration, pathFrom, pathTo, path_stagger, 0);