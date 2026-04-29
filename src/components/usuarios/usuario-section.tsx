import { Button } from "../ui/button";
import { UsuarioTable } from "./usuario-table";
import { useUsuario } from "../../hooks/use-usuario";

export function UsuarioSection() {
  const { usuarios, loading, error } = useUsuario(null);

  console.log("Usuarios:", error);

  if (loading) return <div>Cargando usuarios...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!usuarios || usuarios.length === 0)
    return <div>No hay usuarios registrados.</div>;

  return (
    <div>
      <Button className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200">
        Agregar Usuario
      </Button>
      <UsuarioTable usuarios={usuarios} />
    </div>
  );
}
