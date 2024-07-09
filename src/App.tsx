import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Trade } from "./pages/Trade";
import { Nav } from "./components/Nav";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
