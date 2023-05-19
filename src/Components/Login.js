import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getCsrfToken from "./csrf";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
function Login() {
  const csrfToken = getCsrfToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function loginUser(event) {
    event.preventDefault();
    let items = { email, password };
    let result = await fetch(
      "http://my-geekyants-dashboard.local.geekydev.com/api/login/user",
      {
        method: "POST",
        headers: {
          "X-CSRF-TOKEN": csrfToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(items),
      }
    );
    result = await result.json();
    // console.log(result.success);
    if (result.success) {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Wrong Credentials");
      navigate("/login");
    }
  }
  async function handleGoogleLogin(credentialResponse) {
    const details = jwt_decode(credentialResponse.credential);
   
console.log(details);
    // Perform the POST request here
    let items = { email: details.email, password: "" }; // Use the email from Google login response

    let result = await fetch(
      "http://my-geekyants-dashboard.local.geekydev.com/api/google-login",
      {
        method: "POST",
        headers: {
          "X-CSRF-TOKEN": csrfToken,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(items),
      }
    );
    
    result = await result.json();
    console.log(result);
    if (result.success) {
        localStorage.setItem("user-info", JSON.stringify(credentialResponse));
      navigate("/");
    } else {
      alert("Google login failed");
    }
  }
  return (
    <GoogleOAuthProvider clientId="871749839735-bb9eik6v8jertlbcvi1ji0b9s7l633hg.apps.googleusercontent.com">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Log in
          </h1>
          <form className="my-6 ">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={loginUser}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex justify-center w-full">
          <GoogleLogin
            // onSuccess={(credentialResponse) => {
            //   const details = jwt_decode(credentialResponse.credential);
            //   localStorage.setItem(
            //     "user-info",
            //     JSON.stringify(credentialResponse)
            //   );
            //   navigate("/");
            // }}
            onSuccess={handleGoogleLogin}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
