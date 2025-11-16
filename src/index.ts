import { input, closeInput } from "./utils/readline";
import { verTareas } from "./verTareas";
import { arrayTareas as TareasIniciales } from "./data/tareas";
import { buscarTarea } from "./buscarTarea";
import { agregarTarea } from "./agregarTarea";
import { Tarea } from "./models/tareaModelo";
import { agregarNuevaTarea } from "./store/store";

async function mostrarMenu(): Promise<void> {
    console.log("\n---------------------");
    console.log("Que desea hacer?");
    console.log("---------------------\n");
    console.log(`[1] Ver Mis Tareas.\n[2] Buscar una Tarea.\n[3] Agregar una Tarea.\n[0] Salir.\n`);

}


export async function preguntar(tareas:Tarea[]): Promise<void> {


    await mostrarMenu();

    const opcion: number = parseInt(await input(``));

    switch (opcion) {
        case 1:
            await verTareas(tareas);
            break;

        case 2:
            await buscarTarea(tareas)
            break;

        case 3:
            const nuevaTarea: Tarea = await agregarTarea(tareas.length);
            tareas = agregarNuevaTarea(tareas,nuevaTarea);
            return preguntar(tareas);
    

        case 0:
            closeInput();
            return;

        default:
            console.log("Opción invalida");
    }


    await preguntar(tareas);
}

preguntar(TareasIniciales);
