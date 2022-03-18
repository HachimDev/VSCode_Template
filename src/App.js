import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
