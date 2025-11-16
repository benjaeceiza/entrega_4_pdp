import { Dificultad, Estado, Tarea } from "../models/tareaModelo";
import { input } from "./readline";
import { verificarDificultad } from "./verificarDificultad";
import { verificarEstado } from "./verificarEstado";

export async function pedirDatosTarea(tamano: number): Promise<Tarea> {

    // PETICIONES DE ATRIBUTOS
    const titulo: string = await input("Título: ");
    const descripcion: string = await input("Descripción:\n");
    const dificultad: Dificultad = await verificarDificultad();
    const estado: Estado = await verificarEstado();

    // FORMATEAMOS FECHA DE VENCIMIENTO +10 DIAS DE LA FECHA DE CREACION
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    fechaActual.setDate(diaActual + 10);

    // CREAMOS NUEVA TAREA
    const tareaNueva: Tarea = {
        id: tamano + 1,
        titulo: titulo ? titulo : "Sin titulo",
        descripcion: descripcion ? descripcion : "Sin descrupcion",
        dificultad,
        estado,
        creacion: new Date(),
        vencimiento: fechaActual,
        ultimaEdicion: new Date()

    }



    return tareaNueva;

}