<template>
<section id="bebidas">
  <Navbar/>
   <h1 class="titulo text-center py-3">Bebidas</h1>
  <div  class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">   
            <div class="img_platillo">
            <img src="../assets/images/bebidas/agua_maracuya.jpg" alt="">
          </div>         
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Jarra Agua de Maracuyá</h2>
            <p class="precio text-center">$80.00</p>
            <p class="texto text-center"></p>
          </div>
        </div>
        <div class="swiper-slide">   
            <div class="img_platillo">
            <img src="../assets/images/bebidas/agua_maracuya.jpg" alt="">
          </div>         
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Vaso Agua de Maracuyá</h2>
            <p class="precio text-center">$30.00</p>
            <p class="texto text-center"></p>
          </div>
        </div>
        <div class="swiper-slide">
            <div class="img_platillo">
            <img src="../assets/images/bebidas/refresco.jpg" alt="">
          </div>  
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Refresco Familia Coca Cola</h2>
            <p class="precio text-center">$30.00</p>
            <p class="texto text-center"></p>
          </div>
        </div>   
        <div class="swiper-slide">   
            <div class="img_platillo">
            <img src="../assets/images/bebidas/agua_maracuya.jpg" alt="">
          </div>         
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Jarra de Agua de Temporada</h2>
            <p class="precio text-center">$80.00</p>
            <p class="texto text-center"></p>
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