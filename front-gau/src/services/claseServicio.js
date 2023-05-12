import axios from "axios";
// const AuthControl = require("./AuthControl.js");
const api_endpoint = require('./BackendGauConsumirServicio.js');

export default class claseServicio {
  async trearMaterias() {
    try {
      const response = await axios.get(
        api_endpoint + "clases",
      );

      return response.data.data;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }

  async agregarMaterias(nombreClase, idProfesor) {
    try {
      const response = await axios.post(
        api_endpoint + "clases",{
          nombreClase: nombreClase, 
          idProfesor: idProfesor
        }
      );
      
      return response;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }

  async editarClases( _id, nombreCompleto, numeroIdentificacion) {
    try {
      const response = await axios.put(
        api_endpoint + "estudiantes",{
          nombreCompleto: nombreCompleto, 
          numeroIdentificacion: numeroIdentificacion
        }
      );
      
      return response;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }

  async eliminarClases(idClases) {
    try {
      await axios.delete(
        api_endpoint + `clases/${idClases}`,
      );
      
      return this.getClases;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }
}




