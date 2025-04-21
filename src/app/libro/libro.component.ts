import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenService } from '../services/orden.service'; // Importa el servicio de ordenes

@Component({
  selector: 'app-libro',
  imports: [CommonModule],
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent {
 constructor(public ordenService: OrdenService) { } // Inyecta el servicio de ordenes
  
}
