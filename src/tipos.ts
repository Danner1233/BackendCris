export type Address = {
    street: string,
    city: string,
    country: string
    postCode?:string
}

export type Estudiante = {
    nombre: string,
    apellido: string,
    edad?:  number
    addresses?: Address[]

}