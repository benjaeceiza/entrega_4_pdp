import { Tarea } from "../models/tareaModelo"

export const arrayTareas: Tarea[] = [
{    
    id:1,
    titulo: "Hacer la tarea",
    descripcion: "hacer la tarea de ingles antes de que se venza la entrega",
    estado: "Pendiente",
    creacion: new Date(),
    ultimaEdicion: new Date(),
    vencimiento: new Date(),
    dificultad:"⭐⭐"
   
},
{   
    id:2,
    titulo: "Ir al almacen",
    descripcion: "Comprar la comida de la semana.",
    estado: "Terminada",
    creacion: new Date(),
    ultimaEdicion: new Date(),
    vencimiento: new Date(),
    dificultad:"⭐"
   
},
{   
    id:3,
    titulo: "Limpiar el auto",
    descripcion: "Limpiar el auto con hidrolaavadora",
    estado: "Cancelada",
    creacion: new Date(),
    ultimaEdicion: new Date(),
    vencimiento: new Date(),
    dificultad:"⭐⭐"
   
}

]