import { Routes,Route } from "react-router-dom";
import CoinDetailPage from "../../pages/CoinDetailPage";
import MainLayout from "../../pages/Layout";
import Home from "../../pages/Home";

function Routing() {
    return <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path="/details/:coinId" element={<CoinDetailPage/>} />
        </Route>
    </Routes>
}

export default Routing;