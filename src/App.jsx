import { useState } from "react";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <Layout>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
