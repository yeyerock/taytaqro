<template>
    <section id="platoFuerte" >
       <Navbar/>
      <h1 class="titulo text-center py-3">Platos Fuertes</h1>
      <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"> 
            <div class="img_platillo">
            <img src="../assets/images/platosfuertes/Tallarines.jpg" alt="">
          </div>             
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Tallarines Verdes Huancas</h2>
            <p class="precio text-center">$218.00</p>
            <p class="texto text-center">Fettuccini al pesto acompañados con papa a la huancaína y supremas de pollo a la pimienta </p>
          </div>
        </div>
        <div class="swiper-slide">
           <div class="img_platillo">
            <img src="../assets/images/platosfuertes/Lomo_saltarin.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Lomo Saltado</h2>
            <p class="precio text-center">$179.00</p>
            <p class="texto text-center">Deliciosos cubos marinados de lomo de res, salteado con cebolla morada, jitomate, pluma de ají rojo, salsa especial de la casa y papa alfa. Incluye 1 orden de arroz blanco. </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img_platillo">
            <img src="../assets/images/platosfuertes/papa.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Papa Rellena Tayta</h2>
            <p class="precio text-center">$165.00</p>
            <p class="texto text-center">Esferas de papa prensada, rebosadas y crujientes, rellenas de carne molida, acompañas de arroz blanco y sarza </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img_platillo">
            <img src="../assets/images/platosfuertes/causa.jpg" alt="">
          </div>
           <div class="cont_descripcion">               
            <h2 class="nombre_platillo text-center">Causa limeña</h2>
            <p class="precio text-center">$167.00</p>
            <p class="texto text-center">Timbal de papa andina amarilla con tonos de ají amarillo, relleno de pollo y mix de verduras, laminas de aguacate, decorado con huevo duro y aceitunas kalamata </p>
          </div>
        </div>
         <div class="swiper-slide">
            <div class="img_platillo">
              <img src="../assets/images/platosfuertes/pasta_diabla.jpg" alt="">
            </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Pasta a la Diabla</h2>
            <p class="precio text-center">$163.00</p>
            <p class="texto text-center">Fettuccini con camarones al estilo tayta de chiles regionales </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img_platillo">
              <img src="../assets/images/platosfuertes/ceviche.jpg" alt="">
            </div> 
           <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Ceviche Peruano</h2>
            <p class="precio text-center">$189.00</p>
            <p class="texto text-center">Cubos de pescado fresco al limón, pluma de cebolla morada acompañados de canchita tostada, chifles de plátano, rodajas de elote suave, lechuga italiana, sarza y camote cocido </p>
          </div>
        </div>
         <div class="swiper-slide">
          <div class="img_platillo">
              <img src="../assets/images/platosfuertes/arroz_puerto.jpg" alt="">
            </div>
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Arroz del Puerto</h2>
            <p class="precio text-center">$169.00</p>
            <p class="texto text-center">Arroz cremoso con mix de mariscos, cebollín, pimiento, cebolla morada y espolvoreado con perejil picado</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img_platillo">
              <img src="../assets/images/platosfuertes/mar_oriental.jpg" alt="">
            </div>
           <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Mar Oriental</h2>
            <p class="precio text-center">$173.00</p>
            <p class="texto text-center">Arroz frito estilo oriental con camarones salteados con salsa de soya, aceite de ajonjolí, cebolla morada, mix de verduras, chícharo chino y cebolla cambray</p>
          </div>
        </div>
         <div class="swiper-slide">
          <div class="img_platillo">
              <img src="../assets/images/platosfuertes/totorita.jpg" alt="">
            </div>
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Totorita de Marlin</h2>
            <p class="precio text-center">$178.00</p>
            <p class="texto text-center">Marlin al pastor servido en una canoa de hoja de maíz y sopes tradicionales mexicanos con una salsa de chorizo</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img_platillo">
              <img src="../assets/images/platosfuertes/tiradito.jpg" alt="">
            </div>
           <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Tiradito</h2>
            <p class="precio text-center">$188.00</p>
            <p class="texto text-center">Carpaccio de pescado fresco sobre un espejo de salsa de aji amarillo peruano , chiles locales y limón </p>
          </div>
        </div>
          <div class="swiper-slide">
             <div class="img_platillo">
              <img src="../assets/images/platosfuertes/aguachile.jpg" alt="">
            </div>
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Camarones Mexas</h2>
            <p class="precio text-center">$189.00</p>
            <p class="texto text-center">Camarones al estilo Mexa, inspirados en el estado de Sinaloa , es un platillo jugoso y picante acompañado con jícama , pepino y plumas de cebolla morada</p>
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