import { Component } from '@angular/core';
import { FinanzasService } from '../services/finanzas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  fecha: string | undefined; // Almacenará la fecha como string en formato ISO
  tipoRegistro = 'ingreso'; // Valor predeterminado
  nuevoRegistro = { dia: 0, mes: 0, anio: 0, ingresos: 0, egresos: 0 };

  constructor(private finanzasService: FinanzasService) {}

  agregarRegistro() {
    if (this.fecha) {
      const fechaObj = new Date(this.fecha);
      this.nuevoRegistro.dia = fechaObj.getDate();
      this.nuevoRegistro.mes = fechaObj.getMonth() + 1; // getMonth devuelve un índice basado en 0
      this.nuevoRegistro.anio = fechaObj.getFullYear();
    }

    // Configurar ingresos y egresos según el tipo seleccionado
    if (this.tipoRegistro === 'ingreso') {
      this.nuevoRegistro.ingresos = this.nuevoRegistro.ingresos;
      this.nuevoRegistro.egresos = 0;
    } else {
      this.nuevoRegistro.egresos = this.nuevoRegistro.egresos;
      this.nuevoRegistro.ingresos = 0;
    }

    // Agregar el registro utilizando el servicio
    this.finanzasService.agregarRegistro(this.nuevoRegistro);

    // Reiniciar los valores después de agregar
    this.resetForm();
  }

  resetForm() {
    this.fecha = undefined;
    this.nuevoRegistro = { dia: 0, mes: 0, anio: 0, ingresos: 0, egresos: 0 };
  }
}
