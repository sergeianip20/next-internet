'use client';

import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Button, Input} from "antd";
import firebase_app from "@/app/firebase";
import {registers, RegisterTypeProps} from "@/app/auth/register/register";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {EmailInput} from "@/app/components/Input/EmailInput";
import {PasswordInput} from "@/app/components/Input/PasswordInput";
import {SubmitHandler, useForm} from "react-hook-form";
import { useRouter } from 'next/navigation';

export  default function  page() {
    const {registerAuth} = registers()
    const router = useRouter()
    const {register, handleSubmit, watch,} = useForm<RegisterTypeProps>();
    const onSubmit: SubmitHandler<RegisterTypeProps> = data => registerAuth(data)
    return <Box>
        <form onSubmit={handleSubmit(onSubmit)}><Typography>Sing Up</Typography> <EmailInput label={'email'}
                                                                                           register={register}
                                                                                           name={'email'}/>
            <PasswordInput label={'password'} register={register} name={'password'}/> <Button
                className={'mt-5 '}> Авторизовация </Button></form>
        <Box onClick={()=> router.push('/auth/login')}>Sing In </Box>
    </Box>

};

