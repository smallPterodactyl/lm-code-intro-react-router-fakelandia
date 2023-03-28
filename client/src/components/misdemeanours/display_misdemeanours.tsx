
import { useContext } from 'react';
import { MisdemeanourContext } from '../context';


export const DisplayMisdemeanours : React.FC = () => {

  const misdemeanourData = useContext(MisdemeanourContext);

    return (
       
       <ul>
          {Array.from(misdemeanourData).map (misdemeanourRecord => (

            <div key={misdemeanourRecord.citizenId}>
              <li> {misdemeanourRecord.citizenId} </li>
              <li> {misdemeanourRecord.misdemeanour} </li>
              <li> {misdemeanourRecord.date} </li>
            </div>

          ))
          }
        </ul>
    )
}
         
  

    
  
  
 
  

