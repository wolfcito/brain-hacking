import { IArticle } from '@/components/atoms/ArticlesRoadMap/ArticlesRoadMap.interface'

// import asset001 from '../public/assets/img/bh001-old.webp'
// import asset002 from '../public/assets/img/bh002-home.jpg'
// import asset005 from '../public/assets/img/bh005-girl.jpg'
// import asset007 from '../public/assets/img/bh007-old2.jpg'
// import asset008 from '../public/assets/img/bh008-boy-dog.jpg'
// import asset009 from '../public/assets/img/bh009-boy2.jpg'
import asset006 from '../public/assets/img/bh006-woman.jpg'
import asset003 from '../public/assets/img/bh003-young.jpg'
import asset004 from '../public/assets/img/bh004-boy.jpg'

export const articlesRoadMap: IArticle[] = [
  {
    title: 'Inspiración',
    paragraph:
      'A lo largo de la vida nuestro cerebro presenta modificaciones, tanto estructurales como funcionales, desde el punto de vista biológico.  Debido a su plasticidad cerebral o capacidad de transformación, se pueden crear nuevas vías neuronales mejorando su capacidad y desempeño, por medio de estimulación externa y entrenamiento como el aprendizaje de nuevos conceptos y habilidades. Nos planteamos entonces en Brain Hacking, cómo podemos impactar a la población, por un lado cerrando las brechas tecnológicas existentes y por otro lado evitando alteraciones neurodegenerativas tempranas.',
    image: {
      heigth: 400,
      width: 600,
      path: asset006,
    },
  },
  {
    title: 'Brain Hacking',
    paragraph:
      'Creamos Brain Hacking una herramienta para el aprendizaje lúdico soportada en web 3.0 y tecnologías adyacentes como React.js, esta tiene el fin de generar nuevas conexiones neuronales enseñando desarrollo web y programacion de software para evitar enfermedades neurodegenerativas de manera temprana.',
    image: {
      heigth: 400,
      width: 600,
      path: asset004,
    },
  },
  {
    title: 'Retos que surgieron',
    paragraph:
      'Nos encontramos con el reto de llegar al usuario final teniendo en cuenta las ofertas del mercado, lo cual resolvimos creando incentivos en forma de tokens que son posibles dentro de la tecnología de la Web 3.0, para obtener una mayor adopción y fidelización de los usuarios.',
    image: {
      heigth: 400,
      width: 600,
      path: asset003,
    },
  },
  {
    title: 'Cual es el siguiente paso en Brain Hacking',
    paragraph:
      'Trabajaremos por la expansión de Brain Hacking ampliando la oferta de posibilidades para el usuario, ayudando a explorar y mejorar todo su potencial en las diferentes esferas de su vida… física, espiritual, psicológica, intelectual, social, etc.',
    image: {
      heigth: 400,
      width: 600,
      path: asset006,
    },
  },
]
