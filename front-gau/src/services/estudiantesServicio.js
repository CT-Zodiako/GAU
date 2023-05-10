import axios from "axios";
// const AuthControl = require("./AuthControl.js");
const api_endpoint = require('./BackendGauConsumirServicio.js');

export default class estudianteServicio {
  async trearEstudiantes() {
    try {
      const response = await axios.get(
        api_endpoint + "estudiantes",
      );
      
      return response.data.data;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }

  async agregarEstudiantes(nombreCompleto, numeroIdentificacion) {
    try {
      const response = await axios.post(
        api_endpoint + "estudiantes",{
          nombreCompleto: nombreCompleto, 
          numeroIdentificacion: numeroIdentificacion
        }
        
        );
        console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }

}





