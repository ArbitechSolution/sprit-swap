
import { makeStyles } from '@material-ui/core'

let num= "-150px";
export const useStyle = makeStyles((theme) => ({
    // sideBarContainer: {
    //     position: "fixed",
    //     height: "604px",
    //     width: "148px",
    //     left: "0px",
    //     top: "150px",
    //     borderRadius: "6px",
    //     background: "rgba(33, 42, 57, 1)",
    //     border: "1px solid rgba(60, 155, 160, 1)",
    //     // dispaly:'block',
    //     [theme.breakpoints.only('xs')]:{
    //         left:`${num}`,
       
    //         },
    //     [theme.breakpoints.only('sm')]:{
    //         left:"-150px",
    //     }
    // },
    sideNavBTN:{
        display:"none",
        background:"#0D0E21",
        width:"40px",
        height:"30px",
        padding:"0px",
        margin:"0px",
        border:"0",
        borderRadius:"0",
        cursor:"pointor",
        [theme.breakpoints.only('xs')]:{
            // position:"fixed",
            top:"50px",
            let:"0px",
            display:"block",
        
        
        },
        [theme.breakpoints.only('sm')]:{
            // position:"fixed",
            let:"0px",
            top:"50px",


            display:"block",
           
        },
     
    },
    sideBTNInner:{
        display:"flex",
        flexDirection:"column",
        // justifyContent:"center",
        // alignItems:"space-between",
        // marginTop:"2px"
    },
    sideBTNLIne:{
        margin:"2px auto",
        width:"20px",
        height:"2px",
        borderRadius:"1px solid",
        background:"#BBBBBB",
        zIndex:2,

    },
    sideBarBtnContainer: {
        position: "absolute",
        right: 0,
        top: 0,
    },
    sideBarButton1: {
        position: "relative",
        height: "62px",
        width: "148px",
        borderRadius: "5.094370365142822px",
        background: "radial-gradient(107.14% 252.23% at -2.69% 2.18%, rgba(66, 215, 132, 0.35) 0%, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 0.035) 100%)",
        border: "0.92963px solid rgba(255, 255, 255, 0.3)",
        boxSizing: "border-box",
        backdropFilter: "blur(38.2506px)",
        marginTop: "0px",
        borderRadius: "5.09437px",
        [theme.breakpoints.only('xs')]:{
        height: "40px",
        width: "50px",
        // border:"1px solid red",
        left:"0px",

        },
        [theme.breakpoints.only('sm')]:{
            height: "40px",
            width: "80px",
          
            left:"0px",
        },
    },
    sideBarButton: {
        position: "relative",
        height: "62px",
        width: "148px",
        boxSizing: "border-box",
        backdropFilter: "blur(38.2506px)",
        /* Note: backdrop-filter has minimal browser support */
        marginTop: "2px",
        borderRadius: "5.09437px",
        [theme.breakpoints.only('xs')]:{
            height: "40px",
            width: "50px",
            // border:"1px solid red",
            left:"0px",
    
            },
            [theme.breakpoints.only('sm')]:{
                height: "40px",
                width: "80px",
            
                left:"0px",
            },
    },
    frame: {
        height: "42px",
        width: "42px",
        left: "63px",
        top: "16px",
        borderRadius: "0px",
        position: "relative",
        [theme.breakpoints.only('xs')]:{
            height: "10px",
            width: "10px",
            left: "8px",
            top: "0px",
        borderRadius: "0px",
            
            

    
            },
            [theme.breakpoints.only('sm')]:{
                height: "42px",
                width: "42px",
                left: "25px",
                top: "3px",
            },
    },
    // sideBarIcons: {
    //     position: "absolute",
    //     height: "38px",
    //     width: "38px",
    //     left: "65px",
    //     top: "219px",
    //     borderRadius: "0px",

    // },
    // [theme.breakpoints.only('xs')]:{
    //     height: "20px",
    //     width: "22px",
    //     left: "0px",
    //     top: "0px",

    //     },
    //     [theme.breakpoints.only('sm')]:{
    //         height: "42px",
    //         width: "42px",
    //         left: "63px",
    //         top: "16px",
    //     },
    
}))