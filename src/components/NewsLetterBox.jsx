import React from "react";

const NewsLetterBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="mt-3 text-gray-400">
        Enter your email to Subscribe for our news letter
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="outline-none w-full sm:flex-1"
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />
        <button
          className="bg-orange-500 text-white text-xs px-10 py-4"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
