<template>
    <section>
         <header class="">
           <div class="flex justify-center mt-6 py-5 animate__animated animate__fadeInUpBig">
             <img src="~/assets/img/tutorial/ticket.svg" class="tutoriaSizeImagen group-hover:animate-ping"  alt="ticket" />
           </div>
         </header>
    </section>
     
     <section class="flex flex-col md:flex-row justify-around">
     <div class="dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl md:w-4/12 m-8 animate__animated animate__backInLeft">
       <div>
         <span class="inline-flex p-2 bg-black rounded-md shadow-lg">
             <video class="video-fluid z-depth-1 w-full aspect-square m-0 md:m-10" loop controls >
               <source src="https://segurosemaforo.s3.amazonaws.com/tutoriales/ticket/ticket.mp4" type="video/mp4" />
             </video>
         </span>
       </div>
       <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Ticket</h3>
       <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
         Explicamos el funcionamiento de este módulo para la generación del ticket y darle el seguimiento adecuado.
       </p>
     </div>
 
     <div class="rounded-lg px-6 py-8  md:w-4/12 m-8">
       <div>
       </div>
     </div>
     </section>
     
     </template>
   
   <style scoped>
   .tutoriaSizeImagen {
     width: 13%
   }
   
   </style>