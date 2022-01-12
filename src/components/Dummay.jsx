import React from 'react'
import { useStyle } from './Dummy.style.js';

export default function Dummy() {
    const classes= useStyle();
    return (
        <div>
            <div className={classes.box} >

            </div>
        </div>
    )
}
