import './pres.css'
import { NavLink } from 'react-router'

export const Pres = () =>{
    return(
        <>
        <div className="pres">
            <img src="../../img-pres-1.jpg" alt="img" />
            <div className="pres-text">
                <h3>IL NOSTRO BRAND</h3>
                <h1>NOME BRAND</h1>
                <p>Siamo nati dalla passione per i dettagli, dalla voglia di unire qualità, stile ed accessibilità. 
                    Le nostre catene in argento 925 sono pensate per chi vuole distinguersi ogni giorno</p>
                <NavLink to='about'>scopri</NavLink>
            </div>
        </div>
        </>
    )
}