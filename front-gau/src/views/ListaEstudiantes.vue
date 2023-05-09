<template>
  <div class="list-estudiantes">
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
      <div class="list-view-estudiante" style="width: 1000px;">
        <div class="new-estudiante">
          <button type="button" class="btn btn-warning" @click="showModal = true">Nuevo estudiante</button>
          <!-- MODAL DE ESTUDIANTES -->
          <div class="modal" tabindex="-1" v-if="showModal">
            <div class="modal-dialog">
              <div class="modal-content" style="background: #efc729;">
                <div class="modal-header">
                  <h5 class="modal-title" style="font-size: 28px;">Datos del Estudiante</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    @click="showModal = false"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3 n">
                      <label for="exampleInputEmail1" class="form-label">Codigo</label>
                      <input type="number" class="form-control" id="codigoEstudiante" aria-describedby="emailHelp"
                        placeholder="codigo">
                    </div>
                    <div class="mb-3 n">
                      <label for="exampleInputPassword1" class="form-label">Nombre Completo</label>
                      <input type="password" class="form-control" id="exampleInputPassword1"
                        placeholder="nombre">
                    </div>
                    <div class="mb-3 n">
                      <label for="exampleInputPassword1" class="form-label">Correo</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="e-mail">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn" data-bs-dismiss="modal" @click="showModal = false">Close</button>
                  <button type="submit" class="btn" @click="$router.push('')">Submit</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="container">
          <table class="table">
            <thead>
              <tr class="info" style="background-color: #efc729;">
                <th scope="col">Text</th>
                <th class="date" scope="col">Numero Faltas</th>
                <th class="date" scope="col">Agrega Falta</th>
                <th class="date" scope="col">Opcion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post.numeroIdentificacion" :src="post.thumbnailURL" :alt="post.title">
                <td>
                  {{ post.numeroIdentificacion }}
                </td>
                <td>
                  {{ post.nombreCompleto }}
                </td>
                <td>
                  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="">
                </td>
                <td>
                  <button type="submit" class="btn btn btn-success">Submit</button>
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
  background-color: red;
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
  font-size: 16px;
  font-weight: 700;
}

.body {
  background: #2c477c;
  height: 3000px;
  width: 100%;
  padding-top: 50px;
  display: grid;
  justify-content: center;
  align-items: flex-start;
}

.new-estudiante {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 50px;
}

.new-estudiante .btn {
  margin: 10px;
  padding: 0;
  height: 42px;
  width: 100px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  border-radius: 3vh;
}

.container {
  max-width: 2000px;
}

.table {
  background: white;
  /* background: rgb(239, 199, 41); */
  max-width: 2000px;
  border-radius: 0.3vh;
  margin-top: 30px
}

.date {
  text-align: center;
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

import estudianteServicio from "../services/estudiantesServicio";
export default {
  name: 'ListaEstudiantes',
  data() {
    return {
      showModal: false,
      posts: [],
    };
  },
  methods: {
    consultarData: async function () {
      this.estudianteServicio = new estudianteServicio();
      this.posts =
        await this.estudianteServicio.trearEstudiantes();
    },
  },

  created() {
    this.consultarData()
  }
}
</script>