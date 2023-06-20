import { About } from "./About me/About";
import "./App.css";
import { Error4 } from "./Error/Error4";
import { Navbar } from "./Navbar/Port";
import { Start } from "./Start/Start";
import { Skills } from "./Skills me/skills";

import {BrowserRouter,Routes, Route} from "react-router-dom"
import { Contact } from "./Contact me/Contact";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar/>}>

            <Route path="/" element={<Start/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/Contact" element={<Contact/>} />

            {/* error de url no encontrado */}
            <Route path="*" element={<Error4/>} />

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
