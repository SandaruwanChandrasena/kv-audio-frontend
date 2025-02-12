import { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function handelOnSubmit(e) {
    e.preventDefault();
    console.log(email, password);

    axios
      .post("http://localhost:3000/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        toast.success("Login Success");

        const user = res.data.user

        if(user.role === "admin") {
            navigate("/admin/")

        } else {
            navigate("/")
        }


      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
      });

      
  }

  return (
    <div className="w-full h-screen justify-center items-center flex bg-pic">
      <form action="" onSubmit={handelOnSubmit}>
        <div className="w-[400px] h-[500px] backdrop-blur-2xl rounded-2xl flex flex-col justify-center items-center relative gap-[50px]">
          <img
            src="/logo.jpg"
            className="w-[100px] h-[100px] rounded-full border-4 border-blue-800  top-5 object-cover"
            alt=""
          />

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Enter your Password"
            className="w-[300px] h-[50px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            className="w-[300px] h-[50px] bg-amber-800 text-xl font-bold border
                rounded-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
