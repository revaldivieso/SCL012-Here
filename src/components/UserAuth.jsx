// import React, { Fragment, useState } from "react"
// import 'firebase/firestore';
// import database from "./firebase.js";



// const  UserAuth = () => {

//     const [datos, setDatos] = useState({
//         email: '',
//         password: ''   
//     })

//     // firebase.auth().createUserWithEmailAndPassword(email, password)
//     // .catch(function(error) {
//     //   // Handle Errors here.
//     //   let errorCode = error.code;
//     //   let errorMessage = error.message;
//     //   // ...
//     // });
  

//     const handleInputChange = (event) => {
//         console.log("funciona")
//         console.log(event.target.email)
//         console.log(event.target.password)
//         console.log(event.target.value)
//         setDatos({
//             ...datos, //...datos es para hacer una seudocopia de los datos y no se borren los datos que ingresan en mesa por ejemplo
//             [event.target.name] : event.target.value, // va a relacionar el name del input con lo que tenga el valor del input que ingresen
            
//         })
//     }

//     const enviarDatos = (event) => {
//       console.log("LLEGAAAA")
//         event.preventDefault() //para evitar el procesamiento autmatico del formulario
//         console.log('enviando datos...' + datos.email + datos.password)
//     }
//     const entrar = () =>{

//       firebase.auth().signInWithEmailAndPassword(email, password)
//       .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//       });
  

//     }
   

    

//   return (
//     <Fragment>
//       <h1>Registro de usuarios</h1>
//       <form className="row" onSubmit={enviarDatos}>
//       <div className="col-md-3">
//       <input
//         placeholder="Ingresa email"
//         className="form-control"
//         type="email"
//         name="email"  
//         onChange={handleInputChange} 
//       ></input>
//       <input
//         placeholder="Ingresa contraseña"
//         type="password"
//         name="password"  
//         onChange={handleInputChange}
//       ></input>
//       </div>
//       <button type="submit" className="btn btn-primary">Enviar</button>
//      </form>

//      <h1>Ingreso de usuarios</h1>
//       <form className="row" onSubmit={entrar}>
//       <div className="col-md-3">
//       <input
//         placeholder="Ingresa email"
//         className="form-control"
//         type="email"
//         name="email"  
//         onChange={handleInputChange} 
//       ></input>
//       <input
//         placeholder="Ingresa contraseña"
//         type="password"
//         name="password"  
//         onChange={handleInputChange}
//       ></input>
//       </div>
//       <button type="submit" className="btn btn-primary">Enviar</button>
//      </form>
//     </Fragment>
//   );
// };

// export default UserAuth;
