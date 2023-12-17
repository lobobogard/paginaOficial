<template>
    <div>
    <header>
    <nav class="bg-gray-300  border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://www.segurosemaforo.com/" class="flex items-center animate__animated animate__flip">
            <img src="~/assets/img/logos/semaforo.png" class="h-10  w-10 mr-3" alt="Flowbite Logox" />
        </a>
        <button @click="menu" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="md:block hidden w-full md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <NuxtLink class="transition-all duration-200 hover:text-xl" to="/">Inicio</NuxtLink>
            </li>
            <li>
              <!-- <NuxtLink class="transition-all duration-200 hover:text-xl" to="/tutorial">Tutorial</NuxtLink> -->
              <NuxtLink class="transition-all duration-200 hover:text-xl cursor-pointer" @click="tutorial">Tutorial</NuxtLink>
            </li>
            <div class="bg-slate-50 flex-1 w-80 mt-14 ml-20 absolute z-10 rounded-md shadow-xl" :class="cssTutorial">
              <div class="flex text-sm">
              <div class="flex flex-col w-64 pt-3 pl-2">
                <div class="cursor-pointer image_input pt-1 group">
                    <img src="~/assets/img/tutorial/registrar.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="Excel" />
                    <NuxtLink class="transition-all duration-200 hover:text-base hover:text-teal-600 ml-1" to="/tutoriales/Registrar" @click="tutorial">Registrar</NuxtLink>
                </div>
                <div class="cursor-pointer image_input pt-3 group">
                  <img src="~/assets/img/tutorial/poliza.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="Excel" />
                  <NuxtLink class="transition-all duration-200 hover:text-base hover:text-teal-600 ml-1" to="/tutoriales/AltaPoliza" @click="tutorial">Alta Póliza</NuxtLink>
                </div>
                <div class="cursor-pointer image_input pt-3 group">
                  <img src="~/assets/img/tutorial/excel.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="Excel" />
                  <NuxtLink class="transition-all duration-200 hover:text-base hover:text-teal-600 ml-1" to="/tutoriales/CargaPolizas" @click="tutorial">Carga Pólizas</NuxtLink>
                </div>
                <div class="cursor-pointer image_input pt-3 group">
                  <img src="~/assets/img/tutorial/trabajo.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="Excel" />
                  <NuxtLink class="transition-all duration-200 hover:text-base hover:text-teal-600 ml-1" to="/tutoriales/Configuraciones" @click="tutorial">Configuraciones</NuxtLink>
                </div>
                <div class="cursor-pointer image_input pt-3 group pb-3">
                  <img src="~/assets/img/tutorial/correo.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="Excel" />
                  <NuxtLink class="transition-all duration-200 hover:text-base hover:text-teal-600 ml-1" to="/tutoriales/Correos" @click="tutorial">Correos</NuxtLink>
                </div>
              </div>
              <div class="flex flex-col w-64 pt-3 pl-2">
                <div class="cursor-pointer image_input pt-1 group">
                  <img src="~/assets/img/tutorial/mensajes.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="Excel" />
                  <NuxtLink class="transition-all duration-200 hover:text-base hover:text-teal-600 ml-1" to="/tutoriales/Mensajes" @click="tutorial">Mensajes</NuxtLink>
                </div>
                <div class="cursor-pointer image_input pt-3 group">
                  <img src="~/assets/img/tutorial/tabla.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="Excel" />
                  <NuxtLink class="transition-all duration-200 hover:text-base hover:text-teal-600 ml-1" to="/tutoriales/Tabla" @click="tutorial">Tabla</NuxtLink>
                </div>
                <div class="cursor-pointer image_input pt-3 group">
                  <img src="~/assets/img/tutorial/graficas.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="Excel" />
                  <NuxtLink class="transition-all duration-200 hover:text-base hover:text-teal-600 ml-1" to="/tutoriales/Graficas" @click="tutorial">Gráficas</NuxtLink>
                </div>
                <div class="cursor-pointer image_input pt-3 group">
                  <img src="~/assets/img/tutorial/notas.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="Excel" />
                  <NuxtLink class="transition-all duration-200 hover:text-base hover:text-teal-600 ml-1" to="/tutoriales/Notas" @click="tutorial">Notas</NuxtLink>
                </div>
                <div class="cursor-pointer image_input pt-3 group pb-3">
                  <img src="~/assets/img/tutorial/contraseña.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="Excel" />
                  <NuxtLink class="transition-all duration-200 hover:text-base hover:text-teal-600 ml-1" to="/tutoriales/Contrasena" @click="tutorial">Contraseña</NuxtLink>
                </div>
              </div>
            </div>
            </div>
            <li>
              <NuxtLink class="transition-all duration-200 hover:text-xl" to="/resumenEspanol">Compañia</NuxtLink>
            </li>
            <li>
              <NuxtLink class="transition-all duration-200 hover:text-xl" to="/contacto">Contacto</NuxtLink>
            </li>
            <li>
              <a href="https://www.segurosemaforo.com/" class="border-2 border-teal-100 bg-blue-700 text-white font-bold p-1 rounded-full hover:bg-sky-50 hover:text-orange-500 hover:px-10 transition-all duration-500 text-sm">SEGUROS SEMAFORO</a>
            </li>
          </ul>
        </div>
        <div v-show="mostrarMenu" :class="cssMenu" class="block md:hidden w-full md:w-auto" id="navbar-default" >
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li class="mb-1 bg-blue-200 text-white text-center rounded-xl">
                <NuxtLink class="transition-all duration-200 hover:text-xl" to="/">Inicio</NuxtLink>
            </li>
            <li class="mb-1 bg-blue-200 text-white text-center rounded-xl">
                <NuxtLink class="transition-all duration-200 hover:text-xl" to="/tutoriales/Menu">Tutorial</NuxtLink> 
            </li>
            <li class="mb-1 bg-blue-200 text-white text-center rounded-xl">
              <NuxtLink class="transition-all duration-200 hover:text-xl" to="/resumenEspanol">Compañia</NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink class="transition-all duration-200 hover:text-xl" to="/socioEspanol">Socio</NuxtLink>
            </li> -->
            <li class="mb-2 bg-blue-200 text-white text-center rounded-xl">
              <NuxtLink class="transition-all duration-200 hover:text-xl" to="/contacto">Contacto</NuxtLink>
            </li>
            <li class="text-center">
              <a href="https://www.segurosemaforo.com/" class="border-2 border-teal-100 bg-blue-700 text-white font-bold p-1 rounded-full hover:bg-sky-50 hover:text-orange-500 hover:px-10 transition-all duration-500 text-sm">SEGUROS SEMAFORO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>

    <div>
        <slot/>
    </div>

    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-1">
        <div data-aos="flip-left" class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://www.segurosemaforo.com/" class="flex items-center mb-4 sm:mb-0">
                    <img src="~/assets/img/logos/semaforo.png" class="h-16 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">Agentes en quien confiar</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <NuxtLink to="/politicasPrivacidad"><a class="mr-4 hover:underline md:mr-6">Políticas Privacidad</a></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/condicionesServicios"><a class="mr-4 hover:underline md:mr-6">Condiciones Servicios</a></NuxtLink>
                    </li>
                    <!-- <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Licencias</a>
                    </li> -->
                    <li>
                        <!-- <a href="#" class="hover:underline">Contacto</a> -->
                        <NuxtLink to="/contacto">Contacto</NuxtLink>
                        <!-- <a href="https://www.linkedin.com/in/luis-gerardo-pulido-alonso-672542225/" target="_blank"><img src="~/assets/img/linked.png" class="h-10  w-10 mr-3" alt="Flowbite Logox" /></a> -->
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.info.segurosemaforo.com/" class="hover:underline">Seguros Semaforo™</a>. todos los derechos reservados.</span>
        </div>
        <div class="flex justify-center pb-5">
          
          <a href="https://www.flaticon.es/" target="_blank" title="empresa iconos animados"><img src="~/assets/img/logos/freepik.png" class=" mr-3" alt="Flowbite Logo" /></a>
        </div>
    </footer>
    </div>
</template>
<script lang="ts" setup>

let cssTutorial = ref('notDisplay')
function tutorial() {
  if (cssTutorial.value != 'animate__animated animate__fadeIn') {
    cssTutorial.value = 'animate__animated animate__fadeIn'
  } else {
    cssTutorial.value = 'animate__animated animate__fadeOut'
  }
}

let menuVer = ref(false)
let cssMenu = ref('animate__animated animate__bounceOut')
let mostrarMenu = ref(false)

function menu() {
  menuVer.value = !menuVer.value
  if (menuVer.value) {
      mostrarMenu.value = menuVer.value
      cssMenu.value = 'animate__animated animate__bounceIn'
  } else {
    cssMenu.value = 'animate__animated animate__bounceOut'
    setTimeout(() => {  mostrarMenu.value = menuVer.value }, 500);
  }
}
</script>
<style scoped>
.router-link-exact-active {
    color: DodgerBlue;
    font-weight: bold;
}

.notDisplay {
  display:none
}

.tutoriaSizeImagen {
    width: 13%
}

.image_input img {
  float: left;
  clear: none;
}
</style>