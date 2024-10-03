import mostrarEstudiante from "./mostrarEstudiante";
import { Address, Estudiante } from "./tipos";

// Definición de estudiantes
const e1: Estudiante = {
    nombre: "Andres",
    apellido: "Suarez",
    addresses: [
        {
            street: "Calle 1",
            city: "Bogota",
            country: "Colombia",
            postCode: "123456"
        },
        {
            street: "Calle 2",
            city: "Bogota",
            country: "Colombia",
            postCode: "133456"
        },
        {
            street: "Calle 3",
            city: "Bogota",
            country: "Colombia",
            postCode: "123459"
        }
    ]
};

const e2: Estudiante = {
    nombre: "Carlos",
    apellido: "Martines",
    edad: 21,
    addresses: [
        {
            street: "Carrera 88 #127 c61",
            city: "Choco",
            country: "Colombia",
            postCode: "123456"
        },
        {
            street: "Calle 2",
            city: "costa",
            country: "Colombia",
            postCode: "133456"
        },
        {
            street: "Calle 3",
            city: "costa",
            country: "Colombia",
            postCode: "123459"
        }
    ]
};

const e3: Estudiante = {
    nombre: "Danner",
    apellido: "Arias",
    edad: 21,
    addresses: [
        {
            street: "Calle 2",
            city: "cali",
            country: "Colombia",
            postCode: "123456"
        },
        {
            street: "Calle 3",
            city: "cali",
            country: "Colombia",
            postCode: "133456"
        },
        {
            street: "Calle 5",
            city: "cali",
            country: "Colombia",
            postCode: "123459"
        }
    ]
};

const   e4: string = "hola mundo"
const   e5: number = 12312312

let arregloEstudiante: Estudiante[] = [];

// Método para agregar un estudiante definido
const addEstudiante = (e: Estudiante) => {
    arregloEstudiante.push(e);
};

// Invocar estudiante del arreglo
addEstudiante(e1);
addEstudiante(e3);
addEstudiante(e4);
addEstudiante(e5);

const addEstudiantePrin = (e: Estudiante) => {
    arregloEstudiante.unshift(e);
};

addEstudiantePrin(e2);

const actualizarApellidopornombre = (nombre: string, apellido: string) => {
    const estudiante = arregloEstudiante.find(e => e.nombre === nombre);
    
    if (estudiante) {
        estudiante.apellido = apellido;
    } else {
        console.log(`No se encontró un estudiante con el nombre: ${nombre}`);
    }
};

// Ejemplo de uso
const encontrarBogotanos = (nuevaCiudad: string) => {
    const estudiantesBogotanos = arregloEstudiante.filter(estudiante =>
        estudiante.addresses && estudiante.addresses.some(direccion => direccion.city.toLowerCase() === nuevaCiudad.toLowerCase())
    );

    // Cambiar la edad a 18 para los estudiantes encontrados
    estudiantesBogotanos.forEach(estudiante => {
        estudiante.edad = 18; // Asegúrate de que la propiedad "edad" exista en los estudiantes
    });

    return estudiantesBogotanos;
};

// Ejemplo de uso
const encontrarBogotanosmenos18 = (nuevaCiudad: string) => {
    const estudiantesBogotanos = arregloEstudiante.filter(estudiante =>
        estudiante.addresses && estudiante.addresses.some(direccion => direccion.city.toLowerCase() === nuevaCiudad.toLowerCase())
    );

    // Cambiar la edad a 18 para los estudiantes encontrados
    estudiantesBogotanos.forEach(estudiante => {
        estudiante.edad = 18; // Asegúrate de que la propiedad "edad" exista en los estudiantes
    });

    return estudiantesBogotanos;
};

// Verifica que la edad se haya actualizado
const borrarEstudiante = (nombre: string, apellido: string) => {
    // Filtramos el arreglo para excluir al estudiante con el nombre y apellido especificados
    arregloEstudiante = arregloEstudiante.filter(estudiante =>
        estudiante.nombre !== nombre || estudiante.apellido !== apellido
    );
};


// Ejemplo de uso
borrarEstudiante("Carlos", "Martines");

// Imprimir solo estudiantes
arregloEstudiante.forEach(elemento => {
    // Asegúrate de que el elemento sea de tipo Estudiante
    if (typeof elemento === 'object' && elemento !== null && 'nombre' in elemento) {
        console.log("#####################################")
        mostrarEstudiante(elemento);
    }
});

