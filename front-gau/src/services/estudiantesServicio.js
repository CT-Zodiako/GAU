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

  async agregarEstudiantes(nombreCompleto, numeroIdentificacion, falta) {
    try {
      const response = await axios.post(
        api_endpoint + "estudiantes",{
          nombreCompleto: nombreCompleto, 
          faltas: falta,
          numeroIdentificacion: numeroIdentificacion
        }
      );
      return response;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }

  async agregarFalta(idFalta, faltas) {
    try { 
      const response = await axios.put(
        api_endpoint + `estudiantes/${idFalta}`,{
          faltas: faltas
        }
      );
      return response;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }


  async editarEstudiantes(id, nombreCompleto, numeroIdentificacion) {
    try {
      const response = await axios.put(
        api_endpoint + `estudiantes/${id}`,{
          nombreCompleto: nombreCompleto, 
          numeroIdentificacion: numeroIdentificacion
        }
      );
      
      return response.data.data;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }

  async eliminarEstudiantes(idEstudiante) {
    try {
      await axios.delete(
        api_endpoint + `estudiantes/${idEstudiante}`,
      );
      
      return this.getEstudiantes;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }

  async cambiarEstado() {
    try {
      const response = await axios.get(
        api_endpoint + "estudiantes/faltas",
      );
  
      return response.data.data;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }
}





