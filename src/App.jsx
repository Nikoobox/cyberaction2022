import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Splash from "./components/Splash/Splash";
import Navbar from "./components/Navbar/Navbar";
import Widget from "./components/Widget/Widget";
import Agreement from "./components/Agreement/Agreement";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Widget />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route exact path="/Agreement" element={<Agreement />} />
          {/* <Route exact path="/about" element={<Test />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
