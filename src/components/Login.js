import axios from "axios";
import swal from "sweetalert";

const Login = () => {

  const submitHandler = (e)=>{
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    //validar que los campos no esten vacios
    if(email === '' || password === ''){
      console.log('Los campos no pueden estar vacios');
      return;
    }

     //validar que el email sea válido
     if(email !== '' && !regexEmail.test(email)) {
      console.log('El email es inválido')
      return;
     }
     //Email y contraseña correctos
     if(email !== 'challenge@alkemy.org' || password !== 'react'){
      console.log('El email o la contraseña son incorrectos')
      return;
     }
     console.log('Login correcto')
     axios
      .post('http://challenge-react.alkemy.org', { email, password }) //enviar la url de la API y el objeto que la API espera
      .then(res => { console.log(res.data)})

  }

  return (
    <>
      <h4>Formulario</h4>
      <form onSubmit={submitHandler}>
        <div>
          <label>Correo electrónico</label><br/>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Contraseña</label><br/>
          <input type="password" name="password" />
        </div>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};
export default Login;
