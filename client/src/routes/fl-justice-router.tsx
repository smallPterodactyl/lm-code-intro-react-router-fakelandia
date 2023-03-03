
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../components/home/home";
import Misdemeanours from "../components/misdemeanours/misdemeanours";


export const JusticeRouter : React.FC = () => 

    <>
        <BrowserRouter>
            <Route path="/" element={<Home/>} />
            <Route path="/misdemeanours" element={<Misdemeanours/>} /> 
        </BrowserRouter>

    </>
 

 