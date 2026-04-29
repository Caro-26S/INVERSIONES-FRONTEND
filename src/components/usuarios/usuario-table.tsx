import { Button } from "../ui/button";
import type { Usuario } from "../../types/usuario";

interface UsuarioTableProps {
  usuarios: Usuario[];
}

export function UsuarioTable({ usuarios }: UsuarioTableProps) {
  return (
    <div>
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100">
          <tr className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <th className="px-4 py-2">Documento</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Apellido</th>
            <th className="px-4 py-2">Correo</th>
            <th className="px-4 py-2">Código Referido</th>
            <th className="px-4 py-2">Referido por</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {usuarios.map((usuario) => (
            <tr key={usuario.documento} className="hover:bg-gray-50">
              <td className="text-sm p-4">{usuario.documento}</td>
              <td className="text-sm p-4">{usuario.nombre}</td>
              <td className="text-sm p-4">{usuario.apellido}</td>
              <td className="text-sm p-4">{usuario.correo}</td>
              <td className="text-sm p-4">{usuario.cod_ref}</td>
              <td className="text-sm p-4">{usuario.cod_usuario_ref}</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    className="bg-green-100 hover:bg-green-200 text-green-600"
                    size={"lg"}
                    // onClick={() => onEdit?.(usuario)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="destructive"
                    size={"lg"}
                    // onClick={() => confirmDelete(exp)}
                  >
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
