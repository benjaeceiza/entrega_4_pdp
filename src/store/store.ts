
import { Tarea } from "../models/tareaModelo";


// DEVUELVE UN STRING DEL LISTADO DE TAREAS
export function mostrarTareas(arrayTareas: Tarea[]): string {

    return arrayTareas
        .map((tarea, index) => `[${index + 1}] ${tarea.titulo}`)
        .join("\n");
}


// FILTRA TAREAS POR ESTADO
export function filtrarByEstado(arrayTareas: Tarea[], estado: string): Tarea[] {

    const arrayFiltrado: Tarea[] = arrayTareas.filter(t => t.estado === estado)
    return arrayFiltrado;
}

// DEVUELVE UN STRING CON EL DETALLE DE LA TAREA
export function detalleTareaSeleccionada(tarea: Tarea): string {
    return `
---------------------
Tarea seleccionada
---------------------
Título: ${tarea.titulo}
Descripción: ${tarea.descripcion}
Dificultad: ${tarea.dificultad}
Estado: ${tarea.estado}
Creación: ${tarea.creacion.toLocaleDateString()}
Vencimiento: ${tarea.vencimiento.toLocaleDateString()}
`;
}


// BUSCA LA TAREA POR EL TITULO
export function buscarTareaByTitulo(arrayTareas:Tarea[],titulo:string):Tarea []{

    const tareasEcontradas: Tarea[] = arrayTareas.filter(e => e.titulo.toLowerCase() == titulo.toLowerCase());
    return tareasEcontradas;

}

// AGREAGA UNA NUEVA TAREA
export function agregarNuevaTarea(lista: Tarea[], nueva: Tarea): Tarea[] {
    return [...lista, nueva];
}

