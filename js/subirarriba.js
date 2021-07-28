$(window).scroll(function() {

 var position =$(this).scrollTop();

 // Si el usuario baja el scroll muestro el div qeu contiene el enlace botón
 if (position > 1200) {
    $(".boton-subir").show();
  } else {
  $(".boton-subir").hide();
 }
});