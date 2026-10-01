import { NavLink } from 'react-router'
import './header.css'

export const Header = () =>{
    return(
    <>
        <div className="header">
            <NavLink to='/'>home</NavLink>
            <NavLink to='prodotti'>prodotti</NavLink>
            <NavLink to='about'>about</NavLink>
            <NavLink to='contatti'>contatti</NavLink>
        </div>
    </>
)}