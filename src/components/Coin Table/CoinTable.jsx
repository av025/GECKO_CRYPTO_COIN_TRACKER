import { useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import Button from "../Button/Button";

function CoinTable() {
  const [page, setPage] = useState(1);

  /**
   * useQuery hook syntax which was provided by react-query
   * useQuery(queryKey, queryFn, options)
   * - below we give ['coins', page] as queryKey means on which we have to do query
   * - queryFn to do query
   * - options on config object to config some react-query function refetching, caching, retries and background update
   */
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoinData(page, "usd"),
    // retry: 2,
    // retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2

  });
  /**
   * In version 5 we have to write our query as an object
   */
  console.log(data);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  // if (isError) {
  //   return <div>Error : {error.message}</div>;
  // }
  return (
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
      <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
        {/* Header of Table */}
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[25%]">Price</div>
        <div className="basis-[20%]">24h Change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>
      <div className="flex flex-col w-[80vw] mx-auto ">
        {isLoading && <div>Loading......</div>}
        {data &&
          data.map((coin) => {
            return (
              <div
                key={coin.id}
                className="w-full background-transparent text-white flex py-4 px-2 font-semibold items-center justify-between"
              >
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} alt={coin.name} />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl">{coin.name}</div>
                    <div className="text-xl">{coin.symbol}</div>
                  </div>
                </div>

                <div className="basis-[25%]">{coin.current_price}</div>
                <div className="basis-[20%]">{coin.high_24h}</div>

                <div className="basis-[20%]">{coin.market_cap}</div>
              </div>
            );
          })}
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Button
          buttonDisabled={page === 1}
          onClickHandler={() => setPage(page - 1)}
          buttonStyles={"btn btn-primary btn-wide text-white text-2xl"}
          buttonText={"Previous"}
        />
        <Button
          onClickHandler={() => setPage(page + 1)}
          buttonStyles={"btn btn-secondary btn-wide text-white text-2xl"}
          buttonText={"Next"}
        />
      </div>
    </div>
  );
}

export default CoinTable;
