import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KdlContactoComponent } from './kdl-contacto/kdl-contacto.component';
import { KdlCursosComponent } from './kdl-cursos/kdl-cursos.component';

const routes: Routes = [
  {
    path:'', redirectTo:'cursoskdl',pathMatch:'full'
  },
  {
    path:'cursoskdl',component:KdlCursosComponent
  },
  {
    path:'contacto',component:KdlContactoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
