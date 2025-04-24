import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdenService } from '../services/orden.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-ingresa-ot',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule,MatInputModule],
  templateUrl: './ingresa-ot.component.html',
  styleUrls: ['./ingresa-ot.component.css']
})
export class IngresaOTComponent {
  nuevaOrden = {
    identificacion: 0,
    Nombre: '',
    Correo: '',
    Telefono: 0
    }

  formOT: FormGroup;
sugerencias: any[] = [];

constructor(public OrdenService: OrdenService,private fB: FormBuilder) {
  this.formOT = this.fB.group({
    'identificacion': ['', [Validators.required, Validators.pattern('^[0-9]{7,12}$')]],
    'nombre': ['', [Validators.required, Validators.pattern('^[A-Z  ]{5,50}$')]],
    'correo': ['', [Validators.required, Validators.email]],
    'telefono': ['', [Validators.required, Validators.pattern('^[0-9]{5,12}$')]],
  });
// se instancia el formulario con su constructor junto a sus validaciones dentro del constructor
}


get identificacion(): FormControl {
  return this.formOT.get('identificacion') as FormControl;
}

  get nombre(){
    return this.formOT.get('nombre')! as FormControl; 
  }

  get correo(){
    return this.formOT.get('correo')! as FormControl; 
  }

  get telefono(){
    return this.formOT.get('telefono')! as FormControl; 
  }
  
   buscarSugerencias(event: Event){
const input = event.target as HTMLInputElement;
const identificacion = input.value;
if (identificacion.length >= 2){
  this.OrdenService.obtenerOrdenes().subscribe((ordenes) => {
    this.sugerencias = ordenes.filter((orden) => 
      orden?.identificacion?.toString().startsWith(identificacion)
  );
  });
} else {
  this.sugerencias = [];

}
 //aaa
   }

   autocompletarformulario(identificacion: number){
    const ordenseleccionada = this.sugerencias.find((orden) => orden.identificacion === identificacion);
    if (ordenseleccionada) {
      this.formOT.patchValue({
        identificacion: ordenseleccionada.identificacion,
        nombre: ordenseleccionada.nombre,
        correo: ordenseleccionada.correo,
        telefono: ordenseleccionada.telefono
      });
    } 
   }


  SubirOt() {
    if (this.formOT.valid) {
      this.OrdenService.crearOrden(this.formOT.value).subscribe({
        next: (response) => {
          console.log('Orden creada exitosamente:', response);
          alert('Orden creada exitosamente!');
          this.formOT.reset(); 
        },
        error: (err) => {
          console.error('Error al crear orden:', err);
          alert('Error al crear orden');
          this.formOT.reset(); 
        }
      });
    } else {
      this.formOT.markAllAsTouched();
    }
  }

  onSubmit(): void {
    this.OrdenService.crearOrden(this.nuevaOrden).subscribe({
      next: (response) => {
        alert('Orden creada exitosamente!');
        this.formOT.reset();
        
      },
      error: (err) => {
        console.error('Error al crear orden:', err);
        alert('Error al crear orden');
        this.formOT.reset();
      }
    });
  }

}
