import { Component } from '@angular/core';
import { FinanzasService } from '../services/finanzas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  fecha: string|undefined; // Asume el formato de fecha ISO por defecto
  nuevoRegistro = { id:undefined, dia: 0, mes: 0, anio: 0, ingresos: 0, egresos: 0 };

  constructor(private finanzasService: FinanzasService) {}

  agregarRegistro() {
    if (this.fecha) {
      const dateParts = new Date(this.fecha);
      this.nuevoRegistro.dia = dateParts.getDate();
      this.nuevoRegistro.mes = dateParts.getMonth() + 1; // getMonth() devuelve 0-11
      this.nuevoRegistro.anio = dateParts.getFullYear();
    }

    this.finanzasService.agregarRegistro(this.nuevoRegistro);
    // Reset form
    this.fecha = undefined;
    this.nuevoRegistro = { id:undefined, dia: 0, mes: 0, anio: 0, ingresos: 0, egresos: 0 };
  }
}
