import { Tarea } from "./models/tareaModelo";
import { filtrarByEstado } from "./store/store";
import { input } from "./utils/readline";
import { mostrarTareas } from "./store/store";
import { detalleTarea } from "./detalleTarea";
import { pulsar } from "./utils/pulsar";


export async function verTareas(arrayTareas: Tarea[]): Promise<void> {
    console.log("\n---------------------");
    console.log("¿Qué tareas deseas ver?");
    console.log("---------------------\n");

    const opcion = parseInt(
        await input(`[1] Todas\n[2] Pendientes\n[3] En curso\n[4] Terminadas\n[5] Canceladas\n[0]  Volver\n`)
    );

    switch (opcion) {
        case 1:

            console.log("\n---------------------");
            console.log("Todas las tareas");
            console.log("---------------------\n");


              // CONTROLAMOS QUE NO ESTE VACIA
            if (arrayTareas.length == 0) {
                console.log("No hay tareas");

                await pulsar();
                break;
            }

            // MUESTRA LAS TODAS LAS TAREAS
            console.log(mostrarTareas(arrayTareas));

            // MUESTRA EL DETALLE DE UNA TAREA SI ES SELECCIONADA
            await detalleTarea(arrayTareas, arrayTareas);
            return;

        case 2:

            console.log("\n---------------------");
            console.log("Tareas Pendientes");
            console.log("---------------------\n");

            // FILTRA LAS TAREAS POR ESTADO
            const arrayFiltradoPendiente = filtrarByEstado(arrayTareas, "Pendiente");

            // CONTROLAMOS QUE NO ESTE VACIA
            if (arrayFiltradoPendiente.length == 0) {
                console.log("No hay tareas en curso");

                await pulsar();
                break;
            }

            // MUESTRA LAS TAREAS FILTRADAS
            console.log(mostrarTareas(arrayFiltradoPendiente));

            // MUESTRA EL DETALLE DE UNA TAREA SI ES SELECCIONADA
            await detalleTarea(arrayFiltradoPendiente, arrayTareas);
            return;

        case 3:

            console.log("\n---------------------");
            console.log("Tareas en curso");
            console.log("---------------------\n");

            // FILTRA LAS TAREAS POR ESTADO
            const arrayFiltradoEnCurso = filtrarByEstado(arrayTareas, "En curso");

            // CONTROLAMOS QUE NO ESTE VACIA
            if (arrayFiltradoEnCurso.length == 0) {
                console.log("No hay tareas en curso");

                await pulsar();
                break;
            }

            // MUESTRA LAS TAREAS FILTRADAS 
            console.log(mostrarTareas(arrayFiltradoEnCurso));

            // MUESTRA EL DETALLE DE UNA TAREA SI ES SELECCIONADA
            await detalleTarea(arrayFiltradoEnCurso, arrayTareas);
            return;

        case 4:

            console.log("\n---------------------");
            console.log("Tareas Terminadas");
            console.log("---------------------\n");

            // FILTRA LAS TAREAS POR ESTADO
            const arrayFiltradoTerminada = filtrarByEstado(arrayTareas, "Terminada");

            // CONTROLAMOS QUE NO ESTE VACIA
            if (arrayFiltradoTerminada.length == 0) {
                console.log("No hay tareas terminadas");

                await pulsar()
                break;
            }


            // MUESTRA LAS TAREAS FILTRADAS
            console.log(mostrarTareas(arrayFiltradoTerminada));

            // MUESTRA EL DETALLE DE UNA TAREA SI ES SELECCIONADA
            await detalleTarea(arrayFiltradoTerminada, arrayTareas);
            return;

        case 5:

            console.log("\n---------------------");
            console.log("Tareas Canceladas");
            console.log("---------------------\n");

            // FILTRA LAS TAREAS POR ESTADO
            const arrayFiltradoCancelada = filtrarByEstado(arrayTareas, "Cancelada");

            // CONTROLAMOS QUE NO ESTE VACIA
            if (arrayFiltradoCancelada.length == 0) {
                console.log("No hay tareas canceladas");

                await pulsar()
            }

            // MUESTRA LAS TAREAS FILTRADAS 
            console.log(mostrarTareas(arrayFiltradoCancelada));

            // MUESTRA EL DETALLE DE UNA TAREA SI ES SELECCIONADA
            await detalleTarea(arrayFiltradoCancelada, arrayTareas);
            return;

        case 0:
            return;

        default:
            console.log("Opcion inválida.");
    }

    await verTareas(arrayTareas);
}

