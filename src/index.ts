import { input, closeInput } from "./readline";
import { verTareas } from "./verTareas";
import { arrayTareas } from "./data/tareas";
import { buscarTarea } from "./buscarTarea";
import { agregarTarea } from "./agregarTarea";

async function mostrarMenu(): Promise<void> {
    console.log("\n---------------------\n");
    console.log("Que desea hacer?\n");
    console.log("---------------------\n");
    console.log(`[1] Ver Mis Tareas.\n[2] Buscar una Tarea.\n[3] Agregar una Tarea.\n[0] Salir.\n`);
    
}


async function preguntar(): Promise<void> {
    await mostrarMenu();

    const opcion = parseInt(
        await input(``)
    );

    switch (opcion) {
        case 1:
            await verTareas(arrayTareas);
            break;
        case 2:
            await buscarTarea(arrayTareas)
            break;

        case 3:
            await agregarTarea(arrayTareas);
            break;
        case 4:
            closeInput();
            return;
        default:
            console.log("Opción invalida");
    }


    await preguntar();
}

preguntar();
