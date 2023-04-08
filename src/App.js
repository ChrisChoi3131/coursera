import './App.css';
import { BrowserRouter } from "react-router-dom";

import Header from "./Components/Header";
import Footer from './Components/Footer';
import Main from './Components/Main';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Main />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
