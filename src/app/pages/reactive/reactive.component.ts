import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule, CommonModule], //En la version standalone para poder utilizar 
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit{

  forma: FormGroup;

  constructor( private fb: FormBuilder ){
    this.forma = this.fb.group({
      nombre  : ['', [Validators.required, Validators.minLength(5)] ], // La informacion que aparece aca sera la que aparece en el input en el HTML
      apellido: ['', Validators.required],
      correo  : ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$') ]],
      direccion: this.fb.group({
        distrito : ['', Validators.required],
        ciudad   : ['', Validators.required],
      })
    });
  }
  
  ngOnInit(): void{
    
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

  guardar(){
    console.log(this.forma);

    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach( control => {
        control.markAsTouched();
      });
    }

  }

}
