import { useEffect } from 'react';
import './home.css';
import axios from 'axios'
import { Card } from '../components/card';
import { Cards } from '../components/cards';
import { Window } from '../components/window';
import {usechain} from '../context/productcontext'

export const Home = () =>{
    const chainstate = usechain();
    useEffect(()=>{
        axios.get('http://localhost:3000')
        .then(res=>chainstate.setchain(res.data))
        .then(res1=>console.log(chainstate.chain))
        .catch(err=>console.log(err))
    },[])

    return(
    <>
    <Window />
    <Cards prods={chainstate.chain}/>
    </>
)}