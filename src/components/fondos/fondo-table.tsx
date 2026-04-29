import { Button } from "../ui/button";
import type { Fondo } from "../../types/fondo";

interface FondoTableProps {
  fondos: Fondo[];
}

export function FondoTable({ fondos }: FondoTableProps) {
  return (
    <div>
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100">
          <tr className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Monto Mínimo</th>
            <th className="px-4 py-2">Tasa Mensual</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {fondos.map((fondo) => (
            <tr key={fondo.id} className="hover:bg-gray-50">
              <td className="text-sm p-4">{fondo.nombre}</td>
              <td className="text-sm p-4">{fondo.monto_min}</td>
              <td className="text-sm p-4">{fondo.tasa_mensual}</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    className="bg-green-100 hover:bg-green-200 text-green-600"
                    size={"lg"}
                    // onClick={() => onEdit?.(fondo)}
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
