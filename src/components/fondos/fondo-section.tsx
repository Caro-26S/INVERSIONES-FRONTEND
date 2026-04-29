import { Button } from "../ui/button";
import { FondoTable } from "./fondo-table";
import { useFondo } from "../../hooks/use-fondos";

export function FondoSection() {
  const { fondos, loading, error } = useFondo();

  if (loading) return <div>Cargando fondos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!fondos || fondos.length === 0)
    return <div>No hay fondos registrados.</div>;

  return (
    <div>
      <Button className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200">
        Agregar Fondo
      </Button>
      <FondoTable fondos={fondos} />
    </div>
  );
}
