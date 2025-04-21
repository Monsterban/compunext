// app/components/libro/libro.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenService } from '../services/orden.service';

@Component({
  selector: 'app-libro',
  imports: [CommonModule],
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  ordenes: any[] = [];
  isLoading = true;

  constructor(private ordenService: OrdenService) {}

  ngOnInit(): void {
    this.cargarOrdenes();
  }

  cargarOrdenes(): void {
    this.ordenService.obtenerOrdenes().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.ordenes = data.map((orden: any) => ({
          Identificacion: orden.identificacion,
          Nombre: orden.nombre,
          Correo: orden.correo,
          Telefono: orden.telefono
        }));
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar órdenes:', err);
        this.isLoading = false;
      }
    });
  }
  


}