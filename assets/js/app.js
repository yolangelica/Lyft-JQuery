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
     	alert(code());
         $('#phone-number').hide();
         $('#verify-phone').show();
     });

$('#nameEmail').hide();
     $('.next2').click(function(){
      
         $('#verify-phone').hide();
         $('#nameEmail').show();
     });

$('#lastPage').hide();
     $('.next3').click(function(){
      
         $('#nameEmail').hide();
         $('#lastPage').show();
     });

});

 $('.back2').click(function(){
         $('#verify-phone').hide();
         $('#phone-number').show();
     });

 $('.back3').click(function(){
         $('#nameEmail').hide();
         $('#verify-phone').show();
     });
   

//GENERA NUMERO CODIGO AL AZAR
function code() {
 var code = "";
 var str = "123456789";
 for (var i = 0; i < 3; i++) {
     code += str.charAt(Math.floor(Math.random() * str.length));
 }
 return 'Tu Codigo:  Lab' + code;
}

//desabilitar boton
$('#input_text').change(function() {
       if (($('#input_text').val().length)===10){
           $('#sign').removeClass('disabled');
       } else {
           $('#sign').addClass('disabled');
       }
});
//CAMBIA SECCION

