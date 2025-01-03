import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div
      style={{
        background: ` url(https://havenservicing.com/static/4d9df0801f6e52bb8a2410f7128ce171/99556/haven-landscape-hero.webp) `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen "
    >
      <Home />
    </div>
  );
};

export default App;
