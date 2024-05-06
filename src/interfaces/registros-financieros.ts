interface RegistroFinanciero {
  id?: number | null; // Agregar un ID para facilitar la actualización y eliminación
  dia: number;
  mes: number;
  anio: number;
  ingresos: number;
  egresos: number;
}
