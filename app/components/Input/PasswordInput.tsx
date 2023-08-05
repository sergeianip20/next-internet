"use client"


import React, { FC, memo, useState } from 'react'

import { FieldErrors, UseFormRegister } from 'react-hook-form'
import {Box,  TextField} from "@material-ui/core";
import {VisibilityOff} from "@material-ui/icons";
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton'
type PasswordInputType = {
    label: string
    register:any
    name: 'password' | 'loginPassword' | 'confirmPassword'
}

export const PasswordInput: FC<PasswordInputType> = memo(({ label,register,   name }) => {
    const [visibilityEye, setVisibilityEye] = useState<boolean>(false)
    const setPasswordVisible = () => {
        setVisibilityEye(!visibilityEye)
    }
    return (
        <Box   sx={{ mt: '20px', position: 'relative', marginTop: '30px'   }}>
            <TextField
                {...register(name)}


                label={label}
                type={`${visibilityEye ? 'text' : 'password'}`}
                variant='standard'
                fullWidth={true}
            />
            <Box sx={{ position: 'absolute', right: '0', top: '5px' }}>
                <IconButton  onClick={setPasswordVisible}>
                    {visibilityEye ? <VisibilityIcon /> : <VisibilityOff />}
                </IconButton>
            </Box>
        </Box>
    )
})
