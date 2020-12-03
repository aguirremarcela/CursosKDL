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
    nombre:"Fotografia Documental",
    introduccion:"holaaaa como va?",
    descripcion:"El objetivo de este curso es formar profesionales que sean capaces de desempeñarse en distintos medios de comunicación y en sus distintas áreas: retrato editorial, fotoreportaje, paisajismo, fotografía de ilustración y edición fotográfica.",
    cupos:0,
    precio:30,
    img:"assets/images/card1.jpg",
    oferta:false,
  },
  {
    nombre:"Fotografia ",
    introduccion:"holaaaa como va?",
    descripcion:"El objetivo de este curso es formar profesionales que sean capaces de desempeñarse en distintos medios de comunicación y en sus distintas áreas: retrato editorial, fotoreportaje, paisajismo, fotografía de ilustración y edición fotográfica.",
    cupos:25,
    precio:305,
    img:"assets/images/card1.jpg",
    oferta:false,
  },
  {
    nombre:"Fotografia 5 ",
    introduccion:"holaaaa como va?",
    descripcion:"El objetivo de este curso es formar profesionales que sean capaces de desempeñarse en distintos medios de comunicación y en sus distintas áreas: retrato editorial, fotoreportaje, paisajismo, fotografía de ilustración y edición fotográfica.",
    cupos:25,
    precio:305,
    img:"assets/images/card1.jpg",
    oferta:true,
  },
  {
    nombre:"Fotografia",
    introduccion:"holaaaa como va?",
    descripcion:"El objetivo de este curso es formar profesionales que sean capaces de desempeñarse en distintos medios de comunicación y en sus distintas áreas: retrato editorial, fotoreportaje, paisajismo, fotografía de ilustración y edición fotográfica.",
    cupos:25,
    precio:305,
    img:"assets/images/card1.jpg",
    oferta:false,
  }
]
  
  constructor(private carrito: CursoCarritoService) { 
  }

  ngOnInit(): void {
  }
agregarAlCarrito(curso):void{
 this.carrito.agregarAlCarrito(curso);
 curso.cupos--;
 
}
}
