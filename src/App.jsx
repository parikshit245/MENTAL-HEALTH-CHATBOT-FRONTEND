import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ChatBot from "./components/ChatBot";
import Community from "./components/Community";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/chat" element={<ChatBot/>}/>
        <Route path="/community" element={<Community/>}/>
      </Routes>
    </>
  );
};

export default App;
