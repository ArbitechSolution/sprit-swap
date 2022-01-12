import React from 'react';
import { useStyle } from './SideBar.style';

export default function SideBarBTN({setValue}) {
    const classes= useStyle();
    // export const setLeft=()=>{
        //     return left;
        // }
        // const setValue=()=>{
                

        //     }
        return (
        <div>
          <button className={classes.sideNavBTN} onClick={()=>setValue()}>
              <div className={classes.sideBTNInner}>

                    <span className={classes.sideBTNLIne}></span>
                    <span className={classes.sideBTNLIne}></span>
                    <span className={classes.sideBTNLIne}></span>
              </div>

                </button>
        </div>
    )
}
