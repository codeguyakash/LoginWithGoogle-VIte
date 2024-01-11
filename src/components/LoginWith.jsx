import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Auth/firebase";
import { useNavigate } from "react-router-dom";

const LoginWith = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();
    if ((email && password) == "") {
      setMessage("Fields Required");
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user.refreshToken;
        if (user) {
          localStorage.setItem("refreshToken-React", user);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        setMessage(error.message);
        console.log(error.message);
      });
  };
  //   -----------------login with google--------------------
  const loginWithGoogleHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res._tokenResponse.refreshToken;

      let username = res.user.displayName;
      let email = res.user.email;
      let photoUrl = res.user.photoURL;

      if (user) {
        localStorage.setItem("refreshToken-React", user);
        localStorage.setItem("user-email", email);
        localStorage.setItem("user-name", username);
        localStorage.setItem("user-photo", photoUrl);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="text-red-500 text-center font-semibold mt-3">
        {message}
      </div>
      <form className="mx-10 my-10">
        <h1 className="text-2xl text-center">Log In</h1>
        <label className="block ">
          <span className="block text-1xl font-medium text-slate-700">
            Email
          </span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="block w-full px-3 py-2 bg-white border rounded-md text-1xl
    "
          />
        </label>
        <label className="block my-4">
          <span className="block text-1xl font-medium text-slate-700">
            Password
          </span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="block w-full px-3 py-2 bg-white border  rounded-md text-1xl
    "
          />
        </label>
        <div className="flex items-center justify-center">
          <button
            onClick={loginHandler}
            className="text-1xl font-medium bg-blue-500 py-2 px-5 rounded-md  text-white w-full"
          >
            Login
          </button>
        </div>
        <h3 className="text-[17px] text-center mt-3 font-semibold">
          Login with Google
        </h3>
        <div className="flex items-center justify-center">
          <div className="text-1xl font-medium  py-2 px-5 rounded-md  text-black">
            <div className="flex items-center justify-center gap-3">
              <img
                className="w-10 border p-1 rounded-3xl cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="google"
                onClick={loginWithGoogleHandler}
              />
              <img
                className="w-10 border p-1 rounded-3xl"
                src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
                alt="Github"
              />
              <img
                className="w-10 border p-1 rounded-3xl"
                src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
                alt="Twitter"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginWith;
