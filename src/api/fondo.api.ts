import type { Fondo } from "../types/fondo";

const API_BASE_URL =
  (import.meta as unknown as { env?: { VITE_API_URL?: string } }).env
    ?.VITE_API_URL ?? "";

export async function getFondos(): Promise<Fondo[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/fondos/`);
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
