import React, { useContext } from "react";

import { Header } from "./components/Header";
import { PostContextProvider, PostsContext } from "./context/PostsContext";

function App() {
  const { postList } = useContext(PostsContext);

  return (
    <PostContextProvider>
      <div className="App">
        <Header />
      </div>
    </PostContextProvider>
  );
}

export default App;
