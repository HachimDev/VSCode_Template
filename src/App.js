import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

/**
 * The function returns a BrowserRouter component, which is the main component of the app.
 * The BrowserRouter component contains a Routes component, which contains a Route component.
 * The Route component contains a Home component
 * @returns The BrowserRouter component.
 */
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
