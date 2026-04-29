// import type { Usuario } from "../../types/usuario";
// import { Field } from "../field";
// import { Button } from "../ui/button";

// interface ModalActionProps {
//   usuario?: Usuario;
//   onClose: () => void;
// }

// export function ModalAction({ usuario, onClose }: ModalActionProps) {
//   const { form, loading, error, handleChange, handleSubmit, isEditing } =
//     useModalUsuario({
//       usuario,
//       onClose,
//       onSave,
//     });

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//       <h2 className="text-xl font-bold">
//         {isEditing ? "Editar Usuario" : "Agregar Usuario"}
//       </h2>
//       <hr className="mb-4 mt-2" />

//       {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//       <form>
//         <Field
//           id="Empresa"
//           label="Empresa"
//           value={form.Empresa}
//           onChange={handleChange}
//         />
//         <Field
//           id="Cargo"
//           label="Cargo"
//           value={form.Cargo}
//           onChange={handleChange}
//         />

//         <div className="mb-4">
//           <label
//             htmlFor="Funciones"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Funciones
//           </label>
//           <textarea
//             id="Funciones"
//             name="Funciones"
//             value={form.Funciones}
//             onChange={handleChange}
//             rows={3}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-xs focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         <Field
//           id="Fecha_Inicio"
//           label="Fecha de Inicio"
//           value={form.Fecha_Inicio}
//           onChange={handleChange}
//           type="date"
//         />
//         <Field
//           id="Fecha_Fin"
//           label="Fecha de Fin"
//           value={form.Fecha_Fin}
//           onChange={handleChange}
//           type="date"
//           hint="(dejar vacío si es tu trabajo actual)"
//         />
//       </form>

//       <div className="flex justify-end gap-1">
//         <Button onClick={onClose} className="bg-gray-400 hover:bg-gray-500">
//           Cancelar
//         </Button>
//         <Button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="bg-blue-500 hover:bg-blue-600"
//         >
//           {loading ? "Guardando..." : isEditing ? "Actualizar" : "Agregar"}
//         </Button>
//       </div>
//     </div>
//   );
// }
