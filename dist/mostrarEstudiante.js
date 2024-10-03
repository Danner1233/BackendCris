"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mostrarEstudiante;
function mostrarEstudiante(estudiante) {
    var _a;
    console.log(`Nombres : ${estudiante.nombre}`);
    console.log(`Apellido : ${estudiante.apellido}`);
    console.log(`Edad : ${estudiante.edad || `NO DEFINIDO`} `);
    console.log("----------------DIRECCIONES-----------------");
    (_a = estudiante.addresses) === null || _a === void 0 ? void 0 : _a.forEach(function (direccion) {
        console.log(`Calle : ${direccion.street}`);
        console.log(`Numero : ${direccion.postCode}`);
        console.log(`Ciudad : ${direccion.city}`);
        console.log("---------------------------------");
    });
}
