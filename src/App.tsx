import React from "react";

import { Header } from "./components/Header";
import { PostContainer } from "./components/PostContainer";
import { PostContextProvider } from "./context/PostsContext";

function App() {
  return (
    <PostContextProvider>
      <div className="App">
        <Header />
        <PostContainer />
      </div>
    </PostContextProvider>
  );
}

export default App;
