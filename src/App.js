import "./App.scss";
import "swiper/swiper.min.css";
import "./assets/boxicons-2.1.2/css/boxicons.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routes1 from "./config/Routes1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes1 />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
