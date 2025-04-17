import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libro',
  imports: [CommonModule],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css',
})
export class LibroComponent {
 @Input() id?: string;   //recuerda devolverlo como numero al componente padre 
  @Input() name?: string;
  @Input() email?: string;
  @Input() phone?: string;
  
}
