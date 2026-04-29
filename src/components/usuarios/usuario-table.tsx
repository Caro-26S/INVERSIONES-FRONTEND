import { Button } from "../ui/button";
import type { Usuario } from "../../types/usuario";
import { useState } from "react";
import { Modal } from "../fondos/fondo-usuario/modal";

interface UsuarioTableProps {
  usuarios: Usuario[];
}

export function UsuarioTable({ usuarios }: UsuarioTableProps) {
  const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
                  <Button
                    className="bg-blue-100 text-blue-600 hover:bg-blue-200"
                    size={"lg"}
                    onClick={() => {
                      setSelectedUsuario(usuario);
                      setIsViewDetailsOpen(true);
                    }}
                  >
                    Ver Detalles
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isViewDetailsOpen && selectedUsuario && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsViewDetailsOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Modal
              onClose={() => setIsViewDetailsOpen(false)}
              usuario={selectedUsuario}
            />
          </div>
        </div>
      )}
    </div>
  );
}
