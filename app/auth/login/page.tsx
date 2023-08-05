'use client'

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {Login} from './login'
import {useForm, SubmitHandler} from "react-hook-form";
import {EmailInput} from "@/app/components/Input/EmailInput";
import {PasswordInput} from "@/app/components/Input/PasswordInput";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import {useRouter} from "next/navigation";
import React from "react";

type InputsType = {
    email: string,
    password: string
}

export default function page() {
    const {loginAuth} = Login()
    const {register, handleSubmit, watch,} = useForm<InputsType>();
    const onSubmit: SubmitHandler<InputsType> = data => loginAuth(data)
    const router = useRouter()

    return <Box className={''}>

        <form onSubmit={handleSubmit(onSubmit)}><Typography>Sing in </Typography>
            <EmailInput label={'email'} register={register} name={'email'}/>

            <PasswordInput label={'password'} register={register} name={'password'}/> <Button
                className={'mt-5 '}> Авторизовация </Button></form>
        <Box onClick={()=> router.push('/auth/register')}>Sing Up </Box>
    </Box>

}