import './product.css';
import axios from 'axios';
import { useEffect } from 'react';
import { usechain } from '../context/productcontext';
import { Cardprod } from '../components/card';

export const Product = () =>{
    const chainstate = usechain();
    useEffect(()=>{
        axios.get('http://localhost:3000')
        .then(res=>chainstate.setchain(res.data))
        .then(res1=>console.log(chainstate.chain))
        .catch(err=>console.log(err))
    },[])
    return(
    <>
    {chainstate.chain.map(prod=>(<Cardprod key={prod.id} prod={prod} />))}
    </>
)}