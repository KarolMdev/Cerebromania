const partes = {
    "Lóbulo Frontal": {
      titulo: "Lóbulo Frontal",
      imagen: "img/lobuloFrontal.jpg",
      descripcion: "El lóbulo frontal es una parte del cerebro que controla funciones cognitivas, como el pensamiento, la planificación, la memoria, y el movimiento. También regula las emociones, la personalidad, y el comportamiento. "
    },
    "Lóbulo Parietal": {
      titulo: "Lóbulo Parietal",
      imagen: "img/lobulopariental.jpg",
      descripcion: "El lóbulo parietal es una parte del cerebro que procesa información sensorial y cognitiva, lo que nos permite comprender el mundo que nos rodea. "
    },
    "Lóbulo Occipital": {
      titulo: "Lóbulo Occipital",
      imagen: "img/lobulooccipital.jpg",
      descripcion: "El lóbulo occipital es la parte del cerebro que procesa la información visual. Es fundamental para interpretar el mundo que nos rodea, como los colores, las formas y la ubicación de los objetos. "
    },
    "Lóbulo Temporal": {
      titulo: "Lóbulo Temporal",
      imagen: "img/lobulotemporal.jpg",
      descripcion: "El lóbulo temporal es una parte del cerebro que ayuda a procesar la información sensorial, la memoria, el lenguaje, y las emociones. También es fundamental para la comunicación con otras personas. "
    },
    "Cerebelo": {
      titulo: "Cerebelo",
      imagen: "img/cerebelo.jpg",
      descripcion: "El cerebelo, ubicado en la parte posterior del cerebro, juega un papel crucial en la coordinación y el control del movimiento, la postura y el equilibrio, además de contribuir a funciones cognitivas y emocionales."
    },
    "Mesencéfalo": {
      titulo: "Mesencéfalo",
      imagen: "img/mesenfalo.jpg",
      descripcion: "El mesencéfalo, o cerebro medio, es una parte crucial del tronco encefálico que actúa como puente entre el prosencéfalo y el rombencéfalo, jugando un papel vital en la coordinación de movimientos, reflejos visuales y auditivos, y en la regulación de la vigilia y el nivel de alerta."
    },
    "Corteza Cerebral": {
      titulo: "Corteza Cerebral",
      imagen: "img/cortezaCerevral.jpg",
      descripcion: "La corteza cerebral es la capa externa del cerebro y es responsable de funciones superiores como el pensamiento, la memoria, el lenguaje y la percepción."
    },
    "Puente de varolio": {
      titulo: "Puente de varolio",
      imagen: "img/puentedevarolio.jpg",
      descripcion: "El puente de Varolio, también conocido como protuberancia anular, es una región del tronco encefálico que actúa como un centro de comunicación y coordinación, facilitando la transmisión de señales entre el cerebro, el cerebelo y la médula espinal, y juega un papel crucial en funciones como la respiración, el sueño y la audición."
    },
    "Sistema límbico": {
      titulo: "Sistema límbico",
      imagen: "img/sistema limbico.jpg",
      descripcion: "El sistema límbico es un conjunto de estructuras cerebrales que regulan las emociones, la memoria, el comportamiento y la motivación. Es una parte fundamental del cerebro que nos permite interactuar con el mundo."
    },
    "Ganglios Basales": {
      titulo: "Ganglios Basales",
      imagen: "img/gangliosbasales.jpg",
      descripcion: "Los ganglios basales son un grupo de núcleos neuronales que controlan los movimientos voluntarios y coordinan los cambios de postura. También participan en la cognición, las emociones y el aprendizaje motor."
    },
    "Diencéfalo": {
      titulo: "Diencéfalo",
      imagen: "img/dicenfalo.jpg",
      descripcion: "El diencéfalo es una región del cerebro que se encarga de procesar información sensorial, regular funciones corporales y controlar emociones. Está ubicado entre el tronco encefálico y los hemisferios cerebrales."
    },
    "Bulbo raquídeo": {
      titulo: "Bulbo raquídeo",
      imagen: "img/bulboraquideo.jpg",
      descripcion: "El bulbo raquídeo, también conocido como médula oblonga, regula funciones vitales como la respiración, la frecuencia cardíaca y la presión arterial. También conecta el cerebro con el resto del cuerpo."
    },
    "Médula Espinal": {
      titulo: "Médula Espinal",
      imagen: "img/medula espinal.jpg",
      descripcion: "La médula espinal, parte crucial del sistema nervioso central, funciona como el principal canal de comunicación entre el cerebro y el resto del cuerpo, transmitiendo señales nerviosas y permitiendo movimientos y sensaciones."
    }
  };
  
  document.querySelectorAll('.punto').forEach(punto => {
    punto.addEventListener('click', () => {
      const nombre = punto.dataset.parte;
      const info = partes[nombre];
  
      if (info) {
        document.getElementById('titulo-parte').textContent = info.titulo;
        document.getElementById('descripcion-parte').textContent = info.descripcion;
        const imgParte = document.getElementById('imagen-parte');
        imgParte.style.opacity = 0;
        setTimeout(() => {
          imgParte.src = info.imagen;
          imgParte.style.opacity = 1;
        }, 200);
      }
    });
  });
 