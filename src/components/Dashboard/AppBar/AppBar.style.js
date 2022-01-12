

import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
    header: {
        // position:"sticky",
        // top:"0px",
        // let:"10px",
        width: "99.7%",
        height: "100px",
      

        background: "linear-gradient(180deg, #1A243B 0%, rgba(13, 14, 33, 0) 100%)",
        [theme.breakpoints.only('xs')]:{
            width: "99%",

            height:"60px",

        },

        [theme.breakpoints.only('sm')]:{
            height:"60px",
            width: "99%",


        }
    },
    spritswapIcon: {
        position: "absolute",
        height: "100px",
        width: "132.97930908203125px",
        left: "0px",
        top: "12px",
        [theme.breakpoints.between('xs','sm')]:{
            position: "absolute",
            height: "60px",
            width: "80px",
            left: "-10px",
            top: "0px",

            // width
        }
    },
    spritSwapText: {
        position: "absolute",
        [theme.breakpoints.between('xs','sm')]:{
            position:"absolute",


            
        }

    },
    spritSwapTextOne: {
        position: "relative",
        color: "#3fcb7f",
        height: "36px",
        width: "195px",
        left: "110px",
        top: "27px",
        fontFamily: "Roboto",
        fontSize: "30px",
        fontStyle: "normal",
        lineHeight: "36px",
        letterSpacing: "0em",
        textAlign: "center",
        fontWeight: "500",
        letterSpacing: "0em",
        [theme.breakpoints.between('xs','sm')]:{
            position:"realtive",
            color: "#3fcb7f",
            height: "20px",
            width: "195px",
            left: "55px",
            top: "0px",
            fontFamily: "Roboto",
            fontSize: "22px",
            fontStyle: "normal",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "center",
            fontWeight: "500",
            letterSpacing: "0em",

            
        }
    },
    spritSwapTextTwo: {
        position: "relative",
        color: "#60d5dc",
        height: "36px",
        width: "195px",
        left: "110px",
        top: "27px",
        fontFamily: "Roboto",
        fontSize: "30px",
        fontStyle: "normal",
        lineHeight: "36px",
        letterSpacing: "0em",
        textAlign: "center",
        fontWeight: "500",
        letterSpacing: "0em",
        [theme.breakpoints.between('xs','sm')]:{
            position:"realtive",
            color: "#60d5dc",
            height: "20px",
            width: "195px",
            left: "55px",
            top: "0px",
            fontFamily: "Roboto",
            fontSize: "22px",
            fontStyle: "normal",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "center",
            fontWeight: "500",
            letterSpacing: "0em",

            
        }
    },
    connectButton:{
        position: "absolute",
    height: "36px",
// width: "124px",
right: "48px",
top: "39px",
borderRadius: "nullpx",
fontFamily: "Lato",
fontSize: "18px",
fontStyle: "normal",
fontWeight: 500,
lineHeight: "30px",
letterSpacing: "0.1em",
textAlign: "center",
color: "rgba(255, 255, 255, 1)",
borderRadius: "50px",
borderColor: "#60d5dc",
background: "#0D0E21",
[theme.breakpoints.only('xs')]:{
    position: "absolute",
    height: "25px",
// width: "80px",
right: "0px",
top: "15px",
borderRadius: "nullpx",
fontFamily: "Lato",
fontSize: "16px",
fontStyle: "normal",
fontWeight: 500,
lineHeight: "18px",
letterSpacing: "0em",
textAlign: "center",
color: "rgba(255, 255, 255, 1)",
borderRadius: "50px",
borderColor: "#60d5dc",
background: "#0D0E21",
},
[theme.breakpoints.only('sm')]:{
    position: "absolute",
    height: "30px",
// width: "100px",
right: "0px",
top: "15px",
borderRadius: "nullpx",
fontFamily: "Lato",
fontSize: "16px",
fontStyle: "normal",
fontWeight: 500,
lineHeight: "18px",
letterSpacing: "0em",
textAlign: "center",
color: "rgba(255, 255, 255, 1)",
borderRadius: "50px",
borderColor: "#60d5dc",
background: "#0D0E21",
}
    }
}))