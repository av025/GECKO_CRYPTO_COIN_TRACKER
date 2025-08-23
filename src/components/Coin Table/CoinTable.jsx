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
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoinData(page, "usd"),
    retry: 2,
    retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
  }); 
  /** 
   * In version 5 we have to write our query as an object 
   */ 

  console.log(data)

  if(isLoading) {
    return <div>Loading.....</div>
  }
 

  if(isError) {
    return <div>Error : {error.message}</div>
  }
  return <> 
    <Button buttonText={"Click"} onClickHandler={() => setPage(page + 1)} /> {page}
   </>;
}

export default CoinTable;
