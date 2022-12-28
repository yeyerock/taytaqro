<template>
    <section id="sopas">
        <Navbar/>
      <h1 class="titulo text-center py-3">Sopas</h1>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">  
          <div class="img_platillo">
              <img src="../assets/images/sopas/camaron.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Caldo de Camarón</h2>
            <p class="precio text-center">$186.00</p>
            <p class="texto text-center">Caldo de Camarón tradicional, acompañado de zanahoria y papa</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img_platillo">
              <img src="../assets/images/sopas/chupe.jpg" alt="">
            </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Chupe de Mariscos</h2>
            <p class="precio text-center">$167.00</p>
            <p class="texto text-center">Sopa de mix de mariscos acompañada con pasta capellini </p>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="img_platillo">
              <img src="../assets/images/sopas/aguadito.jpg" alt="">
            </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Aguadito de Pollo</h2>
            <p class="precio text-center">$157.00</p>
            <p class="texto text-center">Sopa a base de arroz, cilantro, chícharos y zanahoria con pechuga de pollo deshebrada</p>
          </div>
        </div>
       
        <div class="swiper-slide">
           <div class="img_platillo">
              <img src="../assets/images/sopas/crema_tayta.jpg" alt="">
            </div> 
           <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Crema Tayta</h2>
            <p class="precio text-center">$180.00</p>
            <p class="texto text-center">Briske de camarones sobre una cama de crotones de ajo y mantequilla</p>
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