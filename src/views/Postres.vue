<template>
    <section id="postres">
       <Navbar/>
      <h1 class="titulo text-center py-3">Postres</h1>
      <div  class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">  
          <div class="img_platillo">
            <img src="../assets/images/postres/mousse.jpg" alt="">
          </div>         
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Mousse de Maracuyá</h2>
            <p class="precio text-center">$99.00</p>
            <p class="texto text-center">Delicioso postre cremoso de textura suave con un toque de maracuyá, montado sobre tierra de oreo, espolvoreado con ajonjolí garapiñado</p>
          </div>
        </div>
        <div class="swiper-slide">
           <div class="img_platillo">
            <img src="../assets/images/postres/suspiro.jpg" alt="">
          </div>  
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Suspiro limeño</h2>
            <p class="precio text-center">$86.00</p>
            <p class="texto text-center">Natilla de vainilla al estilo peruano , con una crema de pisco, decorada con almendras fileteadas y canela en polvo </p>
          </div>
        </div>
        <div class="swiper-slide">
           <div class="img_platillo">
            <img src="../assets/images/postres/picarones.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Picarones</h2>
            <p class="precio text-center">$110.00</p>
            <p class="texto text-center">Clásico postre peruano frito, hecho con ingredientes estrella, bañados en melaza de higo. </p>
          </div>
        </div>        
      </div>
      <div class="swiper-pagination"></div>
    </div>
 
    </section>
</template>

<style>


</style>

<script type="module">

import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  mounted(){
     var swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
};


</script>