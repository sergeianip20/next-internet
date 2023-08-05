'use client'




import React, { FC, memo } from 'react'
import {Box, TextField} from "@material-ui/core";


type EmailInputType = {
    label: string
    register:any
    name: 'email' | 'loginEmail'
}

export const EmailInput: FC<EmailInputType> = memo(({ label, register,  name }) => {
    return (
        <Box sx={{ marginTop: '30px' }}>
            <TextField
                {...register(name)}
                label={label}
                type={'text'}

                variant='standard'
                fullWidth={true}
            />
        </Box>
    )
})
