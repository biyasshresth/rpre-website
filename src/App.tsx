import "./App.css";
import HomePage from "./pages/home/Homepage";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <HomePage />{" "}
      <Toaster position="top-right" />
    </>
  );
};

export default App;
