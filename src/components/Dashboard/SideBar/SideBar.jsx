import React, { useState } from 'react'
import { useStyle } from './SideBar.style';
import { makeStyles } from '@material-ui/core'

import SideBarBTN from './SideBarBTN'
let Gleft="-150px";
export const bValue=()=>{
 
Gleft="0px";
console.log("body value",Gleft)
}
export default function SideBar({bodyValue}) {
    const classes=useStyle()
    let [togle, setTogle]=useState(false);
    let [left, setLeft]=useState("-150px");
    // value(alert("cahling"))
    const setValue=()=>{
            //  alert("hello") 
            setTogle(!togle) 
            if(togle==true){
                setLeft("-150px")
            }else{
                setLeft("0px")

            } 

    }

    const useStyleInner=makeStyles((theme)=>({
        sideBarContainer: {
            position: "fixed",
            height: "604px",
            width: "148px",
            left: "0px",
            top: "150px",
            borderRadius: "6px",
            background: "rgba(33, 42, 57, 1)",
            border: "1px solid rgba(60, 155, 160, 1)",
            // dispaly:'block',
            [theme.breakpoints.only('xs')]:{
                left:`${left}`,
            top: "100px",
            // left:"0px",
                width: "50px",
                height: "293px",

                zIndex:1,
                transition:"1.5s ease",
           
                },
            [theme.breakpoints.only('sm')]:{
                left:`${left}`,
                // dispaly:"none",
                top: "100px",
                // left:"0px",

                width: "80px",
                height: "300px",
                transition:"1.5s ease",
                zIndex:1,


            }
        },
    }));
    const classesInner=useStyleInner()
    console.log(left)
    return (
        <  >
              <SideBarBTN fun={setLeft} setValue={setValue}/>
        <div className={classesInner.sideBarContainer}    >
                <div className={classes.sideBarBtnContainer}>
        

            <div className={classes.sideBarButton1}>
                <div className={classes.frame} > <img src="HomeIcon.png" /> </div>
                </div>
                <div className={classes.sideBarButton}>
                <div className={classes.frame} > <img src="sufix.png" /> </div>
                </div>
                <div className={classes.sideBarButton}>
                <div className={classes.frame} > <img src="trafic.png" /> </div>
                </div>
                <div className={classes.sideBarButton}>
                <div className={classes.frame} > <img src="circle.png" /> </div>
                </div>
                <div className={classes.sideBarButton}>
                <div className={classes.frame} > <img src="image 20.png" /> </div>
                </div>
                <div className={classes.sideBarButton}>
                <div className={classes.frame} > <img src="Spirit.png" /> </div>
                </div>
                <div className={classes.sideBarButton}>
                <div className={classes.frame}> <img src="money.png" /> </div>
                </div>
                
             
                </div>
        
            </div>

        </>
    )
}
