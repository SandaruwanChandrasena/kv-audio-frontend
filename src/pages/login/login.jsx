import "./login.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Use React Router navigation

  async function handleOnSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });

      const { token, user } = res.data;

      if (!user || !token) {
        toast.error("Invalid login response!");
        return;
      }

      toast.success("Login Successful");
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect based on role
      user.role === "admin" ? navigate("/admin/") : navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Login Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bgPrcture w-full h-screen flex justify-center items-center">
      <form onSubmit={handleOnSubmit}>
        <div className="w-[400px] h-[400px] backdrop-blur-2xl rounded-4xl flex flex-col relative justify-center items-center">
          <img
            src="/assets/logo2.png"
            alt="Logo"
            className="w-[100px] h-[100px] object-cover"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-[300px] h-[50px] bg-yellow-500 rounded-lg my-10 font-bold text-xl"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
