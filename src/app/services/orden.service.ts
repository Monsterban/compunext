import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor() { }

Ordenes:{Identificacion:number,Nombre:string,
  Correo:string,Telefono:number}[]=[];

  crearorden(Identificacion:number,Nombre:string,
    Correo:string,Telefono:number){
this.Ordenes.push({Identificacion, Nombre , Correo, Telefono})
    }
}
