import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdenService } from '../services/orden.service';


@Component({
  selector: 'app-ingresa-ot',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ingresa-ot.component.html',
  styleUrl: './ingresa-ot.component.css'
})
export class IngresaOTComponent {

  formOT: FormGroup;


constructor(public OrdenService: OrdenService,private fB: FormBuilder) {
  this.formOT = this.fB.group({
    'identificacion': ['', [Validators.required, Validators.pattern('^[0-9]{5,12}$')]],
    'nombre': ['', [Validators.required, Validators.pattern('^[A-Z  ]{5,50}$')]],
    'correo': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required, Validators.pattern('^[0-9]{5,12}$')]],
  });
// se instancia el formulario con su constructor junto a sus validaciones dentro del constructor
}


  get identifiacion(){
    return this.formOT.get('identificacion')  as FormControl; 
  }

  get nombre(){
    return this.formOT.get('nombre') as FormControl; 
  }

  get correo(){
    return this.formOT.get('correo') as FormControl; 
  }

  get telefono(){
    return this.formOT.get('telefono') as FormControl; 
  }
  
  SubirOt() {
    if (this.formOT.valid) {
      this.OrdenService.crearorden(
        this.identifiacion.value,
        this.nombre.value,
        this.correo.value,
        this.telefono.value
      );
    } else {
      this.formOT.markAllAsTouched();
    }
  }




 /*identificacion = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5,12}$')]);
  nombre = new FormControl('', [Validators.required, Validators.pattern('^[A-Z  ]{5,50}$')]);
  correo = new FormControl('', [Validators.required, Validators.email]);
  telefono = new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5,12}$')]);
  */
}
