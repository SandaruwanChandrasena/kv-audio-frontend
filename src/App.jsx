import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/admin/AdminPage";
import HomePage from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
