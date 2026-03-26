<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Normatividad y requisitos técnicos para tableros de distribución',
      titulo:
        'Reconocimiento de criterios normativos y técnicos en tableros de distribución.',
      introduccion:
        '<b>Objetivo:</b> fortalecer la comprensión y aplicación de los lineamientos del RETIE, la NTC 2050 y otros referentes técnicos mediante la resolución de preguntas de coherencia que permitan al aprendiz identificar requisitos, buenas prácticas y no conformidades presentes en el diseño, instalación y verificación de tableros de distribución.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Según el RETIE, qué documento debe estar disponible dentro del tablero para identificar su estructura eléctrica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El plano arquitectónico.', esCorrecta: false },
            { id: 'b', texto: 'El diagrama unifilar.', esCorrecta: true },
            { id: 'c', texto: 'El manual del fabricante.', esCorrecta: false },
            { id: 'd', texto: 'La factura de compra.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿En qué casos el neutro y la tierra pueden estar unidos en un tablero?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En todos los tableros derivados.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Nunca se deben unir.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Solo en el tablero principal de acometida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cuando no hay carga inductiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué grado de protección IP debería tener un tablero ubicado en exteriores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'IP20.', esCorrecta: false },
            { id: 'b', texto: 'IP54 o superior.', esCorrecta: true },
            { id: 'c', texto: 'IP00.', esCorrecta: false },
            { id: 'd', texto: 'IP21.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el propósito principal de la selectividad entre protecciones?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar la operación del interruptor general ante fallas menores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el tamaño del tablero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar el número de circuitos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la tensión nominal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'En un tablero residencial, la ausencia de protección diferencial implica riesgo para:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Los conductores de fase.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La estructura metálica del tablero.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Las personas y usuarios.', esCorrecta: true },
            { id: 'd', texto: 'El medidor de energía.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la capacidad interruptiva mínima que debe tener un interruptor?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La que indique el fabricante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una menor al nivel de cortocircuito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Igual o mayor al nivel de cortocircuito disponible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No requiere capacidad interruptiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'En un esquema TT, la protección fundamental obligatoria es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Interruptor de curva D.', esCorrecta: false },
            { id: 'b', texto: 'Fusible tipo NH.', esCorrecta: false },
            { id: 'c', texto: 'Protección diferencial.', esCorrecta: true },
            { id: 'd', texto: 'Relé de sobrecarga.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'La barra de neutro en un tablero derivado debe estar:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Unida a la tierra.', esCorrecta: false },
            { id: 'b', texto: 'Aislada del gabinete.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Conectada a todas las fases.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Sin fijación mecánica.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué componente organiza los conductores internos del tablero?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Canaletas o ductos internos.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Interruptor general.', esCorrecta: false },
            { id: 'c', texto: 'Barra de tierra.', esCorrecta: false },
            { id: 'd', texto: 'Cerradura del gabinete.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la distancia mínima de trabajo exigida frente a un tablero según la NTC 2050?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '0,5 m.', esCorrecta: false },
            { id: 'b', texto: '1 m.', esCorrecta: true },
            { id: 'c', texto: '2 m.', esCorrecta: false },
            { id: 'd', texto: '3 m.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
