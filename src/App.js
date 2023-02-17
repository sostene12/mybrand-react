import React from "react";
import { Routes,Route } from "react-router";

import AllPages from "./pages/AllPages";
import SingleBlog from "./pages/singleBlog/SingleBlog";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<AllPages />} />
      <Route path="/blog/:blogId" element={<SingleBlog />} />
    </Routes>
  )
};

export default App;
