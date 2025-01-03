import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const handleSubmit = async(e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 mt-14 m-auto gap-4 text-gray-800">
      <div className="inline-flex gap-2 mt-10 items-center  mb-2">
        <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="h-[1.5px] w-8 border-none bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          className="w-full py-2 px-3 border border-gray-800 rounded-lg "
          type="text"
          placeholder="Name"
          required
        />
      )}

      <input
        className="w-full py-2 px-3 border border-gray-800 rounded-lg "
        type="email"
        placeholder="Email"
        required
      />

      <input
        className="w-full py-2 px-3 border border-gray-800 rounded-lg "
        type="password"
        placeholder="Password"
        required
      />
      <div className="flex justify-between w-full text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="text-blue-500 cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="text-blue-500 cursor-pointer"
          >
            Login Here!
          </p>
        )}
      </div>
      <button  className="text-white bg-orange-500 py-2 px-8 mt-4 rounded-md hover:bg-orange-600 transition-all duration-300">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
