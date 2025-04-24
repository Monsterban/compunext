// app/services/orden.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Orden {
  identificacion: number;
  Nombre: string;
  Correo: string;
  Telefono: number;
}

@Injectable({
  providedIn: 'root'
})

export class OrdenService {
  private apiUrl = 'http://localhost:3000/api/contactos/'; // Ajusta según tu backend

  constructor(private http: HttpClient) { }

  // Crear nueva orden
  crearOrden(orden: Orden): Observable<Orden> {
    return this.http.post<Orden>(this.apiUrl, orden);
  }

  // Obtener todas las órdenes
  obtenerOrdenes(): Observable<Orden[]> {
    return this.http.get<Orden[]>(this.apiUrl);
  }

}