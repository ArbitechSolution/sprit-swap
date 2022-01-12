import React from 'react'
import {useStyle} from './Card.style'
export default function Card() {
    const classes=useStyle();
    let loop= [1,2,3,4];
    return (
        <div className={classes.mainCard} >
            {
                loop.map((item)=>{
                    return <div className={classes.card}>
                        <div className={classes.cardDetail}> 
                        <div className={classes.cardText}>
                        <span className={classes.SCTY_FTMLP}>SCTY-FTMLP</span>
                        <div className={classes.cardList}>
                            <apan className={classes.cardListText}>LP Price</apan>
                            <apan className={classes.cardListPrice}>$2.00</apan>
                        </div>
                        <div className={classes.cardList}>
                            <apan className={classes.cardListText}>Implied Value Today</apan>
                            <apan className={classes.cardListPrice}>$2.33</apan>

                        </div>
                        <div className={classes.cardList}>
                            <apan className={classes.cardListText}>Burnt Today</apan>
                            <apan className={classes.cardListPrice}>$100K</apan>

                        </div>
                        <div className={classes.cardList}>
                            <apan className={classes.cardListText}>Daily Emission</apan>
                            <apan className={classes.cardListPrice}>$100K</apan>

                        </div>
                        <div className={classes.cardButtonSection}>
                            <sapn className={classes.cardButton}>Burnt</sapn>
                            <sapn className={classes.cardButton}>Claim</sapn>

                        </div>
                        </div>
                        </div>
                    </div>
                })
            }

        {/* <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div> */}


        </div>
    )
}
