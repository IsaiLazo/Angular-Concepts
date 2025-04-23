import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-template',
  standalone: true,  // Indicar que es standalone
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  imports: [FormsModule]  // Solo se importa FormsModule para usar ngModel
})
export class TemplateComponent implements OnInit{

  paises: any[] = [];

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: ''
  };

  constructor( private paisService: PaisService ){};
  
  ngOnInit(): void {

    this.paisService.getPaises()
      .subscribe(paises => {
        this.paises = paises;

        this.paises.unshift({
          nombre: '[ Seleccione un pais ]',
          codigo: ''
        })

      });
  
  }

  guardar(forma: NgForm) {
    console.log(forma.value);

    if( forma.invalid ){
      Object.values( forma.controls ).forEach( control => control.markAsTouched() );
    }

  }

}
