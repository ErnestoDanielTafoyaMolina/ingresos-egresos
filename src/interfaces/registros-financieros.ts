interface RegistroFinanciero {
  id: number; // Agregar un ID para facilitar la actualización y eliminación
  dia: number;
  mes: number;
  año: number;
  ingresos: number;
  egresos: number;
}
