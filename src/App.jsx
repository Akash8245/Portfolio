import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import About from "./components/About";
import WhyMe from "./components/WhyMe";
import TeckStack from "./components/TeckStack";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#20272F]" >
      <Router>
 
              <Nav />
              <About />
              <WhyMe />
              <TeckStack/>
              <MyWork/>
              <Contact/>

      </Router>
    </div>
  );
}

export default App;
