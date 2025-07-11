import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule, CommonModule], //En la version standalone para poder utilizar 
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit {

  forma!: FormGroup;

  constructor(  private fb: FormBuilder ){
    this.crearFormulario();
    this.cargarDataAlFormulario();
  }

  ngOnInit(): void{}

  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray;
  }

  getPasatiempoControl(index: number) {
    return this.pasatiempos.at(index) as FormControl;
  }

  public get pasatiemposControls() {
    return this.pasatiempos.controls;
  }

  get nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }

  get apellidoNoValido(){
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched;
  }

  get correoNoValido(){
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched;
  }

  get distritoNoValido(){
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched;
  }

  get ciudadNoValida(){
    return this.forma.get('direccion.ciudad')?.invalid && this.forma.get('direccion.ciudad')?.touched;
  }

  cargarDataAlFormulario(){
    this.forma.reset({
      nombre: 'Fernando',
      apellido: 'Herrera',
      correo: 'fernando.herrera@example.com'
    });
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre  : ['', [Validators.required, Validators.minLength(5)] ],
      apellido: ['', [Validators.required]],
      correo  : ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') ]],
      direccion: this.fb.group({
        distrito : ['', Validators.required],
        ciudad   : ['', Validators.required],
      }),
      pasatiempos: this.fb.array([])
    });
  }

  agregarPasatiempo() {
    this.pasatiempos.push(this.fb.control('', Validators.required));
  }

  borrarPasatiempo(index: number) {
    this.pasatiempos.removeAt(index);
  }

  guardar(){
    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach( control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => {
            control.markAsTouched();
          });
        }else {
          control.markAsTouched();
        }
      });
    }
  }
}
