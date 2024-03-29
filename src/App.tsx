import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./App.css";
import Top from "./pages/Top";
import Add from "./pages/Add";
import Favorite from "./pages/Favorite";
// import Scrape from "./pages/Scrape";
import Explain from "./pages/Explain";
import Sus from "./pages/Sus";
import Navb from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import GetPexels from "./pages/tdd/pexels";
import GetUnsplash from "./pages/tdd/unsplash";
import Tdd from "./pages/tdd/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navb />
        <div className="App">
          <RecoilRoot>
            <div className="app_wrap">
              <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/explain" element={<Explain />} />
                <Route path="/add" element={<Add />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/sus" element={<Sus />} />
                {/* <Route path="/scrape" element={<Scrape />} /> */}
                <Route path="/tdd" element={<Tdd />} />
                <Route path="/tdd/pexels" element={<GetPexels />} />
                <Route path="/tdd/unsplash" element={<GetUnsplash />} />
              </Routes>
            </div>
          </RecoilRoot>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
