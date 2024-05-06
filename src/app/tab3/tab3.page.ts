import { Component } from '@angular/core';
import { FinanzasService, RegistroFinanciero } from '../services/finanzas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  fechaInicio: string = new Date().toISOString();
  fechaFin: string = new Date().toISOString();
  totalIngresos = 0;
  totalEgresos = 0;
  porcentajeEgresos = 0;
  balanceMostrado = false;

  constructor(private finanzasService: FinanzasService) {}

  calcularBalance() {
    const inicio = new Date(this.fechaInicio);
    inicio.setHours(0, 0, 0, 0); // Establecer a medianoche del día seleccionado
    const fin = new Date(this.fechaFin);
    fin.setHours(23, 59, 59, 999); // Establecer al final del día seleccionado

    this.totalIngresos = 0;
    this.totalEgresos = 0;

    this.finanzasService.obtenerRegistros().forEach(registro => {
      const fechaRegistro = new Date(registro.anio, registro.mes - 1, registro.dia);
      if (fechaRegistro >= inicio && fechaRegistro <= fin) {
        this.totalIngresos += registro.ingresos;
        this.totalEgresos += registro.egresos;
      }
    });

    if (this.totalIngresos === 0) {
      this.porcentajeEgresos = 0;
    } else {
      this.porcentajeEgresos = (this.totalEgresos / this.totalIngresos) * 100;
    }

    this.balanceMostrado = true;
  }
}
