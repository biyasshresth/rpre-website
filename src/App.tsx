import { Toaster } from "react-hot-toast";
import AppRoute from "./route/AppRoute";
const App = () => {
  return (
    <>
      <AppRoute />
      <Toaster position="top-right" />
    </>
  );
};

export default App;
