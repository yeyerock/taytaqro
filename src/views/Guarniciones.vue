<template>
  <section id="guarniciones">
    <Navbar/>
    <h1 class="titulo text-center py-3">Guarniciones</h1>
      <div  class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">   
           <div class="img_platillo">
            <img src="../assets/images/guarniciones/pan.jpg" alt="">
          </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Pan al ajo</h2>
            <p class="precio text-center">$50.00</p>
            <p class="texto text-center">Pan crocante al horno con mantequilla de ajo y aceite</p>
          </div>
        </div>
        <div class="swiper-slide">
           <div class="img_platillo">
            <img src="../assets/images/guarniciones/arroz.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Arroz Blanco</h2>
            <p class="precio text-center">$50.00</p>
            <p class="texto text-center">Arroz blanco con mantequilla y ajo</p>
          </div>
        </div>
        <div class="swiper-slide">
           <div class="img_platillo">
            <img src="../assets/images/guarniciones/ensalada_fres.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Ensalada Fresca</h2>
            <p class="precio text-center">$81.00</p>
            <p class="texto text-center">Ensalada fresca a base de lechuga italiana, supremas de naranja, ajonjolí garapiñado, cubos de mango, cacahuate tostado, láminas de manzana y un crocante de betabel</p>
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