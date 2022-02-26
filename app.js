	///////////////////////////////////////////////////////ANIMATION PRÉSENTATION/////////////////////////////////////////////////
	const titreSpans = document.querySelectorAll('h1 span');
	const titreH2 = document.querySelectorAll('h2 span')
	const l1 = document.querySelector('.l1');
	const l2 = document.querySelector('.l2');
	
	window.addEventListener('load', () => { /* Ceci permet de lancé la timeline quand la page internet et lancé  */
	
		const TL = gsap.timeline({paused : true});
		TL
		.staggerFrom(titreSpans, 1,{top: -50, opacity: 0, ease: "power2.out"}, 0.3)/* staggerFrom() ceci permet d'animer plusieurs éléments les uns apres les autres (exemple Digial et ensuite HB) */
		.staggerFrom(titreH2, 1,{top: -50, opacity: 0, ease: "power2.out"}, 0.2)
		.from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
		.from(l2, 1, {width: 0, ease: "power2.out"}, '-=2');
	
		TL.play();
	})
//////////////////////////////////////////////////A PROPOS ANIMATE/////////////////////////////////////////////////////////////
$(document).ready(function() {
	$('.has-animation').each(function(index) {
	  $(this).delay($(this).data('delay')).queue(function(){
		$(this).addClass('animate-in');
	  });
	});
  });
(function($) { "use strict";
		
	/////////////////////////////////////////////////Page cursors//////////////////////////////////////////////////////////

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	
	//////////////////////////////////////Switch light/dark/////////////////////////////////////////////////////////////////////
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});          
              
})(jQuery);

///////////////////////////////////////////////////////footer//////////////////////////////////////////////////////////////////
var maxIndex = $('.scroll span').length,
    curIndex = 0;

$(function(){
  spin();
})
  
function spin(){
$('.scroll').animate({ scrollTop: curIndex * $('.scroll span').height() + 'px' }, 300, function(){
  if(curIndex + 1 === maxIndex){
    curIndex = 0;
  } else {
    curIndex++;
  }
  setTimeout(function(){ spin() }, 2000);
});
}
///////////////////////////////////////////////////BOUTON HAUT DE PAGE////////////////////////////////////////////////////
const btn = document.querySelector('.btn');

window.addEventListener('scroll', () => {
	if (window.scrollY > 0){
		btn.classList.add('btn-none');
	}else{
		btn.classList.remove('btn-none');
		}
	})
btn.addEventListener('click', () =>{
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	})
})

/////////////////////////////////////////////////////////VALIDATION FORMULAIRE/////////////////////////////////////////////////////////////////
document.getElementById('form1').addEventListener('submit', (e) =>{
	
	var erreur;
	var nom = document.getElementById('name');
	var email = document.getElementById('email');
	var comment = document.getElementById('comment');

	if (!comment.value) {
		erreur = "Veuillez-renseigner votre comment";
	}
	if (!email.value) {
		erreur = "Veuillez-renseigner votre email";
	}
	if (!nom.value) {
		erreur = "Veuillez-renseigner votre nom";
	}
	if (erreur) {
	e.preventDefault();
	document.getElementById("erreur").innerHTML = erreur;
	return false;
	}else {
	alert('Formulaire envoyé Merci.');
	}
});
