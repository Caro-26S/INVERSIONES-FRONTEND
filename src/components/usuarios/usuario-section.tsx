import { Button } from "../ui/button";
import { UsuarioTable } from "./usuario-table";
import { useUsuario } from "../../hooks/use-usuario";
// import { ModalAction } from "./modal-action";

export function UsuarioSection() {
  const { usuarios, loading, error } = useUsuario();
  // const [isAddOpen, setIsAddOpen] = useState(false);
  // const [isEditOpen, setIsEditOpen] = useState(false);
  // const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);

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

      {/* {isAddOpen && <ModalAction onClose={() => setIsAddOpen(false)} />}

      {isEditOpen && selectedUsuario && (
        <ModalAction
          onClose={() => setIsEditOpen(false)}
          usuario={selectedUsuario}
        />
      )} */}
    </div>
  );
}
