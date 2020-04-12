import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const App = ({ name }) => {
  return (
    <div>
      <Header />
      Hello,
      {name}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
