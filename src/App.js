import React from "react";

import "./App.css";
import Hero from "./components/Hero";
import InfoForm from "./components/InfoForm";
import Help from "./components/Help";
import Footer from "./components/Footer";

const scrollFunc = () => {
  document.getElementById("form-section").scrollIntoView();
};

function App() {
  return (
    <div className="App">
      <Hero func={scrollFunc} />
      <InfoForm />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
