
import { detalleTarea } from "./detalleTarea";
import { Tarea } from "./models/tareaModelo";
import { buscarTareaByTitulo, mostrarTareas } from "./store/store";
import { pulsar } from "./utils/pulsar";
import { input } from "./utils/readline";

export async function buscarTarea(arrayTareas: Tarea[]): Promise<void> {

    console.log("\n-----------------------------");
    console.log("Ingrese el nombre de la tarea");
    console.log("-----------------------------\n");

    const tareaBuscar: string = await input(``);


    const tareasEcontradas: Tarea[] = buscarTareaByTitulo(arrayTareas, tareaBuscar);

    if (tareasEcontradas.length == 0) {
        console.log("\n-----------------------------");
        console.log("Tarea no encontrada! ");
        console.log("-----------------------------\n");

        await pulsar();
        return;

    }

    // SE MUESTRAN LOS RESULTADOS
    console.log("\n-----------------------------");
    console.log("Resultado de busqueda: ");
    console.log("-----------------------------\n");
    console.log(mostrarTareas(tareasEcontradas));

    // MUESTRA EL DETALLE DE UNA TAREA SI ES SELECCIONADA
    await detalleTarea(tareasEcontradas,arrayTareas);



}