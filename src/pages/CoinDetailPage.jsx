import { useParams } from "react-router-dom";

function CoinDetailPage() {
    const {coinId} = useParams(); 

    return <> 
    {coinId}
    </>
};

export default CoinDetailPage; 

