import { Component } from '@angular/core';
import { FinanzasService } from '../services/finanzas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nuevoRegistro = { id:undefined, dia: 0, mes: 0, anio: 0, ingresos: 0, egresos: 0 };

  constructor(private finanzasService: FinanzasService) {}

  agregarRegistro() {
    this.finanzasService.agregarRegistro( this.nuevoRegistro );
    this.nuevoRegistro = { id:undefined, dia: 0, mes: 0, anio: 0, ingresos: 0, egresos: 0 }; // Reset form
  }
}
