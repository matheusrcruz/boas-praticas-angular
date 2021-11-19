import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((homeModulo) => homeModulo.HomeModule),
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module').then((animaisModulo) => animaisModulo.AnimaisModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
