import './App.scss';
import { Routes, Route } from "react-router-dom";
import Confirmed from "./Components/Reservation/Confirmed";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import Main from "./Components/Main/Main";
import Reservation from "./Components/Reservation/Reservation";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirmed" element={<Confirmed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

