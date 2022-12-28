<template>
    <nav class="navbar px-4 d-flex ">
      <router-link to="/" class="enlace mx-lg-4"><i class="fa-solid fa-arrow-left"></i></router-link>    
      <div class="icono_peru mx-lg-4">                
          <router-link to="/" class="enlace"><img src="../assets/images/logo.png" alt=""></router-link>
      </div>
        
    </nav>
</template>

<style>
/* Navbar */

.navbar {
  top: 0;
  width: 100%;
}

.navbar .enlace{
    font-size: 2rem;
    color: var(--naranja);
}

.navbar .enlace:hover{
    color: var(--blanco);
    transition: 0.3s;
}

</style>