import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Metrics } from "./pages/Metrics";
import { MetricsPost } from "./pages/MetricsPost";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/metrics/:id" element={<MetricsPost />} />
      </Routes>
    </BrowserRouter>
  );
}
