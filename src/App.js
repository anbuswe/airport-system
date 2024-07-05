import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Airport from "./components/Airport";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport" element={<Airport />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
