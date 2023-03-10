import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./style/app.scss";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import AdvertTop from "./components/AdvertTop";
import Miks from "./components/Miks";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <AdvertTop />
        <Navbar />
        <Miks />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
