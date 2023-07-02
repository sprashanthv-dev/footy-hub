import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import queryClient from "./config";
import { CompetitionWrapper } from "./features/competitions";

// TODO: Change the wrapping of QueryClientProvider
// TODO: once routes are introduced
function App() {
  return (
    <main id="app-container">
      <div id="content-wrapper">
        <Navbar />
        <QueryClientProvider client={queryClient}>
          <CompetitionWrapper />
        </QueryClientProvider>
      </div>
      <Footer />
    </main>
  );
}

export default App;
