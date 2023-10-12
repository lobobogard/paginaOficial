<template>
      <div class="flex justify-around text-sm pt-12">
        <div class="flex flex-col pl-2">
        <div class="cursor-pointer image_input pt-1 group">
            <img src="~/assets/img/tutorial/registrar.svg" class="tutoriaSizeImagen"  alt="Excel" />
            <NuxtLink class="transition-all duration-200 hover:text-xl hover:text-teal-600 ml-1" to="/tutoriales/Registrar">Registrar</NuxtLink>
        </div>
        <div class="cursor-pointer image_input pt-3 group">
            <img src="~/assets/img/tutorial/poliza.svg" class="tutoriaSizeImagen"  alt="Excel" />
            <NuxtLink class="transition-all duration-200 hover:text-xl hover:text-teal-600 ml-1" to="/tutoriales/AltaPoliza" @click="tutorial">Alta Póliza</NuxtLink>
        </div>
        <div class="cursor-pointer image_input pt-3 group">
            <img src="~/assets/img/tutorial/excel.svg" class="tutoriaSizeImagen"  alt="Excel" />
            <NuxtLink class="transition-all duration-200 hover:text-xl hover:text-teal-600 ml-1" to="/tutoriales/CargaPolizas" @click="tutorial">Carga Pólizas</NuxtLink>
        </div>
        <div class="cursor-pointer image_input pt-3 group">
            <img src="~/assets/img/tutorial/trabajo.svg" class="tutoriaSizeImagen"  alt="Excel" />
            <NuxtLink class="transition-all duration-200 hover:text-xl hover:text-teal-600 ml-1" to="/tutoriales/Configuraciones" @click="tutorial">Configuraciones</NuxtLink>
        </div>
        <div class="cursor-pointer image_input pt-3 group pb-3">
            <img src="~/assets/img/tutorial/correo.svg" class="tutoriaSizeImagen"  alt="Excel" />
            <NuxtLink class="transition-all duration-200 hover:text-xl hover:text-teal-600 ml-1" to="/tutoriales/Correos" @click="tutorial">Correos</NuxtLink>
        </div>
        </div>
        <div class="flex flex-col pl-2">
        <div class="cursor-pointer image_input pt-1 group">
            <img src="~/assets/img/tutorial/mensajes.svg" class="tutoriaSizeImagen"  alt="Excel" />
            <NuxtLink class="transition-all duration-200 hover:text-xl hover:text-teal-600 ml-1" to="/tutoriales/Mensajes" @click="tutorial">Mensajes</NuxtLink>
        </div>
        <div class="cursor-pointer image_input pt-3 group">
            <img src="~/assets/img/tutorial/tabla.svg" class="tutoriaSizeImagen"  alt="Excel" />
            <NuxtLink class="transition-all duration-200 hover:text-xl hover:text-teal-600 ml-1" to="/tutoriales/Tabla" @click="tutorial">Tabla</NuxtLink>
        </div>
        <div class="cursor-pointer image_input pt-3 group">
            <img src="~/assets/img/tutorial/graficas.svg" class="tutoriaSizeImagen"  alt="Excel" />
            <NuxtLink class="transition-all duration-200 hover:text-xl hover:text-teal-600 ml-1" to="/tutoriales/Graficas" @click="tutorial">Gráficas</NuxtLink>
        </div>
        <div class="cursor-pointer image_input pt-3 group">
            <img src="~/assets/img/tutorial/notas.svg" class="tutoriaSizeImagen"  alt="Excel" />
            <NuxtLink class="transition-all duration-200 hover:text-xl hover:text-teal-600 ml-1" to="/tutoriales/Notas" @click="tutorial">Notas</NuxtLink>
        </div>
        <div class="cursor-pointer image_input pt-3 group pb-12">
            <img src="~/assets/img/tutorial/contraseña.svg" class="tutoriaSizeImagen"  alt="Excel" />
            <NuxtLink class="transition-all duration-200 hover:text-xl hover:text-teal-600 ml-1" to="/tutoriales/Contrasena" @click="tutorial">Contraseña</NuxtLink>
        </div>
        </div>
      </div>
</template>