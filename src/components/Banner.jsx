import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-100 ">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">
            Friends to keep close in your life
          </h1>
          <p className="py-6 text-gray-500 text-xl">
            Your personal shelf of meaningful connections. Browse, tend, <br />{" "}
            and nurture the relationships that matter most.
          </p>
          <button className="btn btn-primary bg-green-900 border-none">
            + Add Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
