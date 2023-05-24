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
          <button type="button" class="btn btn-warning" @click="agregarEstudiante = true">Nuevo estudiante</button>
          
          <div class="modal" tabindex="-1" v-if="agregarEstudiante">
            <div class="modal-dialog">
              <div class="modal-content" style="background: #efc729;">
                <div class="modal-header">
                  <h5 class="modal-title" style="font-size: 28px;">Datos del Estudiante</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    @click="agregarEstudiante = false"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3 n">
                      <label for="exampleInputEmail1" class="form-label">Codigo</label>
                      <input type="text" class="form-control" v-model="numeroIdentificacion" id="codigoEstudiante" aria-describedby="emailHelp"
                        placeholder="codigo">
                    </div>
                    <div class="mb-3 n">
                      <label for="exampleInputPassword1" class="form-label">falta</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="falta">
                    </div>
                    <div class="mb-3 n">
                      <label for="exampleInputPassword1" class="form-label">Nombre Completo</label>
                      <input type="text" class="form-control" v-model="nombreCompleto" id="nombreEstudiante" placeholder="nombre">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn" data-bs-dismiss="modal" @click="agregarEstudiante = false" style="background-color: rgba(255, 0, 0, 0.7);">Cerrar</button>
                  <button type="submit" class="btn" @click="guardarEstudiante" style="background-color: green;">Guardar</button>
                </div>
              </div>
            </div>
          </div>

          <div class="modal" tabindex="-1" v-if="editarEstudiante">
            <div class="modal-dialog">
              <div class="modal-content" style="background: #efc729;">
                <div class="modal-header">
                  <h5 class="modal-title" style="font-size: 28px;">Editar Datos del Estudiante</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    @click="editarEstudiante = false"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3 n">
                      <label for="exampleInputPassword1" class="form-label">Id Estudiante</label>
                      <input type="text" class="form-control" v-model="id" id="nombreEstudiante" placeholder="nombre">
                    </div>
                    <div class="mb-3 n">
                      <label for="exampleInputEmail1" class="form-label">Codigo</label>
                      <input type="text" class="form-control" v-model="numeroIdentificacion" id="codigoEstudiante" aria-describedby="emailHelp"
                        placeholder="codigo">
                    </div>
                    <div class="mb-3 n">
                      <label for="exampleInputPassword1" class="form-label">Nombre Completo</label>
                      <input type="text" class="form-control" v-model="nombreCompleto" id="nombreEstudiante" placeholder="nombre">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn" data-bs-dismiss="modal" @click="editarEstudiante = false" style="background-color: rgba(255, 0, 0, 0.7);">Cerrar</button>
                  <button type="submit" class="btn" @click="actualizarEstudiante" style="background-color: green;">Editar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <table class="table">
            <thead>
              <tr class="info">
                <th scope="col">Nombre</th>
                <th class="date" scope="col">Numero Faltas</th>
                <th class="date" scope="col">Agrega Falta</th>
                <th class="date" scope="col">Estado</th>
                <th class="date" scope="col">Opcion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts" :key="post._id" :src="post.thumbnailURL" :alt="post.title">
                <td style="height: 50px;">
                  {{ post.nombreCompleto }}
                </td>
                <td style="height: 50px;">
                  <div>
                    {{ post.faltas }}
                  </div>
                </td>
                <td style="display: flex; justify-content: space-around; align-items: center; height: 80px;">
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="faltas" style="width: 60px; height: 35px;" @keyup.enter="guardarFalta=(post._id)">
                </td>
                <td id="estado">
                  <div type="button" :class="colorEstado(post.faltas)" style="text-align: center; margin-top: 15px; padding-top: 5px;"><p>{{mensaje}}</p></div>
                </td>
                <td class="opciones">
                  <div>
                    <button type="button" class="btn btn-warning" @click="editarEstudiante=(post._id)" style="margin-right: 15px;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg>
                    </button>
                  </div>
                  <div>
                    <button type="button" class="btn btn-danger" @click="deletePost(post._id)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                      </svg>
                    </button>
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
  
<style scoped>
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

tr .opciones {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
}

.verde {
  background-color: rgb(0, 165, 0);
  color: rgb(255, 255, 255);
  text-align: center;
  height: 35px;
  border-radius: 1vh;
}

.amarillo {
  background-color: rgb(240, 224, 6);
  color: rgb(255, 255, 255);
  text-align: center;
  height: 35px;
  border-radius: 1vh;
}

.rojo {
  background-color: rgb(221, 23, 23);
  color: rgb(255, 255, 255);
  text-align: center;
  height: 35px;
  border-radius: 1vh;
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
      agregarEstudiante: false,
      editarEstudiante: false,
      posts: [],
      nombreCompleto: null,
      numeroIdentificacion: null,
      id: null,
      faltas: null,
      mensaje: '',
    };
  },

  methods: {
    consultarData: async function () {
      this.estudianteServicio = new estudianteServicio();
      this.posts = await this.estudianteServicio.trearEstudiantes();
    },

    guardarEstudiante: async function () {
        this.estudianteServicio = new estudianteServicio();
        await this.estudianteServicio.agregarEstudiantes(this.nombreCompleto, this.numeroIdentificacion, this.falta);
    },

    guardarFalta: async function (idFalta) {
        this.estudianteServicio = new estudianteServicio();
        await this.estudianteServicio.agregarFalta(idFalta, this.faltas);
    },

    actualizarEstudiante: async function () {
        this.estudianteServicio = new estudianteServicio();
        await this.estudianteServicio.editarEstudiantes(this.id, this.nombreCompleto, this.numeroIdentificacion);
    },

    deletePost: async function (idEstudiante) {
        this.estudianteServicio = new estudianteServicio();
        await this.estudianteServicio.eliminarEstudiantes(idEstudiante);
    },

    colorEstado(falta){
      if (falta < "5"){
        this.mensaje = 'Normal';
        return 'verde';
      } else if (falta >= "5" && falta <= "9"){
        this.mensaje = 'Riesgo';
        return 'amarillo';
      } else {
        this.mensaje = 'Perdido';
        return 'rojo';
      }
    },
  },

  created() {
    this.consultarData()
  }
}
</script>