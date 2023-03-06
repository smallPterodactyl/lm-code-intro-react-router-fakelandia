
import { useState, useEffect } from 'react';
import { MISDEMEANOURS,
        MisdemeanourKind,
        JUST_TALK,
        JustTalk,
        Misdemeanour
}
 from '../../../../client/types/misdemeanours.types'


const ShowMisdemeanours : React.FC = () => {

    const AMOUNT_MISDEMEANOURS : number = 20;
    const testMisdems : Array<Misdemeanour> = [
        {
            "citizenId": 14380,
            "misdemeanour": "rudeness",
            "date": "3/6/2023"
        },
        {
            "citizenId": 766,
            "misdemeanour": "rudeness",
            "date": "3/6/2023"
        },
 
    ];


    const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
    //const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>(testMisdems);

    //Retrieve misdemeanour data
    const getMisdemeanoursData = async (amount : Number) => {

        const serviceResponse = await fetch (`http://localhost:8080/api/misdemeanours/${amount}`);
        
        const json = await serviceResponse.json() as Array<Misdemeanour>;  
    
        setMisdemeanours (json);

 
    }   

       //if new or refreshed page from context

       useEffect(() => {    
        
        {
            getMisdemeanoursData (AMOUNT_MISDEMEANOURS);          
        } 

    }, []);


    return ( 
    <>
        Misdemeanours

    </>
    )    
   

}



   




 export default ShowMisdemeanours   