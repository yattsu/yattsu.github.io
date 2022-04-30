import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import ProjectPage from "./components/ProjectPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<DefaultPage />}>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:title" element={<ProjectPage />} />
          </Route>
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
