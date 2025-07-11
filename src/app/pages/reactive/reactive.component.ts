import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forma = this.createForm();
    this.cargarDataAlFormulario();
  }

  getErrorMsg(campo: string): string | null {
    const control = this.forma.get(campo);
    if (!control || !control.touched) return null;
    if (control.hasError('pattern')) return 'Solo se permiten letras';
    if (control.hasError('minlength')) return 'Ingrese 5 letras';
    if (control.hasError('required')) {
      if (campo === 'nombre') return 'Ingrese Nombre';
      if (campo === 'apellido') return 'Ingrese el apellido';
      if (campo === 'correo') return 'Ingrese el correo';
    }
    return null;
  }

  getErrorMsgDireccion(campo: 'distrito' | 'ciudad'): string | null {
    const control = this.forma.get('direccion.' + campo);
    if (!control || !control.touched) return null;
    if (control.hasError('pattern')) return 'Solo se permiten letras';
    if (control.hasError('required')) {
      return campo === 'distrito' ? 'Ingrese el distrito' : 'Ingrese la ciudad';
    }
    return null;
  }

  ngOnInit(): void {}

  get pasatiempos(): FormArray {
    return this.forma.get('pasatiempos') as FormArray;
  }

  getPasatiempoControl(index: number): FormControl {
    return this.pasatiempos.at(index) as FormControl;
  }

  get pasatiemposControls(): FormControl[] {
    return this.pasatiempos.controls as FormControl[];
  }

  get nombreNoValido(): boolean {
    const control = this.forma.get('nombre');
    return !!control && control.invalid && control.touched;
  }

  get apellidoNoValido(): boolean {
    const control = this.forma.get('apellido');
    return !!control && control.invalid && control.touched;
  }

  get correoNoValido(): boolean {
    const control = this.forma.get('correo');
    return !!control && control.invalid && control.touched;
  }

  get distritoNoValido(): boolean {
    const control = this.forma.get('direccion.distrito');
    return !!control && control.invalid && control.touched;
  }

  get ciudadNoValida(): boolean {
    const control = this.forma.get('direccion.ciudad');
    return !!control && control.invalid && control.touched;
  }

  cargarDataAlFormulario(): void {
    this.forma.reset({
      nombre: '',
      apellido: '',
      correo: ''
    });
  }

  private createForm(): FormGroup {
    const onlyLetters = Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$');
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5), onlyLetters]],
      apellido: ['', [Validators.required, onlyLetters]],
      correo: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      direccion: this.fb.group({
        distrito: ['', [Validators.required, onlyLetters]],
        ciudad: ['', [Validators.required, onlyLetters]],
      }),
      pasatiempos: this.fb.array([])
    });
  }

  agregarPasatiempo(): void {
    this.pasatiempos.push(this.fb.control('', Validators.required));
  }

  borrarPasatiempo(index: number): void {
    this.pasatiempos.removeAt(index);
  }

  guardar(): void {
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(childControl => {
            childControl.markAsTouched();
          });
        } else {
          control.markAsTouched();
        }
      });
    }
  }
}
