import NavBar from "./components/NavBar";
import RouteJS from "./routes";
import "./assets/styles/fontfamily.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import MobileNavBar from "./components/MobileNavBar";

const App = () => {
  return (
    <>
    <ToastContainer />
      <NavBar />
      <MobileNavBar />
      <RouteJS />
      <Footer />
    </>
  );
}

export default App;
