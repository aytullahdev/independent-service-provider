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
          <Route path="/services" element={<Mainsection />} />
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
          
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfoundpage/>}/>
        </Routes>
        <div>
          <div className="stats stats-vertical lg:stats-horizontal shadow my-5">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://api.lorem.space/image/face?w=128&h=128" />
                  </div>
                </div>
              </div>
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">3 tasks remaining</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
