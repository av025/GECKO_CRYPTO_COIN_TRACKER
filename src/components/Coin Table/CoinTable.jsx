import { useEffect } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";

function CoinTable() {
    useEffect(() => {
        fetchCoinData("1"); 
    },[])
  return <>Coin Table</>;
}

export default CoinTable;
