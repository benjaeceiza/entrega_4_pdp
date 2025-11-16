import { Estado, Tarea } from "../models/tareaModelo";
import { input } from "./readline";

export async function verificarEstadoEditar(tarea:Tarea):Promise<Estado> {
    
  const estadoPrev:string = await input("Estado ([1] Pendiente / [2] En curso/ [3] Terminada / [4] Cancelada): \n");
  
      const mapa: Record<string, Estado> = {
          "1": "Pendiente",
          "2": "En curso",
          "3": "Terminada",
          "4": "Cancelada",
          " ": "Pendiente",
          "": tarea.estado
      };
  
      if (!mapa[estadoPrev]) {
          console.log("\nValor inválido, se pondrá por defecto Pendiente");
          return "Pendiente";
      }
  
      return mapa[estadoPrev];

}