import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Post from "./components/Post";
import Gallery from "./components/Gallery";
import ToDo from "./components/ToDo";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
