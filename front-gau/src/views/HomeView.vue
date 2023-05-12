<template>
  <div>
    <div class="header">
      <nav class="navbar navbar-expand-lg">
        <div class="encabezado container-fluid">
          <a class="logo-inicio navbar-brand" href="#">
            <img src="@/assets/logoGAU.png" width="75" height="75">
          </a>
          <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
            <div class="salir">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle"
                  viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </a>
            </div>
            <div class="salir">
              <a href="">
                <p>Salir</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="body">
      <div class="list-view-materia">
        <div class="new-materia">
          <button type="button" class="btn btn-warning" @click="showModal = true">Nueva materia</button>
          <div class="modal" tabindex="-1" v-if="showModal">
            <div class="modal-dialog">
              <div class="modal-content" style="background: #efc729;">
                <div class="modal-header">
                  <h5 class="modal-title" style="font-size: 28px;">Datos de la Materia</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    @click="showModal = false"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3 n">
                      <label for="exampleInputEmail1" class="form-label">Id Profesor</label>
                      <input type="text" class="form-control" v-model="idProfesor" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="id">
                    </div>
                    <div class="mb-3 n">
                      <label for="exampleInputPassword1" class="form-label">Materia</label>
                      <input type="text" class="form-control" v-model="nombreClase" id="exampleInputPassword1" placeholder="materia">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn" data-bs-dismiss="modal" @click="showModal = false">Close</button>
                  <button type="submit" class="btn"  @click="launchAction">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container" style="background-color: white; border-radius: 1vh; margin-top: 30px">
          <table class="table">
            <thead>
              <tr class="info">
                <th scope="col">Id</th>
                <th scope="col">Materia</th>
                <th class="date" scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="clases in datosClases" :key="clases.idClase" :src="clases.thumbnailURL" :alt="clases.title">
                <td>
                  {{ clases._id}}
                </td>
                <td>
                  {{ clases.nombreClase }}
                </td>
                <td class="opciones" style="background-color: yellow;">
                  <div>
                    <router-link :to="{path: '/listEst/'+clases._id}" class="btn-btn-info">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                      </svg>
                    </router-link>
                  </div>
                  <div>
                    <a class="logo navbar-brand" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        class="bi bi-trash3 text-danger" viewBox="0 0 16 16">
                        <path
                          d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
.header {
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.navbar {
  background-color: #efc729;
  margin: 0 auto;
  width: 100%;
  height: 80px;
}

.logo-inicio {
  margin-left: 15px;
}

.collapse {
  max-width: 100px;
  margin-right: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.salir a {
  /* background: red; */
  text-decoration: none;
  height: 17px;
  display: flex;
  align-content: center;
  font-size: 15px;
  font-weight: 700;
}

.body {
  background: #2c477c;
  height: 700px;
  width: 100%;
  padding-top: 50px;
  display: grid;
  justify-content: center;
  align-items: flex-start;
}

.new-materia {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 50px;
}

.new-materia .btn {
  margin: 10px;
  padding: 0;
  height: 42px;
  width: 100px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  border-radius: 3vh;
}

.table {
  background: white;
  width: 800px;
  border-radius: 0.3vh;
  margin-top: 30px
}

.date {
  text-align: center;
}

.center-switch {
  display: flex;
  justify-content: center;
  align-content: center;
}

tr .opciones {
  padding-bottom: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* INICIA LOS ESTILOS PARA EL MODAL  */
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-dialog {
  width: 500px;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

button {
  margin-top: 10px;
}

.modal-body .mb-3 {
  text-align: left;
}

.modal-footer .btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  background-color: #2c477c;
  color: #efc729;
  border-radius: 25px;
  letter-spacing: 1.3px;
}

.modal .n input {
  width: 100%;
  height: 55px;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 15px;
  color: #666;
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: inset 8px 8px 8px #2c477c, inset -8px -8px 8px #2c477c;
}
</style>



<script>
import claseServicio from "../services/claseServicio";
export default {
  name: 'LoginView',
  data() {
    return {
      showModal: false,
      datosClases: [],
      nombreClase: null,
      idProfesor: null
    };
  },
  methods: {
    consultarDataClase: async function () {
      this.claseServicio = new claseServicio();
      this.datosClases =
        await this.claseServicio.trearMaterias();
    },

    launchAction: async function () {
        this.claseServicio = new claseServicio();
        await this.claseServicio.agregarMaterias(this.nombreClase, this.idProfesor);
    }
  },

  created() {
    this.consultarDataClase()
  }
}
</script>