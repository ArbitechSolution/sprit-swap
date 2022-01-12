import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles((theme) => ({
    overView: {
        // positon:"absloute",
        // top:"0px",
        // left:"0px",
        // right:"0px",
        // bottom:"0px",


        margin: "90px auto",
        // marginTop:"100px auto",
        float: "none",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 56px",
        // position: "absolute",
        width: "550px",
        height: "320px",
        left: "388px",
        top: "150px",
        background: "#0D0E21",
        borderRadius: "12px",
        [theme.breakpoints.only('xs')]: {
            // position: "absolute",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            // width:"auto",
            width: "180px",
            marginTop: "30px",
            height: "auto",
            // left: "auto",
            top: "74px",
        },
        [theme.breakpoints.only('sm')]: {
            // position: "absolute",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            width: "300px",
            // width:"auto",
            height: "auto",
            // height: "520px",
            // left: "auto",
            marginTop: "30px",

            top: "74px",
            background: "#0D0E21",
            borderRadius: "12px",
        }

    },
    overViewInner: {
        // position: "absoute",
        width: "600px",
        height: "320px",
        left: "56px",
        // top: "40px",
        flex: "none",
        order: 0,
        flexGrow: 0,
        margin: "10px 0px",
        [theme.breakpoints.only('xs')]: {
            width: "auto",
            height: "500px",




        },
        [theme.breakpoints.only('sm')]: {
            // position: "relative",
            // width: "280px",
            width: "auto",

            height: "500px",
            // left: "0px",
            left: "auto",
            top: "0px",
            // flex: "none",
            // order: 0,
            // flexGrow: 0,

            margin: "10px 0px",
        }


    },
    overViewText: {
        // position: "absolute",
        width: "158px",
        height: "45.15px",
        // left: "56px",
        top: "30px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "36px",
        lineHeight: "43px",
        display: "flex",
        alignItems: "center",
        color: "#FFFFFF",
        [theme.breakpoints.only('xs')]: {
            fontWeight: "400",
            fontSize: "26px",
            lineHeight: "30px",


        },
        [theme.breakpoints.only('sm')]: {
            // position: "absolute",
            // left: "6px",
            // left:"auto",
            top: "0px",
            fontWeight: "500",
            width: "auto",


            fontSize: "20px",
            lineHeight: "24px",
        }
    },
    overViewfunctions: {
        // position: "relative",
        width: "600px",
        height: "220px",
        left: "0px",
        top: "50px",
        [theme.breakpoints.only('xs')]: {

            width: "230px",

            height: "430px",
        },
        [theme.breakpoints.only('sm')]: {
            // position: "relative",
            // width: "280px",
            width: "300px",

            height: "430px",
            // left:"0px",
            letf: "auto",
            top: "60px",


        }
    },
    priceOverview: {
        display: "flex",
        width: "520px",
        height: "51px",
        [theme.breakpoints.only('xs')]: {
            display: "flex",

            justifyContent: "space-between",
            width: "230px",


            // width: "260px",
            height: "60px",
        },
        [theme.breakpoints.only('sm')]: {

            display: "flex",

            justifyContent: "space-between",
            width: "300px",


            // width: "260px",
            height: "60px",
            // left: "0px",
            // top: "0px",
            // marginLeft:"40px",


        }
    },

    priceOverviewDetail: {
        marginLeft: "15px",
        width: "128px",
        height: "51px",
        left: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // textAlign: "center",
        [theme.breakpoints.only('xs')]: {
            marginLeft: "0px",
            width: "120px",

        },
        [theme.breakpoints.only('sm')]: {
            // width:"auto",
            marginLeft: "0px",

            width: "100px",
            height: "40px",



        }
    },
    price: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignIitems: "center",
        textAlign: "center",
        padding: "8px 36px",
        marginTop: "10px",
        marginLeft: "10px",
        width: "25px",
        height: "15px",
        background: "#212230",
        borderRadius: "12px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "18px",
        color: "#BBBBBB",
        [theme.breakpoints.only('xs')]: {
            width: "5px",
            ontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "12px",
            lineHeight: "14px",
            padding: "4px 28px",

        },
        [theme.breakpoints.only('sm')]: {

            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "14px",
            color: "#42D784",
            marginTop: "10px",
            // marginLeft: "-15px",
            // width: "auto",
            // padding:"20px",
            width: "5px",

            height: "10px",


        }
    },
    circulating: {
        width: "70px",
    },
    // dollar.circulating:{
    //     marginLeft: "50px",
    // }
    //     .priceOverviewDetail.circulating{
    //         display: flex,
    //         flex - direction: column,
    // justify - content: center,
    //     /* margin-left: 60px, */
    // }
    dollar: {
        width: "75px",
        height: "29px",
        marginLeft: " 20px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "20px",
        /* identical to box height */
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        /* text white */
        color: "#FAFAFA",
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: "12px",
            fontWeight: "normal",
            color: "#42D784",
            marginLeft: "5px",

        }
    },
    powerOverView: {

        width: "100%",
        height: "48px",
        marginTop: "30px",
        marginLeft: "20px",
        [theme.breakpoints.between('xs', 'sm')]: {
            // marginLeft: "25px",
            // marginLeft: "0px",
            marginLeft: "5px",


        }

    },
    daysEra: {
        marginTop: "10px",
    },
    day: {
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        padding: " 3px 8px",
        width: "14px",
        height: "20px",
        marginLeft: "10px",
        border: " 1px solid #BBBBBB",
        // boxSizing: "border - box",
        borderRadius: "12px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "16px",
        color: "#BBBBBB",
        [theme.breakpoints.between('xs', 'sm')]: {
            color: "#42D784",
            border: "1px solid #42D784"

        }
    },
    power: {
        // display: "flex",
        marginTop: "15px",
        height: "40px",
        marginLeft: "10px",
        [theme.breakpoints.between('xs', 'sm')]: {
            width: "100%"
            // width: "auto",

        }

    },
    fillPower: {
        height: "12px",
        width: "200px",
        // background:"red",
        background: "linear-gradient(180deg, #42D784 0%, #60D5DC 100%)",
        borderRadius: "12px 0px 0px 12px",
    },
    nonePower: {
        height: "12px",
        width: "360px",
        background: "#212230",
        borderRadius: "0px 12px 12px 0px",

    },
    overViewBottom: {
        height: "80px",
        width: "580px",
        marginTop: "25px",
        marginLeft: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        [theme.breakpoints.between('xs', 'sm')]: {
            height: "280px",
            // width: "250px",
            width: "auto",


            marginTop: "0px",
            marginLeft: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
        }

    },
    overViewBottomInn: {
        width: "170px",
        height: "80px",
        background: "#212230",
        borderRadius: "12px",
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        [theme.breakpoints.between('xs', 'sm')]: {
            // width: "250px",
            width: "auto",

            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignIitems: "center",
            marginTop: "20px",
        }
    },

    // overViewBottonText: {
    //     fontFamily: "Lato",
    //     fontStyle: "normal",
    //     fontWeight: "500",
    //     fontSize: "16px",
    //     lineHeight: "30px",
    //     color: "#BBBBBB",

    // },
    overViewBottonText: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "30px",
        color: " #FAFAFA",
        [theme.breakpoints.between('xs', 'sm')]: {
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "17px",
        }
    },
    time: {
        [theme.breakpoints.between('xs', 'sm')]: {
            color: "#42D784",
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "bold",

        }
    }
}))