<template>
  <section id="entrantes">
    <Navbar/>
     <h1 class="titulo text-center py-3">Entrantes</h1>
    <div  class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">      
          <div class="img_platillo">
            <img src="../assets/images/entrantes/tequeno_cla.jpg" alt="">
          </div>    
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Tequeños Clásicos</h2>
            <p class="precio text-center">$210.00</p>
            <p class="texto text-center">Entrada con 12 tequeños de lámina de wonton rellenos de queso y jamón, acompañados de un delicioso cremoso de aguacate </p>
          </div>
        </div>
        <div class="swiper-slide">
           <div class="img_platillo">
            <img src="../assets/images/entrantes/tequeno_mar.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">TequeMarlin's</h2>
            <p class="precio text-center">$193.00</p>
            <p class="texto text-center">Láminas de wonton, rellenas de marlin a la mexicana, servido sobre un cremoso de aguacate, y decorado con mayonesa de habanero </p>
          </div>
        </div>
        <div class="swiper-slide">
           <div class="img_platillo">
            <img src="../assets/images/entrantes/pulpo.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Pulpo al Olivo</h2>
            <p class="precio text-center">$193.00</p>
            <p class="texto text-center">Pulpo salteado con aceite de oliva, puré de kalamandra y sazonado con aceite balsámico acompañado con una orden de pan al ajo </p>
          </div>
        </div>
        <div class="swiper-slide">
           <div class="img_platillo">
            <img src="../assets/images/entrantes/leche_t.jpg" alt="">
          </div> 
           <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Leche de Tigre</h2>
            <p class="precio text-center">$153.00</p>
            <p class="texto text-center">Fresca salsa que da vida al ceviche peruano, con un toque de limón, acompañado con canchita tostada y sal de jamaica</p>
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