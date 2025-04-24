import { Routes } from '@angular/router';
import { IngresaOTComponent } from './ingresa-ot/ingresa-ot.component';
import { LibroComponent } from './libro/libro.component';

export const routes: Routes = [
{path: '', redirectTo: 'Ingresar orden', pathMatch: 'full'
    
},
{
path: 'Ingresar orden', component: IngresaOTComponent,
},
{
path: 'libro ventas', component: LibroComponent,
},
{
path: 'libro-ventas', 
component: LibroComponent,
title: 'Libro de Ventas'
},
  {
    path: '**', 
    redirectTo: 'Ingresar orden'
  }
];
