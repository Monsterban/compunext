import { Routes } from '@angular/router';
import { IngresaOTComponent } from './ingresa-ot/ingresa-ot.component';
import { LibroComponent } from './libro/libro.component';
export const routes: Routes = [
{path: '', redirectTo: 'ingresa-ot', pathMatch: 'full'
    
},
{
path: 'Ingresar orden', component: IngresaOTComponent,
},
{
path: 'libro ventas', component: LibroComponent,
},
];
