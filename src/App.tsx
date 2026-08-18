import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Repository from "./routes/respository";
import Home from "./routes/home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repository/:repository" element={<Repository />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
