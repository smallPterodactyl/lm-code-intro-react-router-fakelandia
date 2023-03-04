
import { Route, Routes } from "react-router-dom";

import Home from "../home/home";
import Misdemeanours from "../misdemeanours/misdemeanours";
import Confess from "../confess/confess"
import NotFound from "../notfound/notfound"
import MainLayout from "../layout/layout";

export const JusticeRouter : React.FC = () => 

    <>
        <Routes>
            <Route path='/' element = {<MainLayout/>}>
                <Route index element={<Home/>} />
                <Route path= 'misdemeanours' element={<Misdemeanours/>} />
                <Route path= 'confess' element={<Confess/>} /> 
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>

  



 

 