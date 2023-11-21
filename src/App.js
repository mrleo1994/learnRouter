import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import LifeCycle from "./Page/LifeCycle/LifeCycle";
import Header from "./Components/Header/Header";
import LoginPage from "./Page/LoginPage/LoginPage";
import LearnHook from "./Page/LearHook.js/LearnHook";
import ShoeShop from "./Page/ShoeShop/ShoeShop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/life-cycle" element={<LifeCycle />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/learn-hook" element={<LearnHook />} />
          <Route path="/shoe-shop" element={<ShoeShop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
