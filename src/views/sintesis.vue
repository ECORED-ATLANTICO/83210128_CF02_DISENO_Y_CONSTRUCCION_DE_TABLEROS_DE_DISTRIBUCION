<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Normatividad y requisitos técnicos para tableros de distribución ofrece al aprendiz los fundamentos esenciales para diseñar, evaluar e instalar tableros eléctricos conforme a la normativa vigente, integrando principios del RETIE, la NTC 2050 y estándares internacionales aplicables. Este componente fortalece la comprensión de la seguridad eléctrica, la correcta selección de protecciones, la aplicación de esquemas de puesta a tierra y la interpretación técnica de diagramas unifilares.

    p Asimismo, desarrolla las competencias necesarias para identificar no conformidades y aplicar criterios de verificación y rotulado en instalaciones reales, garantizando intervenciones seguras, confiables y alineadas con las exigencias regulatorias del sector eléctrico colombiano.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
