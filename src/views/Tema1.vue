<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de electricidad
      
      
    .container.justify-content-center.mb-3
      .col-md-12.col-lg-12
        .tarjeta.row.justify-content-center.align-items-center.bg-color-4
          .col-lg-5.mb-3.mb-lg-0.ps-0
            figure
              img(src="@/assets/curso/tema1/img-1.png", data-aos="zoom-in")
          .col-lg-7.p-3
            p.mb-0 Colombia cuenta con un sistema normativo sólido que regula todas las etapas del sector eléctrico, desde la generación hasta el uso final de la energía. Dentro de este marco, el RETIE y la NTC 2050 son referencias fundamentales para garantizar que las instalaciones eléctricas, ya sean domésticas, comerciales o industriales, se construyan y operen de forma segura y confiable. Ambas normas se complementan entre sí y establecen criterios técnicos armonizados que orientan el diseño, la construcción y la verificación de los sistemas eléctricos.
  
  
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Estructura regulatoria del sector eléctrico

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .tarjeta.bg-color-4.p-3.mb-3.br-15
          p.mb-0.text-center En Colombia, la regulación de las instalaciones eléctricas se fundamenta en dos pilares principales: la Norma RETIE y Norma NTC 2050. La combinación de ambas forma el Marco obligatorio para el diseño y montaje de tableros de distribución en nuestro país. 

    .bg-full-width.bg-fondo-2
      .row.justify-content-center.mb-5
        .col-xl-6.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema1/img-2.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 RETIE:
              p.mb-3 Reglamento obligatorio para garantizar seguridad eléctrica, protección a la vida humana y preservación ambiental.
              p.mb-0 Su alcance va enfocado a todas las instalaciones nuevas o modificadas, públicas y privadas.
      
        .col-xl-6.col-lg-6.col-md-12.col-12.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema1/img-3.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 NTC 2050: Código Eléctrico Colombiano basado en NFPA 70.
              p.mb-0 Su alcance va enfocado a todos los requisitos técnicos mínimos para la construcción segura de instalaciones eléctricas.
              
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.mb-0
          .tarjeta.color-primario.p-2.banner_tarjeta
            .row.justify-content-around.align-items-center.p-3
              .col-auto
                img(src="@/assets/curso/tema1/img-4.svg").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0 El RETIE vigente (Resolución 40117 de 2024 y sus ajustes de 2025) define criterios esenciales que deben aplicarse en sistemas de generación, transformación, distribución y utilización de energía.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.minenergia.gov.co/es/misional/energia-electrica-2/reglamentos-tecnicos/reglamento-t%C3%A9cnico-de-instalaciones-el%C3%A9ctricas-retie/" target="_blank")
                      span Enlace web
                      i.fas.fa-link
       
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img-5.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-3 En términos prácticos, podríamos decir que el RETIE indica qué debe cumplirse y el NTC 2050 explica cómo debe lograrse. Por ejemplo, mientras el RETIE exige que los tableros cuenten con distancias mínimas de acceso, la NTC 2050 indica exactamente cuáles son esas distancias y en qué condiciones aplican.
        p.mb-0 Esta complementariedad facilita que el instalador adopte prácticas seguras en cualquier proyecto, desde tableros residenciales ubicados en un armario metálico hasta tableros industriales con grandes barras colectoras y dispositivos de maniobra de media tensión.


    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Finalidad y alcance del RETIE

 
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        img(src="@/assets/curso/tema1/img-6.png", alt="Imagen decorativa")
    
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text.bg-color-18 El RETIE es, ante todo, un reglamento orientado a la protección integral. Su finalidad es reducir al mínimo los riesgos asociados con la electricidad, asegurando que las instalaciones eléctricas no generen peligros para las personas, los animales, el medio ambiente ni los bienes. Esto significa que cualquier tablero - sin importar su tamaño, función o ubicación - debe cumplir un conjunto estricto de requisitos que permiten prevenir descargas eléctricas, incendios, quemaduras, fallas de aislamiento, cortocircuitos no controlados y otros riesgos asociados.


    .bg-full-width.bg-fondo-2
      .row.justify-content-center.align-items-center.mb-5
        .col-md-12.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-4
            h5.text-bold Figura 1.
            span Protecciones eléctricas y su función en el circuito
          figure.mb-2
            img.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema1/img-7.svg", alt="La figura 1 ilustra los elementos esenciales de seguridad en el RETIE. - Protección de vida humana. - Protección de instalaciones. - Protección ambiental. - Conformidad técnica.  Nota. Adaptado de RETIE. Resolución 40117 de 2024.")
            img.d-block.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema1/img-8.svg", alt="La figura 1 ilustra los elementos esenciales de seguridad en el RETIE. - Protección de vida humana. - Protección de instalaciones. - Protección ambiental. - Conformidad técnica.  Nota. Adaptado de RETIE. Resolución 40117 de 2024.")
          figcaption <strong>Nota.</strong> Adaptado de RETIE. Resolución 40117 de 2024.


    //- .bg-full-width.bg-fondo-1.mb-2.p-4.p-lg-5
    .bg-full-width.bg-color-5.mb-5.p-4.p-lg-5
      .row.justify-content-center.align-items-center.mb-0.p-4.p-lg-0
        h4.mb-4 El reglamento RETIE aplica a:
        .col-md-8.col-lg-4.mb-5.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/img-9.png", data-aos="zoom-in")
        .col-md-12.col-lg-8
          .row.justify-content-center
            .col-xl-3.col-lg-3.col-md-6.col-12.mb-4.mb-lg-0
              .tarjeta.bg-color-white.box-shadow.p-2.h-100
                figure.p-2.mb-2
                  img(src="@/assets/curso/tema1/img-16.svg", alt="Corriente continua", style="max-width: 65px; height: 57px").mx-auto
                .p-2.mb-0
                  p.mb-0.text-center Instalaciones nuevas y ampliaciones.

            .col-xl-3.col-lg-3.col-md-6.col-12.mb-4.mb-lg-0
              .tarjeta.bg-color-white.box-shadow.p-2.h-100
                figure.p-2.mb-2
                  img(src="@/assets/curso/tema1/img-17.svg", alt="Corriente alterna", style="max-width: 65px; height: 57px").mx-auto
                .p-2.mb-0
                  p.mb-0.text-center Modificaciones o mantenimientos mayores.


            .col-xl-3.col-lg-3.col-md-6.col-12.mb-4.mb-lg-0
              .tarjeta.bg-color-white.box-shadow.p-2.h-100
                figure.p-2.mb-2
                  img(src="@/assets/curso/tema1/img-18.svg", alt="Corriente alterna", style="max-width: 65px; height: 57px").mx-auto
                .p-2.mb-0
                  p.mb-0.text-center Construcción de tableros y equipos que conduzcan energía eléctrica.


            .col-xl-3.col-lg-3.col-md-6.col-12.mb-4.mb-lg-0
              .tarjeta.bg-color-white.box-shadow.p-2.h-100
                figure.p-2.mb-2
                  img(src="@/assets/curso/tema1/img-19.svg", alt="Corriente alterna", style="max-width: 65px; height: 57px").mx-auto
                .p-2.mb-0
                  p.mb-0.text-center Fabricantes, importadores, diseñadores e instaladores.


    .bg-full-width.bg-color-5.mb-2.p-4.p-lg-5
      .row.justify-content-center.align-items-center.mb-0.p-4.p-lg-0
        h4.mb-4 El RETIE exige que los tableros cumplan:
        .col-md-12.col-lg-12
          .row.justify-content-center
            .col-xl-2.col-lg-2.col-md-6.col-12.mb-4.mb-lg-0
              .tarjeta.bg-color-white.box-shadow.p-2.h-100
                figure.p-2.mb-2
                  img(src="@/assets/curso/tema1/img-20.svg", alt="Corriente continua", style="max-width: 65px; height: 57px").mx-auto
                .p-2.mb-0
                  p.mb-0.text-center Identificación clara de circuitos y protecciones.


            .col-xl-2.col-lg-2.col-md-6.col-12.mb-4.mb-lg-0
              .tarjeta.bg-color-white.box-shadow.p-2.h-100
                figure.p-2.mb-2
                  img(src="@/assets/curso/tema1/img-21.svg", alt="Corriente alterna", style="max-width: 65px; height: 57px").mx-auto
                .p-2.mb-0
                  p.mb-0.text-center Condiciones de accesibilidad y seguridad.


            .col-xl-2.col-lg-2.col-md-6.col-12.mb-4.mb-lg-0
              .tarjeta.bg-color-white.box-shadow.p-2.h-100
                figure.p-2.mb-2
                  img(src="@/assets/curso/tema1/img-22.svg", alt="Corriente alterna", style="max-width: 65px; height: 57px").mx-auto
                .p-2.mb-0
                  p.mb-0.text-center Selección de materiales apropiados.


            .col-xl-2.col-lg-2.col-md-6.col-12.mb-4.mb-lg-0
              .tarjeta.bg-color-white.box-shadow.p-2.h-100
                figure.p-2.mb-2
                  img(src="@/assets/curso/tema1/img-23.svg", alt="Corriente alterna", style="max-width: 65px; height: 57px").mx-auto
                .p-2.mb-0
                  p.mb-0.text-center Puesta a tierra adecuada.

            .col-xl-2.col-lg-2.col-md-6.col-12.mb-4.mb-lg-0
              .tarjeta.bg-color-white.box-shadow.p-2.h-100
                figure.p-2.mb-2
                  img(src="@/assets/curso/tema1/img-24.svg", alt="Corriente alterna", style="max-width: 65px; height: 57px").mx-auto
                .p-2.mb-0
                  p.mb-0.text-center Distancias mínimas de operación y mantenimiento.

            .col-xl-2.col-lg-2.col-md-6.col-12.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/img-10.svg", alt="Corriente alterna").mx-auto
              

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 NTC 2050: Código Eléctrico Colombiano

    p.mb-3 Si el RETIE es la norma que establece los requisitos esenciales, la NTC 2050 es el documento que especifica los métodos técnicos para cumplirlos. Este código, basado en la NFPA 70, ha sido adoptado en Colombia como referencia para garantizar que los diseños eléctricos se ajusten a prácticas constructivas correctas, estandarizadas y seguras.

    p.mb-4 La NTC 2050 indica, entre otros aspectos:


    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-9.mb-4.mb-lg-0
        
        .bg-color-4.p-4.mb-3.br-15
          .row.align-items-center
            .col-auto.col-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/img-11.svg", data-aos="zoom-in")
            .col
              ul.lista-ul.mb-0
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Los calibres de conductores apropiados para cada circuito.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Las características de gabinetes y espacios de trabajo.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | El método adecuado para instalar barras, canalizaciones y protecciones.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Las reglas para seleccionar interruptores, fusibles y dispositivos diferenciales.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | La manera correcta de realizar la puesta a tierra de tableros y carcasas.

      .col-md-8.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img-12.png", data-aos="zoom-in")


    .row.justify-content-center.align-items-center.mb-0
      .col-md-12.col-lg-12
        .bg-color-1.p-4.bg-tarjeta
          .row.align-items-center
            .col
              p.mb-0 Por ejemplo, en los tableros de distribución se exige que exista un espacio de trabajo libre frente al gabinete, generalmente de 1 metro, que permita el acceso seguro del personal. Si ese espacio no existe, el tablero no puede ponerse en servicio y la instalación no cumple normatividad.
            .col-auto.d-none.d-lg-flex
              figure
                //- img(src="@/assets/curso/tema1/img-13.svg", data-aos="zoom-in")

    separador

    .bg-full-width.bg-fondo-2
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4 Relación RETIE, NTC 2050 y estándares internacionales

      .row.justify-content-center.align-items-center.mb-5
        .col-md-12.col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
          p.mb-3 Un tablero no es simplemente un conjunto de interruptores y barras; es un sistema integrado que debe cumplir simultáneamente con normas nacionales e internacionales. Por eso, en la construcción de tableros se aplican también los estándares internacionales UL (Underwriters Laboratories), IEC (International Electrotechnical Commission) y NEMA (National Electrical Manufacturers Association), que regulan aspectos como:
          p.mb-0 En el contexto colombiano, estos estándares se articulan de la siguiente manera:

        .col-md-8.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema1/img-13.png", data-aos="zoom-in")


      .row.justify-content-center.align-items-center.mb-5
        .col-md-12.col-lg-12.mb-4.mb-lg-0
          .bg-color-18.p-4.mb-3
            .row.align-items-center
              .col-md-8.col-lg-4.mb-5.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/img-14.png", data-aos="zoom-in")
              .col-md-12.col-lg-8
                SlyderF(columnas="col-12 col-md-6")
                  .tarjeta.bg-color-white.p-4.h-100.box-shadow
                    figure.p-2.mb-2
                      img(src="@/assets/curso/tema1/img-25.svg", alt="Corriente alterna", style="max-width: 65px; height: 57px").mx-auto
                    .p-2.mb-0
                      p.mb-0.text-center RETIE exige la seguridad general.
          
                  .tarjeta.bg-color-white.p-4.h-100.box-shadow
                    figure.p-2.mb-2
                      img(src="@/assets/curso/tema1/img-26.svg", alt="Corriente alterna", style="max-width: 65px; height: 57px").mx-auto
                    .p-2.mb-0
                      p.mb-0.text-center NTC 2050 define requisitos técnicos mínimos.
                  
                  .tarjeta.bg-color-white.p-4.h-100.box-shadow
                    figure.p-2.mb-2
                      img(src="@/assets/curso/tema1/img-27.svg", alt="Corriente alterna", style="max-width: 65px; height: 57px").mx-auto
                    .p-2.mb-0
                      p.mb-0.text-center Normas UL / IEC / NEMA aseguran que cada componente cumpla especificaciones internacionales.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg
        p.mb-3 Es decir, un tablero puede ser nacional o importado, pero siempre debe cumplir como mínimo las normas colombianas y demostrar certificación de conformidad con normas internacionales determinadas por su fabricante.
        p.mb-0 Para visualizar esta relación, resulta útil la siguiente tabla conceptual:
      .col-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img-28.svg", alt="Corriente alterna").mx-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 1.
          span Relación entre las normas RETIE, NTC 2050 y normas internacionales
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. Adaptado de Resolución 40117 de 2024 del Ministerio de Minas y Energía.
            thead
              tr
                th Norma
                th Tipo / Alcance
                th Relación con Colombia
                th Referencia internacional base
            tbody
              tr
                td RETIE.
                td Reglamento técnico (Ley).
                td Obligatorio. Es la ley máxima que rige la seguridad eléctrica en Colombia.
                td Adopta requisitos de seguridad de IEC, UL y NTC.
              tr
                td NTC 2050.
                td Código eléctrico (Técnica).
                td Obligatorio. Sus primeros 7 capítulos son exigidos por el RETIE para instalaciones internas.
                td Basada estrictamente en el NEC (National Electrical Code / NFPA 70) de EE. UU.
              tr
                td IEC.
                td Estándar internacional.
                td Aceptada por RETIE como alternativa para uso final (serie IEC 60364), pero no se pueden mezclar con NTC 2050.
                td Estándar global (Europa/Asia) centrado en eficiencia y seguridad funcional.
              tr
                td UL.
                td Estándar de producto.
                td RETIE exige que muchos productos (interruptores, cables) estén certificados bajo normas UL o equivalentes.
                td Estándar de seguridad de EE. UU. enfocado en pruebas de laboratorio de terceros.
              tr
                td NEMA.
                td Estándar de fabricación.
                td Utilizada para definir la robustez de motores y gabinetes en la industria colombiana.
                td Estándar industrial de EE. UU. para dimensiones y protecciones de envolventes.

    separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Responsabilidades del diseñador, instalador e inspector


    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img-15.png", alt="Corriente alterna").mx-auto
      .col-md-12.col-lg-8
        SlyderA(tipo="b").bg-color-4.p-2.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-3
            .col-lg-12.mb-4.mb-lg-0
              h4 El diseñador eléctrico
              p.mb-0 Es el responsable de elaborar los diagramas unifilares y multifilares, seleccionar los dispositivos de protección y dimensionar correctamente los conductores, barras y equipos. Su trabajo debe documentarse por escrito y cumplir estrictamente con el RETIE y la NTC 2050.

          .row.justify-content-center.align-items-center.p-3
            .col-lg-12.mb-4.mb-lg-0
              h4 El instalador eléctrico
              p.mb-0 Debe ejecutar el montaje conforme a las especificaciones técnicas elaboradas por el diseñador. Su labor incluye verificar la continuidad eléctrica, la correcta conexión de tierra, el apriete de bornes y la identificación de circuitos.
              p.mb-0 Es importante resaltar que un instalador no puede improvisar soluciones ni modificar el diseño sin autorización técnica.

          .row.justify-content-center.align-items-center.p-3
            .col-lg-12.mb-4.mb-lg-0
              h4 El inspector de conformidad
              p.mb-0 Este profesional es quien evalúa que la instalación cumpla con todas las normas aplicables. Durante la inspección del tablero, verifica:
              .row
                .col-md-6.col-lg-6
                  .lista-ul--color
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | La accesibilidad y los espacios de trabajo.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Las protecciones instaladas.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | La rotulación de circuitos.
                .col-md-6.col-lg-6
                  .lista-ul--color
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | El calibre de conductores.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | La integridad de la puesta a tierra.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | La existencia del diagrama unifilar.
              p.mb-0 Solo después de esta revisión el tablero puede ser certificado y puesto en servicio.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .bg-color-1.p-4.bg-tarjeta
          .row.align-items-center.justify-content-center
            .col-10
              h4.mb-3 Ejemplo contextualizado
              p.mb-0 Imaginemos un pequeño taller metalmecánico que está ampliando su área de trabajo e instalando un nuevo tablero de distribución. El instalador elige ubicar el gabinete detrás de una máquina de soldadura, limitando el acceso frontal a menos de 40 cm. Aunque esto no afecta el funcionamiento eléctrico del tablero, constituye una infracción normativa que pone en riesgo al operario, pues en caso de falla no habría espacio para operar o intervenir el circuito de manera segura.

    .row.justify-content-center.align-items-center.mb-0
      .col-md-12.col-lg-12
        .tarjeta.bg-color-18.p-3.mb-3.br-15
          .row.align-items-center.justify-content-center
            .col-10
              p.mb-0.text-center La solución, según NTC 2050, consiste en reubicar el tablero o redistribuir los equipos para garantizar un mínimo de 1 metro de espacio libre frente al gabinete.

</template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
