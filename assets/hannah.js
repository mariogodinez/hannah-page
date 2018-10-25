var burguer = document.getElementById('menu-btn')
var burguerClose = document.getElementById('close-btn')
var header = document.getElementById('header')


var landing = document.getElementById('app-container-landing')

burguer.addEventListener('click', function(){
	burguer.classList.toggle('hide')
	burguerClose.classList.toggle('hide')


	landing.classList.toggle('active-menu')
	header.classList.toggle('active-menu2')

})


burguerClose.addEventListener('click', function(){
	burguer.classList.toggle('hide')
	burguerClose.classList.toggle('hide')

	landing.classList.toggle('active-menu')
	header.classList.toggle('active-menu2')
	
})



$(".queEsHannah").click(function() {
	$('html, body').animate({ scrollTop: $('#scrolledHannah').offset().top}, 1000);
	burguerClose.classList.add('hide')
	burguer.classList.remove('hide')


	landing.classList.remove('active-menu')
	header.classList.remove('active-menu2')
});

$(".precios").click(function() {
	$('html, body').animate({ scrollTop: $('#scrolledPrecios').offset().top}, 1000);
	burguerClose.classList.add('hide')
	burguer.classList.remove('hide')


	landing.classList.remove('active-menu')
	header.classList.remove('active-menu2')
});

$(".contactanos").click(function() {
	$('html, body').animate({ scrollTop: $('#scrolledContactanos').offset().top}, 1000);
	burguerClose.classList.add('hide')
	burguer.classList.remove('hide')


	landing.classList.remove('active-menu')
	header.classList.remove('active-menu2')
});



