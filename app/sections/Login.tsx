"use client";

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { AUTH_APP_USER } from "@/app/gql/mutations";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [authenticateAppUser, { data, loading, error }] =
    useMutation(AUTH_APP_USER);

  async function handleOnClick() {
    try {
      const resp = await authenticateAppUser({
        variables: {
          email: email.trim(),
          pwd: pwd.trim(),
        },
      });
      console.log("authenticated:", resp);
    } catch (err) {
      console.error("login error:", err);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <h1 className="text-6xl mb-5">LeagueOne</h1>
      <input
        className="border border-white rounded-lg px-3 py-1 w-64 bg-gray-900"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="border border-white rounded-lg px-3 py-1 w-64 bg-gray-900"
        placeholder="Password"
        type="password"
        onChange={(e) => setPwd(e.target.value)}
      />
      <button
        className="border border-green-500 rounded-lg px-7 py-1 w-36 hover:bg-green-500 hover:duration-500 duration-500 font-semibold"
        onClick={handleOnClick}
      >
        {loading ? "Logging in..." : "login"}
      </button>
      <span className="text-sm cursor-pointer">Forgot password?</span>
    </div>
  );
}
