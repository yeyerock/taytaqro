<template>
    <section id="ruleta">
        <div class="overlay_ruleta">
     
            <Navbar/>
            

            <div class="cont_ruleta d-flex flex-column flex-wrap justify-content-center align-items-center container">
                <div>
                    <h1 class="titulo text-center py-3">Ruleta del sabor</h1>
                    <h2 class="nombre_platillo text-center">¿No sabes qué pedir hoy? </h2>
                    <p class="texto text-justify">Gira nuestra ruleta para descubrir nuevos platillos que te harán enamorarte del sabor de Perú.</p>
                    <p class="texto text-justify"><strong>Todos los paquetes incluyen la primera jarra de agua de maracuyá por tan solo $35.00</strong></p>
                </div>

                <div  @click="girarRuleta"  class="cont_lottie cont_img_ruleta ruleta mb-4">
                    <lottie-player class="lottie w-100  mx-auto" src="https://lottie.host/ea36dd44-2b4a-43fc-b0f3-f8487bf28be7/kt4aY4E96E.json" background="none"  speed="1"   ></lottie-player> 
                </div> 
            
                <div>
                    <button @click="girarRuleta" class="btn btn-lg boton boton_girar mb-4">Girar Ruleta</button>
                </div>            
            </div>
        </div>
    </section>    
    </template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  data(){
    return{
        paqueteSeleccionado: '',
        paquetes:[
            {   nombre:"Paquete Figura Araña",
                src:require("../assets/images/ruleta/arana.png"),
                precio:"$648.00",
                platillo_1:"Tequemarlins",
                platillo_2:"Chupe de Mariscos",
                platillo_3:"Aguachile",
                platillo_4:"Mousse de Maracuyá",
            },
            {   nombre:"Paquete Figura Árbol",
                src:require("../assets/images/ruleta/arbol.png"),
                precio:"$648.00",
                platillo_1:"Pulpo al Olivo"    ,
                platillo_2:"Crema Tayta"    ,
                platillo_3:"Pasta a la Diabla"    ,
                platillo_4:"Suspiro Limeño"    ,
            },
            {   nombre:"Paquete Figura Mono",
                src:require("../assets/images/ruleta/mono.png"),
                precio:"$592.00",
                platillo_1:"Leche de Tigre"    ,
                platillo_2:"Caldo de Camarón"    ,
                platillo_3:"Causa Limeña"    ,
                platillo_4:"Suspiro Limeño"    ,
            },
            {   nombre:"Paquete Figura Cóndor",
                src:require("../assets/images/ruleta/condor.png"),
                precio:"$638.00",
                platillo_1:"Pulpo al Olivo"    ,
                platillo_2:"Crema Tayta"    ,
                platillo_3:"Lomo Saltado"    ,
                platillo_4:"Suspiro Limeño"    ,
            },
            {   nombre:"Paquete Figura Colibri",
                src:require("../assets/images/ruleta/colibri.png"),
                precio:"$653.00",
                platillo_1:"Pulpo al Olivo"    ,
                platillo_2:"Tiradito"    ,
                platillo_3:"Mar Oriental"    ,
                platillo_4:"Mousse de Maracuyá"    ,
            },
            {   nombre:"Paquete Figura Lagarto",
                src:require("../assets/images/ruleta/lagarto.png"),
                precio:"$653.00",
                platillo_1:"Tequeños"    ,
                platillo_2:"Tiradito"    ,
                platillo_3:"Arroz del Puerto"    ,
                platillo_4:"Suspiro Limeño"    ,
            },
            {   nombre:"Paquete Figura Manos",
                src:require("../assets/images/ruleta/manos.png"),
                precio:"$616.00",
                platillo_1:"Leche de Tigre"    ,
                platillo_2:"Caldo de Camarón"    ,
                platillo_3:"Totoritas de Marlín"    ,
                platillo_4:"Mousse de Maracuyá"    ,
            },
            {   nombre:"Paquete Figura Flor",
                src:require("../assets/images/ruleta/flor.png"),
                precio:"$624.00",
                platillo_1:"Tequemarlins"    ,
                platillo_2:"Crema Tayta"    ,
                platillo_3:"Papa Rellena"    ,
                platillo_4:"Suspiro Limeño"    ,
            },
            {   nombre:"Paquete Figura Ballena",
                src:require("../assets/images/ruleta/ballena.png"),
                precio:"$690.00",
                platillo_1:"Pulpo al Olivo"    ,
                platillo_2:"Crema Tayta"    ,
                platillo_3:"Tallarines Huancas"    ,
                platillo_4:"Mousse de Maracuyá"    ,
            },
            {   nombre:"Paquete Figura Alcatraz",
                src:require("../assets/images/ruleta/alcatraz.png"),
                precio:"$655.00",
                platillo_1:"Tequeños"    ,
                platillo_2:"Crema Tayta"    ,
                platillo_3:"Lomo Saltado"    ,
                platillo_4:"Suspiro Limeño"    ,
            },
        ]
    }
  }, 
  created () {
    // const index = Math.floor(Math.random() * this.platillos.length);
    // this.paqueteSeleccionado = this.platillos[index]
  },
  methods:{
    girarRuleta: function(){
        // const ruleta = document.querySelector('.ruleta');
        const lottie = document.querySelector('.lottie');
      
      
        // ruleta.classList.add("seleccion");
        lottie.play();

 
        setTimeout(() =>{
          
            const index = Math.floor(Math.random() * this.paquetes.length);
            this.paqueteSeleccionado = this.paquetes[index]
            
            lottie.stop();
            
            var str = ' <h2 class="nombre_platillo text-center"><strong>'+this.paqueteSeleccionado.nombre+'</strong></h2>'+
                       '<h2 class="nombre_platillo text-center"><strong>'+this.paqueteSeleccionado.precio+'</strong></h2>'+
                      '<p class="texto text-justify"><strong> Incluye una orden de:</strong></p>'+ 
                      '<p class="texto text-justify"> -'+this.paqueteSeleccionado.platillo_1+"</p>" +
                      '<p class="texto text-justify"> -'+this.paqueteSeleccionado.platillo_2+"</p>" +
                      '<p class="texto text-justify"> -'+this.paqueteSeleccionado.platillo_3+"</p>" +
                      '<p class="texto text-justify"> -'+this.paqueteSeleccionado.platillo_4+"</p>";

            swal.fire({
                // title: this.paqueteSeleccionado.nombre + " " +this.paqueteSeleccionado.precio,
                // text: "Incluye una orden de: \n -" + this.paqueteSeleccionado.platillo_1 + ", -"+ this.paqueteSeleccionado.platillo_2 + ", -" + this.paqueteSeleccionado.platillo_3 + ", -" + this.paqueteSeleccionado.platillo_4 + ". ",
                html: str,
                imageUrl:  this.paqueteSeleccionado.src,
                imageHeight: 200,
                color: '#fff',
                background: '#42210bc4',
                customClass: {
                    confirmButton: 'boton_girar',
                    text: '',
                }
            });
        }, 3500);

       
    }
  }
  
};
</script>

<style>
    #ruleta{
        background-image: url('../assets/images/internal/fondo_lampara.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
    }

    #ruleta .overlay_ruleta{
        background: rgba(0,0,0,.75);
        text-align: center;
        opacity: 0.8;
        transition: opacity 0.25s ease 0s;
    }


    .cont_img_ruleta{
        width: 100%;
        cursor: pointer;
    }

    .boton_girar{
        background: var( --naranja) !important;
    }

    .girar{
        animation-name: spin;
        animation-duration: 1000ms;
        animation-iteration-count: 3;
        animation-timing-function: linear; 
    }
    
    .paquete{
        background: var(--cafe);
        border-radius: 1rem;
        width: 80%;
    }

    .paquete .nombre_platillo{
        color: var(--naranja);
    }
    
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }

    .seleccion{
        display: none;
    }

    .seleccion .paquete{
        background: var(--naranja);
    }

    .seleccion .paquete .nombre_platillo,
    .seleccion .paquete .texto{
        color: var(--cafe);
    }
    
    .mostrar{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>