import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-vermas',
  templateUrl: './btn-vermas.component.html',
  styleUrls: ['./btn-vermas.component.scss']
})
export class BtnVermasComponent implements OnInit {
  @Input() curso :string
  mostrar : boolean= false;
  btn: string="Vermas";
  constructor() { }

  ngOnInit(): void {
  }
  mostrarDescripcion() {
    if (!this.mostrar) {
      this.mostrar = true;
      this.btn="Ocultar";
    }
    else {
      this.mostrar= false;
      this.btn="Vermas";
    }
}
}
