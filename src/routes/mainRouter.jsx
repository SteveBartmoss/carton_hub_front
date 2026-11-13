import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/Login";



export function MainRuoter(){

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )

}