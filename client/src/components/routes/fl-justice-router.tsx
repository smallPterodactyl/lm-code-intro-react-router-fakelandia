
import { Route, Routes } from "react-router-dom";

import Home from "../home/home";
import Misdemeanours from "../misdemeanours/misdemeanours";
import Confess from "../confess/confess"
import NotFound from "../notfound/notfound"

export const JusticeRouter : React.FC = () => 

    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/misdemeanours" element={<Misdemeanours/>} />
            <Route path="/confess" element={<Confess/>} /> 
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>

  



 

 