import { Dificultad } from "../models/tareaModelo";
import { input } from "./readline";

export async function verificarDificultad(): Promise<Dificultad> {
    const dificultadPrev:string = await input("Dificultad ([1] baja/ [2] media/ [3] alta): \n");

    const mapa: Record<string, Dificultad> = {
        "1": "⭐",
        "2": "⭐⭐",
        "3": "⭐⭐⭐"
    };

    if (!mapa[dificultadPrev]) {
        console.log("Valor inválido, se pondrá por defecto ⭐");
        return "⭐";
    }

    return mapa[dificultadPrev];
}
