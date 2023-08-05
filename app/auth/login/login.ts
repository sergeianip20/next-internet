

import React, {useCallback} from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
type LoginTypeprops = {
    email:string
    password:string
}
export const Login = () => {
   const loginAuth = useCallback((data:LoginTypeprops)=>{
       const auth = getAuth();
       signInWithEmailAndPassword(auth, data.email, data.password)
           .then((userCredential) => {
               // Signed in
               const user = userCredential.user;
               // ...
           })
           .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
           });

   },[])



    return {loginAuth}
};

