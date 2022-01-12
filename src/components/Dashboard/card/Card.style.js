import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles((theme) => ({
    mainCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        flexWrap: "wrap",
        width: "670px",
        margin:"auto",
        // height: "300vh",
        marginTop:"-100px",
       


// height:"100%",
        // marginLeft: "130px",
        [theme.breakpoints.only('xs')]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
            margin:"auto",

            // height: "300vh",
            // marginLeft: "30px",
            // marginTop: "10px",
            // width: "305px",
            width:"290px",
            

        },
        [theme.breakpoints.only('sm')]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
            margin:"auto",
            // height: "300vh",
            // marginLeft: "30px",
            // marginTop: "0px",
            // width: "305px",
            width:"400px",
            
            // display: "block",
            // height: "300vh",
            // marginLeft: "30px",
            // marginTop: "160px",
            // // width: "305px",
            // width:"auto"


        }
    },
    card: {
        position: "relative",
        marginTop: "20px",
        width: "300px",
        height: "320px",
        top: "0px",
        background: "#0D0E21",
        borderRadius: "12px",
        [theme.breakpoints.only('xs')]: {
            width: "290px",
           
            position: "relative",
            top: "20px",
        },
        [theme.breakpoints.only('sm')]: {
              
                   width: "400px",
            // width:"auto",
        position: "relative",
        top: "20px",

        background: "#0D0E21",

            // height:"auto",
            // height: "350px"
        }
    },
    cardDetail: {
        position: "absolute",
        width: "250px",
        height: "255px",
        left: "42px",
        top: "30px",
        [theme.breakpoints.between('xs', 'sm')]: {
            position: "absolute",
            width: "250px",
            height: "300px",
            left: "30px",
            top: "40px",
        }

    },
    cardText: {
        position: "absolute",
        width: "210px",
        height: "180px",
        left: "0px",
        top: "0px",
        [theme.breakpoints.between('xs', 'sm')]: {

        }
    },
    SCTY_FTMLP: {
        fontFamily: "Lato",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "23px",
        letteSpacing: "0.2em",
        color: "rgba(255, 255, 255, 1)",
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "bold",
            lineHeight: "24px",
        }
    },
    cardList: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "20px",
    },
    cardListText: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        lineHeight: "16px",
        color: "#BBBBBB",
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: "14px",
            lineHeight: "17px",
        }
    },
    cardListPrice: {
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "18px",
        lineHeight: "20px",
        color: "#BBBBBB",
        [theme.breakpoints.between('xs', 'sm')]: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FFFFFF"
        }
    },
    cardButtonSection: {
        position: "absolute",
        width: "220px",
        height: "45px",
        left: "0px",
        top: "195px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },

    cardButton: {
        margin: "auto",
        width: "30%",
        textAlign: "center",
        padding: "10px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "5px",
        background: "#212230",
        borderRadius: "10px",
        color: "#BBBBBB",

        border: "#42D784 3px solid",
    }
}))