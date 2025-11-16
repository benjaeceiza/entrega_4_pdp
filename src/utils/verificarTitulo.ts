import { Tarea } from "../models/tareaModelo";
import { input } from "./readline";

export async function verificarTitulo(tarea:Tarea):Promise<string> {
     
    const titulo:string = await input(`Titulo: `)

    if(titulo == " "){return "Sin titulo"};
    if(titulo == ""){return tarea.titulo};

    
    return titulo;
}