import { BrowserRouter , Routes, Route } from "react-router-dom"
import SignIn from "./pages/signIn"
import { Dashboard } from "./pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
