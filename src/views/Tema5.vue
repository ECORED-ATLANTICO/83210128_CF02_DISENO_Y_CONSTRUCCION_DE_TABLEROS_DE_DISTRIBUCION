<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Casos prácticos de aplicación normativa

    .container.justify-content-center.mb-3
      .col-md-12.col-lg-12
        .tarjeta.row.justify-content-center.align-items-center.bg-color-4
          .col-lg-5.mb-3.mb-lg-0.ps-0
            figure
              img(src="@/assets/curso/tema5/img01.png", data-aos="zoom-in")
          .col-lg-7.p-3
            p.mb-3 Tras estudiar la normativa, los requisitos técnicos, el diseño esquemático y la selectividad de protecciones, esta unidad presenta casos prácticos de tableros eléctricos que deben analizarse a la luz del RETIE, la NTC 2050 y los principios de diseño técnico. Aunque algunos pueden parecer correctos a simple vista, un análisis detallado permite identificar fallas relevantes.

            p.mb-0 El objetivo es desarrollar una visión técnica y crítica que permita detectar errores, diagnosticar problemas y plantear soluciones seguras y conformes con la normatividad, contribuyendo así a instalaciones eléctricas más confiables y seguras.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Tablero residencial: análisis normativo completo

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .tarjeta.bg-color-1.p-3.mb-3.br-15
          p.mb-0 En una vivienda de estrato medio, el propietario decide ampliar su cocina e instalar nuevos electrodomésticos. Para ello solicita la instalación de un tablero adicional. A simple vista, el tablero parece estar completo: tiene interruptores nuevos, un gabinete metálico y espacio suficiente. Sin embargo, al realizar una inspección más detallada, se evidencian varios problemas.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Tablero de uso residencial con no conformidades
        figure.mb-2
          img.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema5/img04.png", alt="La figura 2  muestra un tablero residencial empotrado con la puesta abierta. Sobre la fotografía se señalan tres no conformidades: ausencia de identificación de circuitos; barra de neutro y barra de tierra unidas; falta de protección diferencial para zonas húmedas.")
          img.d-block.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema5/img05.png", alt="La figura 2  muestra un tablero residencial empotrado con la puesta abierta. Sobre la fotografía se señalan tres no conformidades: ausencia de identificación de circuitos; barra de neutro y barra de tierra unidas; falta de protección diferencial para zonas húmedas.")
        figcaption <strong>Nota.</strong> SENA, (2026).
  

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Hallazgos

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-8.mb-4.mb-lg-0  
        .tarjeta.bg-color-1.p-3.mb-0.br-15
          ul.lista-ul          
            li
              i.fas.fa-circle-right.bg-color-17
              | Falta de rotulado de circuitos.
            li
              i.fas.fa-circle-right.bg-color-17
              | Neutro y tierra unidos en un tablero derivado (no permitido).
            li
              i.fas.fa-circle-right.bg-color-17
              | Protección diferencial ausente en zonas húmedas.
            li
              i.fas.fa-circle-right.bg-color-17
              | Canalización interna con cables mezclados sin guía.
      .col-md-8.col-lg-4
        img(src="@/assets/curso/tema5/img06.png", alt="Imagen decorativa")

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Conclusión del caso

    p.mb-4 El tablero debe ser intervenido antes de su puesta en servicio. La corrección incluye:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mb-0 Separar las barras de neutro y tierra.

      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mb-0 Instalar protecciones diferenciales donde corresponda.

      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mb-0 Ajustar protecciones según el calibre de los conductores.

      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mb-0 Rotular todos los circuitos.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        .tarjeta.bg-color-4.p-3.mb-3.br-15
          p.mb-0.text-center Este caso enfatiza la importancia del análisis sistemático y revela cómo una instalación aparentemente “funcional” puede resultar insegura o ilegal.

    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tablero industrial: caso aplicado

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        img(src="@/assets/curso/tema5/img07.png", alt="Imagen decorativa")
      .col-md-12.col-lg-8
        p.mb-3 Los tableros industriales presentan exigencias superiores debido a que manejan mayores corrientes, más circuitos, diferentes tipos de carga y condiciones ambientales más estrictas. Además, deben cumplir con requisitos específicos de selectividad, cortocircuito, protecciones avanzadas y coordinación entre dispositivos.
        .tarjeta.bg-color-18.p-3.mb-3.br-15
          p.mb-0 Consideremos el siguiente caso de estudio. Una planta alimentaria instala un tablero trifásico de 400 A para alimentar bombas, motores, equipos de refrigeración, luminarias y tomas industriales. El tablero está ubicado en un cuarto eléctrico dedicado, con ventilación mecánica y acceso controlado.
        p.mb-0 Durante una inspección interna, se encuentran se evidencian varios puntos a mejorar:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Tablero de uso industrial con no conformidades
        figure.mb-2
          img.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema5/img08.svg", alt="La figura 3 muestra una sala eléctrica con tablero switchgear trifásico de varias celdas. Sobre la imagen se indican cinco observaciones: falta de coordinación de protecciones; kA de interrupción insuficiente; diagrama unifilar desactualizado; carencia de barreras internas; y grado de protección del gabinete. En el piso se ve una franja de seguridad que delimita 1 metro de espacio de trabajo.")
          img.d-block.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema5/img09.svg", alt="La figura 3 muestra una sala eléctrica con tablero switchgear trifásico de varias celdas. Sobre la imagen se indican cinco observaciones: falta de coordinación de protecciones; kA de interrupción insuficiente; diagrama unifilar desactualizado; carencia de barreras internas; y grado de protección del gabinete. En el piso se ve una franja de seguridad que delimita 1 metro de espacio de trabajo.")
        figcaption <strong>Nota.</strong> SENA, (2026).
  

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Hallazgos


    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img10.png", data-aos="zoom-in")
      .col-md-12.col-lg-8
        SlyderF(columnas="col-12 col-md-6")
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 01
              p.mb-0 Selectividad deficiente: se sugiere ajustar curvas C / D.
          
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 02
              p.mb-0 Capacidad interruptiva insuficiente frente al kA disponible.
          
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 03
              p.mb-0 Ausencia de barreras separadoras entre barras y canaletas.
          
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 04
              p.mb-0 Falta de cierre adecuado para preservar el grado de protección.
          
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 05
              p.mb-0 Señalización de riesgo eléctrico en niveles altos de tensión.
          
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 06
              p.mb-0 Área de trabajo demarcada con 1 metro de espacio frontal, como exige la NTC 2050.

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Conclusión del caso

    p.mb-4 En síntesis, el tablero industrial analizado requiere una intervención integral que permita restablecer su seguridad y alinearlo con los criterios establecidos por el RETIE y la NTC 2050.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-8.mb-5.mb-lg-0
        SlyderF(columnas="col-12 col-md-6")
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 01
              p.mb-0 Ajustar las curvas de disparo para recuperar la selectividad. 
          
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 02
              p.mb-0 Reemplazar las protecciones con capacidad interruptiva insuficiente.
          
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 03
              p.mb-0 Instalar barreras internas y garantizar el cierre adecuado del gabinete son acciones prioritarias. 
          
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 04
              p.mb-0 Reforzar la señalización de riesgo eléctrico.
          
          .tarjeta.bg-color-white.p-2.h-100.box-shadow
            //- .col-12.mb-0
            .p-2.mb-0
              h2.mb-2.mb-lg-1(style="color: #CCDFF8") 05
              p.mb-0 Mantener el área de trabajo despejada asegura una operación segura y una futura inspección sin contratiempos.
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema5/img11.png", data-aos="zoom-in")


    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        .tarjeta.bg-color-4.p-3.mb-3.br-15
          p.mb-0.text-center Con estas correcciones, el tablero podrá operar de forma confiable, estable y conforme a la normatividad vigente.


    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Errores comunes y cómo evitarlos

    p.mb-4 Los errores en tableros de distribución suelen repetirse en diferentes contextos. Reconocerlos ayuda al aprendiz a evitarlos en sus propias instalaciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 5.
          span Errores comunes en tableros, riesgos asociados y acciones correctivas
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. Adaptado de RETIE (2024), NTC 2050 (2023), IEC 61439 (2024).
            thead
              tr
                th Error común en el tablero
                th Descripción técnica del problema
                th Riesgos asociados
                th Cómo evitarlo (acción correctiva y preventiva)
            tbody
              tr
                td(style="text-align: left") Neutro y tierra conectados en tableros derivados.
                td(style="text-align: left") Muchos tableros residenciales y comerciales presentan la barra de neutro unida físicamente a la barra de tierra, lo cual solo es permitido en el tablero principal de acometida.
                td(style="text-align: left") Corrientes de retorno por el conductor de protección, riesgo de choque eléctrico, disparos intempestivos y fallos en protecciones diferenciales.
                td(style="text-align: left") Verificar el tipo de tablero; separar físicamente las barras; seguir el esquema TT o TN según el sistema alimentador; cumplir RETIE y NTC 2050 Art. 250.
              tr
                td(style="text-align: left") Protecciones mal dimensionadas respecto al calibre del conductor.
                td(style="text-align: left") Se instalan interruptores de mayor amperaje que el conductor que protegen (ej. breaker 30 A con conductor AWG 14).
                td(style="text-align: left") Sobrecalentamiento, riesgo de incendio, deterioro del aislamiento y fallos progresivos.
                td(style="text-align: left") Seleccionar la protección según la capacidad ampacimétrica del conductor; consultar tablas NTC 2050 (Art. 310); verificar cargas reales.
              tr
                td(style="text-align: left") Ausencia de protección diferencial en zonas húmedas.
                td(style="text-align: left") Falta de RCD en cocinas, baños, exteriores y áreas con riesgo de contacto indirecto.
                td(style="text-align: left") Riesgo elevado de choque eléctrico por fallas a tierra.
                td(style="text-align: left") Instalar protección diferencial ≤ 30 mA en todos los circuitos exigidos; revisar artículos de requisitos esenciales del RETIE.
              tr
                td(style="text-align: left") Selectividad deficiente entre interruptor general y derivados.
                td(style="text-align: left") El interruptor principal dispara antes que los derivados, aun ante fallas menores.
                td(style="text-align: left") Paro total de la instalación, daños económicos y riesgos operativos.
                td(style="text-align: left") Ajustar curvas de disparo (B / C / D), revisar niveles de cortocircuito, y aplicar selectividad amperimétrica, energética o cronológica según NTC 2050 y criterios del fabricante.
              tr
                td(style="text-align: left") Conductores sin identificación cromática.
                td(style="text-align: left") Colores intercambiados o neutro/tierra sin el color normativo.
                td(style="text-align: left") Confusión en mantenimiento, mala operación, fallas humanas y riesgos eléctricos.
                td(style="text-align: left") Aplicar codificación RETIE / NTC: verde-amarillo (PE), blanco/azul claro (N), colores de fase según disponibilidad.
              tr
                td(style="text-align: left") Ausencia de rotulado en circuitos derivados.
                td(style="text-align: left") Interruptores sin etiqueta o rótulos genéricos que no indican la carga real.
                td(style="text-align: left") Errores en operación y mantenimiento; riesgo al actuar sobre circuitos equivocados.
                td(style="text-align: left") Usar rótulos permanentes, legibles y resistentes; relacionarlos con el diagrama unifilar.
              tr
                td(style="text-align: left") Conexiones flojas o sin torque adecuado.
                td(style="text-align: left") Bornes mal apretados o conexiones improvisadas dentro del tablero.
                td(style="text-align: left") Puntos calientes, microarcos, daño progresivo de conductores y riesgo de incendio.
                td(style="text-align: left") Verificar torque según fabricante; implementar mantenimiento preventivo; evitar empalmes dentro del tablero.
              tr
                td(style="text-align: left") Barreras internas o tapas protectoras ausentes.
                td(style="text-align: left") Partes energizadas quedan expuestas dentro del gabinete.
                td(style="text-align: left") Riesgo directo de contacto eléctrico; incumplimiento RETIE – Requisito esencial de protección.
                td(style="text-align: left") Instalar barreras dieléctricas certificadas; seguir IEC 61439; revisar que no existan espacios abiertos.
              tr
                td(style="text-align: left") Diagrama unifilar inexistente o desactualizado.
                td(style="text-align: left") Tableros que no tienen un esquema actualizado de cómo están conectados sus circuitos.
                td(style="text-align: left") Dificultad para intervenir, imposibilidad de trazabilidad y rechazo en inspección.
                td(style="text-align: left") Mantener un unifilar actualizado adherido al tablero; modificarlo cada vez que se altere el sistema.
              tr
                td(style="text-align: left") Espacios de trabajo insuficientes.
                td(style="text-align: left") Menos de 1 metro frontal o tableros ubicados detrás de obstáculos.
                td(style="text-align: left") Trabajo inseguro, incumplimiento de NTC 2050 (Art. 110-26) y fallas en inspección RETIE.
                td(style="text-align: left") Mantener mínimo 1 m libre; señalizar áreas; verificar accesibilidad permanente.

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Checklist técnico de cumplimiento RETIE–NTC

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        img(src="@/assets/curso/tema5/img12.png", alt="Imagen decorativa")
    
        .row.justify-content-center.align-items-center.z-2
          .col-lg-10(data-aos="fade-up")
            p.banner-text El checklist técnico permite evaluar de forma sistemática el cumplimiento de un tablero antes de la inspección oficial. Aunque cada instalación tiene particularidades, un buen checklist general debe incluir los siguientes aspectos:

    .row.justify-content-center.align-items-center.mb-0.mb-lg-5
      .col-md-8.col-lg-6.mb-4.mb-lg-0
        img(src="@/assets/curso/tema5/img13.png", alt="Imagen decorativa")
      .col-md-12.col-lg-6
        ul.lista-ul--color.lista-ul--separador
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿El tablero está ubicado en un lugar accesible y seguro?
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿Cuenta con la distancia mínima frontal exigida por la NTC 2050?
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿El gabinete tiene el grado de protección adecuado (IP o NEMA)?
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿Las barras están claramente identificadas y aisladas?
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿Las protecciones corresponden al calibre de los conductores?
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿Existe selectividad entre interruptor principal y derivados?
          li
            i.fas.fa-circle-check.bg-color-20
            | ¿Hay protección diferencial donde es obligatoria?        
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-6.mb-4.mb-lg-0
        ul.lista-ul--color.lista-ul--separador
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿Las conexiones están firmes y verificadas con torque adecuado?
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿El diagrama unifilar está presente, legible y actualizado?
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿Todos los circuitos están rotulados correctamente?
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿La barra de neutro está aislada en tableros derivados?
          li.mb-1 
            i.fas.fa-circle-check.bg-color-20
            | ¿El conductor de protección (tierra) está instalado correctamente?
      .col-md-8.col-lg-6
        img(src="@/assets/curso/tema5/img14.png", alt="Imagen decorativa") 
    
    .row.justify-content-center.align-items-center.mb-0
      .col-md-12.col-lg-12
        .tarjeta.bg-color-4.p-3.mb-3.br-15
          .row.align-items-center.justify-content-center
            .col-10
              p.mb-0.text-center Este instrumento opera como una guía práctica que permite al aprendiz, y al instalador, evaluar el tablero desde una mirada integral, segura y profesional.

</template>

<script>
export default {
  name: 'Tema5',
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
