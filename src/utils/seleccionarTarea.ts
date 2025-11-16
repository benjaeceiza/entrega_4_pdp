import { preguntar } from "..";
import { Tarea } from "../models/tareaModelo";
import { input } from "./readline";

export async function seleccionarTarea(arrayTareasFiltrado:Tarea[],arrayTareas: Tarea[], mensaje: string): Promise<Tarea> {

    // PIDE EL VALOR
    const valor = await input(mensaje);
    const num = parseInt(valor);

    // VERIFICA QUE NO SEA STRING
    if (isNaN(num)) {
        console.log("\nOpción inválida, intentelo de nuevo...");
        return seleccionarTarea(arrayTareasFiltrado,arrayTareas, mensaje);
    }

    // SI ES 0 VOLVEMOS A MENU PRICIPAL
    if (num == 0) {
        await preguntar(arrayTareas);
    }


    // VERIFICAMOS QUE ESA TAREA EXISTA
    const tareaSeleccionada = arrayTareasFiltrado.find((tarea, index) => index + 1 === num);

    // SI NO EXISTE, LLAMAMOS DE NUEVO A LA FUNCION PARA VOLVER A INGRESAR EL DATO
    if (!tareaSeleccionada) {
        console.log("\nNo existe una tarea con ese número, intentelo de nuevo...");
        return seleccionarTarea(arrayTareasFiltrado,arrayTareas, mensaje);
    }

    return tareaSeleccionada;
}
