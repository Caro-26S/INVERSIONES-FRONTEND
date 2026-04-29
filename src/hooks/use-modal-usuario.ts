// import { useState } from "react";
// import { createExperiencia, updateExperiencia } from "../api/experiencia.api";
// import type { Usuario } from "../types/usuario";

// interface UseModalUsuarioProps {
//   onClose: () => void;
//   onSave: () => void;
//   usuario?: Usuario;
//   usuarioId: string;
// }

// export function useModalUsuario({
//   onClose,
//   onSave,
//   usuario,
//   usuarioId,
// }: UseModalUsuarioProps) {
//   const toDateInput = (fecha: Date | string) => {
//     const d = new Date(fecha);
//     return d.toISOString().split("T")[0];
//   };

//   const [form, setForm] = useState({
//     Empresa: usuario?.Empresa ?? "",
//     Cargo: usuario?.Cargo ?? "",
//     Funciones: usuario?.Funciones ?? "",
//     Fecha_Inicio: usuario?.Fecha_Inicio
//       ? toDateInput(usuario.Fecha_Inicio)
//       : "",
//     Fecha_Fin: usuario?.Fecha_Fin ? toDateInput(usuario.Fecha_Fin) : "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//     //   if (experiencia) {
//     //     const cambios: Partial<Experiencia> = {};
//     //     if (form.Empresa !== experiencia.Empresa)
//     //       cambios.Empresa = form.Empresa;
//     //     if (form.Cargo !== experiencia.Cargo) cambios.Cargo = form.Cargo;
//     //     if (form.Funciones !== experiencia.Funciones)
//     //       cambios.Funciones = form.Funciones;

//     //     const fechaInicioOriginal = toDateInput(experiencia.Fecha_Inicio);
//     //     const fechaFinOriginal = experiencia.Fecha_Fin
//     //       ? toDateInput(experiencia.Fecha_Fin)
//     //       : "";

//     //     if (form.Fecha_Inicio !== fechaInicioOriginal)
//     //       cambios.Fecha_Inicio = form.Fecha_Inicio as unknown as Date;

//     //     if (form.Fecha_Fin !== fechaFinOriginal)
//     //       cambios.Fecha_Fin = form.Fecha_Fin
//     //         ? (form.Fecha_Fin as unknown as Date)
//     //         : null;

//     //     await updateExperiencia(experiencia.Id, cambios);
//       } else {
//         await createExperiencia({
//           Empresa: form.Empresa,
//           Cargo: form.Cargo,
//           Funciones: form.Funciones,
//           Fecha_Inicio: form.Fecha_Inicio as unknown as Date,
//           Fecha_Fin: form.Fecha_Fin
//             ? (form.Fecha_Fin as unknown as Date)
//             : null,
//           Usuario_Id: usuarioId,
//         });
//       }

//       onSave();
//       onClose();
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Error al guardar");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isEditing = !!experiencia;

//   return { form, handleChange, handleSubmit, loading, error, isEditing };
// }
