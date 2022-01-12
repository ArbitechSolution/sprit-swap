import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useStyle } from './OverView.style';
import { height } from '@mui/system';
export default function OverView() {
    const [progress, setProgress] = useState(0);
    const classes = useStyle();
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <div className={classes.overView}>
                <div className={classes.overViewInner} >
                    <span className={classes.overViewText}>
                        Overview
                    </span>
                    <div className={classes.overViewfunctions} >
                        <div className={classes.priceOverview} >
                            <div className={classes.priceOverviewDetail}>
                                <div >
                                    <span className={classes.price}> Price</span>
                                </div>
                                <div>
                                    <span className={classes.dollar}>$28.11</span>

                                </div>
                            </div>
                            <div className={classes.priceOverviewDetail}>
                                <div >
                                    <span className={classes.price}> McCap</span>
                                </div>
                                <div>
                                    <span className={classes.dollar}>$24.4M</span>

                                </div>
                            </div>
                            {/* classes.circulating */}

                            <div className={classes.priceOverviewDetail} >
                                <div >
                                    {/* classes.circulating */}

                                    <span className={classes.price} > Circulating</span>
                                </div>
                                <div>
                                    {/* classes.circulating */}
                                    <span className={classes.dollar} style={{ marginLeft: "15px" }}>$726.25K</span>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.powerOverView}>
                                <div className={classes.daysEra} >
                                    <span className={classes.day}>DAY 24</span>
                                    <span className={classes.day}>ERA 2</span>

                                </div>
                                <Box  sx={{ width: '90%' ,height:"40px"}} sm={{width:"100%"}}>
                                    <LinearProgress className={classes.power} variant="determinate" value={progress} />
                                </Box>
                                {/* <div className={classes.power}>
                            <div className={classes.fillPower}></div>
                            <div className={classes.nonePower} ></div>
                        </div> */}

                            </div>
                            <div className={classes.overViewBottom} >
                                <div className={classes.overViewBottomInn}>
                                    <div className={classes.overViewBottonText} >
                                        <div >Remaining Time</div>
                                        <span className={classes.time}> 18:02:10</span>

                                    </div>
                                </div>
                                <div className={classes.overViewBottomInn}>
                                    <div className={classes.overViewBottonText} >
                                        <div >Burn Today(USD)</div>
                                        <span className={classes.time}>100K</span>

                                    </div>
                                </div>
                                <div className={classes.overViewBottomInn}>
                                    <div className={classes.overViewBottonText} >
                                        <div >Daily emissions</div>
                                        <span className={classes.time}>18:02:10</span>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
