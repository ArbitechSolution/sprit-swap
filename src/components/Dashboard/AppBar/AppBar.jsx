import React, { useState, useEffect } from 'react';
import { useStyle } from './AppBar.style';
import { abi, contract } from '../../../constants/constant'
import Web3 from 'web3';

export default function AppBar() {
    const classes = useStyle()
    let accountAd;
    let [address, setAddress] = useState("Connect Wallet");
    // let connnection= address? address: "Connect";
    // console.log(connnection);

    const getAccount = async () => {
        const web3 = window.web3;
        try {
            let accounts;
            accounts = await web3.eth.getAccounts();
            return accounts;
            // console.log(accounts)

        } catch (error) {
            console.log("Error while get Account");
            // return null;
        }
    }
    const loadWeb3 = async () => {
        let isConnected = false;
        try {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);

                await window.ethereum.enable();
                isConnected = true;
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
                isConnected = true;
            } else {
                isConnected = false;
                console.log("Metamask is not installed, please install it on your browser to connect.");
            }
            if (isConnected === true) {
                // contractOf = new window.web3.eth.Contract(abi, contract);
                let accounts = await getAccount();
                let accountAd = accounts[0];
                let acc = accountAd.substring(0, 4) + "..." + accountAd.substring(accountAd.length - 4)

                // console.log(acc)
                setAddress(acc);
            }

        } catch (error) {
            console.log("Error while loding web3", error);

        }
    }

    const connectWallet=async()=>{
        loadWeb3();

    }
    
    useEffect(() => {
        // setInterval(() => {
        //     loadWeb3();
        //   }, 1000);
    },[])
    return (
        <div>
            <div className={classes.header}>
         
                <div>
                    <img className={classes.spritswapIcon} src="spritswapicon.png" />
                    <p className={classes.spritSwapText}>
                        <span className={classes.spritSwapTextOne} >Sprit</span>
                        <span className={classes.spritSwapTextTwo}>Swap</span>

                    </p>
                </div>
                <div>
                    <button className={classes.connectButton} onClick={connectWallet}>{address}</button>
                </div>
            </div>
        </div>
    )
}
