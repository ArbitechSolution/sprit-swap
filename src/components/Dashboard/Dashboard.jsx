import React,{useState} from 'react'
import { useStyle } from './Dashboard.style';
import AppBar from './AppBar/AppBar';
import SideBar,{bValue} from './SideBar/SideBar';

import OverView from './OverView/OverView';
import Card from './card/Card';
export default function Dashboard() {
    const classes=useStyle();
    let [bodyValue, setBodyVaue]=useState(null)
  
    return (
        <div  className={classes.dashbordContainer} onClick={()=>bValue
        }>
            <AppBar/>
            <SideBar bodyValue={bodyValue}/>
            <OverView/>
            <Card/>
        </div>
    )
}
