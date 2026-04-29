import { useState, useEffect } from "react";
import type { Usuario } from "../types/usuario";
import { getUsuarios } from "../api/usuario.api";

interface UseUsuarioResult {
  usuarios: Usuario[] | null;
  setUsuarios: (usuarios: Usuario[] | null) => void;
  loading: boolean;
  error: string | null;
}

export function useUsuario(documento: string | null): UseUsuarioResult {
  const [usuarios, setUsuarios] = useState<Usuario[] | null>(null);
  const [loading, setLoading] = useState<boolean>(!!documento);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getUsuarios()
      .then((data) => {
        if (!cancelled) {
          setUsuarios(data);
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

  return { usuarios, setUsuarios, loading, error };
}
