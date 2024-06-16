import {Routes, Route} from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import Beranda from "./pages/Beranda";
import Kursus from "./pages/Kursus";
import Halaman from "./pages/Halaman";


function App() {
  return <div>
    <NavbarComponent />
    <Routes>
      <Route path="/" Component={Beranda} />
      <Route path="/kursus" Component={Kursus} />
      <Route path="/halaman" Component={halaman} />
    </Routes>

    <FooterComponent />
  </div>
}

export default App
