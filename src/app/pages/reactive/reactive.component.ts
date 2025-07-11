import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
=======
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';
>>>>>>> a0f6599 (fix: confirmando todos los cambios pendientes antes de subir al remoto)

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule, CommonModule], //En la version standalone para poder utilizar 
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit{

  forma: FormGroup;

<<<<<<< HEAD
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
=======
  constructor(  private fb: FormBuilder,
                private validadoresService: ValidadoresService
   ){
    this.crearFormulario();
    this.cargarDataAlFormulario();
>>>>>>> a0f6599 (fix: confirmando todos los cambios pendientes antes de subir al remoto)
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

<<<<<<< HEAD
=======
  get distritoNoValido(){
    return this.forma.get('direccion.distrito')?.invalid && this.forma.get('direccion.distrito')?.touched;
  }

  get ciudadNoValida(){
    return this.forma.get('direccion.ciudad')?.invalid && this.forma.get('direccion.ciudad')?.touched;
  }


  //Funciones
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
      apellido: ['', [Validators.required, this.validadoresService.noHerrera]],
      correo  : ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$') ]],
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

>>>>>>> a0f6599 (fix: confirmando todos los cambios pendientes antes de subir al remoto)
  guardar(){
    console.log(this.forma);

    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach( control => {
        control.markAsTouched();
      });
    }

  }

  
}
