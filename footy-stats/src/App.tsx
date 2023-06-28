import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "./config";
import Navbar from "./components/Navbar";
import { CompetitionWrapper } from "./features/competitions";

// TODO: Change the wrapping of QueryClientProvider
// TODO: once routes are introduced
function App() {
  return (
    <main>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <CompetitionWrapper />
      </QueryClientProvider>
    </main>
  );
}

export default App;
