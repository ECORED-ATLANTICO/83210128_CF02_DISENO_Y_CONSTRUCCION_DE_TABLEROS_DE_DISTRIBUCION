<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requisitos técnicos y de seguridad para tableros de distribución


    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img01.png", data-aos="zoom-in")
      .col-md-12.col-lg-7
        p.mb-3 Los tableros de distribución son elementos fundamentales en cualquier instalación eléctrica, ya que concentran los dispositivos de protección, maniobra y control encargados de distribuir la energía hacia los diferentes circuitos. Debido a su importancia, su diseño, construcción e instalación deben cumplir con normas técnicas que garanticen seguridad, confiabilidad y correcto funcionamiento.
        .tarjeta.bg-color-4.p-3.mb-3.br-15
          p.mb-0 Tener claros los principales requisitos establecidos por el RETIE y la NTC 2050 para la construcción y montaje de tableros eléctricos en contextos residenciales e industriales, permiten comprender los criterios técnicos que deben cumplir los componentes del tablero y facilitan la interpretación de esquemas eléctricos en procesos de diseño y análisis.


    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Especificaciones constructivas

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        img(src="@/assets/curso/tema2/img02.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2
          .col-lg-8(data-aos="fade-up")
            p.banner-text La construcción de un tablero de distribución no se deja al azar ni a la experiencia empírica; por el contrario, debe cumplir estándares precisos establecidos por la normatividad técnica. Tanto el RETIE como la NTC 2050 especifican las condiciones que deben cumplir los gabinetes, las cubiertas internas, los materiales, los sistemas de ventilación, el tipo de aislación y los métodos de protección contra el contacto directo e indirecto.


    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in")
      .col-md-12.col-lg-8
        p.mb-3  Desde el punto de vista constructivo, un tablero es un equipo eléctrico cerrado que alberga interruptores, barras colectoras, puentes, conductores y dispositivos de protección. La manera en que estos elementos se integran determina su confiabilidad, capacidad de operación y seguridad para el usuario.
        .tarjeta.bg-color-1.p-3.mb-3.br-15
          p.mb-3 Para comprender mejor estos requisitos, es útil reconocer que la normativa exige que los tableros se fabriquen con materiales resistentes al fuego, no higroscópicos y capaces de proteger los componentes internos frente a humedad, polvo y posibles fuentes externas de daño mecánico. Además, las cubiertas internas cumplen la función crítica de impedir el contacto accidental con partes energizadas.
          p.mb-0 La siguiente tabla sintetiza algunos de los elementos constructivos obligatorios:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-9
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Elementos constructivos mínimos del tablero según normativa
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. Adaptado de la norma NTC 2050.
            thead
              tr
                th Elemento
                th Requisito normativo
                th Propósito
            tbody
              tr
                td Gabinete.
                td Material autoextinguible o metálico con protección anticorrosiva.
                td Evitar propagación de fuego y proteger contra agentes externos.
              tr
                td Cubierta interna.
                td Debe impedir contacto directo con partes vivas.
                td Protección contra choques eléctricos.
              tr
                td Puerta exterior.
                td Debe permitir cierre seguro y acceso controlado.
                td Evitar manipulaciones no autorizadas.
              tr
                td Canalizaciones internas.
                td Deben permitir organización ordenada del cableado.
                td Evitar sobrecalentamientos.
              tr
                td Barras colectoras.
                td Resistencia mecánica y térmica suficiente.
                td Conducir altas corrientes sin deformación.



    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Materiales, encerramientos y grados de protección


    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-8.mb-4.mb-lg-0
        p.mb-3  Uno de los aspectos que más determina la seguridad del tablero es el material con el que se fabrica su gabinete. El RETIE exige que los tableros soporten condiciones ambientales del lugar donde serán instalados, lo que implica que su diseño debe contemplar riesgos como humedad, polvo, choques mecánicos o atmósferas corrosivas. Por este motivo, la selección del gabinete depende tanto del entorno como del tipo de instalación.
        .tarjeta.bg-color-19.p-3.mb-3.br-15
          p.mb-0 Los tableros pueden construirse en lámina de acero rolado en frío, acero inoxidable, aluminio o polímeros con características aislantes. Cuando se emplean láminas metálicas, estas deben estar tratadas con pintura electrostática resistente a la corrosión y deben cumplir un nivel de hermeticidad acorde con el ambiente en el que se ubiquen. En zonas con presencia de polvo o salinidad, por ejemplo, un gabinete con un grado de protección IP54 o superior resulta necesario para evitar fallas prematuras.
        p.mb-0 El sistema de clasificación IP (Ingress Protection) permite identificar el nivel de protección contra el ingreso de sólidos y líquidos. En general:


      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema2/img04.png", data-aos="zoom-in")


    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img05.png", alt="alt")
          .crd_hover_txt--body(style="padding: 1.2rem;")
            h5.mb-3 Gabinetes para ambientes interiores (IP20 – IP30)
            p.mb-0 Para ambientes interiores con bajas exigencias ambientales, un gabinete IP20 – IP30 suele ser suficiente.
            
      .col-xl-4.col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img06.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3 Gabinetes para exteriores e industria (IP55 – IP65)
            p.mb-0 En ambientes exteriores o industriales, se requieren gabinetes IP55 – IP65, que garanticen protección contra polvo y chorros de agua .
            
      .col-xl-4.col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img07.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3 Gabinetes para entornos críticos (Certificación NEMA)
            p.mb-0 Para aplicaciones críticas o zonas con riesgo químico, pueden requerirse gabinetes con certificación NEMA, especialmente los tipos 3R, 4 o 4X.
            
    .row.justify-content-center.align-items-center.mb-0
      .col-md-12.col-lg-12
        .tarjeta.bg-color-18.p-3.mb-3.br-15
          .row.align-items-center.justify-content-center
            .col-10
              p.mb-0.text-center En la práctica, seleccionar un gabinete inapropiado puede provocar corrosión, daños en aislantes, fallos en interruptores o incluso incendios, resaltando la importancia de este criterio normativo.


    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Barras colectoras: características, capacidades y exigencias normativas

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        img(src="@/assets/curso/tema2/img08.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2
          .col-lg-10(data-aos="fade-up")
            p.banner-text Las barras colectoras constituyen el corazón interno de un tablero, dado que distribuyen la energía hacia los circuitos derivados. Por esta razón, deben estar diseñadas para soportar altas corrientes, picos de arranque, esfuerzos térmicos, efectos electrodinámicos y eventuales fallas de cortocircuito. <br><br>         Las barras pueden fabricarse en cobre electrolítico o en aluminio, según la capacidad requerida. La normativa exige que las barras:


    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-9.mb-4.mb-lg-0
        .tarjeta.bg-color-4.p-4.mb-0.br-15
          .col-10.mx-auto
            ul.lista-ul.mb-0
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Estén claramente identificadas por fase, neutro y tierra.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Tengan recubrimientos o aislaciones que prevengan contactos accidentales.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Soporten corrientes nominales y de cortocircuito según especificaciones del fabricante.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Estén fijadas de manera que eviten vibraciones y deformaciones.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Dispongan de fundas termoencogibles o aislantes en sus uniones para prevenir arcos eléctricos.

      .col-md-8.col-lg-3
        figure
          img(src="@/assets/curso/tema2/img09.png", data-aos="zoom-in")

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .bg-color-1.p-4.bg-tarjeta
          .row.align-items-center.justify-content-center
            .col-10
              p.mb-0 La correcta instalación de barras también requiere que el neutro permanezca aislado de la carcasa del gabinete, excepto en el punto autorizado por el sistema de puesta a tierra. Este detalle, que puede parecer menor, es causa común de no conformidades y fallas en inspecciones RETIE.
            
    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Canalizaciones, cables y conexiones internas


    p.mb-4 Un tablero mal organizado, con conductores cruzados o sin canaletas definidas, no solo dificulta las labores de mantenimiento sino que incrementa el riesgo de sobrecalentamiento y fallas mecánicas. Por ello, la normativa exige que los conductores se organicen mediante canaletas de PVC o bandejas internas diseñadas para soportar las condiciones térmicas del sistema.

    .row.mb-5.p-0.p-lg-0
      .col-xl-6.col-lg-6.col-md-6.col-12.mb-4.mb-lg-0
        .tarjeta.bg-color-4.box-shadow.p-0.h-100.br-15
          figure.mb-2
            img(src="@/assets/curso/tema2/img10.png", alt="Corriente continua").mx-auto
          .p-4.mb-0.bg-color-4
            h4.mb-3 Los conductores que ingresan al tablero deben cumplir con la NTC 2050 en cuanto a:
            ul.lista-ul.mb-0
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Calibre mínimo.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Tipo de aislamiento.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Temperatura máxima de operación.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Resistencia mecánica.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Codificación por colores (fases, neutro y tierra).


      .col-xl-6.col-lg-6.col-md-6.col-12.mb-4.mb-lg-0
        .tarjeta.bg-color-4.box-shadow.p-0.h-100.br-15
          figure.mb-2
            img(src="@/assets/curso/tema2/img11.png", alt="Corriente continua").mx-auto
          .p-4.mb-0.bg-color-4
            h4.mb-3 Las conexiones internas deben evitar puntos calientes. Esto exige:
            ul.lista-ul.mb-0
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Terminales adecuadas.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Ajustes mecánicos firmes.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Ausencia de empalmes improvisados.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | Adecuación al tipo de borne del interruptor o barra.


    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .bg-color-1.p-4.bg-tarjeta
          .row.align-items-center.justify-content-center
            .col-10
              p.mb-0 Una conexión floja puede provocar microarcos y deterioro progresivo, hasta llegar a un incendio eléctrico. Por ello, los puntos de conexión deben revisarse periódicamente y registrarse con torque específico según el fabricante.
            
    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Condiciones de accesibilidad, espacio y operación segura
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .tarjeta.bg-color-4.p-3.mb-3.br-15
          .col-10.mx-auto
            p.mb-0 Un tablero no solo debe ser seguro internamente, también debe estar instalado en condiciones que permitan su operación y mantenimiento sin poner en riesgo al personal. La NTC 2050, en su artículo 110-26, establece requisitos mínimos de espacio:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 1 metro frente al tablero.


      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center Áreas libres de obstáculos.


      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center Iluminación mínima para operación.


      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center Suelos nivelados y antideslizantes.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img12.png", alt="Corriente continua").mx-auto
      .col-md-12.col-lg-8
        p.mb-3 El RETIE complementa esta exigencia indicando que los tableros deben ubicarse en zonas secas, accesibles y protegidas contra riesgos mecánicos o atmosféricos.

        p.mb-0 Para entenderlo mejor, imaginemos un tablero ubicado en un cuarto de bombas. Si este se instala demasiado cerca de tuberías expuestas o sin espacio frontal, se incrementa el riesgo de electrocución, caídas o accidentes durante una intervención. Estas condiciones no solo representan un peligro, sino que también impiden obtener la certificación de conformidad requerida para su puesta en servicio

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Ejemplo contextualizado
   
    .row.justify-content-center.align-items-center.mb-0
      .col-md-12.col-lg-5.mb-4.mb-lg-0
          p.mb-3 Un pequeño supermercado ubica su tablero principal en un cuarto de almacenamiento donde se apilan cajas y productos alrededor del gabinete. Aunque el tablero opera aparentemente bien, la normativa considera esta instalación como insegura, pues no permite un acceso libre al tablero y representa un riesgo de incendio al encontrarse cercano a materiales combustibles. La inspección RETIE, en este caso, determinaría una no conformidad mayor y exigiría reubicar el tablero o despejar el área con barreras físicas.
          p.mb-0 Antes de avanzar a la siguiente unidad, lo invitamos a escuchar el siguiente podcast, donde se contextualiza de manera clara y práctica la importancia de la normatividad en el diseño y la seguridad de los tableros de distribución.

      .col-md-12.col-lg-7
        .row.bg-color-4.align-items-center.justify-content-center.br-15
          .col-md-6.col-lg-4.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1
            figure
              img(src="@/assets/curso/tema2/img13.svg", data-aos="zoom-in").mx-auto
          .col-lg-8.order-1.order-md-1.order-lg-2.p-4.p-lg-5  
            h4.mb-3 ¿Sabías qué?
            p.mb-3 Lo invitamos a escuchar el siguiente podcast:
            TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
              texto="“Charlas que venden” Episodio: Definir algunos principios básicos"
              tiempo
              :audio="require('@/assets/curso/audio/1.mp3')"
            )

</template>

<script>
export default {
  name: 'Tema2',
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
