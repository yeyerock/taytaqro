<template>
  <section id="home" class="d-flex flex-column">
    <div class="overlay p-5">
      <div class="cont_elementos_overlay">
        <h1 class="titulo text-center py-3">¿No sabes qué pedir hoy? </h1>
        <h2 class="nombre_platillo text-center mb-4">Ven a conocer nuestra ruleta del sabor para obtener sugerencias para comer con amigos o en familia</h2>
        <div class="cont_botones d-flex justify-content-center aling-items-center">
          <button @click="asignarCookie" class="btn boton mx-3 enlace">Visitar Ruleta
            <!-- <router-link class="enlace" to="/ruleta" > </router-link> -->
          </button>
          <button @click="removerOverlay" class="btn boton enlace mx-3 " >
             Ver Menú
          </button>
        </div>
      </div>  
    </div>
    
      <div class="cont_logo">
        <img src="../assets/images/logo.png" alt="">
      </div>
      <div class="cont_texto d-flex flex-column">
        <h1 class="subtitulo text-center"> ¿Qué <span>papeamos</span> hoy?</h1>
      </div>
      <div class="cont_categorias mx-lg-auto" >
        <div class="categoria">
          <router-link class="enlace naranja" to="/ruleta" ><i class="icono_ruleta fa-solid fa-spinner"></i> Ruleta del sabor</router-link>
        </div>  
        <!-- <div class="categoria">
          <router-link class="enlace" to="/desayunos" ><i class="fa-solid fa-utensils"></i> Desayunos</router-link>
        </div> -->
        <div class="categoria">
          <router-link class="enlace" to="/entrantes" ><i class="fa-solid fa-cubes-stacked"></i> Entrantes</router-link>
        </div>
        <div class="categoria">
          <router-link class="enlace" to="/guarniciones" ><i class="fa-solid fa-bread-slice"></i> Guarniciones</router-link>
        </div>
        <div class="categoria">
          <router-link class="enlace" to="/platoFuerte" ><i class="fa-solid fa-drumstick-bite"></i> Platos Fuertes</router-link>
        </div>
        <div class="categoria">
              <router-link class="enlace" to="/sopas" ><i class="fa-solid fa-bowl-rice"></i> Sopas</router-link>
        </div>
        <div class="categoria">
            <router-link class="enlace" to="/postres" ><i class="fa-solid fa-stroopwafel"></i> Postres</router-link>
        </div>
        <div class="categoria">
          <router-link class="enlace" to="/bebidas" ><i class="fa-solid fa-wine-glass"></i> Bebidas</router-link>
        </div>           
      </div>

      <div class="cont_uber d-flex flex-column w-100">
        <div class="cont_texto d-flex flex-column mb-2">
          <h1 class="subtitulo text-center"> Visítanos también en: </h1>
        </div>

        <div class="cont_logo_uber text-center mx-auto ">
          <a target="_blank" href="https://www.ubereats.com/store/tayta-gastronomia-peruana-y-fusion/4bkcX8huQRyicU0De6rp7Q?diningMode=DELIVERY"> 
            <img src="../assets/images/internal/uber_eats_logo.png" alt="">
          </a>
        </div>       
      </div>

      <div class="cont_redes d-flex justify-content-center">
        <div class="cont_icono_red col-3 col-md-1 text-center ">
          <a class="" href="https://instagram.com/taytaqro" target="_blank"><i class="icono_red fa-brands fa-instagram"></i></a>
        </div>
        <div class="cont_icono_red col-3 col-md-1 text-center ">
          <a class="" href="https://facebook.com/taytaqro" target="_blank"><i class="icono_red fa-brands fa-facebook"></i></a>
        </div>
        <div class="cont_icono_red col-3 col-md-1 text-center ">
          <a class="" href="https://tiktok.com/@taytaqro" target="_blank"><i class="icono_red fa-brands fa-tiktok"></i></a>
        </div>
        <div class="cont_icono_red col-3 col-md-1 text-center ">
          <a class="" href="https://api.whatsapp.com/send?phone=5214425868928&text=Hola%2C%20quisiera%2C%20ordenar%2C%20algo!" target="_blank"><i class="icono_red fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="cont_redes d-flex justify-content-center">
        <a class="boton " target="_blank" href="https://www.google.com.mx/maps/place/Tayta+Qro/@20.5966934,-100.3602978,19z/data=!4m13!1m7!3m6!1s0x85d35b521c2a5891:0xef3859f914731ef9!2sCamino+Real+de+Carretas+172,+Milenio+3ra+Secc,+76067+Santiago+de+Quer%C3%A9taro,+Qro.!3b1!8m2!3d20.5966934!4d-100.3599725!3m4!1s0x0:0xfb281b9dd9e2c2f1!8m2!3d20.5966417!4d-100.3602164"><i class="fa-solid fa-location-dot"></i> Cómo llegar </a>
      </div>
      <!-- <section id="footer">
        <p class="texto text-center my-3">Crafted by <a class="" href="https://b312studio.com" target="_blank"><span> B312 Studio</span></a></p>
      </section> -->
    
  </section>
