import './footer.css'
import { useState } from 'react'

export const Footer = () =>{
    const [field,setfield] = useState('');
    return(
        <>
        <div className="footer">
            <h3>ISCRIVITI ALLA NEWSLETTER</h3>
            <h1>RICEVI NOVITA', DROP E OFFERTE ESCLUSIVE</h1>
            <form id='fnw' action=""
                onSubmit={e=>{
                    e.preventDefault();
                }}>
                <div className="form-container">
                    <input type="text" placeholder='email' value={field} onChange={e=>setfield(e.target.value)}/>
                    <button type='submit'>iscrivit</button>
                </div>
            </form>
        </div>
        </>
    )
}