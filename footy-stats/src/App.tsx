import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import queryClient from "./config";
import { CompetitionWrapper, HistoryList } from "./features/competitions";

function App() {
  return (
    <main id="app-container">
      <div id="content-wrapper">
        <Navbar />
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/:code" element={<HistoryList />}></Route>
              <Route path="/" element={<CompetitionWrapper />} />
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </div>
      <Footer />
    </main>
  );
}

export default App;
