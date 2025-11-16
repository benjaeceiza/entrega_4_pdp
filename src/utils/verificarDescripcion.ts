import { Tarea } from "../models/tareaModelo";
import { input } from "./readline";

export async function verificarDescripcion(tarea:Tarea):Promise<string> {
     
    const descripcion:string = await input(`Descripción: `)

    if(descripcion == " "){return "Sin descripción"};
    if(descripcion == ""){return tarea.descripcion};

    
    return descripcion;
}