</template>

<script>
// @ is an alias to /src
  import Cookies from "js-cookie";
  export default {
    name: 'HomeView',
    data(){ 
      return{
        estatusRuleta: false,
      }
    },
    components: { },
    
    methods:{
      removerOverlay: function(){

        const capa = document.querySelector('.overlay');
        capa.classList.toggle("removeOverlay");
        
        // console.log(this.estatusRuleta)
      },

      asignarCookie: function(){
        var tiempo = 1/48;

        var self = this

        this.estatusRuleta = true;

        Cookies.set('estatus', this.estatusRuleta, {expires: tiempo});

        self.$router.push('/ruleta');
      }
    },
    created(){
     
    },
    mounted(){
      this.estatusRuleta = Cookies.get('estatus');
      // console.log(this.estatusRuleta); 

        const capa = document.querySelector('.overlay');

        if(this.estatusRuleta === 'true'){
           
          capa.classList.add("removeOverlay");
        }
        // else{
        //   // console.log(this.estatusRuleta);  
        //   capa.classList.toggle("addOverlay");
        // }       
    }
}
</script>

<style>

  .removeOverlay{
    display: none !important;
  }

  .addOverlay{

   
    
  }

  #home .overlay{
    display:flex;
    position: absolute;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.857);
  }

  #home .overlay .boton{
    background: var(--naranja);
    font-size: 2rem;
  }

  #home .overlay .boton:nth-child(2){
    background: var(--cafe);
    color: var(--blanco);
  }

  #home .overlay .boton:nth-child(2):hover{
    background: var(--naranja);
    color: var(--cafe);
  }

  #home .overlay .boton:hover .enlace{
    color: var(--cafe);
  }

  #home{
    background-image: url('../assets/images/internal/fondo_lampara_2.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  
#home .cont_logo{
  width: 40%;
  margin: 0.5rem auto;
}

#home .cont_logo_uber{
  width: 8rem;
}

#home .cont_logo img,
#home .cont_logo_uber img{
  width: 100%;
}

#home .cont_categorias{
  padding: 1.5rem;
  width: 100%;
}

#home .categoria{
  margin: 0.5rem auto;
}

#home .categoria .enlace{
  color: var(--blanco);
  font-size: 2rem;
}

#home .categoria .enlace:hover{
  color: var(--naranja);
}

#home .cont_redes{
    margin: 2rem auto;
}

#home .cont_redes .cont_icono_red{
    width: 4rem;
}

#home .cont_redes .cont_icono_red .icono_red{
    font-size: 2rem;
    color: var(--blanco);
}

#home .cont_redes .cont_icono_red .icono_red:hover{
    color: var(--naranja);
    transition: 0.3s;
}

#home .cont_redes .boton{
  background: var(--naranja);
  padding: 0.5rem;
  border-radius: 0.5rem;
}

#home .icono_ruleta{
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear ; 
}

@keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }



</style>
