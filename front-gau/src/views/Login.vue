<template>
  <div class="logo">
          <img src="@/assets/logo.png" alt="">
  </div>
<div class="wrapper">
      
      <div class="gau text-center mt-4 name">
          GAU
      </div>
      <form class="p-3 mt-3">
          <div class="form-field d-flex align-items-center">
              <span class="far fa-user"></span>
              <input type="text" name="userName" id="userName" placeholder="Usuario">
          </div>
          <div class="form-field d-flex align-items-center">
              <span class="fas fa-key"></span>
              <input type="password" name="password" id="pwd" placeholder="Contraseña">
          </div>
          <button class="btn mt-3">Conectar</button>
      </form>       
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scope>
/* Importing fonts from Google */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* Reseting */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #efc729;
}

.wrapper {
  max-width: 350px;
  min-height: 500px;
  margin: 80px auto;
  padding: 40px 30px 30px 30px;
  background-color: #2c477c;
  border-radius: 15px;
 
}

.logo {
  width: 300px;
  margin: auto;
}

.logo img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
}

.wrapper .name {
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  padding-left: 10px;
  color: #efc729;
}

.wrapper .form-field input {
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 10px 15px 10px 10px;
  /* border: 1px solid red; */
}

.wrapper .form-field {
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: inset 8px 8px 8px #efc729, inset -8px -8px 8px #efc729;
}

.wrapper .form-field .fas {
  color: #555;
}

.wrapper .btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  background-color: #efc729;
  color: #2c477c;
  border-radius: 25px;
  /* box-shadow: 3px 3px 3px #b1b1b1,
      -3px -3px 3px #fff; */
  letter-spacing: 1.3px;
}

@media(max-width: 380px) {
  .wrapper {
      margin: 30px 20px;
      padding: 40px 15px 15px 15px;
  }
}
</style>