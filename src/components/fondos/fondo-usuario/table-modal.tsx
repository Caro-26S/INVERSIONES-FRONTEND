import { useEffect, useState } from "react";
import type { FondoUsuario } from "../../../types/fondo-usuario";
import { Button } from "../../ui/button";
import { simularMeses } from "../../../api/fondo-usuario";

interface TableModalProps {
  fondosByUsuario: FondoUsuario[] | null;
  onRefetch: () => void;
}

export function TableModal({ fondosByUsuario, onRefetch }: TableModalProps) {
  const formatFecha = (fecha: Date) =>
    new Date(fecha).toLocaleDateString("es-CO", {
      month: "long",
      year: "numeric",
    });
  const [fondoSeleccionado, setFondoSeleccionado] =
    useState<FondoUsuario | null>(null);
  const [simular, setSimular] = useState(false);

  useEffect(() => {
    console.log({ simular, fondoSeleccionado, onRefetch });
    if (simular) {
      console.log({ simular, fondoSeleccionado, onRefetch });
      simularMeses(fondoSeleccionado!.id).then(() => {
        onRefetch();
        setSimular(false);
        setFondoSeleccionado(null);
      });
    }
  }, [simular, fondoSeleccionado, onRefetch]);

  return (
    <div className="mt-4">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100">
          <tr className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <th className="px-4 py-2">Nombre Fondo</th>
            <th className="px-4 py-2">Fecha Registro</th>
            <th className="px-4 py-2">Inversión Inicial</th>
            <th className="px-4 py-2">Valor Actual</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {fondosByUsuario?.map((fondo) => (
            <tr key={fondo.id} className="hover:bg-gray-50">
              <td className="text-sm p-4">{fondo.fondo_id}</td>
              <td className="text-sm p-4">
                {formatFecha(fondo.fecha_registro)}
              </td>
              <td className="text-sm p-4">{fondo.inversion_inicial}</td>
              <td className="text-sm p-4">{fondo.valor_actual}</td>
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
                      setSimular(true);
                      setFondoSeleccionado(fondo);
                    }}
                  >
                    Simular Meses
                  </Button>
                  <Button
                    className="bg-blue-100 text-blue-600 hover:bg-blue-200"
                    size={"lg"}
                  >
                    Ver Detalles
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
