import { Routes, Route } from "react-router-dom";

import "./styles.css";
import Inbox from "./pages/Inbox";
import Spam from "./pages/Spam";
import Trash from "./pages/Trash";
import HeaderLinks from "./components/Header";
import ViewMail from "./pages/ViewMail";

export default function App() {
  return (
    <div className="App">
      <h1
        style={{
          fontFamily: "cursive",
          fontWeight: 900,
          fontSize: 32,
          backgroundColor: "#00008b",
          color: "white",
          marginTop: 0,
          padding: "10px 0"
        }}
      >
        v<span style={{ color: "#f4b41a" }}>Mail</span>
      </h1>
      <HeaderLinks />
      <div className="main">
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/:mailID" element={<ViewMail />} />
        </Routes>
      </div>
    </div>
  );
}
