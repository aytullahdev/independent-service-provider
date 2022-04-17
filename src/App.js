import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mainsection from "./components/Main/Mainsection";
import Navbar from "./components/Header/Navbar/Navbar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/blogs/Blogs";
import About from "./components/About/About";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Authrequred from "./components/Requredauth/Authrequred";
import Checkout from "./components/Checkout/Checkout";
import Notfoundpage from "./components/Notfoundpage";
import Passwordreset from "./components/User/Passwordreset";
import Statuscompnent from "./components/Footer/Statuscompnent";
import Sponsers from "./components/Footer/Sponsers";
function App() {
  const [viewmode, setViewmode] = useState(true);
  const toggleviewmode = () => {
    setViewmode(!viewmode);
  };
  return (
    <div className={`App  ${!viewmode ? "dark" : " "}`}>
      <div className="dark:bg-slate-900 bg-gray-100">
        <Navbar toggleviewmode={toggleviewmode} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header toggleviewmode={toggleviewmode} />
                <Mainsection />
              </>
            }
          />
          <Route path="/services" element={<><Mainsection /><Statuscompnent/></>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <Authrequred>
                <Checkout />
              </Authrequred>
            }
          />
          <Route
            path="/checkout/:id"
            element={
              <Authrequred>
                <Checkout />
              </Authrequred>
            }
          />
          <Route path="/resetpassword" element={<Passwordreset/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfoundpage/>}/>
        </Routes>
        <Sponsers/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
