import type { Usuario } from "../types/usuario";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function getUsuarios(): Promise<Usuario[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/usuarios`);
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Error fetching usuario");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching usuarios:", error);
    throw error;
  }
}
