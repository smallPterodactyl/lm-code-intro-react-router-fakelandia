
import { NOTFOUND } from "dns";
import { BrowserRouter, Route } from "react-router-dom";
import Confess from "../components/confess/confess";
import Home from "../components/home/home";
import Misdemeanours from "../components/misdemeanours/misdemeanours";


export const JusticeRouter : React.FC = () => 

    <>
        <BrowserRouter>
            <Route path="/" element={<Home/>} />
            <Route path="/misdemeanours" element={<Misdemeanours/>} />
            <Route path="/confess" element={<Confess/>} /> 
            <Route path="*" element={<NOTFOUND/>}/>
        </BrowserRouter>
    </>
 

 