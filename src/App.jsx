import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/admin/AdminPage";
import HomePage from "./pages/home/HomePage";
import Testing from "./components/testing";
import LoginPage from "./pages/login/LoginPage";
import { Toaster } from "react-hot-toast";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes path="/*">
        <Route path="/testing" element={<Testing />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
