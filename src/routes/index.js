import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import Landing from "../pages/Landing";

const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Landing></Landing>}></Route>
        </Routes>
    )
}

export default Router;