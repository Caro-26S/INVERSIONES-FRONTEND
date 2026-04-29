import { useState, useEffect } from "react";
import type { Fondo } from "../types/fondo";
import { getFondos } from "../api/fondo.api";

interface UseFondoResult {
  fondos: Fondo[] | null;
  setFondos: (fondos: Fondo[] | null) => void;
  loading: boolean;
  error: string | null;
}

export function useFondo(): UseFondoResult {
  const [fondos, setFondos] = useState<Fondo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getFondos()
      .then((data) => {
        if (!cancelled) {
          setFondos(data);
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
  }, []);

  return { fondos, setFondos, loading, error };
}
