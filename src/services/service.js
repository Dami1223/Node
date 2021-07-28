var axios = require('axios');

class Service {

    async buscarTodos() {
        try {
            let respuesta= await axios.get('http://localhost:1212/obtenerNombres')
            return {
                ok:true,
                mensaje:respuesta.data
            }
        } catch (error) {
            return {
                ok : false, 
                mensaje : error.message
            }
        }
    }
}

export default new Service()