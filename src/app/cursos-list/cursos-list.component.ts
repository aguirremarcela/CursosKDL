import { Component, OnInit } from '@angular/core';
import { Curso } from './cursos';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  cursos: Curso[]=
   [ {
    nombre:"Fotografia Documental",
    descripcion:"El objetivo de este curso es formar profesionales que sean capaces de desempeñarse en distintos medios de comunicación y en sus distintas áreas: retrato editorial, fotoreportaje, paisajismo, fotografía de ilustración y edición fotográfica.",
    cupos:0,
    precio:30,
    img:"assets/images/card1.jpg"
  },
  {
    nombre:"Fotografia ",
    descripcion:"El objetivo de este curso es formar profesionales que sean capaces de desempeñarse en distintos medios de comunicación y en sus distintas áreas: retrato editorial, fotoreportaje, paisajismo, fotografía de ilustración y edición fotográfica.",
    cupos:25,
    precio:305,
    img:"assets/images/card1.jpg"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
