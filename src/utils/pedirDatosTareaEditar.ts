import { Dificultad, Estado, Tarea } from "../models/tareaModelo";
import { verificarDescripcion } from "./verificarDescripcion";
import { verificarDificultadEditar } from "./verificarDificultadEditar";
import { verificarEstadoEditar } from "./verificarEstadoEditar";
import { verificarTitulo } from "./verificarTitulo";

export async function pedirDatosTareaEditar(tareaOriginal: Tarea): Promise<Tarea> {

    console.log("Para mantener un dato pulse enter, si quiere dejarlo en blanco ingrese un espacio");


    // PETICIONES DE ATIBUTOS
    const titulo: string = await verificarTitulo(tareaOriginal);
    const descripcion: string = await verificarDescripcion(tareaOriginal);
    const dificultad: Dificultad = await verificarDificultadEditar(tareaOriginal);
    const estado: Estado = await verificarEstadoEditar(tareaOriginal);


    //   NUEVA TAREA
    const tareaNueva: Tarea = {
        id: tareaOriginal.id,
        titulo: titulo,
        descripcion: descripcion,
        dificultad,
        estado,
        creacion: tareaOriginal.creacion,
        vencimiento: new Date(),
        ultimaEdicion: new Date()

    }

    return tareaNueva;

}