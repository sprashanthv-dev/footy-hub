import React from "react";
import Navbar from "./components/Navbar";

import { CompetitionWrapper } from "./features/competitions";

// TODO: Change the wrapping of QueryClientProvider
// TODO: once routes are introduced
function App() {
  return (
    <main>
      <Navbar />
      <CompetitionWrapper />
    </main>
  );
}

export default App;
