import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContent from "./components/addContent/AddContent";
import WatchedContent from "./components/watchedContent/WatchedContent";
import WatchListContent from "./components/watchListContent/WatchListContent";
import Header from "./components/header/Header";
import PageToggle from "./components/pageToggle/PageToggle";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageToggle />
      <Routes>
        <Route path="/" element={<WatchListContent />}></Route>
        <Route path="/watched" element={<WatchedContent />}></Route>{" "}
        <Route path="/add" element={<AddContent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
