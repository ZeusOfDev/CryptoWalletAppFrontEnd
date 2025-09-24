import handleSubmitForm from "../services/HandleSubmitForm";
import { useNavigate } from "react-router-dom";
import React from "react";


export default function Login() {
  return <LoginForm />;
};
function LoginForm() {
  const navigate = useNavigate();
  async function handleLoginForm(e) {
    var res = await handleSubmitForm(e);
    if (res.data?.accessToken) {
      localStorage.setItem("accessToken", res.data.accessToken);
    }
    if (res.data?.refreshToken) {
      localStorage.setItem("refreshToken", res.data.refreshToken);
    }
    navigate("/home");
  }
  return (
    <form
      method="post"
      className="space-y-6"
      onSubmit={(e) => handleLoginForm(e)}
      id="login"
    >
      <div>
        <label className="block text-white mb-2" htmlFor="email">
          Username
        </label>
        <input
          name="Username"
          id="Username"
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

      <div className="flex items-center justify-between text-[#A1A1B5] text-sm">
        <a href="#" className="hover:underline">
          Don’t have an account?
        </a>
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-[#A259FF] to-[#38CFFF] text-white font-semibold text-lg shadow-md hover:opacity-90 transition"
      >
        Sign in
      </button>
    </form>
  );
}
