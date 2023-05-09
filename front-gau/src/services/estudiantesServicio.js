import axios from "axios";
// const AuthControl = require("./AuthControl.js");
const api_endpoint = require('./BackendGauConsumirServicio.js');

export default class estudianteServicio {
  async trearEstudiantes() {
    try {
      const response = await axios.get(
        api_endpoint + "estudiante",
      );

      return response.data;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }
}




