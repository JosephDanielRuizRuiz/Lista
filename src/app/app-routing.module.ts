import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListatipificacionComponent } from './listatipificacion/listatipificacion.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/listatipificacion',
    pathMatch:'full'
  },
  {
    path:'listatipificacion',
    component: ListatipificacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
