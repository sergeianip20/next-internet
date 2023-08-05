import React, {useCallback} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase_app from "@/app/firebase";
export  type RegisterTypeProps = {
    email:string
    password:string
}

export const registers = () => {
    const registerAuth = useCallback((data:RegisterTypeProps)=>{


        const auth = getAuth(firebase_app);
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    },[])

    return {registerAuth}
};

