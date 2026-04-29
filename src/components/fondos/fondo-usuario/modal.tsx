import type { Usuario } from "../../../types/usuario";
import { Button } from "../../ui/button";
import { useFondosUsuario } from "../../../hooks/use-fondo-usuario";
import { TableModal } from "./table-modal";

interface ModalProps {
  onClose: () => void;
  usuario: Usuario;
}

export function Modal({ onClose, usuario }: ModalProps) {
  const { fondosByUsuario, loading, error, refetch } = useFondosUsuario(
    usuario.documento,
  );

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Cargando...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-fit">
      <h2 className="text-xl font-semibold mb-4">Detalles del Usuario</h2>
      <p>
        <strong>Documento:</strong> {usuario.documento}
      </p>
      <p>
        <strong>Nombre:</strong> {usuario.nombre} {usuario.apellido}
      </p>

      {fondosByUsuario && fondosByUsuario.length > 0 ? (
        <TableModal fondosByUsuario={fondosByUsuario} onRefetch={refetch} />
      ) : (
        <p className="mt-6">Este usuario no tiene fondos registrados.</p>
      )}

      <Button onClick={onClose} className="bg-gray-400 hover:bg-gray-500">
        Salir
      </Button>
    </div>
  );
}
