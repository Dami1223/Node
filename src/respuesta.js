class RespuestaService {
    constructor(isError,mensaje){
        this.ok = isError;
        this.mensaje = mensaje;
    }
}

export default RespuestaService;