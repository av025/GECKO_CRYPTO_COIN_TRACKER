import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../pages/Layout";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

const Home = lazy(() => import("../../pages/Home"));
const CoinDetailPage = lazy(() => import("../../pages/CoinDetailPage"));

function Routing() {
  return (
    <Suspense fallback={<LoadingSkeleton/>}>

    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSkeleton/>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/details/:coinId"
          element={
              <Suspense fallback={<LoadingSkeleton />}>
              <CoinDetailPage />
            </Suspense>
          }
          />
      </Route>
    </Routes>
</Suspense>
  );
}

export default Routing;
