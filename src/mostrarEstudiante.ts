import { Address, Estudiante } from "./tipos"

export default function mostrarEstudiante (estudiante : Estudiante){

    console.log(`Nombres : ${estudiante.nombre}`)
    console.log(`Apellido : ${estudiante.apellido}`)
    console.log(`Edad : ${estudiante.edad || `NO DEFINIDO`} `)
    console.log("----------------DIRECCIONES-----------------")
    estudiante.addresses?.forEach(function(direccion:Address){
    console.log(`Calle : ${direccion.street}`)
    console.log(`Numero : ${direccion.postCode}`)
    console.log(`Ciudad : ${direccion.city}`)
    console.log("---------------------------------")
})
}