import { useState } from "react";
import "./RegisterPage.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log({ email, password, firstName, lastName, address, phone });
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-pic">
      <form onSubmit={handleOnSubmit}>
        <div className="w-[400px] h-auto p-8 backdrop-blur-2xl rounded-2xl flex flex-col justify-center items-center gap-5">
          <img
            src="/logo.jpg"
            className="w-[100px] h-[100px] rounded-full border-4 border-blue-800 object-cover"
            alt="Logo"
          />

          <input
            type="text"
            placeholder="First Name"
            className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="text"
            placeholder="Address"
            className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-lg outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button className="w-[300px] h-[50px] bg-amber-800 text-xl font-bold border rounded-lg mt-4">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
