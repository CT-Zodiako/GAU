import axios from "axios";
// const AuthControl = require("./AuthControl.js");
const api_endpoint = require('./BackendGauConsumirServicio.js');

export default class claseServicio {
  async trearMaterias() {
    try {
      const response = await axios.get(
        api_endpoint + "clases",
      );

      return response.data;
    } catch (err) {
      console.error(err);
      // AuthControl.verificarStatusCode(err);
    }
  }
}




