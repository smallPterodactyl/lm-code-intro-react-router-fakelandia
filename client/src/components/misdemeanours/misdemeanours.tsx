
import { useState, useEffect } from 'react';
import { Misdemeanour} from '../../../../client/types/misdemeanours.types';
import { MisdemeanourContext } from '../context';
import { DisplayMisdemeanours } from './display_misdemeanours';

const FetchMisdemeanours : React.FC = () => {

    const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
    const AMOUNT_MISDEMEANOURS : number = 2;


    const fetchMisdemeanourList = async (amount : Number) => {

        const serviceResponse = await fetch (`http://localhost:8080/api/misdemeanours/${amount}`);
        const json = await serviceResponse.json() as Array<Misdemeanour>;  
    
        setMisdemeanours (json);
    }

    useEffect (() => {
       fetchMisdemeanourList (AMOUNT_MISDEMEANOURS);
       }, []
    ); 
       
    return (
        <MisdemeanourContext.Provider value={misdemeanours}>
            <DisplayMisdemeanours/>
       </MisdemeanourContext.Provider> 
    );
}

export default FetchMisdemeanours;