import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'reservar',
    loadChildren: () => import('./reservar/reservar.module').then( m => m.ReservarPageModule)
  },
  {
    path: 'conocenos',
    loadChildren: () => import('./conocenos/conocenos.module').then( m => m.ConocenosPageModule)
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
  {
    path: 'hoteles',
    loadChildren: () => import('./hoteles/hoteles.module').then( m => m.HotelesPageModule)
  },
  {
    path: 'playas',
    loadChildren: () => import('./playas/playas.module').then( m => m.PlayasPageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'contactar',
    loadChildren: () => import('./contactar/contactar.module').then( m => m.ContactarPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'taquillero',
    loadChildren: () => import('./taquillero/taquillero.module').then( m => m.TaquilleroPageModule)
  },
  {
    path: 'registaqui',
    loadChildren: () => import('./registaqui/registaqui.module').then( m => m.RegistaquiPageModule)
  },

  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
