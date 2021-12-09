import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import HeadlinesDescription from "./Components/HeadlinesDescription";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchNewsDescription } from "./Components/SearchNewsDescription";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:id" element={<HeadlinesDescription />} />
          <Route path="/description/:id" element={<SearchNewsDescription />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
