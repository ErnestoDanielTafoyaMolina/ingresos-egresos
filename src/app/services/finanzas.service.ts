import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})

export class FinanzasService {
    private registros: RegistroFinanciero[] = [];

    constructor() {
        this.cargarRegistros();
    }

    private guardarRegistros() {
        localStorage.setItem('finanzas', JSON.stringify(this.registros));
    }

    private cargarRegistros() {
        const registrosGuardados = localStorage.getItem('finanzas');
        this.registros = registrosGuardados ? JSON.parse(registrosGuardados) : [];
    }

    obtenerRegistros(): RegistroFinanciero[] {
        return this.registros;
    }

    agregarRegistro(registro: RegistroFinanciero) {
        registro.id = this.registros.length + 1;
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
