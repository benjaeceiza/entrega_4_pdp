
import { Tarea } from "./models/tareaModelo";
import { pedirDatosTareaEditar } from "./utils/pedirDatosTareaEditar";
import { pulsar } from "./utils/pulsar";
import { input } from "./utils/readline";

export async function editarTarea(tarea: Tarea, arrayTareas: Tarea[]): Promise<Tarea[]> {

    const editar: string = await input(`\nDeseas editar la tarea? Ingresa E, para volver ingresa 0\n`);

    // VALIDAR OPCI0N
    if (editar.toLowerCase() !== "e" && editar !== "0") {
        console.log("Opción inválida, intentá de nuevo...");
        return editarTarea(tarea, arrayTareas);
    }

    // VOLVER SIN CAMBIOS
    if (editar === "0") {
        return arrayTareas;
    }

    // PEDIR DATOS PARA EDITAR
    const tareaEditada: Tarea = await pedirDatosTareaEditar(tarea);

    // CREAR NUEVA LISTA EDITADA
    const nuevaLista: Tarea[] = arrayTareas.map(t => {
        if (t.id === tareaEditada.id) {
            return { ...t, ...tareaEditada};
        }

        return t;
    });


    console.log("\n-----------------------------");
    console.log("Tarea editada con exito! ");
    console.log("-----------------------------\n");
    await pulsar();

    return nuevaLista;
}
