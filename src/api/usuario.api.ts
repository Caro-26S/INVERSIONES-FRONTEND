import type { Usuario } from "../types/usuario";

// import.meta.env may not be typed in the current TS config, assert any to avoid type error
const API_BASE_URL =
  (import.meta as unknown as { env?: { VITE_API_URL?: string } }).env
    ?.VITE_API_URL ?? "";

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

export async function createUsuario(
  usuario: Partial<Usuario>,
): Promise<Usuario> {
  try {
    const response = await fetch(`${API_BASE_URL}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Error creating usuario");
    }
    return response.json();
  } catch (error) {
    console.error("Error creating usuario:", error);
    throw error;
  }
}
