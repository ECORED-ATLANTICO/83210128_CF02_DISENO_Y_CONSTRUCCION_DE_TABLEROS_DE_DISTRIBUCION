<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-0
      .col-md-8.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/intro.png", alt="Pérdidas y consideraciones básicas de diseño") 
      .col-lg-9
        .bg-color-1.p-4.bg-tarjeta
          .row.align-items-center
            .col
              p.mb-0 El componente formativo Normatividad y requisitos técnicos para tableros de distribución, introduce el marco regulatorio aplicable a la construcción, instalación y verificación de tableros de distribución en Colombia. Comprender la normativa es un requisito indispensable para garantizar la seguridad, la integridad operativa y la conformidad técnica de cualquier instalación eléctrica. El aprendiz identificará los organismos reguladores, el alcance del RETIE, la estructura técnica de la NTC 2050 y las responsabilidades del instalador y del constructor eléctrico. 
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/icon.png", data-aos="zoom-in")

    //- figure.mb-5
    //-   .video.mb-2
    //-     iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //-   figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
