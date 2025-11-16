import { preguntar } from ".";
import { editarTarea } from "./editarTarea";
import { Tarea } from "./models/tareaModelo";
import { detalleTareaSeleccionada } from "./store/store";
import { seleccionarTarea } from "./utils/seleccionarTarea";


export async function detalleTarea(arrayTareasFiltrado: Tarea[],arrayOriginal:Tarea[]) {

  
    //PETICION DE UN NUMERO PARA VER UNA TAREA 
    const tareaSeleccionada: Tarea = await seleccionarTarea(arrayTareasFiltrado,arrayOriginal, "\nSi desea ver una tarea ingrese su numero. Para volver ingrese 0\n");

    // MUESTRA LA TAREA SELECCIONADA
    console.log(detalleTareaSeleccionada(tareaSeleccionada));

   const listaEditada:Tarea[] =  await editarTarea(tareaSeleccionada,arrayOriginal);

   return preguntar(listaEditada);


}