'use client'


import {AppHeader} from "@/app/components/header/Header";
import {Grid, Paper} from "@material-ui/core";

type ChindrebProps = {
    children: any

}

export default function Layout(props: ChindrebProps) {
    return (
        <>
            <Grid container className={'pt-16 items-center justify-center w-25'} >
                <Paper className={'pt-10 pb-10 pr-9 pl-9'} >

                    <div>{props.children}</div>
                </Paper>
            </Grid>
        </>
    )
}