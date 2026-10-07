import './proddetail.css'
import { useParams } from 'react-router';

export const Details = () =>{
    const { id } = useParams();
    return(
        <>
        prodotto {id}
        </>
    )
}