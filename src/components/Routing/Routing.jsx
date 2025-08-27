import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../pages/Layout";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import CustomErrorBoundary from "../ErrorBoundary/CustomErrorBoundary";

const Home = lazy(() => import("../../pages/Home"));
const CoinDetailPage = lazy(() => import("../../pages/CoinDetailPage"));

function Routing() {
  return (
    <CustomErrorBoundary>
      <Suspense fallback={<LoadingSkeleton />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/details/:coinId" element={<CoinDetailPage />} />
          </Route>
        </Routes>
      </Suspense>
    </CustomErrorBoundary>
  );
}

export default Routing;
