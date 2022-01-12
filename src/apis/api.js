import {contract,abi} from '../constants/constant';
import Web3 from 'web3';

const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
let contractOf = new web3.eth.Contract(abi, contract);
