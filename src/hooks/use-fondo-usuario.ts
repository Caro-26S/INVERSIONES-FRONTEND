import { useState, useEffect } from "react";
import type { FondoUsuario } from "../types/fondo-usuario";
import { getFondosUsuario } from "../api/fondo-usuario";

interface UseFondoResult {
  fondosByUsuario: FondoUsuario[] | null;
  setFondosByUsuario: (fondosUsuario: FondoUsuario[] | null) => void;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useFondosUsuario(usuarioDoc: string): UseFondoResult {
  const [fondosByUsuario, setFondosByUsuario] = useState<FondoUsuario[] | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [trigger, setTrigger] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;

    getFondosUsuario(usuarioDoc)
      .then((data) => {
        if (!cancelled) {
          setFondosByUsuario(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [usuarioDoc, trigger]);

  const refetch = () => setTrigger((prev) => prev + 1);

  return { fondosByUsuario, setFondosByUsuario, loading, error, refetch };
}
