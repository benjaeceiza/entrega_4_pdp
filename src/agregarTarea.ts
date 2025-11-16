
import { Tarea } from "./models/tareaModelo";
import { pedirDatosTarea } from "./utils/pedirDatosTarea";
import { pulsar } from "./utils/pulsar";

export async function agregarTarea(tamano: number): Promise<Tarea> {
    console.log("\n-----------------------------");
    console.log("Agregar una tarea");
    console.log("-----------------------------\n");

    const nuevaTarea: Tarea = await pedirDatosTarea(tamano);

    console.log("\n-----------------------------");
    console.log("Tarea agregada cone exito! ");
    console.log("-----------------------------\n");
    
    await pulsar();
    return nuevaTarea;

}