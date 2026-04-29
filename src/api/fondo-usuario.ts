import type { FondoUsuario } from "../types/fondo-usuario";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function getFondosUsuario(
  usuarioDoc: string,
): Promise<FondoUsuario[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/fondos-usuario/usuario/${usuarioDoc}`,
    );
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Error fetching fondo");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching fondos:", error);
    throw error;
  }
}

export async function simularMeses(id: number): Promise<void> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/fondos-usuario/simular/${id}`,
    );
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Error fetching fondo");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching fondos:", error);
    throw error;
  }
}
