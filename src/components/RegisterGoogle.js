// import React, {useState, useEffect, Fragment } from "react";
// import firebase from "./firebase";
// import "firebase/auth";
// import registerWithGoogle from './firebase'




// const RegisterGogle = (props) => {

//   //State
//   let [user, setUser] = useState(null)

//   //effect
//   useEffect(()=>{
//     firebase.auth().onAuthStateChanged(user =>{
//       if(user){
//         localStorage.setItem('user', JSON.stringify(user))
//       setUser(user)

//       }
//       console.log("HOLAAAA...")
      
//     })
//     return ()=>{}

//   }, [user])
  
    
//   function RegisterWithGogle () {

//     registerWithGoogle()
//     .then( usuario => {
//       setUser(usuario)

//     })

      
//         // try {
//         //   const provider =  new firebase.auth.GoogleAuthProvider();
//         //  this.firebase.auth().signInWithPopup(provider).then(result =>{
//         //     console.log(result)

//         //   })
         
//         // } catch (error) {
//         //   console.error('Hubo un error al crear el usuario', error.message, error.code);
//         // }
      
//         // // firebase.addUserDB(email, password);
//         // // if(!firebase.auth().currentUser){
//         //     let provider = await new firebase.auth.GoogleAuthProvider();
//         //     firebase.registerWithGoogle().signInWithPopup(provider).then((result) =>{
//         //       console.log(result);
//         //     }).catch((error) => {
//         //         console.error('Hubo un error al crear el usuario', error.message, error.code, error.email, error.credential);  
//         //     })
//         // // }
//     }
    
//     // const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation ( STATE_INICIAL, validateLoginWithGoogle, RegisterWithGogle );

//     // const { email, password } = values;


//     return ( 
//         <Fragment>
//             <div>
//             <button
//             to="/home-pages"
//             type="button"
//             onClick= {RegisterWithGogle}
//             className="btn btn-info"
//           >
//             Iniciar sesion con Google
//           </button>
//           </div>
//         </Fragment>
//      );
// }
 


// export default RegisterGogle;