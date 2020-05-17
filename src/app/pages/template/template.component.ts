import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {

    nombre: 'Agustin',
    apellido: 'Gallardo',
    correo: 'agustin.gallardo@telefonica.com',
    pais: 'PER',
    genero: 'M'
  };

  paises: any[] = [];
  constructor( private _paisService: PaisService) { }

  ngOnInit() {

    this._paisService.getPaises()
    .subscribe( paises => {
      this.paises = paises;
      this.paises.unshift({
        nombre: '[Selecciones un país]',
        codigo: ''
      });
    });
  }

  guardar(forma: NgForm) {
    if ( forma.invalid ) {
            Object.values( forma.controls ).forEach ( control => {
              control.markAsTouched();
        });
            return;
    }
    console.log(forma.value);
  }
}
