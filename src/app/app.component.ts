import { Component } from '@angular/core';
import { IngresaOTComponent } from './ingresa-ot/ingresa-ot.component';

@Component({
  selector: 'bienvenida',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [IngresaOTComponent],
})
export class AppComponent {}
