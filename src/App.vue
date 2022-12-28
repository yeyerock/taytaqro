<template>
  <div id="app">   
    <router-view/>    
  </div>
</template>

<style>
:root{
    --negro: #000000;
    --mostaza: #E9D985;
    --verdeuno: #B2BD7E;
    --naranja: #FF7F11;
    --rojo: #E21F1B;
    --azuluno: #456990;
    --rosauno: #AA4465;
    --rosados: #FF6666;
    --verdedos: #0C8346;
    --cafe: #42210bc4;
    --blanco: #F6F7EB;
    --opacidad: rgba(0, 0, 0, 0.486);
  }

  /* Fuentes */
  @font-face {
    font-family: "Arsenal-Bold";
    src: local("Arsenal"),
    url(./assets/fonts/arsenal/Arsenal-Bold.ttf) format("truetype");
  }

    @font-face {
    font-family: "Arsenal-Bold-Italic";
    src: local("Arsenal"),
    url(./assets/fonts/arsenal/Arsenal-BoldItalic.ttf) format("truetype");
  }

   @font-face {
    font-family: "Arsenal-Italic";
    src: local("Arsenal"),
    url(./assets/fonts/arsenal/Arsenal-Italic.ttf) format("truetype");
  }

  @font-face {
    font-family: "Actor-Regular";
    src: local("Actor"),
    url(./assets/fonts/Actor/Actor-Regular.ttf) format("truetype");
  }

  .titulo,
  .subtitulo,
  .nombre_platillo,
  .precio,
  .enlace,
  .boton{
      font-family: "Arsenal-Bold-Italic";
      color: var(--blanco);
      font-size: 2rem;
  }

   .titulo span,
   .subtitulo span,
  .nombre_platillo span,
  .precio span,
  .texto span{
    color: var(--naranja);
    font-family: adobe-handwriting-tiffany, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .titulo{
    font-size: 3rem;    
  }

  .texto{
     font-family: "Arsenal-Italic";
      color: var(--blanco);
  }

  .boton{
    font-size: 1.3rem;
  }

 #footer .texto{
  color: var(--blanco);
 }
  #footer .texto a{
    color: var(--naranja);
  }

  #footer .texto a:hover{
    border-bottom:2px solid var(--naranja);
  }

  *{
    margin: 0;
    padding: 0;
  }

  html,
  body{ 
    width: 100vw;
    overflow-x: hidden;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  .icono_peru{
    width: 4rem;
    height: auto;
  }

   .icono_peru img{
    width: 100%;
   }

/* Estilos Cards */

 .swiper {
    width: 100%;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 100%;
   
  }

   .swiper-slide .img_platillo{
     width: 300px;
    height: 400px;    
    border-radius: 2rem;
    overflow: hidden;
   }

   .swiper-slide .img_platillo img{
    width: 100%;
   }

  .swiper-slide .cont_descripcion{
    /* background: #00000083; */
    height: 100%;
    padding: 0.5rem;
  }

  .swiper-slide .titulo,
  .swiper-slide .texto ,
  .swiper-slide .precio {
    color: var(--blanco);
  }

  .swiper-slide .titulo,
  .swiper-slide .texto  {
    
  }

  .naranja{
    color: var(--naranja) !important;
  }


/* Secciones alimentos */

#entrantes,
#bebidas,
#desayunos,
#guarniciones,
#platoFuerte,
#postres,
#sopas,
#ruleta{
  background-image: url('./assets/images/internal/fondo_madera_2.jpg');
  background-size: cover;
  background-repeat: repeat;
  width: 100%;
  min-height: 100vh;
  margin: 0;
} 
</style>

<script>

</script>