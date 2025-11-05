import { Tarea } from "./tipos/tareaModelo";
import { input } from "./readline";

export async function verTareas(arrayTareas: Tarea[]): Promise<void> {
    console.log("\n---------------------\n");
    console.log("¿Qué tareas desea ver?\n");
    console.log("---------------------\n");

    const opcion = parseInt(
        await input(`[1] Todas\n[2] Pendientes\n[3] En curso\n[4] Terminadas\n[5] Canceladas\n[0] Volver\n`)
    );

    switch (opcion) {
        case 1:
            console.log("\n---------------------\n");
            console.log("Todas las tareas\n");
            console.log("---------------------\n");
            arrayTareas.forEach((tarea, index) => console.log(`[${index + 1}] ${tarea.titulo}`));
            break;

        case 2:
            console.log("\n---------------------\n");
            console.log("Tareas Pendientes\n");
            console.log("---------------------\n");

            const arrayTareasPendientes: Tarea[] = arrayTareas.filter(t => t.estado === "Pendiente")
            arrayTareasPendientes.forEach((tarea, index) => console.log(`[${index + 1}] ${tarea.titulo}`));

            break;

        case 3:
            console.log("\n---------------------\n");
            console.log("Tareas en curso\n");
            console.log("---------------------\n");

            const arrayTareasEnCurso: Tarea[] = arrayTareas.filter(t => t.estado === "En curso")
            arrayTareasEnCurso.forEach((tarea, index) => console.log(`[${index + 1}] ${tarea.titulo}`));

            break;

        case 4:
            console.log("\n---------------------\n");
            console.log("Tareas Terminadas\n");
            console.log("---------------------\n");

            const arrayTareasTerminadas: Tarea[] = arrayTareas.filter(t => t.estado === "Terminada")
            arrayTareasTerminadas.forEach((tarea, index) => console.log(`[${index + 1}] ${tarea.titulo}`));
            break;

        case 5:
            console.log("\n---------------------\n");
            console.log("Tareas Canceladas\n");
            console.log("---------------------\n");

            const arrayTareasCanceladas: Tarea[] = arrayTareas.filter(t => t.estado === "Cancelada")
            arrayTareasCanceladas.forEach((tarea, index) => console.log(`[${index + 1}] ${tarea.titulo}`));
            break;

        case 0:
            return;

        default:
            console.log("⚠️ Opción inválida.");
    }

    await verTareas(arrayTareas); // recursivo: vuelve al menú
}
