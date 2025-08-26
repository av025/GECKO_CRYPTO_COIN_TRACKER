import { Routes,Route } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetailPage from "../../pages/CoinDetailPage";

function Routing() {
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:coinId" element={<CoinDetailPage/>} />
    </Routes>
}

export default Routing;