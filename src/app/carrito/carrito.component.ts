import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoCarritoService } from '../curso-carrito.service';
import { Curso } from '../cursos-list/cursos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  lista$: Observable<Curso[]>;
  constructor(private carrito: CursoCarritoService) {
   this.lista$= carrito.lista.asObservable();
   }

  ngOnInit(): void {
  }

}
