import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanzasService {
  private registros: RegistroFinanciero[] = [];
  private contadorId = 1; // Inicializar un contador para los IDs

  constructor() {
    this.cargarRegistros();
  }

  private guardarRegistros() {
      localStorage.setItem('finanzas', JSON.stringify(this.registros));
  }

  private cargarRegistros() {
    const registrosGuardados = localStorage.getItem('finanzas');
    if (registrosGuardados) {
        this.registros = JSON.parse(registrosGuardados);

        // Verificar cada registro para asegurar que tiene un ID válido
        this.registros.forEach(registro => {
            if (registro.id === undefined) {
                registro.id = this.contadorId++;
            }
        });

        // Actualizar contadorId basado en el máximo ID existente
        const ids = this.registros.map(r => r.id as number); // Cast because we know every id is defined
        const maxId = Math.max(0, ...ids); // Include 0 to handle empty array scenario
        this.contadorId = maxId + 1;
    } else {
        this.registros = [];
    }
  }

  obtenerRegistros(): RegistroFinanciero[] {
      return this.registros;
  }

  agregarRegistro(registro: RegistroFinanciero) {
    registro.id = this.contadorId++; // Asignar ID y luego incrementar el contador
    this.registros.push(registro);
    this.guardarRegistros();
  }

  actualizarRegistro(registroActualizado: RegistroFinanciero) {
      const index = this.registros.findIndex(r => r.id === registroActualizado.id);
      if (index !== -1) {
          this.registros[index] = registroActualizado;
          this.guardarRegistros();
      }
  }

  eliminarRegistro(id: number) {
      this.registros = this.registros.filter(r => r.id !== id);
      this.guardarRegistros();
  }
}

