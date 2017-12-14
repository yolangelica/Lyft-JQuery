$(document).ready(function(){


	$(".initial").hide();//SPLASH
		$(function(){
	setTimeout(function() {
      	$('#splash').fadeOut(500);
    	$(".initial").show();  
   }, 2000);

		});

//OCULTA PAGINA AL HACER CLICK
$('#phone-number').hide();
     $('.sing-up').click(function(){
         $('.initial').hide();
         $('#phone-number').show();
     });

//IMAGEN
     $('.back').click(function(){
         $('#phone-number').hide();
         $('.initial').show();
     });



//OCULTAR PAGINA NUMERO AL AZAR Y MUESTRA VERIFICA TELEFONO

$('#verify-phone').hide();
     $('.next').click(function(){
         $('#phone-number').hide();
         $('#verify-phone').show();
     });

});

 $('.back2').click(function(){
         $('#verify-phone').hide();
         $('#phone-number').show();
     });
