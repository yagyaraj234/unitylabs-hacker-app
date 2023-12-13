import { useState } from "react";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home, Post } from "./pages/index";
function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/:ud" element={<Post />} />
      </Routes>
    </Layout>
  );
}

export default App;
