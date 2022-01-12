

import {makeStyles} from '@material-ui/core';
import { breakpoints, width } from '@mui/system';




export const useStyle=makeStyles((theme)=>({
    box:{
        background:"red",
        height:"500px",
        width:"500px",
        [theme.breakpoints.only('md')]:{
            background:"yellow"
        },
        [theme.breakpoints.only('sm')]:{
            background:"black"
        },
    }
}))