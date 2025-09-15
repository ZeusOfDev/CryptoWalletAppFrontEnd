import React from "react";
import handleSubmitForm from "../services/HandleSubmitForm";
import ChallengeLayout from "../utils/ChallengeLayout";
import { useNavigate } from "react-router-dom";
import  Alert from "../feature/Alert";
import { useOutletContext } from "react-router-dom";
export default function Signup() {
  const { setAlerted, setMessage, setType } = useOutletContext();useOutletContext();
  return <SignupForm setAlerted={setAlerted} setMessage={setMessage} setType={setType}/>;
}

function SignupForm({setAlerted, setMessage, setType}) {
  var navigate = useNavigate();
  async function handleSignupForm(e) 
  {
    var res = await handleSubmitForm(e);
    setAlerted(true);
    if (res.status === 200) {
      setMessage("Signup successful! Please log in.");
      setType("success");
      navigate("/login");
    } else {
      setMessage(res?.message || "Signup failed. Please try again.");
      setType("error");
    }
  }
  return (
    <form
      method="post"
      className="space-y-6"
      onSubmit={(e) => handleSignupForm(e)}
      id="signup"
    >
      <div>
        <label className="block text-white mb-2" htmlFor="email">
          Email
        </label>
        <input
          name="Email"
          id="email"
          type="email"
          autoComplete="email"
          required
          className="hover:drop-shadow-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] w-full px-4 py-3 rounded-lg bg-[#181824] text-white outline-none ring-2 ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-white mb-2" htmlFor="email">
          Username
        </label>
        <input
          name="Username"
          id="username"
          type="text"
          autoComplete="text"
          required
          className="hover:drop-shadow-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] w-full px-4 py-3 rounded-lg bg-[#181824] text-white outline-none ring-2 ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-white mb-2" htmlFor="password">
          Password
        </label>
        <input
          name="Password"
          id="password"
          type="password"
          required
          className="hover:drop-shadow-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] w-full px-4 py-3 rounded-lg bg-[#181824] text-white outline-none ring-2 ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-white mb-2" htmlFor="password">
          Confirm password
        </label>
        <input
          name="ConfirmPassword"
          id="confirm_password"
          type="password"
          autoComplete="current-password"
          required
          className="hover:drop-shadow-lg hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] w-full px-4 py-3 rounded-lg bg-[#181824] text-white outline-none ring-2 ring-blue-400"
        />
      </div>

      <div className="flex items-center justify-between text-[#A1A1B5] text-sm"></div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-[#A259FF] to-[#38CFFF] text-white font-semibold text-lg shadow-md hover:opacity-90 transition"
      >
        Sign up
      </button>
    </form>
  );
}
