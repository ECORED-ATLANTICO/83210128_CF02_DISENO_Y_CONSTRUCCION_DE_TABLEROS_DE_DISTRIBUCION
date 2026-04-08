<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Rotulado, señalización y verificación de conformidad

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        img(src="@/assets/curso/tema4/img01.png", alt="Imagen decorativa")
    
        .row.justify-content-center.align-items-center.z-2
          .col-lg-10(data-aos="fade-up")
            p.banner-text Un tablero de distribución puede verse ordenado y bien construido, pero esto no garantiza por sí solo que sea seguro. La verdadera seguridad está en que el tablero pueda ser comprendido, identificado y supervisado fácilmente por cualquier técnico autorizado. Por ello, el rotulado y la señalización adecuados no solo permiten cumplir con la normatividad vigente, sino que convierten al tablero en una guía clara que orienta a instaladores, operadores e inspectores durante toda la vida útil de la instalación.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-9.mb-4.mb-lg-0
        p.mb-0 Comprender estas señalizaciones es una competencia fundamental para el aprendiz del área eléctrica, ya que facilita localizar circuitos, identificar derivaciones y reducir riesgos durante la operación o el mantenimiento. Además, la verificación de conformidad, realizada por organismos acreditados, permite demostrar que la instalación cumple con el RETIE, la NTC 2050 y los requisitos técnicos aplicables, garantizando así su seguridad y correcto funcionamiento.

      .col-md-8.col-lg-3
        img(src="@/assets/curso/tema4/img02.png", alt="Imagen decorativa")

    separador

    .bg-full-width.bg-fondo-2
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.1 Señalización obligatoria en tableros

      .row.justify-content-center.align-items-center.mb-5
        .col-md-12.col-lg-9.mb-4.mb-lg-0
          p.mb-3 Una de las primeras exigencias del RETIE es que los tableros estén dotados de señalización visible, permanente y comprensible. Esta señalización cumple una doble función: prevenir accidentes y facilitar la operación segura. No se trata únicamente de “poner etiquetas”, sino de transmitir información crítica sobre riesgos eléctricos, circuitos activos, dispositivos de protección y condiciones especiales del sistema.
          p.mb-0 Por ejemplo, si un tablero alimenta equipos trifásicos o cargas de alta capacidad, la señalización debe advertirlo claramente. Lo mismo ocurre con tableros que poseen energización dual, circuitos de emergencia o zonas que requieren procedimientos especiales de bloqueo y etiquetado (LOTO).
        .col-md-8.col-lg-3
          img(src="@/assets/curso/tema4/img04.png", alt="Imagen decorativa")


    .row.justify-content-center.align-items-center.mb-3
      .col-md-12.col-lg-12
        .tarjeta.bg-color-4.p-3.mb-3.br-15
          .row.align-items-center.justify-content-center
            .col-10
              p.mb-0 El RETIE exige que toda señalización sea durable, resistente al ambiente y ubicada en sitios estratégicos donde el operario pueda observarla antes de interactuar con el tablero. Materiales como láminas acrílicas, policarbonatos, etiquetas termoimpresas y vinilos industriales suelen emplearse para garantizar visibilidad y permanencia.

    p.mb-4 Dicho de forma sencilla: un tablero no se considera seguro si no puede “comunicarse” adecuadamente con quien lo opera.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Identificación de circuitos según RETIE

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        .tarjeta.bg-color-4.p-4.br-15
          .row.align-items-center.justify-content-center
            .col-md-8.col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/img03.png", alt="Imagen decorativa")
            .col-12.col-md-12.col-lg-9
              p.mb-3 La identificación de circuitos es una de las prácticas más importantes dentro de un tablero. Un tablero sin rótulos es, en la práctica, un rompecabezas peligroso. Cuando cada circuito está identificado correctamente, se evita:
              
              .row
                .col-md-12.col-lg-6
                  ul.lista-ul.mb-0
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Cortar energía a zonas equivocadas.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Conectar cargas incorrectas.
                .col-md-12.col-lg-6
                  ul.lista-ul.mb-0
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Activar protecciones que no corresponden.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Exponer a los operarios a riesgos innecesarios.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-9.mb-4.mb-lg-0
        p.mb-3 El RETIE exige que cada circuito derivado esté identificado de manera clara y permanente. Esto significa que los interruptores deben incluir un rótulo que indique exactamente qué alimentan: iluminación de oficina, tomas generales, aire acondicionado, bombas, servidores, etc.
        p.mb-0 Además, la barra de neutro debe tener su identificación correspondiente y cada conductor debe cumplir con la codificación cromática normada. En otras palabras, entre más claro esté el rótulo de cada circuito, más seguro y mantenible es el tablero.
      .col-md-8.col-lg-3
        img(src="@/assets/curso/tema4/img05.png", alt="Imagen decorativa")


    .row.justify-content-center.align-items-center.mb-3
      .col-md-12.col-lg-12
        .tarjeta.bg-color-4.p-3.mb-3.br-15
          .row.align-items-center.justify-content-center
            .col-10
              p.mb-0 En instalaciones más complejas, la identificación se complementa con códigos internos que permiten asociar cada circuito al plano unifilar, a su calibre y a su ruta dentro del edificio. Esta práctica se conoce como trazabilidad eléctrica y es un elemento muy valorado en la industria por su capacidad para reducir tiempos de intervención.

    separador

    .bg-full-width.bg-fondo-2
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.3 Inspección de conformidad: criterios de verificación

      .row.justify-content-center.align-items-center.mb-5
        .col-md-8.col-lg-3.mb-4.mb-lg-0
          img(src="@/assets/curso/tema4/img05.png", alt="Imagen decorativa")
        .col-md-12.col-lg-9
          p.mb-0 La inspección de conformidad es el mecanismo mediante el cual se verifica que un tablero cumple con la normatividad vigente. No se trata de un trámite opcional; en instalaciones nuevas, ampliaciones o remodelaciones mayores, la certificación es obligatoria. El organismo de inspección no solo revisa el tablero visualmente, sino que evalúa: la calidad de las conexiones, la organización interna, la continuidad de las barras, la presencia de puesta a tierra adecuada, el nivel de cortocircuito disponible, la capacidad interruptiva de las protecciones, y por supuesto, la existencia del diagrama unifilar y la señalización correspondiente.


      .container.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
              h3.titulo-con-imagen__texto Ejemplo contextualizado


    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.mb-4.mb-lg-0
        img(src="@/assets/curso/tema4/img06.png", alt="Imagen decorativa")
      .col-md-12.col-lg-9
        p.mb-3 Una empresa instaló un tablero de distribución para una zona de producción alimentaria. Aunque el tablero operaba correctamente, la inspección RETIE reveló múltiples problemas: ninguno de los circuitos estaba rotulado, no existía señalización de riesgo eléctrico en la puerta del gabinete, el diagrama unifilar no estaba adherido al interior y la barra de neutro no mostraba identificación visible.
        p.mb-3 El instalador argumentó que “todo estaba conectado correctamente”, pero la inspección determinó que, sin señalización ni rótulos, la operación del tablero generaba un riesgo evidente. El tablero fue rechazado y se exigió corregir e instalar:
        .row.align-items-center.mb-3
          .col-md-12.col-lg-6.mb-4.mb-lg-0
            .tarjeta.bg-color-1.p-3.mb-0.br-15
              ul.lista-ul.mb-0
                li.mb-0
                  i.fas.fa-circle-right.bg-color-17
                  | Rótulos permanentes en cada circuito.
                li.mb-0
                  i.fas.fa-circle-right.bg-color-17
                  | Señalización de advertencia.
                li.mb-0
                  i.fas.fa-circle-right.bg-color-17
                  | Diagrama unifilar actualizado.
                li.mb-0
                  i.fas.fa-circle-right.bg-color-17
                  | Identificación de todas las barras y conductores.
          .col-md-12.col-lg-6
            p.mb-0 Un tablero puede estar impecablemente instalado, pero si carece de esta documentación, no cumple. La inspección, por tanto, garantiza que cada componente opera dentro de los límites seguros establecidos por la normativa.


        .tarjeta.bg-color-18.p-3.mb-0.br-15
          p.mb-0 El RETIE establece que los organismos de inspección deben estar acreditados por la ONAC, contar con equipos calibrados y aplicar procedimientos normalizados que aseguren imparcialidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-0
        .tarjeta.color-primario.p-2.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/tema1/img-4.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Ingrese a este enlace de video a continuación, para profundizar sobre la importancia de la señalización eléctrica:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=24FRFLwRQL0" target="_blank")
                    span Enlace web
                    i.fas.fa-link

</template>
<script>
export default {
  name: 'Tema4',
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
