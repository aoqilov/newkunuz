import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./style/app.scss";
import Home from "./page/Home";
import BasicOne from "./page/BasicOne";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<BasicOne />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

export default App;
