import { Component, OnInit } from '@angular/core';
import { CursoCarritoService } from '../curso-carrito.service';
import { Curso } from './cursos';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  cursos: Curso[]=
   [ {
    nombre:"Fotografía Documental",
    introduccion:"El objetivo de este curso es formar profesionales que sean capaces de desempeñarse en distintos medios de comunicación y en sus distintas áreas: retrato editorial, fotoreportaje, paisajismo, fotografía de ilustración y edición fotográfica.",
    descripcion:"Destinado a personas que cuentan con conocimientos básicos en fotografía, fotógrafos profesionales, estudiantes o egresados universitarios/terciaros de carreras afines (sociología, antropología, historia, comunicación social, cinematografía, publicidad, bellas artes, entre otras) ",
    cupos:0,
    precio:30,
    cantidad:0,
    img:"assets/images/card1.jpg",
    oferta:false,
  },
  {
    nombre:"Fotografía de Moda ",
    introduccion:" La fotografía de moda es un género fotográfico que tiene como finalidad contar historias de marcas, ropa, accesorios y cosméticos, a través de campañas, editoriales y recursos media.",
    descripcion:"Destinado a fotógrafos, diseñadores o aficionados que deseen incursionar en la fotografía profesional publicitaria de Moda.Es necesario contar con conocimientos avanzados en fotografía y haber hecho un curso de iluminación.Se recomienda tener cámara réflex digital propia y conocimientos intermedios en manejo de Photoshop (no excluyente).",
    cupos:5,
    precio:600,
    cantidad:0,
    img:"assets/images/card2.jpg",
    oferta:false,
  },
  {
    nombre:"Fotografía Terapéutica",
    introduccion:"En este curso conocerás los fundamentos de la Fotografía Terapéutica y sus cinco técnicas principales.    Trayecto de Formación Profesional (TFP) de 48 horas de carga repartida en 6 cursos mensuales consecutivos.",
    descripcion:"Dirigido a profesionales de la Educación (que se desempeñen en diferentes niveles educativos), profesionales de la Salud y profesionales de la Fotografía. También está abierto a las personas que desean descubrir el mundo de las imágenes. No necesitas conocimientos previos en fotografía.",
    cupos:2,
    precio:305,
    cantidad:0,
    img:"assets/images/card3.jpg",
    oferta:true,
  },
  {
    nombre:"Fotoperiodismo",
    introduccion:"El fotoperiodismo es una actividad artística e informativa, de crónica social y de memoria histórica. Se trata de una nueva forma de periodismo, que utiliza imágenes para narrar historias así como para dar a conocer noticias. ",
    descripcion:"Destinado a todas aquellas personas con conocimientos básicos en fotografía (preferentemente adquiridos en nuestra escuela), fotógrafos profesionales, egresados o estudiantes universitarios/ terciarios de carreras afines: sociología, antropología, historia, comunicación social, cinematografía, publicidad, bellas artes, entre otras, o interesados en la temática que deseen incursionar en el fotoperiodismo, el ensayo fotográfico y la fotografía documental",
    cupos:4,
    precio:850,
    cantidad:0,
    img:"assets/images/card4.jpg",
    oferta:false,
  }
]
  
  constructor(private carrito: CursoCarritoService) { 
  }

  ngOnInit(): void {
  }
agregarAlCarrito(curso):void{
  if(curso.cantidad==0){
    this.carrito.agregarAlCarrito(curso);
    curso.cupos--;
    curso.cantidad=1;
    console.log(curso.cupos);
  } 
}
}
