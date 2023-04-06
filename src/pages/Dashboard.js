import { Route, Routes } from "react-router-dom";
import Help from "./Help";
import Statistics from "./Statistics";
import Aside from "../layouts/Aside";
import Main from "../layouts/Main";





export default function Dashboard() {

    return (
        <>
            <Aside />
            <Main >
                <Routes>
                    <Route path="/" element={<Statistics />} />
                    <Route path="/help" element={<Help />} />
                </Routes>
            </Main>

        </>
    )
}

