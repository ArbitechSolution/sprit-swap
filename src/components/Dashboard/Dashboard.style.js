

import {makeStyles} from '@material-ui/core';

export const useStyle= makeStyles((theme)=>({
    dashbordContainer:{
        width:"100%",
        height:"100%",
        paddingBottom:"100px",
        background:"#1A243B",
        // position:"sticky",
        [theme.breakpoints.only('xs' )]:{
            width:"auto",
            height:"auto",
            // marginBottom:"20px",
        background:"#1A243B",

        },
        [theme.breakpoints.only('sm')]:{
            width:"100%",
            height:"auto",
        background:"#1A243B",

        }
    }
}))