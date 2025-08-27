import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinById } from "../services/fetchCoinById";
import currencyStore from "../state/store";
import Loader from "../components/Loader/Loader";
import ErrorComponent from "../components/Error/ErrorComponent";

function CoinDetailPage() {
  const { coinId } = useParams();
  const { currency } = currencyStore();

  const { isLoading,isError, data } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => fetchCoinById(coinId),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });
 
  if(isLoading) {
    return <Loader/>
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500 ">
        <img src={data?.image?.large} alt={data?.name} className="h-52 mb-5" loading="lazy" />
        <h1 className="text-4xl font-bold mb-5">{data?.name}</h1>
        <p className="w-full px-6 py-4 text-justify">{data?.description?.en}</p>
        <div className="w-full flex flex-col md:flex-row md:justify-center md:justify-around">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Rank</h2>
            <span className="ml-3 text-xl">{data?.market_cap_rank}</span>
          </div>
        </div>
        <div className="flex items-center mb-4 md:mb-0">
          <h2 className="text-xl text-yellow-400 font-bold">Current Price</h2>
          <span className="ml-3 text-xl">
            {data?.market_data?.current_price?.[currency]}
          </span>
        </div>
      </div>
      <div className="md:w-2/3 w-full p-6">Coin Information :</div>
    </div>
  );
}

export default CoinDetailPage;
