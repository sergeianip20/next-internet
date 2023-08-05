'use client'

import React, { useCallback } from 'react'
import logo from 'assets/img/icons.jpg'

import {AppBar, Container, Toolbar} from "@material-ui/core";




export const AppHeader = React.memo(() => {





    return (
        <AppBar  position={'static'}>
            <Container fixed>
                <Toolbar

                >



                </Toolbar>
            </Container>
        </AppBar>
    )
})
