<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diseño normativo del tablero de distribución

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        img(src="@/assets/curso/tema3/img01.png", alt="Imagen decorativa")
    
        .row.justify-content-center.align-items-center.z-2
          .col-lg-10(data-aos="fade-up")
            p.banner-text El diseño de un tablero de distribución no es una tarea intuitiva ni empírica; requiere cumplir una serie de requisitos normativos que garantizan un funcionamiento seguro, estable y técnicamente confiable. En Colombia, este diseño está condicionado por el RETIE, la NTC 2050, y por estándares internacionales como IEC, UL y NEMA. Esta unidad aborda los elementos esenciales que permiten comprender cómo se estructura un tablero desde la normatividad, cómo se identifican los tipos de sistemas eléctricos, cómo deben seleccionarse las protecciones, cómo se definen los esquemas de puesta a tierra (TT, TN, IT) aplicables a tableros y, finalmente, cómo debe interpretarse un diagrama unifilar.

    separador

    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Identificación de sistemas (monofásico, bifásico y trifásico)

    .bg-full-width.bg-fondo-2
      p.mb-4 La correcta identificación del sistema eléctrico que alimenta un tablero es el punto de partida para cualquier diseño normativo. El tipo de sistema determina el número de conductores, la distribución de las cargas, la configuración de las barras y la manera en que se representará el tablero en el diagrama unifilar. Además, influye directamente en la selección de protecciones, en la capacidad de corriente y en el diseño de la puesta a tierra.

      .row.justify-content-center.align-items-center.mb-5
        .col-md-12.col-lg-12
          .row.align-items-center.justify-content-center
            .col-lg-12
              AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-21")
                div(titulo="Sistema monofásico")
                  .row.justify-content-center.align-items-center.mb-0
                    .col-md-12.col-lg-8.mb-4.mb-lg-0
                      p.mb-3  Es típico de residencias y pequeños comercios. Está compuesto por una fase y un neutro, y se acompaña de un conductor de protección (tierra). Generalmente opera a 120 V o 120 / 240 V, dependiendo del transformador de la red de distribución.
                      p.mb-0  En el tablero, este sistema se observa porque los circuitos derivados, iluminación, tomas, electrodomésticos, se conectan a una única línea activa. El diagrama unifilar refleja esta estructura con una sola barra de fase.

                    .col-md-8.col-lg-4
                      figure
                        img(src="@/assets/curso/tema3/img02.png")

                  
                div(titulo="Sistema bifásico")
                  .row.justify-content-center.align-items-center.mb-0
                    .col-md-12.col-lg-8.mb-4.mb-lg-0
                      p.mb-3  Este sistema, comúnmente denominado “bifásico”, corresponde a instalaciones que requieren dos fases de un sistema trifásico o una derivación desde un transformador con toma central. Sus tensiones habituales son 120 / 240 V o 208 / 120 V. Ofrece mayor capacidad que el monofásico y permite la alimentación de electrodomésticos de alta demanda o equipos más exigentes.
                      p.mb-0  En el diagrama unifilar, se identifican claramente dos fases (L1 y L2) y un neutro, acompañadas de sus protecciones respectivas.

                    .col-md-8.col-lg-4
                      figure
                        img(src="@/assets/curso/tema3/img03.png")

                div(titulo="Sistema trifásico")
                  .row.justify-content-center.align-items-center.mb-0
                    .col-md-12.col-lg-8.mb-4.mb-lg-0
                      p.mb-3 Es el sistema más robusto y se utiliza ampliamente en industrias, comercios, plantas de producción, ascensores, equipos HVAC, motores y maquinaria especializada. Opera con tres fases y, en la mayoría de aplicaciones, con un neutro.
                      p.mb-3 Sus tensiones típicas incluyen:
                      
                      ul.lista-ul.mb-0
                        li
                          i.fas.fa-circle-right.bg-color-17
                          | 208/120 V.
                        li
                          i.fas.fa-circle-right.bg-color-17
                          | 240 V trifásico.
                        li
                          i.fas.fa-circle-right.bg-color-17
                          | 480 V.
                        li
                          i.fas.fa-circle-right.bg-color-17
                          | 600 V (en algunas instalaciones industriales).

                      p.mb-3  El diagrama unifilar muestra tres barras activas (L1, L2, L3), un neutro y una barra de tierra. La distribución equilibrada de las cargas entre las fases es un requisito técnico y normativo.

                      p.mb-0  La identificación correcta del sistema permite dimensionar conductores, barras, protecciones y puesta a tierra conforme a las normas colombianas.

                    .col-md-8.col-lg-4
                      figure
                        img(src="@/assets/curso/tema3/img04.png")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-0
        .tarjeta.color-primario.p-2.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/tema1/img-4.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, le invitamos a consultar este enlace de video para ampliar sus conocimientos sobre los sistemas eléctricos:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=O4-zzLm1nt0" target="_blank")
                    span Enlace web
                    i.fas.fa-link


    separador

    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Criterios normativos para protecciones eléctricas

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        img(src="@/assets/curso/tema3/img05.png", alt="Imagen decorativa")
    
        .row.justify-content-center.align-items-center.z-2
          .col-lg-10(data-aos="fade-up")
            p.banner-text Las protecciones son dispositivos fundamentales para garantizar la integridad de la instalación eléctrica. Su función es intervenir cuando ocurren condiciones anormales como sobrecorrientes, cortocircuitos, fallas de aislamiento o fugas a tierra. Tanto el RETIE como la NTC 2050 establecen reglas estrictas para su selección e instalación.

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Reglas básicas de la NTC 2050 para protecciones

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img06.png", data-aos="zoom-in")
      .col-md-12.col-lg-9
        .tarjeta.bg-color-4.p-4.mb-0.br-15
          .col-12.mx-auto
            ul.lista-ul.mb-0
              li.mb-2
                i.fas.fa-circle-right.bg-color-17
                | La capacidad nominal del interruptor debe corresponder al calibre del conductor (Art. 240).
              li.mb-2
                i.fas.fa-circle-right.bg-color-17
                | Las protecciones deben coordinarse con el tipo de carga, especialmente motores.
              li.mb-2
                i.fas.fa-circle-right.bg-color-17
                | Las protecciones diferenciales son obligatorias en zonas húmedas, exteriores y en circuitos destinados a proteger personas.
              li.mb-2
                i.fas.fa-circle-right.bg-color-17
                | Los interruptores deben tener capacidad de interrupción suficiente en kiloamperios (kA) según el nivel de cortocircuito disponible en la instalación.
              li.mb-0
                i.fas.fa-circle-right.bg-color-17
                | No se permite anular o puentear protecciones de manera permanente.
              
    .bg-full-width.bg-fondo-2
      .container.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
              h3.titulo-con-imagen__texto Tipos de dispositivos y su aplicación
            
      .row.justify-content-center.align-items-center.mb-5
        .col-md-8.col-lg-4.mb-5.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/img07.png", data-aos="zoom-in")
        .col-md-12.col-lg-8
          SlyderF(columnas="col-12 col-md-6")
            .tarjeta.bg-color-white.p-2.h-100.box-shadow
              //- .col-12.mb-0
              .p-2.mb-0
                h2.mb-2.mb-lg-1(style="color: #CCDFF8") 01
                p.mb-0 Interruptores termomagnéticos: su aplicación es universal (residencial, comercial e industrial). Son el "primer frente" para evitar que los cables se quemen por exceso de consumo o fallas directas.
            .tarjeta.bg-color-white.p-2.h-100.box-shadow
              //- .col-12.mb-0
              .p-2.mb-0
                h2.mb-2.mb-lg-1(style="color: #CCDFF8") 02
                p.mb-0 Interruptores diferenciales (RCD): su aplicación es de seguridad humana. Detectan fugas de corriente mínimas (30mA) que un termomagnético ignoraría, salvando vidas ante contactos accidentales.
            .tarjeta.bg-color-white.p-2.h-100.box-shadow
              //- .col-12.mb-0
              .p-2.mb-0
                h2.mb-2.mb-lg-1(style="color: #CCDFF8") 03
                p.mb-0 Fusibles de alta capacidad (NH / Cilíndricos): se aplican en cabeceras de tableros o maquinaria pesada. Su ventaja es que pueden interrumpir corrientes de falla altísimas que destruirían a un interruptor común.
            .tarjeta.bg-color-white.p-2.h-100.box-shadow
              //- .col-12.mb-0
              .p-2.mb-0
                h2.mb-2.mb-lg-1(style="color: #CCDFF8") 04
                p.mb-0 Relés térmicos y guardamotores: aplicación exclusiva en protección de maquinaria. A diferencia de los anteriores, estos permiten el "pico de arranque" de un motor sin saltar, pero actúan si el motor se calienta por esfuerzo mecánico o falta de una fase.

      p.mb-4 La tabla a continuación, resume los puntos clave para que pueda identificar cada dispositivo y entender su función principal de un vistazo:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 3.
          span Guía para identificación visual de protecciones eléctricas
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Dispositivo
                th Aplicación principal
                th Guía de identificación visual
            tbody
              tr
                td(style="text-align: left") Interruptor termomagnético.
                td(style="text-align: left") Protege cables contra sobrecargas y cortocircuitos.
                td(style="text-align: left") Tiene una palanca (maneta) de encendido/apagado. No suele tener botones adicionales.
              tr
                td(style="text-align: left") Interruptor diferencial (RCD).
                td(style="text-align: left") Protege a las personas contra descargas eléctricas (fugas).
                td(style="text-align: left") Esencial: Siempre tiene un botón de "test" (marcado con una 'T').
              tr
                td(style="text-align: left") Fusible de alta capacidad (NH).
                td(style="text-align: left") Protección industrial para corrientes muy elevadas.
                td(style="text-align: left") Cartucho cerámico con contactos metálicos en los extremos (tipo cuchilla). No tiene palancas.
              tr
                td(style="text-align: left") Relé térmico.
                td(style="text-align: left") Protección específica para motores (sobrecalentamiento).
                td(style="text-align: left") Se acopla bajo un contactor. Tiene una perilla pequeña para ajustar el amperaje exacto.
              tr
                td(style="text-align: left") Guardamotor.
                td(style="text-align: left") Protección integral de motores (térmica + magnética).
                td(style="text-align: left") Dispositivo autónomo con botones (On/Off) o mando giratorio y ajuste de corriente.

    .row.justify-content-center.align-items-center.mb-0
      .col-md-12.col-lg-12
        .tarjeta.bg-color-4.p-3.mb-3.br-15
          .row.align-items-center.justify-content-center
            .col-10
              p.mb-0.text-center Cada protección debe ser seleccionada según la curva de disparo apropiada (B, C, D) y según la carga que pretende proteger.



    separador

    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Esquemas TT, TN y IT aplicados a tableros

    p.mb-4 Los esquemas de conexión a tierra TT, TN y IT definen la relación entre el neutro del sistema, las masas metálicas y la tierra física. Cada esquema tiene implicaciones técnicas y normativas que influyen directamente en el tablero.

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Esquema TT

            
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img08.png", data-aos="zoom-in")
      .col-md-12.col-lg-7
        .tarjeta.bg-color-4.p-4.mb-3.br-15
          p.mb-0 Sus siglas definen su arquitectura. T (Neutro del transformador a tierra) y T (Masas del usuario a una tierra independiente). En este sistema el neutro del transformador está aterrizado. Las masas metálicas del usuario también están conectadas a tierra mediante un electrodo independiente.
            
        p.mb-0 Este esquema exige el uso de protección diferencial obligatoria, dado que la impedancia de la tierra del usuario puede ser elevada

    .bg-full-width.bg-fondo-2
      .container.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-con-imagen.mb-5(data-aos="fade-right")
            .titulo-con-imagen__fondo
              img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
              h3.titulo-con-imagen__texto Esquema TN

      .row.justify-content-center.align-items-center.mb-5
        
        .bg-color-1.p-4.bg-tarjeta
          .row.align-items-center
            .col
              p.mb-3 El esquema TN es el sistema de puesta a tierra más utilizado en instalaciones industriales y en edificaciones de gran tamaño que cuentan con transformador propio. Su funcionamiento consiste en conectar las partes metálicas expuestas de los equipos, como carcasas o estructuras, directamente al conductor neutro proveniente del transformador. 

              p.mb-0 Presenta variantes (TN-C, TN-S, TN-C-S) y se caracteriza porque el neutro y las masas comparten el mismo sistema de tierra o conductor de protección y ofrece una trayectoria de falla más baja y rápida.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 4.
          span Comparativo entre esquemas TN
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Característica
                th TN-C
                th TN-S
                th TN-C-S
            tbody
              tr
                td(style="text-align: left") Conductor PEN (<em>Protective Earth + Neutral</em>).
                td(style="text-align: left") En toda la red.
                td(style="text-align: left") No existe.
                td(style="text-align: left") Solo hasta el cuadro general.
              tr
                td(style="text-align: left") Número de conductores.
                td(style="text-align: left") 4 (en trifásica).
                td(style="text-align: left") 5 (en trifásica).
                td(style="text-align: left") 4 en entrada, 5 en salida.
              tr
                td(style="text-align: left") Riesgo de incendio.
                td(style="text-align: left") Alto (corrientes por masas).
                td(style="text-align: left") Muy bajo.
                td(style="text-align: left") Bajo (tras la división).
              tr
                td(style="text-align: left") Uso en viviendas.
                td(style="text-align: left") Prohibido.
                td(style="text-align: left") Recomendado.
                td(style="text-align: left") Muy común.

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Esquema IT

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img09.png", data-aos="zoom-in")
      .col-md-12.col-lg-7
        .tarjeta.bg-color-4.p-4.mb-3.br-15
          p.mb-0 El esquema IT, conocido como sistema de neutro aislado, se caracteriza por priorizar la continuidad del servicio eléctrico. A diferencia de los sistemas convencionales utilizados en instalaciones domésticas, el conductor neutro no se conecta directamente a tierra o lo hace mediante una impedancia elevada. 

        p.mb-0 Gracias a esta configuración, cuando ocurre una primera falla de aislamiento o una fuga a tierra, la instalación puede continuar operando sin que se produzca una interrupción inmediata del suministro eléctrico.

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Puntos clave

            
    .row.justify-content-center.mb-5
      .col-md-6.col-lg-6.mb-4.mb-lg-3
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center En TT, la barra de tierra no debe unirse a la barra de neutro.

      .col-md-6.col-lg-6.mb-4.mb-lg-3
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center En TN-S, la barra PE (tierra) y N (neutro) se separan desde la acometida.

      .col-md-6.col-lg-6.mb-4.mb-lg-3
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center En TN-C, el conductor PEN debe estar correctamente dimensionado.


      .col-md-6.col-lg-6.mb-4.mb-lg-3
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center En IT, el tablero debe incluir monitoreo de aislamiento.


    p.mb-4 La elección del esquema tiene impacto directo en protecciones, distancias, resistencias de tierra y niveles de seguridad.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Coordinación y selectividad de protecciones


    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img10.png", data-aos="zoom-in")
      .col-md-12.col-lg-8
        p.mb-3 En una instalación eléctrica existen varios dispositivos de protección, como interruptores automáticos, fusibles y relés, cuya función es interrumpir la corriente cuando ocurre una falla. Sin embargo, si estos dispositivos no están correctamente coordinados, una falla pequeña podría provocar la desconexión de toda la instalación.
        .tarjeta.bg-color-18.p-4.mb-3.br-15
          .row
            .col-lg.mx-auto
              p.mb-0 La coordinación o selectividad de protecciones consiste en organizar y ajustar estos dispositivos para que, cuando ocurra una falla, solo se desconecte la parte del circuito donde se produjo el problema. De esta manera, el resto de la instalación continúa funcionando con normalidad, mejorando la seguridad, la continuidad del servicio y la protección de los equipos.
            .col-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema3/img11.svg", data-aos="zoom-in") 

        p.mb-0 Por ejemplo, si ocurre un cortocircuito en un circuito de iluminación, lo ideal es que solo actúe el interruptor de ese circuito, y no el interruptor general del tablero.


    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Tipos de selectividad

    p.mb-4 Existen diferentes formas de coordinar las protecciones dentro de una instalación eléctrica:
 
    .bg-full-width.bg-fondo-1.tarjeta.mb-5
      .p-4.px-lg-2
        SlyderA(tipo="b").bg-color-white.p-3.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-2
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Selectividad amperimétrica
              p.mb-3 Se basa en la corriente nominal de los dispositivos de protección. El interruptor que protege el circuito final tiene una corriente menor que el interruptor general.
              p.mb-0 <strong>Ejemplo:</strong><br>Interruptor circuito iluminación → 20 A.<br>Interruptor tablero general → 80 A.<br>En caso de sobrecorriente, dispara primero el interruptor de 20 A.

            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema3/img12.png", alt="Selectividad amperimétrica").mx-auto

          .row.justify-content-center.align-items-center.p-2
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Selectividad cronológica (por tiempo)
              p.mb-3 En este caso, las protecciones se ajustan para que actúen en diferentes tiempos de disparo. El dispositivo más cercano a la falla actúa más rápido, mientras que el general actúa con un pequeño retraso.
              p.mb-0 Esto evita que varios interruptores se disparen al mismo tiempo.

            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema3/img13.png", alt="Selectividad cronológica").mx-auto

          .row.justify-content-center.align-items-center.p-2
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Selectividad energética
              p.mb-0 Este tipo de selectividad considera la energía que pasa por el circuito antes de que la protección actúe. Se utiliza principalmente en interruptores de potencia y protecciones industriales, donde es importante limitar la energía del cortocircuito para evitar daños en los equipos.

            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema3/img14.png", alt="Selectividad energética").mx-auto

          .row.justify-content-center.align-items-center.p-2
            .col-lg-8.mb-4.mb-lg-0.mb-3.mb-lg-0
              h4.mb-3 Selectividad lógica
              p.mb-3 Es utilizada en sistemas modernos de protección digital. Los dispositivos se comunican entre sí mediante sistemas electrónicos para determinar cuál debe actuar primero.
              p.mb-0 Este tipo de selectividad es común en subestaciones eléctricas y sistemas industriales automatizados.

            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema3/img15.png", alt="Selectividad lógica").mx-auto
          
    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Importancia normativa


    .container.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .tarjeta.row.justify-content-center.align-items-center.bg-color-4
          .col-lg-5.mb-3.mb-lg-0.ps-0
            figure
              img(src="@/assets/curso/tema3/img16.png", data-aos="zoom-in")
          .col-lg-7.p-3
            p.mb-0 La correcta coordinación de protecciones es un requisito técnico establecido por normas eléctricas.

            p.mb-0 Tanto el RETIE como la NTC 2050 indican que las protecciones deben diseñarse y seleccionarse de forma que:

            ul.lista-ul.mb-0
              li.mb-2
                i.fas.fa-circle-right.bg-color-17
                | Garanticen la seguridad de las personas.
              li
                i.fas.fa-circle-right.bg-color-17
                | Eviten daños en equipos e instalaciones.
              li
                i.fas.fa-circle-right.bg-color-17
                | Protejan los conductores eléctricos.
              li
                i.fas.fa-circle-right.bg-color-17
                | Reduzcan las interrupciones innecesarias del servicio.

    .row.justify-content-center.mb-3
      .col-lg-12
        p.mb-0 Una adecuada coordinación permite que las instalaciones eléctricas sean más seguras, confiables y eficientes.

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Interpretación del diseño esquemático (diagrama unifilar)

    .bg-full-width.bg-fondo-2
      .row.justify-content-center.align-items-center.mb-5
        .col-md-12.col-lg-9.order-2.order-lg-1
          p.mb-3 El diagrama unifilar es el documento técnico más relevante del tablero de distribución. En él se representa de forma simplificada todo el sistema eléctrico: desde la acometida hasta los circuitos derivados. Es obligatorio según el RETIE, y la NTC 2050 exige que toda instalación cuente con planos y diagramas actualizados.

          p.mb-0 Un diagrama unifilar completo debe incluir los principales componentes que conforman la instalación eléctrica. Entre los elementos más importantes se encuentran:

        .col-md-8.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/img17.png", data-aos="zoom-in")


      .row.justify-content-center.align-items-center.mb-5
        .col-md-8.col-lg-4.mb-5.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/img18.png", data-aos="zoom-in")
        .col-md-12.col-lg-8
          SlyderF(columnas="col-12 col-md-6")
            .tarjeta.bg-color-18.p-4.h-100.box-shadow.br-15
              .p-2.mb-0
                h4 Acometida o alimentación principal
                p.mb-0 Es el punto donde la instalación recibe la energía proveniente de la red eléctrica o del transformador.

            .tarjeta.bg-color-18.p-4.h-100.box-shadow.br-15
              .p-2.mb-0
                h4 Interruptor general
                p.mb-0 Es el dispositivo principal de protección y maniobra del tablero. Permite desconectar toda la instalación en caso de mantenimiento o emergencia.

            .tarjeta.bg-color-18.p-4.h-100.box-shadow.br-15
              .p-2.mb-0
                h4 Barras de fase, neutro y tierra
                p.mb-0 Son los conductores internos del tablero que permiten distribuir la energía hacia los diferentes circuitos.

            .tarjeta.bg-color-18.p-4.h-100.box-shadow.br-15
              .p-2.mb-0
                h4 Circuitos derivados y sus protecciones
                p.mb-0 Cada circuito debe tener su propio dispositivo de protección, como interruptores automáticos o fusibles.

            .tarjeta.bg-color-18.p-4.h-100.box-shadow.br-15
              .p-2.mb-0
                h4 Nivel de tensión del sistema
                p.mb-0 El diagrama debe indicar el voltaje de operación del sistema, por ejemplo: 
                ul.lista-ul.mb-0
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | 120 V.
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | 208 V.
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | 220 V.
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | 480 V.

            .tarjeta.bg-color-18.p-4.h-100.box-shadow.br-15
              .p-2.mb-0
                h4 Capacidad nominal de los dispositivos
                p.mb-0 Se deben especificar los valores de corriente de los dispositivos de protección, por ejemplo:
                ul.lista-ul.mb-0
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | Interruptor 20 A.
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | Interruptor 40 A.
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | Interruptor 100 A.

            .tarjeta.bg-color-18.p-4.h-100.box-shadow.br-15
              .p-2.mb-0
                h4 Esquema de puesta a tierra
                p.mb-0 Debe indicarse cómo se conecta el sistema de puesta a tierra, un elemento esencial para la seguridad eléctrica.

            .tarjeta.bg-color-18.p-4.h-100.box-shadow.br-15
              .p-2.mb-0
                h4 Identificación de los circuitos
                p.mb-0 Cada circuito debe estar claramente identificado, por ejemplo:
                ul.lista-ul.mb-0
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | Circuito iluminación.
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | Circuito tomacorrientes.
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | Circuito aire acondicionado.
                  li.mb-1
                    i.fas.fa-circle-right.bg-color-17
                    | Circuito motores.

      p.mb-4  La correcta interpretación del diagrama unifilar permite determinar si el tablero cumple con la normatividad, si está bien distribuido, si las protecciones son adecuadas y si la instalación es segura.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-0
        .tarjeta.color-primario.p-2.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/tema1/img-4.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Lo invitamos a revisar este enlace de video que ilustra cómo interpretar un diagrama unifilar:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=9lAN8rdRI60" target="_blank")
                    span Enlace web
                    i.fas.fa-link
</template>

<script>
export default {
  name: 'Tema3',
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
