export interface FondoUsuario {
  id: number;
  usuario_documento: string;
  fondo_id: number;
  fecha_registro: Date;
  num_meses: number;
  inversion_inicial: number;
  valor_actual: number;
}
