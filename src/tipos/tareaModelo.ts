
export interface Tarea {
    titulo: string;
    descripcion: string;
    estado: "Pendiente" | "En curso"| "Terminada" | "Cancelada";
    creacion: Date;
    ultimaEdicion: Date;
    vencimiento: Date;
    dificultad: "⭐⭐⭐"| "⭐⭐" | "⭐";
}