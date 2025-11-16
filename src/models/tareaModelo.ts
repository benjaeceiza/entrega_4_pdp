
export type Dificultad = "⭐" | "⭐⭐" | "⭐⭐⭐";
export type Estado = "Pendiente" | "En curso" | "Terminada" | "Cancelada";

export interface Tarea {
    id:number,
    titulo: string;
    descripcion: string;
    estado: Estado;
    creacion: Date;
    ultimaEdicion: Date;
    vencimiento: Date;
    dificultad: Dificultad;
}

