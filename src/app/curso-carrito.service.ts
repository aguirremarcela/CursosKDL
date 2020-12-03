import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Curso } from './cursos-list/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursoCarritoService {
  private _lista: Curso[]=[];
  lista: BehaviorSubject<Curso[]>= new BehaviorSubject([]);
  constructor() { }
  agregarAlCarrito(curso:Curso) {
    let item: Curso =this._lista.find((v1)=>v1.nombre==curso.nombre);
    if(!item){
    this._lista.push({...curso});
    console.log(this._lista);
    }
    else{
      item.cupos==curso.cupos-1;
      curso.cupos==item.cupos;
    }
    this.lista.next(this._lista);
    }
  
  }


