import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ChatApp from "./components/ChatBot";
import Community from "./components/Community";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/chat" element={<ChatApp/>}/>
        <Route path="/community" element={<Community/>}/>
      </Routes>
    </>
  );
};

export default App;
