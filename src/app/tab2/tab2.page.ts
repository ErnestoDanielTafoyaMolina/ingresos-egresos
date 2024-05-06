import { Component } from '@angular/core';
import { FinanzasService, RegistroFinanciero } from '../services/finanzas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  registros: RegistroFinanciero[] = [];

  constructor(private finanzasService: FinanzasService) {
    this.cargarRegistros();
  }

  cargarRegistros() {
    this.registros = this.finanzasService.obtenerRegistros();
  }

  eliminarRegistro(id: number) {
    this.finanzasService.eliminarRegistro(id);
    this.cargarRegistros();  // Recargar los registros para reflejar el cambio
  }
}
