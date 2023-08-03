import React, { useState, useEffect } from "react";
import "./App.css";
import "./Global.css";
import "./Loader.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Simulate a 2 second delay
  }, []);
  return (
    <>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="App">
          <Header />
          <Home />
          <About />
          <Services />
          <Projects />
          <Contacts />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
