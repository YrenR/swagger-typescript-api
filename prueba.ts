import { API_COMUN_V2 } from "./fake-project/estructura/api-constructors/API_COMUN_V2";

API_COMUN_V2().getAutonomoPorIdEmpresa(1).then((response) => {
	console.log(response);
});

API_COMUN_V2().putAutonomoPorIdEmpresa(1, { nombre: "nombre", apellido1: "apellido1", apellido2: "apellido2" }).then((response) => {
	console.log(response);
});

API_COMUN_V2().getLogotipoPorIdEmpresaPorUuid(1, "uuid", { alto: 1, ancho: 1 }).then((response) => {
	console.log(response);
});