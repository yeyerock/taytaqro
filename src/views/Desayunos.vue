<template>
    <section id="desayunos">
      <Navbar/>
        <h1 class="titulo text-center py-3">Desayunos</h1>
        <h3 class="subtitulo text-center py-3">Incluye:</h3>
        <p class="texto text-center">* 1 Coctel de Frutas con Miel</p>
        <p class="texto text-center">* 1 Pan con mantequilla y mermelada </p>
         <h3 class="subtitulo text-center py-3">Elige tu bebida favorita:</h3>
        <p class="texto text-center">* Café americano</p>
        <p class="texto text-center">* Té (Manzanilla, Limón o Hierbabuena)</p>
        <p class="texto text-center">* Jugo de Naranja</p>
        
        
        <h3 class="subtitulo text-center py-3">Extras:</h3>
        <p class="texto text-center">* Café americano - <span>$35.00</span></p>
        <p class="texto text-center">* Té  (Frutos rojos, mango-fresa, fresa-vainilla, negro, maracuyá) - <span>$35.00</span></p>
        <p class="texto text-center">* Jugo de naranja - <span>$35.00</span></p>
        <p class="texto text-center">* Botella de agua - <span>$25.00</span></p>
        <p class="texto text-center">* Orden de pan con mantequilla (5 pzas) : Acompañado de una mermelada de frutos rojos - <span>$60.00</span></p>
        <p class="texto text-center">* Pan dulce (pza) - <span>$20.00</span></p>
         <h3 class="subtitulo text-center py-3">Selecciona tu platillo:</h3>
        <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">   
          <div class="img_platillo">
            <img src="../assets/images/desayunos/criollo.jpg" alt="">
          </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Desayuno criollo (para dos personas)</h2>
            <p class="precio text-center">$385.00</p>
            <p class="texto text-center">Chicharrón peruano 200 gr, tamal peruano 2 pzas, Zarza, camote frito , pan francés peruano 2 piezas , 2 jugos criollos (papaya, fresa, piña) incluye un cóctel de frutas con miel, pan con mantequilla y mermelada.</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img_platillo">
            <img src="../assets/images/desayunos/estrellados.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Huevo estrellado o rancheros</h2>
            <p class="precio text-center">$185.00</p>
            <p class="texto text-center">(Acompañado con enchiladas o chilaquiles pueden ser verdes o rojos, o ensalada con porción de frijoles refritos)</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img_platillo">
            <img src="../assets/images/desayunos/huevo_chorizo.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Huevo revuelto con chorizo</h2>
            <p class="precio text-center">$185.00</p>
            <p class="texto text-center">(Acompañado con enchiladas o chilaquiles pueden ser verdes o rojos, o ensalada con porción de frijoles refritos)</p>
          </div>
        </div>
       
        <div class="swiper-slide">
          <div class="img_platillo">
            <img src="../assets/images/desayunos/carne_asada.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Carne Asada</h2>
            <p class="precio text-center">$190.00</p>
            <p class="texto text-center">(Acompañado con enchiladas o chilaquiles pueden ser verdes o rojos, o ensalada con porción de frijoles refritos)</p>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="img_platillo">
            <img src="../assets/images/desayunos/milanesa_res.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Milanesa de cerdo</h2>
            <p class="precio text-center">$190.00</p>
            <p class="texto text-center">(Acompañado con enchiladas o chilaquiles pueden ser verdes o rojos, o ensalada con porción de frijoles refritos)</p>
          </div>
        </div>

         <div class="swiper-slide">
          <div class="img_platillo">
            <img src="../assets/images/desayunos/milanesa_pollo.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Milanesa de pollo</h2>
            <p class="precio text-center">$190.00</p>
            <p class="texto text-center">(Acompañado con enchiladas o chilaquiles pueden ser verdes o rojos, o ensalada con porción de frijoles refritos)</p>
          </div>
        </div>

         <div class="swiper-slide">
          <div class="img_platillo">
            <img src="../assets/images/desayunos/pechuga.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Pechuga asada</h2>
            <p class="precio text-center">$200.00</p>
            <p class="texto text-center">(Acompañado con enchiladas o chilaquiles pueden ser verdes o rojos, o ensalada con porción de frijoles refritos)</p>
          </div>
        </div>

         <div class="swiper-slide">
          <div class="img_platillo">
            <img src="../assets/images/desayunos/flautas.jpg" alt="">
          </div> 
          <div class="cont_descripcion">
            <h2 class="nombre_platillo text-center">Flautas de res (orden de 3)</h2>
            <p class="precio text-center">$185.00</p>
            <p class="texto text-center">(Acompañados con lechuga, queso y crema)</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    </section>
</template>

<style>

 #desayunos   .texto span{
  font-size: 1.3rem;
 }


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