import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage/Login";
import ProfileListing from "./components/profileLisiting/ProfileListing";
import ProfilePage from "./components/profilePage/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profilelisting" element={<ProfileListing />}></Route>
        <Route path="/profilepage" element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
