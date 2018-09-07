import { TipoDocumento } from "./tipo-documento.enum";
import { TipoUsuario } from "./tipo-usuario.enum";

export class Usuario {

    constructor(
        public id?: number,
        public nombres?: string,
        public apellidos?: string,
        public tipoDocumento?: TipoDocumento,
        public tipoUsuario?: TipoUsuario,
        public usuario?: string,
        public password?: string,
    ){

    }
}
