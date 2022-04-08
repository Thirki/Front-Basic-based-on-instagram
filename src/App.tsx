import React from "react";

import AppRoutes from "./AppRoutes";
import { PostContextProvider } from "./context/PostsContext";

function App() {
  return (
    <PostContextProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </PostContextProvider>
  );
}

export default App;
